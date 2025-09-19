'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          I&apos;m Biniyam Ambachew, I&apos;m a full-stack developer from
          Ethiopia. I&apos;ve been learning programming for over 3 years. Since
          high school, I decided to pursue my passion for software development.
          My favorite part of programming is solving complex problems and
          turning ideas into real applications. I love the process of building
          projects from scratch and seeing them come to life. I&apos;ve worked
          various projects ranging from personal experiments to collaborative
          ventures. My core stack is React, Next.js, TypeScript, and Tailwind
          CSS. I am also familiar with Node.js, Nest.js, Laravel, Django, and
          Flutter. I&apos;m always eager to explore new technologies and improve
          my skills.
        </p>
        <p>
          I&apos;m open to job opportunities where I can contribute, grow, and
          continuously improve as a developer. If you have a role that aligns
          with my skills and experience, feel free to reach out!
        </p>
      </div>

      <Skills />
    </motion.section>
  );
};
