import Image from "next/image";

export default function SixthSection() {
  return (
    <section id="team-sgm">
      <div className="flex flex-col">
        <div className="w-11/12 mx-auto border-2 border-slate-50 drop-shadow-md">
          <img
            src="/team_sgm.jpeg"
            alt="SGM Team Photo"
            className="w-full mid:w-5/6 mid:h-60"
          />
        </div>
        <div className="py-2 w-11/12 text-center text-brown2 mx-auto font-montserrat font-semibold text-xl">
          Team SGM
        </div>
      </div>
    </section>
  );
}
