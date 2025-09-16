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
          I&apos;m Biniyam Beyene, a passionate Full-Stack Developer from
          Ethiopia. I&apos;ve been learning and building in the programming
          world for over 3 years. Since high school, I&apos;ve pursued my
          passion for software development and enjoyed working across both
          front-end and back-end. My favorite part of development is solving
          complex problems and turning ideas into functional applications. Along
          the way, I&apos;ve built a variety of projects — from personal
          experiments to collaborative ventures.
        </p>
        <p className="mb-4">
          My core stack includes React, Next.js, TypeScript, and Tailwind CSS on
          the the front-end, with Node.js, Nest.js, Laravel, and Django powering
          the back-end. I also develop cross-platform apps with Flutter, and
          I&apos;m experienced with databases like PostgreSQL and MongoDB.
          I&apos;m always exploring new technologies to sharpen my skills and
          stay current.
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
