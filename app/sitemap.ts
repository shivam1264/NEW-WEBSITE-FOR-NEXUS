import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://new-website-for-nexus.vercel.app';

  const staticRoutes = ['', '/about', '/services', '/works', '/contact', '/team'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Hardcoded known dynamic team member slugs based on TeamDirectory.tsx
  const teamMembers = ['shubham-pawar', 'shivansh-mehra', 'prakash-biswal', 'shivam-maurya', 'tushar-das'];
  const teamRoutes = teamMembers.map((slug) => ({
    url: `${baseUrl}/team/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...teamRoutes];
}
