import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

// File copy logic for custom images
try {
  const srcDir = "C:\\Users\\maury\\.gemini\\antigravity-ide\\brain\\3b1a986d-a026-41a9-b040-5b20ae33c2a7";
  const destDir = path.join(process.cwd(), "public", "images");

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

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
