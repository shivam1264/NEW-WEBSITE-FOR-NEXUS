import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  const members: Record<string, { name: string; role: string }> = {
    'shubham-pawar': { name: 'Shubham Pawar', role: 'AI Lead Engineer' },
    'shivansh-mehra': { name: 'Shivansh Mehra', role: 'Full Stack Developer' },
    'prakash-biswal': { name: 'Prakash Kumar Biswal', role: 'Agentic AI & Flutter Developer' },
    'shivam-maurya': { name: 'Shivam Kumar Maurya', role: 'UI/UX & Frontend Developer' },
    'tushar-das': { name: 'Tushar Das', role: 'Ops & Marketing Lead' },
  };

  const member = members[slug];

  if (!member) {
    return {
      title: 'Team Member Not Found | NEXUS',
    };
  }

  return {
    title: `${member.name} — ${member.role} | NEXUS`,
    description: `View the portfolio and specializations of ${member.name}, ${member.role} at NEXUS.`,
  };
}

export default function TeamMemberLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
