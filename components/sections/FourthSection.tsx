import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function FourthSection() {
  return (
    <section className="pb-8">
      <h2 className="px-6 text-lg md:text-2xl font-semibold font-montserrat text-black pb-8 mt-8">
        Captures
      </h2>
      <div>
        <div className="">
          <Carousel
            autoPlay={true}
            centerMode={true}
            emulateTouch={true}
            infiniteLoop={true}
            interval={4000}
            showArrows={true}
            showIndicators={true}
            useKeyboardArrows={true}
            transitionTime={3000}
            showThumbs={false}
          >
            <div>
              <img
                src="/art_competition.jpeg"
                className="md:h-96 h-52 w-100px"
              />
            </div>
            <div>
              <img src="/childrens_day.jpeg" className="md:h-96 h-52 w-100px" />
            </div>
            <div>
              <img
                src="/sunday_activity.jpeg"
                className="md:h-96 h-52 w-100px"
              />
            </div>
            <div>
              <img src="/teachers_day.jpeg" className="md:h-96 h-52 w-100px" />
            </div>
            <div>
              <img
                src="/science_modelling_competition.jpeg"
                className="md:h-96 h-52 w-100px"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
