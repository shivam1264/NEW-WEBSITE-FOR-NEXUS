import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://new-website-for-nexus.vercel.app';

  const staticPages = [
    { route: '', priority: 1.0, changeFrequency: 'daily' as const },
    { route: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/works', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/team', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/contact', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/privacy', priority: 0.3, changeFrequency: 'monthly' as const },
    { route: '/terms', priority: 0.3, changeFrequency: 'monthly' as const },
    { route: '/cookies', priority: 0.3, changeFrequency: 'monthly' as const },
  ];

  const staticRoutes = staticPages.map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const teamMembers = [
    'shubham-pawar',
    'shivansh-mehra',
    'prakash-biswal',
    'shivam-maurya',
    'tushar-das',
  ];

  const teamRoutes = teamMembers.map((slug) => ({
    url: `${baseUrl}/team/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...teamRoutes];
}
