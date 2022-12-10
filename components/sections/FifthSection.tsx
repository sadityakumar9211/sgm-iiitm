import Image from "next/image";

export default function FifthSection() {
  return (
    <>
      <section className="px-6 py-10 flex flex-col md:flex-row md:justify-between">
        <div className="w-full md:w-7/12 py-6">
          <h2 className="text-lg md:text-2xl font-semibold font-montserrat text-black">
            SGM Family
          </h2>
          <p className="md:text-md font-montserrat text-yellow-900 w-full md:w-4/5 text-justify">
            SGM IIITM Gwalior is mentored by the Director of our esteemed
            institute Prof. S.N. Singh and Faculty Coordinator, Prof. Joydip
            Dhar (DOSA ABV-IIITM). The student team has two departments namely
            Teaching and Management.
          </p>
        </div>
        <div className="w-full md:w-5/12 text-yellow-900">
          <div className="flex flex-col md:flex-row justify-around text-center font-montserrat-700">
            <div>
              <Image
                src="/directors_image.png"
                alt="Photo of ABV-IIITM Director"
                height="147"
                width="130"
                className="mx-auto"
              />
              <p>Prof. S.N. Singh</p>
              <p>Director</p>
              <p>ABV-IIITM Gwalior</p>
            </div>

            <div className="pt-6 md:pt-0">
              <Image
                src="/jdsir_image.png"
                alt="Photo Joydip Dhar"
                height="147"
                width="130"
                className="mx-auto"
              />
              <p>Prof. Joydip Dhar</p>
              <p>Dean of Students' Affairs</p>
              <p>ABV-IIITM Gwalior</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
