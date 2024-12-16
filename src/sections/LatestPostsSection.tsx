import type { CollectionEntry } from 'astro:content';
import { useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import Card from '../components/Card.tsx';
import CutCornerButton from '../components/CutCornerButton.tsx';
import Tag from '../components/Tag.tsx';
import { getPostColor } from '../utils/post-utils.ts';
import { motion, useScroll, useTransform } from 'framer-motion';

interface LatestPostsSectionProps {
  posts: CollectionEntry<'blog'>[]
}


export default function LatestPostsSection({posts}: LatestPostsSectionProps) {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start center"],
  });

  const marginTop = useTransform(scrollYProgress, [0, 1], [0, 64]);

  return (
    <section className="py-60">
      <div className="container">
        <h2 className="font-heading font-black text-4xl text-center md:text-5xl lg:text-6xl">Your portal to everything blockchain.</h2>
        <p className="text-xl text-zinc-400 mt-8 text-center lg:text-2xl max-w-2xl mx-auto">Keep up with the newest trends, updates and insights in the blockchain world updated weekly.</p>

        <div className="mt-16 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="flex flex-col gap-8">
            {posts.map(({data: {title, description, category}}, index) => {
              const color = getPostColor(category);
              return (

                <Card key={index}
                      color={color}
                      buttonText="Read more"
                      className={twMerge(index % 2 ? 'md:hidden' : 'md:block')}
                >
                  <Tag color={color}>{category}</Tag>
                  <h3 className="font-heading font-black text-3xl mt-3">{title}</h3>
                  <p className=" text-lg text-zinc-400 mt-6">{description}</p>
                </Card>
              );
            })}
          </div>
          <motion.div
            ref={targetRef}
            className="hidden md:flex flex-col gap-8"
            style={{
              marginTop
            }}
          >
            {posts.map(({data: {title, description, category}}, index) => {
              const color = getPostColor(category);
              return (

                <Card key={index}
                      color={color}
                      buttonText="Read more"
                      className={twMerge(index % 2 ? 'md:block' : 'md:hidden')}
                >
                  <Tag color={color}>{category}</Tag>
                  <h3 className="font-heading font-black text-3xl mt-3">{title}</h3>
                  <p className=" text-lg text-zinc-400 mt-6">{description}</p>
                </Card>
              );
            })}
          </motion.div>
        </div>

        <div className="flex justify-center mt-48 md:mt-32">
          <CutCornerButton>Read the blog</CutCornerButton>
        </div>
      </div>
    </section>
  );
}
