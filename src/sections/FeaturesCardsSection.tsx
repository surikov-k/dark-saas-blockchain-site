import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Card from '../components/Card';
import TextButton from '../components/TextButton.tsx';

const cardData = [
  {
    image: "/assets/images/pill.png",
    title: "Revolutionary Blockchain API",
    description: "Effortless integrate and manage blockchain data with our cutting-edge API, designed for seamless connectivity.",
    color: "fuchsia"
  },
  {
    image: "/assets/images/cuboid.png",
    title: "Decentralized Data Solutions",
    description: "Empower your applications with decentralized data solutions, ensuring security and transparency at every step.",
    color: "lime"
  },
  {
    image: "/assets/images/cone.png",
    title: "Next-Gen Smart Contracts",
    description: "Unlock the potential of next-gen smart contracts with our robust and scalable API tailored for modern blockchain needs.",
    color: "cyan"
  },
  {
    image: "/assets/images/icosahedron.png",
    title: "Seamless Blockchain Integration",
    description: "Integrate blockchain technology seamlessly into your projects with minimal effort and maximum efficiency.",
    color: "violet"
  }
]
export default function FeaturesCardsSection() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const timeout = setTimeout(
      () => setSelectedCardIndex((selectedCardIndex + 1) % cardData.length),
      3000
    );

    return () => clearTimeout(timeout);
  }, [selectedCardIndex, isHovered]);

  return (
    <section className="py-24 overflow-x-clip md:-mt-28">
      <div className="container mx-auto">
        <h2 className="font-heading font-black text-4xl text-center md:text-5xl lg:text-6xl">Discover the future of blockchain with Blockforge.</h2>

        <div className="mt-36 flex lg:mt-48">
          <div className="flex flex-none gap-8">
            {cardData.map(({image, title, description, color}, index) => (
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setSelectedCardIndex(index)}
                key={title}
                className="inline-flex transition-all duration-500"
                style={{
                  transform: `translateX(calc((-100% - 2rem) * ${selectedCardIndex}))`
                }}
              >
                <Card
                  color={color}
                  className="max-w-xs md:max-w-md"
                >
                  <div className="flex justify-center -mt-28">
                    <div className="inline-flex relative">
                      <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
                      <img src={image}
                           alt="Pill 3D model"
                           className="size-40 group-hover:-translate-y-6 transition duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="font-heading font-black text-3xl mt-12 ">{title}</h3>
                  <p className="text-lg text-zinc-400 mt-4">{description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
            {cardData.map(({title}, index) => (
              <div key={title}
                   className={twMerge(
                     "size-2.5 rounded-full bg-zinc-500 cursor-pointer",
                     index === selectedCardIndex && 'bg-zinc-300'
                   )}
                   onClick={() => setSelectedCardIndex(index)}></div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
