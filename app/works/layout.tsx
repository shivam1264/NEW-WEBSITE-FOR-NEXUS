import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work & Case Studies | NEXUS',
  description: 'View the high-performance digital products, MVPs, and platforms engineered by NEXUS. Real case studies across web, mobile, and AI.',
};

export default function WorksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
