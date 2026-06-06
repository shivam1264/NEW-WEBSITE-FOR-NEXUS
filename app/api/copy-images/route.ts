import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const srcPath = 'C:\\Users\\maury\\Downloads\\images for website\\commetment page video.mp4';
  const destDir = path.join(process.cwd(), 'public', 'images');
  const destPath = path.join(destDir, 'commitment-video.mp4');
  
  try {
    fs.copyFileSync(srcPath, destPath);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) });
  }
}
