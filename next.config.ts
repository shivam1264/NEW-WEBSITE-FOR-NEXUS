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
    console.log("[NEXUS Setup] Copied media__1780383784640.jpg to hackathon_tic.jpg");
  }

  // Copy mobile app demo video if it exists
  const videoSrcPath = "C:\\Users\\maury\\Downloads\\this_is_my_mobile_app_page_sc.mp4";
  if (fs.existsSync(videoSrcPath)) {
    fs.copyFileSync(videoSrcPath, path.join(destDir, "sheild_ai_demo.mp4"));
    console.log("[NEXUS Setup] Copied this_is_my_mobile_app_page_sc.mp4 to sheild_ai_demo.mp4");
  }

  // Download coding video loop from GitHub user repository CDN
  const codingVideoUrl = "https://raw.githubusercontent.com/ashwani-199/OsamBackvideo/master/coding.mp4";
  const codingVideoDest = path.join(destDir, "coding_loop.mp4");
  const tempDest = codingVideoDest + ".tmp";
  
  if (!fs.existsSync(codingVideoDest) && !fs.existsSync(tempDest)) {
    console.log("[NEXUS Setup] Downloading coding video from GitHub repository...");
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
              console.log("[NEXUS Setup] Downloaded coding_loop.mp4 successfully!");
            } catch (renameErr) {
              console.error("[NEXUS Setup] Error renaming downloaded video:", renameErr);
            }
          });
        } else {
          console.error(`[NEXUS Setup] Failed to download coding video, status: ${response.statusCode}`);
          file.close();
          fs.unlink(tempDest, () => {});
        }
      }).on("error", (err) => {
        console.error("[NEXUS Setup] Error downloading coding video:", err);
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
      console.log(`[NEXUS Setup] Copied current member image ${img.src} to ${img.dest}`);
    }
  });

  // Copy redesigned 3D characters for latest landing page redesign
  const latestConversationBrainDir = "C:\\Users\\maury\\.gemini\\antigravity-ide\\brain\\a278f982-b6a5-4cc2-94f2-f193f35ce9fe";
  const redesignedCharacters = [
    { src: "media__1780557280212.png", dest: "char-team.png" },
    { src: "media__1780557290013.png", dest: "char-desk.png" },
    { src: "media__1780557298230.png", dest: "char-beanbag.png" }
  ];

  redesignedCharacters.forEach((img) => {
    const srcPath = path.join(latestConversationBrainDir, img.src);
    const destPath = path.join(destDir, img.dest);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`[NEXUS Setup] Copied redesigned 3D character ${img.src} to ${img.dest}`);
    } else {
      console.warn(`[NEXUS Setup] Redesigned 3D character source not found: ${srcPath}`);
    }
  });

  // Copy images for the Principles section from the current conversation
  const principleImagesConversationDir = "C:\\Users\\maury\\.gemini\\antigravity-ide\\brain\\11742f3f-6452-452b-8c13-29517c5bb267";
  const principleImages = [
    { src: "media__1780599995706.png", dest: "principle-1.png" },
    { src: "media__1780600014584.png", dest: "principle-2.png" },
    { src: "media__1780600024410.png", dest: "principle-3.png" }
  ];

  principleImages.forEach((img) => {
    const srcPath = path.join(principleImagesConversationDir, img.src);
    const destPath = path.join(destDir, img.dest);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`[NEXUS Setup] Copied principle image ${img.src} to ${img.dest}`);
    } else {
      console.warn(`[NEXUS Setup] Principle image source not found: ${srcPath}`);
    }
  });

  // Copy images for the Services (What We Do) section
  const serviceImages = [
    { src: "media__1780638348553.jpg", dest: "service-1.jpg" },
    { src: "media__1780606719993.png", dest: "service-2.png" },
    { src: "media__1780607142183.jpg", dest: "service-3.jpg" },
    { src: "media__1780604535290.png", dest: "service-4.png" },
    { src: "media__1780604545196.png", dest: "service-5.png" },
    { src: "media__1780604556237.png", dest: "service-6.png" },
    { src: "media__1780640000510.png", dest: "logo.png" }
  ];

  serviceImages.forEach((img) => {
    const srcPath = path.join(principleImagesConversationDir, img.src);
    const destPath = path.join(destDir, img.dest);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`[NEXUS Setup] Copied service image ${img.src} to ${img.dest}`);
    } else {
      console.warn(`[NEXUS Setup] Service image source not found: ${srcPath}`);
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
      console.log(`[NEXUS Setup] Copied ${matchedFile} to ${target.dest}`);
    }
  });
} catch (error) {
  console.error("[NEXUS Setup] Error copying images:", error);
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
