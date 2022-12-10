import Image from "next/image";
import ImageWithEffect from "../ImageWithEffect";

export default function ThirdSection() {
  return (
    <>
      <section className="pb-12 pt-4">
        <div className="flex flex-col">
          <div className="flex md:flex-row flex-col overflow-hidden">
            <div className="w-full md:w-1/2 md:h-60 h-56">
              <div className="bg-[url('/childrens_day.jpeg')] w-full md:h-60 h-56 bg-center bg-cover">
                <div className="hover:bg-sky-600/90 transition-all duration-500 w-full h-full bg-sky-500/50 z-20 text-white">
                  <div className="pt-40 md:pt-44 pl-8 w-full h-full hover:md:pt-6 hover:pt-6 transition-all duration-300">
                    <div className="md:text-2xl text-xl">Children&apos;s Day</div>
                    <div className="md:text-xl text-lg">14th November</div>
                    <div className="text-montserrat text-sm w-4/5 text-justify md:pt-4 pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:h-60 h-56">
              <div className="bg-[url('/teachers_day.jpeg')] w-full md:h-60 h-56 bg-center bg-cover">
                <div className="hover:bg-amber-600/90 transition-all duration-500 w-full h-full bg-amber-500/50 z-20 text-white">
                  <div className="pt-40 md:pt-44 pl-8 w-full h-full hover:md:pt-6 hover:pt-6 transition-all duration-300">
                    <div className="md:text-2xl text-xl">Teacher&apos;s Day</div>
                    <div className="md:text-xl text-lg">5th September</div>
                    <div className="text-montserrat text-sm w-4/5 text-justify md:pt-4 pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col overflow-hidden">
            <div className="w-full md:w-1/2 md:h-60 h-56">
              <div className="bg-[url('/sunday_activity.jpeg')] w-full md:h-60 h-56 bg-center bg-cover">
              <div className="hover:bg-violet-600/90 transition-all duration-500 w-full h-full bg-violet-500/50 z-20 text-white">
                  <div className="pt-40 md:pt-44 pl-8 w-full h-full hover:md:pt-6 hover:pt-6 transition-all duration-300">
                    <div className="md:text-2xl text-xl">Sunday Activity</div>
                    <div>Every Sunday</div>
                    <div className="text-montserrat text-sm w-4/5 text-justify md:pt-4 pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:h-60 h-56">
              <div className="bg-[url('/art_competition.jpeg')] w-full md:h-60 h-56 bg-center bg-cover">
              <div className="hover:bg-green-600/90 transition-all duration-500 w-full h-full bg-green-500/50 z-20 text-white">
                  <div className="pt-40 md:pt-44 pl-8 w-full h-full hover:md:pt-6 hover:pt-6 transition-all duration-300">
                    <div className="md:text-2xl text-xl">Art Competition</div>
                    <div>6th November</div>
                    <div className="text-montserrat text-sm w-4/5 text-justify md:pt-4 pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col overflow-hidden">
            <div className="w-full md:w-1/2 md:h-60 h-56">
              <div className="bg-[url('/science_modelling_competition.jpeg')] w-full md:h-60 h-56 bg-center bg-cover">
              <div className="hover:bg-rose-600/90 transition-all duration-500 w-full h-full bg-rose-500/50 z-20 text-white">
                  <div className="pt-40 md:pt-44 pl-8 w-full h-full hover:md:pt-6 hover:pt-6 transition-all duration-300">
                    <div className="md:text-2xl text-xl">Science Modelling Competition</div>
                    <div>7th December</div>
                    <div className="text-montserrat text-sm w-4/5 text-justify md:pt-4 pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:h-60 h-56">
              <div className="bg-[url('/foundation_day.jpeg')] w-full md:h-60 h-56 bg-center bg-cover">
              <div className="hover:bg-indigo-600/90 transition-all duration-500 w-full h-full bg-indigo-500/50 z-20 text-white">
                  <div className="pt-40 md:pt-44 pl-8 w-full h-full hover:md:pt-6 hover:pt-6 transition-all duration-300">
                    <div className="md:text-2xl text-xl">Foundation Day</div>
                    <div className="md:text-xl text-lg">5th September</div>
                    <div className="text-montserrat text-sm w-4/5 text-justify md:pt-4 pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}