import Image from "next/image";
import ImageWithEffect from "../ImageWithEffect";

export default function ThirdSection() {
  return (
    <>
      <section className="py-8">
        <div className="flex flex-col">
          <div className="flex md:flex-row flex-col overflow-hidden">
            <div className="w-full md:w-1/2 md:h-60 h-56">
              <div className="bg-[url('/childrens_day.jpeg')] w-full md:h-60 h-56 bg-center bg-cover">
                <div className="w-full h-full bg-sky-500/50 z-20 text-white">
                  <div className="pt-32 md:pt-40 pl-8">
                    <div>Children's Day</div>
                    <div>14th November</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:h-60 h-56">
              <div className="bg-[url('/teachers_day.jpeg')] w-full md:h-60 h-56 bg-center bg-cover">
                <div className="w-full h-full bg-amber-500/50 z-20 text-white">
                  <div className="pt-32 md:pt-40 pl-8">
                    <div>Teacher's Day</div>
                    <div>5th September</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col overflow-hidden">
            <div className="w-full md:w-1/2 md:h-60 h-56">
              <div className="bg-[url('/sunday_activity.jpeg')] w-full md:h-60 h-56 bg-center bg-cover">
              <div className="w-full h-full bg-violet-500/50 z-20 text-white">
                  <div className="pt-32 md:pt-40 pl-8">
                    <div>Sunday Activity</div>
                    {/* <div>14th November</div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:h-60 h-56">
              <div className="bg-[url('/art_competition.jpeg')] w-full md:h-60 h-56 bg-center bg-cover">
              <div className="w-full h-full bg-green-500/50 z-20 text-white">
                  <div className="pt-32 md:pt-40 pl-8">
                    <div>Art Competition</div>
                    {/* <div>14th November</div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col overflow-hidden">
            <div className="w-full md:w-1/2 md:h-60 h-56">
              <div className="bg-[url('/science_modelling_competition.jpeg')] w-full md:h-60 h-56 bg-center bg-cover">
              <div className="w-full h-full bg-sky-500/50 z-20 text-white">
                  <div className="pt-32 md:pt-40 pl-8">
                    <div>Science Modelling Competition</div>
                    {/* <div>14th November</div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:h-60 h-56">
              <div className="bg-[url('/foundation_day.jpeg')] w-full md:h-60 h-56 bg-center bg-cover">
              <div className="w-full h-full bg-sky-500/50 z-20 text-white">
                  <div className="pt-32 md:pt-40 pl-8">
                    <div>Foundation Day</div>
                    <div>5th September</div>
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

/*

<section className="drop-shadow-xl pt-8">
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/2 w-full h-64">
            <ImageWithEffect
              source="/childrens_day.jpeg"
              imageTitle="Children's Day"
              imageAltText="Children's Day Photo"
              imageDate="14th November"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              color="sky"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <ImageWithEffect
              source="/teachers_day.jpeg"
              imageAltText="Teacher's Day Photo"
              imageTitle="Teacher's Day"
              imageDate="5th September"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              color="amber"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/2 w-full">
            <ImageWithEffect
              source="/sunday_activity.jpeg"
              imageAltText="Sunday Activity Photo"
              imageTitle="Sunday Activity"
            //   imageDate="Every Sunday"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              color="red"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <ImageWithEffect
              source="/art_competition.jpeg"
              imageAltText="Art Competition Photo"
              imageTitle="Art Competition"
            //   imageDate="5th September"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              color="emerald"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/2 w-full">
            <ImageWithEffect
              source="/science_modelling_competition.jpeg"
              imageAltText="Science Modelling Competition Photo"
              imageTitle="Science Modelling Competition"
            //   imageDate="5th September"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              color="violet"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <ImageWithEffect
              source="/foundation_day.jpeg"
              imageAltText="Foundation Day Photo"
              imageTitle="Foundation Day"
              imageDate="5th September"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              color="fuchsia"
            />
          </div>
        </div>
      </section>

*/
