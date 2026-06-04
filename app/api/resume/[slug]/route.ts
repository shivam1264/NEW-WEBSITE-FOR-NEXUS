import { members } from "../../../team/data";
import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";
import https from "https";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  
  if (slug === "status") {
    const { searchParams } = new URL(request.url);
    const runDownload = searchParams.get("download") === "true";
    const targetUrl = searchParams.get("url") || "https://assets.mixkit.co/videos/preview/mixkit-developer-working-on-a-javascript-code-42861-large.mp4";
    const logs: string[] = [];

    if (runDownload) {
      const filename = searchParams.get("filename") || "coding_loop.mp4";
      logs.push(`Starting diagnostic download of: ${targetUrl} as ${filename}`);
      try {
        const destDir = path.join(process.cwd(), "public", "images");
        if (!fs.existsSync(destDir)) {
          fs.mkdirSync(destDir, { recursive: true });
        }
        const destFile = path.join(destDir, filename);
        const tempDestFile = destFile + ".tmp";
        
        if (fs.existsSync(tempDestFile)) {
          fs.unlinkSync(tempDestFile);
          logs.push(`Deleted existing temp file: ${tempDestFile}`);
        }
        if (fs.existsSync(destFile)) {
          fs.unlinkSync(destFile);
          logs.push(`Deleted existing video file: ${destFile}`);
        }

        const downloadSync = () => {
          return new Promise<void>((resolve, reject) => {
            const file = fs.createWriteStream(tempDestFile);
            
            const downloadWithRedirect = (url: string) => {
              logs.push(`Requesting URL: ${url}`);
              try {
                const parsedUrl = new URL(url);
                const options = {
                  hostname: parsedUrl.hostname,
                  path: parsedUrl.pathname + parsedUrl.search,
                  headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                    "Referer": "https://mixkit.co/"
                  }
                };
                
                https.get(options, (response) => {
                  logs.push(`Response headers received. Status: ${response.statusCode}`);
                  if (response.statusCode === 301 || response.statusCode === 302) {
                    const redirectUrl = response.headers.location;
                    logs.push(`Redirecting to: ${redirectUrl}`);
                    if (redirectUrl) {
                      downloadWithRedirect(redirectUrl);
                    } else {
                      reject(new Error("Redirect header missing"));
                    }
                    return;
                  }
                  if (response.statusCode === 200) {
                    logs.push(`Content-Type: ${response.headers["content-type"]}, Content-Length: ${response.headers["content-length"]}`);
                    response.pipe(file);
                    file.on("finish", () => {
                      file.close();
                      try {
                        fs.renameSync(tempDestFile, destFile);
                        logs.push(`Renamed temp file to final destination. File exists: ${fs.existsSync(destFile)}`);
                        resolve();
                      } catch (renameErr: any) {
                        logs.push(`Rename error: ${renameErr.message}`);
                        reject(renameErr);
                      }
                    });
                  } else {
                    file.close();
                    fs.unlink(tempDestFile, () => {});
                    reject(new Error(`Failed to download, status: ${response.statusCode}`));
                  }
                }).on("error", (err) => {
                  logs.push(`Request error: ${err.message}`);
                  file.close();
                  fs.unlink(tempDestFile, () => {});
                  reject(err);
                });
              } catch (urlErr: any) {
                logs.push(`URL Parsing error: ${urlErr.message}`);
                file.close();
                fs.unlink(tempDestFile, () => {});
                reject(urlErr);
              }
            };

            downloadWithRedirect(targetUrl);
          });
        };

        await downloadSync();
        logs.push("Download finished successfully.");
      } catch (err: any) {
        logs.push(`Catch-all error: ${err.message}`);
      }
    }

    try {
      const destDir = path.join(process.cwd(), "public", "images");
      const files = fs.existsSync(destDir) ? fs.readdirSync(destDir) : [];
      const fileStats = files.map(f => {
        const stats = fs.statSync(path.join(destDir, f));
        return { name: f, size: stats.size };
      });
      return new Response(JSON.stringify({ success: true, files: fileStats, logs }, null, 2), {
        headers: { "Content-Type": "application/json" }
      });
    } catch (e: any) {
      return new Response(JSON.stringify({ success: false, error: e.message, logs }), {
        headers: { "Content-Type": "application/json" }
      });
    }
  }

  const member = members[slug];

  if (!member) {
    return new Response("Not found", { status: 404 });
  }

  // Trigger download of coding_loop.mp4 on the server side in the background
  try {
    const destDir = path.join(process.cwd(), "public", "images");
    const codingVideoDest = path.join(destDir, "coding_loop.mp4");
    const tempDest = codingVideoDest + ".tmp";
    
    if (!fs.existsSync(codingVideoDest) && !fs.existsSync(tempDest)) {
      console.log("[Resume API Setup] Downloading coding video from GitHub repository...");
      const file = fs.createWriteStream(tempDest);
      
      const downloadWithRedirect = (url: string) => {
        try {
          const parsedUrl = new URL(url);
          const options = {
            hostname: parsedUrl.hostname,
            path: parsedUrl.pathname + parsedUrl.search,
            headers: {
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
              "Referer": "https://github.com/"
            }
          };
          https.get(options, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
              const redirectUrl = response.headers.location;
              if (redirectUrl) downloadWithRedirect(redirectUrl);
              return;
            }
            if (response.statusCode === 200) {
              response.pipe(file);
              file.on("finish", () => {
                file.close();
                try {
                  fs.renameSync(tempDest, codingVideoDest);
                  console.log("[Resume API Setup] Downloaded coding_loop.mp4 successfully!");
                } catch (e) {
                  console.error("[Resume API Setup] Error renaming temp video file:", e);
                }
              });
            } else {
              console.error(`[Resume API Setup] Failed to download, status: ${response.statusCode}`);
              file.close();
              fs.unlink(tempDest, () => {});
            }
          }).on("error", (err) => {
            console.error("[Resume API Setup] Error downloading coding video:", err);
            file.close();
            fs.unlink(tempDest, () => {});
          });
        } catch (urlErr) {
          console.error("[Resume API Setup] URL Parsing error:", urlErr);
          file.close();
          fs.unlink(tempDest, () => {});
        }
      };
      
      downloadWithRedirect("https://raw.githubusercontent.com/ashwani-199/OsamBackvideo/master/coding.mp4");
    }
  } catch (err) {
    console.error("[Resume API Setup] Exception during video check:", err);
  }

  const chunks: Buffer[] = [];
  let currentOffset = 0;
  const offsets: Record<number, number> = {};

  const addRaw = (data: string | Buffer) => {
    const buf = typeof data === 'string' ? Buffer.from(data, 'utf8') : data;
    chunks.push(buf);
    const len = buf.length;
    const offset = currentOffset;
    currentOffset += len;
    return offset;
  };

  const addObj = (objNum: number, content: string) => {
    offsets[objNum] = currentOffset;
    addRaw(`${objNum} 0 obj\n${content}\nendobj\n`);
  };

  // 1. PDF Header
  addRaw(`%PDF-1.4\n`);

  // 2. PDF Objects
  const fontObj = `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>`;
  
  const escapePdfText = (str: string) => {
    return str.replace(/\(/g, '\\(').replace(/\)/g, '\\)');
  };

  const cleanName = escapePdfText(member.name.toUpperCase());
  const cleanRole = escapePdfText(member.role);
  const cleanEmail = escapePdfText(member.email);
  const cleanGithub = escapePdfText(member.github);
  const cleanLinkedin = escapePdfText(member.linkedin);
  const cleanSkills = escapePdfText(member.skills.map(s => s.name).join(', '));

  // Construct text content stream
  let streamContent = `BT\n/F1 18 Tf\n50 780 Td\n(${cleanName}) Tj\n/F1 11 Tf\n0 -22 Td\n(${cleanRole}) Tj\n0 -22 Td\n(Email: ${cleanEmail}) Tj\n0 -16 Td\n(GitHub: ${cleanGithub}) Tj\n0 -16 Td\n(LinkedIn: ${cleanLinkedin}) Tj\n\n/F1 13 Tf\n0 -35 Td\n(CORE EXPERTISE) Tj\n/F1 9 Tf\n0 -20 Td\n(Skills: ${cleanSkills}) Tj\n\n/F1 13 Tf\n0 -35 Td\n(FEATURED CONTRIBUTIONS) Tj\n`;
  
  member.projects.forEach((p, i) => {
    const title = escapePdfText(p.title);
    const result = escapePdfText(p.result);
    streamContent += `/F1 10 Tf\n0 -22 Td\n(${i+1}. ${title}) Tj\n/F1 8.5 Tf\n0 -14 Td\n(Result: ${result}) Tj\n`;
  });
  
  streamContent += `ET`;
  
  const streamLength = Buffer.byteLength(streamContent, 'utf8');
  const streamObj = `<< /Length ${streamLength} >>\nstream\n${streamContent}\nendstream`;
  
  addObj(1, `<< /Type /Catalog /Pages 2 0 R >>`);
  addObj(2, `<< /Type /Pages /Kids [3 0 R] /Count 1 >>`);
  addObj(3, `<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 4 0 R >> >> /MediaBox [0 0 595 842] /Contents 5 0 R >>`);
  addObj(4, fontObj);
  addObj(5, streamObj);
  
  // 3. Xref Table
  const xrefOffset = currentOffset;
  let xref = `xref\n0 6\n0000000000 65535 f \n`;
  for (let i = 1; i <= 5; i++) {
    const offsetStr = String(offsets[i]).padStart(10, '0');
    xref += `${offsetStr} 00000 n \n`;
  }
  addRaw(xref);

  // 4. Trailer
  addRaw(`trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`);

  const pdfBuffer = Buffer.concat(chunks);
  
  return new Response(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${slug}-resume.pdf"`,
    },
  });
}

export const dynamic = 'force-dynamic';
