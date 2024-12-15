import Circle from '../components/Circle.tsx';
import CutCornerButton from '../components/CutCornerButton.tsx';
import Hexagon from '../components/Hexagon.tsx';

export default function CallToActionSection() {
  return (
    <section className="py-60 overflow-hidden">
      <div className="container">
        <div className="relative ">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon className="size-[1100px]"/>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon className="size-[700px]"/>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className="absolute left-0 -top-[400px]">
              <img src="/assets/images/cuboid.png"
                   alt="Cuboid 3D model"
                   className="size-[140px]"/>
            </Circle>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className="absolute -left-[600px] -top-[70px]">
              <img src="/assets/images/cylinder.png"
                   alt="Cylinder 3D model"
                   className="size-[140px]"/>
            </Circle>
          </div>
          <div className="max-w-xs mx-auto lg:max-w-sm">
            <h2 className="font-heading font-black text-4xl text-center md:text-5xl lg:text-6xl">Ready to get&nbsp;started?</h2>
            <p className="text-xl text-zinc-400 mt-8 text-center lg:text-2xl">Start building using blockchain technology, with Blockforge</p>
          </div>
          <div className="flex justify-center mt-12">
            <CutCornerButton>Get Started</CutCornerButton>
          </div>
        </div>
      </div>
    </section>
  );
}
