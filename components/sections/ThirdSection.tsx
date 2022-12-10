import Image from "next/image";
import ImageWithEffect from "../ImageWithEffect";

export default function ThirdSection() {
  return (
    <>
      <section className="z-10 drop-shadow-xl pt-8">
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/2 w-full">
            <ImageWithEffect
              source="/childrens_day.jpeg"
              imageTitle="Children's Day"
              imageAltText="Children's Day Photo"
              imageDate="14th November"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              color="blue"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <ImageWithEffect
              source="/teachers_day.jpeg"
              imageAltText="Teacher's Day Photo"
              imageTitle="Teacher's Day"
              imageDate="5th September"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              color="yellow"
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
              color="green"
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
              color="lavender"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <ImageWithEffect
              source="/foundation_day.jpeg"
              imageAltText="Foundation Day Photo"
              imageTitle="Foundation Day"
              imageDate="5th September"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              color="orange"
            />
          </div>
        </div>
      </section>
    </>
  );
}
