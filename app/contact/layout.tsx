import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact NEXUS | Let\'s Talk',
  description: 'Get in touch with NEXUS. Start your project, request a quote, or explore partnership opportunities with our engineering team.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
