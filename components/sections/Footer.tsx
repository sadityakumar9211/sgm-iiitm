import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col text-center bg-brown4 py-12 px-2">
      <div className="text-xl font-montserrat">We are Social :&#41;</div>
      <div className="flex flex-row space-x-4 mx-auto">
        <div>
          <img src="/facebook.png" alt="Facebook Icon" className="w-10 h-10" />
        </div>
        <div>
          <img
            src="/instagram.png"
            alt="Instagram Icon"
            className="w-10 h-10"
          />
        </div>
        <div>
          <img src="/youtube.png" alt="Youtube Icon" className="w-10 h-10" />
        </div>
      </div>
      <div className="text-lg font-montserrat py-2 w-full">
        mail us at: sgm@iiitm.ac.in
      </div>
      <div className="flex flex-row space-x-4 mx-auto py-2">
        <div>
          <img
            src="/institute_logo.png"
            alt="Institute Logo"
            className="w-10 h-12"
          />
        </div>
        <div>
          <img
            src="/logo.svg"
            alt="SGM Logo"
            className="w-12 h-12"
          />
        </div>
      </div>
      <div className="md:text-md font-montserrat text-yellow-900 w-full md:w-4/5">Student Gyan Movement</div>
      <div className="md:text-md font-montserrat text-yellow-900 w-full md:11/12">
        ABV-Indian Institute of Information Technology and Management Gwalior,{" "}
      </div>
      <div className="md:text-md font-montserrat text-yellow-900 w-full md:w-4/5">Morena Link Road, Gwalior, Madhya Pradesh, India, 474015.</div>
    </footer>
  );
}
