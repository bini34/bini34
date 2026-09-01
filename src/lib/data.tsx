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
    image: '/images/eros-addis.png',
    title: 'Eros Addis Restaurant',
    category: 'Restaurant Website',
    description:
      'A responsive WordPress website for Eros Addis Restaurant, making it easy for customers to explore the menu, learn about the restaurant, make reservations, and get in touch.',
    technologies: ['WordPress', 'PHP', 'JavaScript'],
    links: {
      preview: 'https://erosaddis.com',
      github: '',
      githubApi: '',
    },
  },

  {
    image: '/images/wassamar-hotel.png',
    title: 'Wassamar Hotel',
    category: 'Hotel Website',
    description:
      'A modern hotel website designed to showcase rooms, dining, amenities, and hotel information while making it easier for guests to inquire and book their stay.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    links: {
      preview: 'https://w-fawn-ten.vercel.app/',
      github: '',
      githubApi: '',
    },
  },

  {
    image: '/images/clearway.png',
    title: 'Clearway Manufacturing',
    category: 'Corporate Website',
    description:
      'A modern corporate website for a tissue manufacturing company, designed to present the company, its products, and its commitment to sustainable manufacturing.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    links: {
      preview: 'https://clearway-psi.vercel.app/',
      github: '',
      githubApi: '',
    },
  },

  {
    image: '/images/dr-nasis.png',
    title: 'Dr Nasis Specialty Dental Clinic',
    category: 'Dental Clinic Website — Concept',
    description:
      'A modern website concept for a specialty dental clinic, designed to showcase services, build patient trust, and make appointment booking simple and accessible.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    links: {
      preview: 'YOUR_DEMO_URL',
      github: '',
      githubApi: '',
    },
  },

  {
    image: '/images/skillfy.png',
    title: 'Skillfy',
    category: 'Web Application',
    description:
      'A full-stack e-learning platform where students can discover courses, purchase them online, and track their learning progress.',
    technologies: [
      'React',
      'ASP.NET Core',
      'Chapa',
      'SQL Server',
      'Tailwind CSS',
    ],
    links: {
      preview: 'YOUR_REAL_URL',
      github: 'https://github.com/bini34/Skillfy',
      githubApi: 'https://api.github.com/repos/bini34/Skillfy',
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
    period: 'Jul 2025 - Sep 2025',
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
  { icon: <Icons.reactnative className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.django className="size-12" /> },
  { icon: <Icons.laravel className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.flutter className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;
