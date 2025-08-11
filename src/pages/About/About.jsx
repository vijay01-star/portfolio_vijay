import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={1200}
                />
              </div>
            </div>

            <div className="relative space-y-6 max-w-3xl mx-auto p-6 bg-gray-900 rounded-2xl shadow-lg">
  <h2 className="text-3xl font-bold text-yellow-400">Hello! I'm Vijayakumar 👋</h2>
  
  <p className="text-lg text-gray-200 leading-relaxed">
    I’m a <span className="text-yellow-300 font-semibold">passionate software developer</span> in the making, 
    currently pursuing my MSc in Software Systems at 
    <span className="font-semibold text-yellow-300"> Kongu Engineering College</span>.
    My expertise spans <span className="font-medium">C, C++, Java, Python</span>, and web technologies, 
    with hands-on experience in projects like 
    <span className="italic"> deep learning–based sentiment analysis</span> and 
    <span className="italic"> travel management systems</span>.
  </p>

  <p className="text-lg text-gray-200 leading-relaxed">
    I thrive on <span className="text-yellow-300">building solutions that combine creativity with functionality</span> — 
    whether it’s coding applications, presenting research papers, or contributing to tech events.  
    As an active volunteer and leader in multiple college associations, I’m committed to 
    <span className="font-semibold"> continuous learning</span> and delivering impactful, 
    real-world software solutions.
  </p>


             

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                   Coding with clarity, creating with purpose 
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Vijayakumar...
                    </cite>
                    
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
