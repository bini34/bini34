import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/project-2.webp',
    title: 'Next-starter',
    description:
      'A Next.js starter template, packed with features like TypeScript, Tailwind CSS, Next-auth, Eslint, Stripe, testing tools and more.',
    technologies: ['Next.js', 'Tailwind', 'Shadcn/ui', 'Next-auth', 'Prisma'],
    links: {
      preview: 'https://next-starter-skolaczk.vercel.app',
      github: 'https://github.com/Skolaczk/next-starter',
      githubApi: 'https://api.github.com/repos/Skolaczk/next-starter',
    },
  },
  {
    image: '/images/project-1.webp',
    title: 'SocialHub',
    description:
      'SocialHub is a next-generation social media app developed using Next.js and Nest.js.',
    technologies: ['Next.js', 'TypeScript', ' Nest.js', 'Tailwind', 'Prisma'],
    links: {
      preview: 'https://socialhub-ms.vercel.app/',
      github: 'https://github.com/Skolaczk/SocialHub',
      githubApi: 'https://api.github.com/repos/Skolaczk/SocialHub',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Front-End Developer',
    company: 'Yennu Creatives',
    description:
      'Built and optimized responsive user interfaces for modern web applications. Collaborated with cross-functional teams to deliver high-quality, scalable solutions. Ensured performance, usability, and clean code through testing and best practices.',
    period: '2024 - 2025',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Figma'],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Freelancing, Remote',
    description:
      'Designed and developed end-to-end web applications using modern front-end and back-end technologies. Integrated APIs, databases, and cloud services to deliver secure and scalable solutions. Collaborated with clients to gather requirements, deploy projects, and provide ongoing support.',
    period: '2024 - Present',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'Laravel',
      'Django',
      'Flutter',
    ],
  },
  {
    title: 'Back-End Developer Intern',
    company: 'Perago Systems',
    description:
      'Actively contributed to migrating legacy systems to cloud-based architectures. Focused on analyzing, mapping, and transferring large datasets while ensuring data integrity. Developed and tested migration scripts, documented schemas, and collaborated with cross-functional teams to modernize application components.',
    period: 'Jul 2025 - Present',
    technologies: [
      'Microsoft SQL Server',
      'PostgreSQL',
      'Python',
      'Bash',
      'SQL',
    ],
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;
