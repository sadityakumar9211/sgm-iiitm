import Image from "next/image";

export default function SecondSection() {
  return (
    <>
      <section className="px-6 pt-16 pb-12 flex flex-col md:flex-row md:justify-between">
        <div className="w-full md:w-7/12 py-6">
          <h2 className="text-lg md:text-2xl font-semibold font-montserrat text-black">
            Our Mission
          </h2>
          <p className="md:text-md font-montserrat text-yellow-900 w-full md:w-4/5 text-justify">
            Inspired by Right to Education Act (2002), introduced by former
            Prime Minister Late Atal Bihari Vajpayee, also the founder of our
            institute ABV-IIITM Gwalior.
          </p>
        </div>
        <div className="w-full md:w-5/12 text-yellow-900">
          <div className="flex py-2 items-center">
            <Image
              src="/first_feature.png"
              width="60"
              height="60"
              alt="education illustrative logo"
            />
            <span className="px-4">Education is basic right</span>
          </div>
          <div className="flex py-2 items-center">
            <Image
              src="/second_feature.png"
              width="60"
              height="60"
              alt="education illustrative logo"
            />
            <span className="px-4">Focus on overall development of children</span>
          </div>
          <div className="flex py-2 items-center">
            <Image
              src="/third_feature.png"
              width="60"
              height="60"
              alt="education illustrative logo"
            />
            <span className="px-4">Access to education irrespective to financial status</span>
          </div>
        </div>
      </section>
      <h2 className="px-6 text-lg md:text-2xl font-semibold font-montserrat text-black pt-16">
        Events
      </h2>
    </>
  );
}
