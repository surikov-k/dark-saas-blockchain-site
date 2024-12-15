import { twMerge } from 'tailwind-merge';

const testimonials = [
  {
    quote: "The user experience is phenomenal, and the support team is always there to help. Highly recommended!",
    author: "Erica Wyatt",
    authorTitle: "Product Manager — BlockLink",
    avatarImage: "/assets/images/avatar-erica-wyatt.jpg"
  },
  {
    quote: "Our productivity has skyrocketed since we started using Blockforge. It's a game-changer for our team!",
    author: "Noel Baldwin",
    authorTitle: "Lead Developer — BitBridge",
    avatarImage: "/assets/images/avatar-noel-baldwin.jpg"
  },
  {
    quote: "The integration process was seamless, and the performance improvements are beyond our expectations.",
    author: "Harry Bender",
    authorTitle: "CTO — CryptoSolutions",
    avatarImage: "/assets/images/avatar-harry-bender.jpg"
  }
]
export default function TestimonialSection() {
  return (
    <section className ="flex gap-3 items-cente py-32 bg-zinc-800">
      <div className="container">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2  md:gap-8 lg:grid-cols-3 lg:gap-12">
          {testimonials.map(({quote, author, authorTitle, avatarImage}, index) => (
            <blockquote key={index} className={twMerge(index ===  2 && 'md:hidden lg:block')}>
              <p className="font-heading text-3xl font-black lg:text-4xl">&ldquo;{quote}&rdquo;</p>
              <cite className="mt-8 block">
                <div className="flex gap-3 items-center">
                  <div className="">
                    <div
                      className="size-16 bg-zinc-700 rounded-full bg-cover"
                      style={{backgroundImage: `url(${avatarImage}) `}}
                    ></div>
                  </div>
                  <div className="">
                    <div className="text-lg not-italic font-black">{author}</div>
                    <div className="text-zinc-400 not-italic ">{authorTitle}</div>
                  </div>
                </div>
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
