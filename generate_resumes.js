const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'public', 'resumes');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function buildPDF(name, role, email, github, linkedin, skills, projects) {
  const lines = [
    `%PDF-1.4`,
  ];
  
  let currentOffset = 9; // "%PDF-1.4\n" (or with CR/LF: 9 bytes if single LF)
  const offsets = {};
  
  const addObj = (objNum, content) => {
    offsets[objNum] = currentOffset;
    const block = `${objNum} 0 obj\n${content}\nendobj\n`;
    lines.push(block);
    currentOffset += Buffer.byteLength(block, 'utf8');
  };
  
  const fontObj = `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>`;
  
  // Construct text content
  let streamContent = `BT\n/F1 18 Tf\n50 780 Td\n(${name.toUpperCase()}) Tj\n/F1 11 Tf\n0 -22 Td\n(${role}) Tj\n0 -22 Td\n(Email: ${email}) Tj\n0 -16 Td\n(GitHub: ${github}) Tj\n0 -16 Td\n(LinkedIn: ${linkedin}) Tj\n\n/F1 13 Tf\n0 -35 Td\n(CORE EXPERTISE) Tj\n/F1 9 Tf\n0 -20 Td\n(Skills: ${skills}) Tj\n\n/F1 13 Tf\n0 -35 Td\n(FEATURED CONTRIBUTIONS) Tj\n`;
  
  projects.forEach((p, i) => {
    const title = p.title.replace(/\(/g, '\\(').replace(/\)/g, '\\)');
    const result = p.result.replace(/\(/g, '\\(').replace(/\)/g, '\\)');
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
  
  const xrefOffset = currentOffset;
  let xref = `xref\n0 6\n0000000000 65535 f \n`;
  for (let i = 1; i <= 5; i++) {
    const offsetStr = String(offsets[i]).padStart(10, '0');
    xref += `${offsetStr} 00000 n \n`;
  }
  
  lines.push(xref);
  lines.push(`trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`);
  
  return Buffer.from(lines.join(''));
}

const members = [
  {
    slug: 'aarav-mehta',
    name: 'Aarav Mehta',
    role: 'AI Lead & Systems Engineer',
    email: 'aarav@teamnexus.agency',
    github: 'github.com/aaravmehta-ai',
    linkedin: 'linkedin.com/in/aarav-mehta-ai',
    skills: 'Python, FastAPI, LangChain, FAISS, PyTorch, Docker, CI/CD',
    projects: [
      { title: 'CareForYou AI Triage Engine', result: '94% routing accuracy, 3x faster than manual triage' },
      { title: 'Nexus Live Telemetry Monitor', result: '0ms cache latency, 8 cohorts tracked in parallel' }
    ]
  },
  {
    slug: 'kavya-sharma',
    name: 'Kavya Sharma',
    role: 'Full Stack Lead Engineer',
    email: 'kavya@teamnexus.agency',
    github: 'github.com/kavyasharma-dev',
    linkedin: 'linkedin.com/in/kavya-sharma-fullstack',
    skills: 'Next.js, React, TypeScript, PostgreSQL, Prisma, Redis, Node.js',
    projects: [
      { title: 'CareForYou Patient Portal', result: 'Full portal live in 3 weeks, 0 critical post-launch bugs' },
      { title: 'Nexus Command Room Dashboard', result: '8 cohort feeds live simultaneously, 0ms cache lag' }
    ]
  },
  {
    slug: 'rohan-das',
    name: 'Rohan Das',
    role: 'Flutter & Mobile Engineer',
    email: 'rohan@teamnexus.agency',
    github: 'github.com/rohandas-mobile',
    linkedin: 'linkedin.com/in/rohan-das-flutter',
    skills: 'Flutter, Dart, Firebase, Firestore, SQLite, Hive, REST APIs',
    projects: [
      { title: 'Restaurant App Dispatcher', result: '0% commission leak vs 30% before, 60fps consistency' },
      { title: 'CareForYou Mobile Companion', result: 'Works offline, sub-300ms API response times' }
    ]
  },
  {
    slug: 'isha-patel',
    name: 'Isha Patel',
    role: 'UI/UX Designer',
    email: 'isha@teamnexus.agency',
    github: 'github.com/ishapatel-design',
    linkedin: 'linkedin.com/in/isha-patel-uiux',
    skills: 'Figma, CSS3, Design Systems, Adobe Illustrator, Motion design',
    projects: [
      { title: 'Team Nexus Brand & Design System', result: 'Consistent design language across 6 pages' },
      { title: 'CareForYou Patient UX', result: 'Zero UX confusion reports post-launch, AA compliant' }
    ]
  },
  {
    slug: 'kabir-malhotra',
    name: 'Kabir Malhotra',
    role: 'Ops & Product Strategy Lead',
    email: 'kabir@teamnexus.agency',
    github: 'github.com/kabirmalhotra-ops',
    linkedin: 'linkedin.com/in/kabir-malhotra-strategy',
    skills: 'MVP Scoping, Agile, Sprint Planning, Operations, Risk Management',
    projects: [
      { title: 'Nexus Launch Operations Framework', result: '100% on-time delivery rate across all 2024 projects' },
      { title: 'SIH Hackathon Sprint Lead', result: 'Grand Prize Winner 100,000 INR delivered under 36h' }
    ]
  }
];

members.forEach(m => {
  const pdfBuffer = buildPDF(m.name, m.role, m.email, m.github, m.linkedin, m.skills, m.projects);
  fs.writeFileSync(path.join(targetDir, `${m.slug}-resume.pdf`), pdfBuffer);
  console.log(`Generated resume for ${m.name}`);
});

console.log('All resumes generated successfully!');
