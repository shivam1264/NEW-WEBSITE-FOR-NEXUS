import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services & Capabilities | NEXUS',
  description: 'Explore our full suite of services: AI Solutions, Enterprise Web Apps, Native Mobile Apps, MVP Development, UI/UX Design, and Automation Systems.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
