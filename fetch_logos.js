const fs = require('fs');
const https = require('https');

const techs = [
  { slug: 'react', name: 'React' },
  { slug: 'nextdotjs', name: 'Next.js' },
  { slug: 'python', name: 'Python' },
  { slug: 'fastapi', name: 'FastAPI' },
  { slug: 'flutter', name: 'Flutter' },
  { slug: 'postgresql', name: 'PostgreSQL' },
  { slug: 'langchain', name: 'LangChain' },
  { slug: 'vercel', name: 'Vercel' },
  { slug: 'typescript', name: 'TypeScript' },
  { slug: 'tensorflow', name: 'TensorFlow' },
  { slug: 'firebase', name: 'Firebase' },
  { slug: 'nodedotjs', name: 'Node.js' }
];

function fetchSvg(slug) {
  return new Promise((resolve, reject) => {
    const url = `https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/${slug}.svg`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(data);
        } else {
          reject(new Error(`Failed to fetch ${slug}: ${res.statusCode}`));
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  const result = {};
  for (const tech of techs) {
    try {
      console.log(`Fetching ${tech.name}...`);
      const svg = await fetchSvg(tech.slug);
      const viewBoxMatch = svg.match(/viewBox="([^"]+)"/);
      const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';
      
      const pathRegex = /<path\s+[^>]*d="([^"]+)"/g;
      const paths = [];
      let match;
      while ((match = pathRegex.exec(svg)) !== null) {
        paths.push(match[1]);
      }
      
      result[tech.slug] = {
        name: tech.name,
        viewBox,
        paths
      };
    } catch (err) {
      console.error(`Error fetching ${tech.name}:`, err.message);
    }
  }
  
  fs.writeFileSync('tech_logos.json', JSON.stringify(result, null, 2));
  console.log('Done! Output written to tech_logos.json');
}

main();
