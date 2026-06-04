import type { NextConfig } from "next";
import fs from "fs";
import path from "path";
import https from "https";

// File copy logic for custom images
try {
  const srcDir = "C:\\Users\\maury\\.gemini\\antigravity-ide\\brain\\3b1a986d-a026-41a9-b040-5b20ae33c2a7";
  const currentBrainDir = "C:\\Users\\maury\\.gemini\\antigravity-ide\\brain\\87b45061-51a1-4faf-8856-8b55b201aedb";
  const currentConversationBrainDir = "C:\\Users\\maury\\.gemini\\antigravity-ide\\brain\\935a244e-8a8d-45fc-b328-bca669765256";
  const destDir = path.join(process.cwd(), "public", "images");

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  // Copy BGI/TIC hackathon uploaded photo
  const uploadedPhotoPath = path.join(currentBrainDir, "media__1780383784640.jpg");
  if (fs.existsSync(uploadedPhotoPath)) {
    fs.copyFileSync(uploadedPhotoPath, path.join(destDir, "hackathon_tic.jpg"));
    console.log("[Team Nexus Setup] Copied media__1780383784640.jpg to hackathon_tic.jpg");
  }

  // Copy mobile app demo video if it exists
  const videoSrcPath = "C:\\Users\\maury\\Downloads\\this_is_my_mobile_app_page_sc.mp4";
  if (fs.existsSync(videoSrcPath)) {
    fs.copyFileSync(videoSrcPath, path.join(destDir, "sheild_ai_demo.mp4"));
    console.log("[Team Nexus Setup] Copied this_is_my_mobile_app_page_sc.mp4 to sheild_ai_demo.mp4");
  }

  // Download coding video loop from GitHub user repository CDN
  const codingVideoUrl = "https://raw.githubusercontent.com/ashwani-199/OsamBackvideo/master/coding.mp4";
  const codingVideoDest = path.join(destDir, "coding_loop.mp4");
  const tempDest = codingVideoDest + ".tmp";
  
  if (!fs.existsSync(codingVideoDest) && !fs.existsSync(tempDest)) {
    console.log("[Team Nexus Setup] Downloading coding video from GitHub repository...");
    const file = fs.createWriteStream(tempDest);
    
    const downloadWithRedirect = (url: string) => {
      https.get(url, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
          const redirectUrl = response.headers.location;
          if (redirectUrl) {
            downloadWithRedirect(redirectUrl);
          }
          return;
        }
        if (response.statusCode === 200) {
          response.pipe(file);
          file.on("finish", () => {
            file.close();
            try {
              fs.renameSync(tempDest, codingVideoDest);
              console.log("[Team Nexus Setup] Downloaded coding_loop.mp4 successfully!");
            } catch (renameErr) {
              console.error("[Team Nexus Setup] Error renaming downloaded video:", renameErr);
            }
          });
        } else {
          console.error(`[Team Nexus Setup] Failed to download coding video, status: ${response.statusCode}`);
          file.close();
          fs.unlink(tempDest, () => {});
        }
      }).on("error", (err) => {
        console.error("[Team Nexus Setup] Error downloading coding video:", err);
        file.close();
        fs.unlink(tempDest, () => {});
      });
    };
    
    downloadWithRedirect(codingVideoUrl);
  }

  // Copy new team member images and hackathon photos from the current conversation folder
  const newMemberImages = [
    { src: "media__1780387293022.jpg", dest: "team_member_1.jpg" },
    { src: "media__1780387357479.jpg", dest: "team_member_2.jpg" },
    { src: "media__1780387414149.jpg", dest: "team_member_3.jpg" },
    { src: "media__1780387486446.jpg", dest: "team_member_4.jpg" },
    { src: "media__1780387531554.jpg", dest: "team_member_5.jpg" },
    { src: "media__1780394401684.jpg", dest: "hackathon_bgi.jpg" },
    { src: "media__1780394882559.jpg", dest: "hackathon_tic_2.jpg" },
    { src: "media__1780395289180.png", dest: "hackathon_bgi_2.png" }
  ];

  newMemberImages.forEach((img) => {
    const srcPath = path.join(currentConversationBrainDir, img.src);
    const destPath = path.join(destDir, img.dest);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`[Team Nexus Setup] Copied current member image ${img.src} to ${img.dest}`);
    }
  });

  const files = fs.readdirSync(srcDir);
  const targets = [
    { prefix: "hackathon_trophy_", dest: "hackathon_trophy.png" },
    { prefix: "hackathon_win_", dest: "hackathon_win.png" },
    { prefix: "careforyou_ui_", dest: "careforyou_ui.png" },
    { prefix: "restaurant_app_ui_", dest: "restaurant_app_ui.png" },
    { prefix: "team_member_1_", dest: "team_member_1.png" },
    { prefix: "team_member_2_", dest: "team_member_2.png" },
    { prefix: "team_member_3_", dest: "team_member_3.png" },
    { prefix: "team_member_4_", dest: "team_member_4.png" },
    { prefix: "team_member_5_", dest: "team_member_5.png" },
    { prefix: "dashboard_ui_", dest: "dashboard_ui.png" }
  ];

  targets.forEach((target) => {
    const matchedFile = files.find(f => f.startsWith(target.prefix) && f.endsWith(".png"));
    if (matchedFile) {
      const srcPath = path.join(srcDir, matchedFile);
      const destPath = path.join(destDir, target.dest);
      fs.copyFileSync(srcPath, destPath);
      console.log(`[Team Nexus Setup] Copied ${matchedFile} to ${target.dest}`);
    }
  });
} catch (error) {
  console.error("[Team Nexus Setup] Error copying images:", error);
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
