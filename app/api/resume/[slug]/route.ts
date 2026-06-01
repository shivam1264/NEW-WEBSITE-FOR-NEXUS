import { members } from "../../../team/data";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const member = members[slug];

  if (!member) {
    return new Response("Not found", { status: 404 });
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
