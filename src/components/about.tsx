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
      <div className="-mt-5 max-w-4xl text-center leading-7">
        <p className="mb-4">
          I&apos;m Biniyam Ambachew, a full-stack developer based in Ethiopia. I
          build modern, responsive websites and web applications for businesses,
          turning ideas into fast, reliable, and user-friendly digital
          experiences.
        </p>

        <p className="mb-4">
          I&apos;ve worked on projects ranging from business websites and
          e-commerce platforms to custom web applications. My core stack
          includes React, Next.js, TypeScript, and Tailwind CSS, with experience
          using Node.js, Nest.js, Laravel, Django, WordPress, and Flutter.
        </p>

        <p>
          I&apos;m currently available for freelance projects and
          collaborations. If you&apos;re looking to build a new website, improve
          an existing one, or bring a digital product idea to life, feel free to
          get in touch.
        </p>
      </div>

      <Skills />
    </motion.section>
  );
};
