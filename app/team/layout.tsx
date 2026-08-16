import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Specialist Pod | NEXUS',
  description: 'Meet the specialized engineers, designers, and strategists behind NEXUS. Discover our core disciplines and delivery process.',
  alternates: {
    canonical: '/team',
  },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
