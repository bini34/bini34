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
    image: '/images/project-1.png',
    title: 'Eros Addis Restaurant Website',
    description:
      'A WordPress-based restaurant website featuring online reservation, menu display, about page, and contact information. Designed for a seamless user experience.',
    technologies: ['WordPress', 'PHP', 'HTML', 'CSS', 'JavaScript'],
    links: {
      preview: 'https://erosaddis.com', // replace with actual live link
      github: '', // WordPress project, GitHub link optional
      githubApi: '',
    },
  },
  {
    image: '/images/project-2.png',
    title: 'Skillfy',
    description:
      'A full-stack e-learning platform connecting instructors and students. Students can browse courses, make purchases using Chapa, and track their learning progress.',
    technologies: [
      'React',
      'ASP.NET Core',
      'Chapa API',
      'SQL Server',
      'Tailwind CSS',
    ],
    links: {
      preview: 'https://skillfy.com', // replace with actual live link
      github: 'https://github.com/bini34/Skillfy', // replace with your repo link
      githubApi: 'https://api.github.com/repos/bini34/Skillfy',
    },
  },
  {
    image: '/images/project-4.png',
    title: 'Budget vision',
    description:
      'A full-stack personal finance management app built with Next.js and Node.js. Helps users track and control their budgets efficiently.',
    technologies: [
      'Next.js',
      'Node.js',
      'MongoDB',
      'Tailwind CSS',
      'TypeScript',
    ],
    links: {
      preview: 'https://budget-vision-finances.vercel.app/', // replace with actual live link
      github: 'https://github.com/bini34/', // replace with your repo link
      githubApi: 'https://api.github.com/repos/Biniyam/BudgetBuddy',
    },
  },
  {
    image: '/images/project-3.png',
    title: 'Yennu Creatives Website',
    description:
      'A modern agency website with Home, About, Projects, and Contact pages, built to showcase services and portfolio projects.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    links: {
      preview: 'https://yennucreatives.com', // replace with actual live link
      github: 'https://github.com/bini34', // replace with your repo link
      githubApi: 'https://api.github.com/repos/Biniyam/YennuCreatives',
    },
  },
] as const;

export const experiencesData = [
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
    title: 'Front-End Developer',
    company: 'Yennu Creatives',
    description:
      'Built and optimized responsive user interfaces for modern web applications. Collaborated with cross-functional teams to deliver high-quality, scalable solutions. Ensured performance, usability, and clean code through testing and best practices.',
    period: '2024 - 2025',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Figma'],
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
