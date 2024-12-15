import { twMerge } from 'tailwind-merge';
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
  return (
    <section className="py-24 overflow-x-clip md:-mt-28">
      <div className="container mx-auto">
        <h2 className="font-heading font-black text-4xl text-center md:text-5xl lg:text-6xl">Discover the future of blockchain with Blockforge.</h2>

        <div className="mt-36 flex lg:mt-48">
          <div className="flex flex-none gap-8">
            {cardData.map(({image, title, description, color}) => (
              <div className="relative z-0 p-8 md:p-10 max-w-xs group md:max-w-md"
                   key={title}>
                <div className={twMerge(
                  "absolute size-16 rounded-xl bg-fuchsia-500 top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition duration-300",
                  color === 'lime' && 'bg-lime-500',
                  color === 'cyan' && 'bg-cyan-500',
                  color === 'violet' && 'bg-violet-500',
                )}></div>
                <div className={twMerge(
                  "absolute size-16 rounded-xl bg-fuchsia-500 group-hover:bg-fuchsia-400 top-1.5 right-1.5 -z-10  transition duration-300",
                  color === 'lime' && "bg-lime-500 group-hover:bg-lime-300",
                  color === 'cyan' && "bg-cyan-500 group-hover:bg-cyan-300",
                  color === 'violet' && "bg-violet-500 group-hover:bg-violet-300",
                )}></div>

                <div className="absolute inset-0  bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>
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
                <div className="flex justify-between mt-12">
                  <TextButton color={color}>Learn more</TextButton>
                  <svg xmlns="http://www.w3.org/2000/svg"
                       fill="none"
                       viewBox="0 0 24 24"
                       strokeWidth={2}
                       stroke="currentColor"
                       className="size-8 text-zinc-500 -translate-x-2 group-hover:translate-x-0 group-hover:text-zinc-300 transition duration-300">
                    <path strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"/>
                  </svg>

                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
            {cardData.map(({title}) => (
              <div key={title}
                   className="size-2.5 rounded-full bg-zinc-500 cursor-pointer"></div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
