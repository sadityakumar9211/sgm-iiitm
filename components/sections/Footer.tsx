import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col text-center bg-brown4 py-12 mt-12 px-2">
      {/* big footer starts here */}
      <div className="md:flex flex-col hidden">
        <div className="flex flex-row justify-around pb-16">
          <div>
            <div className="text-left">General</div>
            <a
              href="#"
              className="font-montserrat text-md text-brown3 text-left block"
            >
              Home
            </a>
            <a
              href="#"
              className="font-montserrat text-md text-brown3 text-left"
            >
              Donate
            </a>
          </div>
          <div>
            <div className="text-left">Explore</div>
            <a
              href="#"
              className="font-montserrat text-md text-brown3 text-left block"
            >
              Our Mission
            </a>
            <a
              href="#"
              className="font-montserrat text-md text-brown3 text-left block"
            >
              Events
            </a>
            <a
              href="#"
              className="font-montserrat text-md text-brown3 text-left block"
            >
              Captures
            </a>
            <a
              href="#"
              className="font-montserrat text-md text-brown3 text-left block"
            >
              Our Team
            </a>
          </div>
          <div>
            <div className="text-left">Contact Us</div>
            <a
              href="#"
              className="font-montserrat text-md text-brown3 text-left block"
            >
              sgm@iiitm.ac.in
            </a>
            <a
              href="#"
              className="font-montserrat text-md text-brown3 text-left block"
            >
              sgm.iiitm.ac.in
            </a>
          </div>
          <div>
            <div className="text-center">We are Social :&#41;</div>
            <div>
              <div className="flex flex-row space-x-4 mx-auto">
                <div>
                  <img
                    src="/facebook.png"
                    alt="Facebook Icon"
                    className="w-10 h-10"
                  />
                </div>
                <div>
                  <img
                    src="/instagram.png"
                    alt="Instagram Icon"
                    className="w-10 h-10"
                  />
                </div>
                <div>
                  <img
                    src="/youtube.png"
                    alt="Youtube Icon"
                    className="w-10 h-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row pl-12 space-x-8">
          <div>
            <img
              src="/institute_logo.svg"
              alt="IIITM Logo"
              className="w-16 h-20"
            />
          </div>
          <div>
            <img src="/logo.svg" alt="SGM Logo" className="w-20 h-20" />
          </div>
          <div className="text-left pl-20 items-center font-montserrat text-md">
            <p>Student Gyan Movement</p>
            <p>
              ABV-Indian Institute of Information Technology and Management
              Gwalior,
            </p>
            <p>Morena Link Road, Gwalior, Madhya Pradesh, India, 474015.</p>
          </div>
        </div>
      </div>
      {/* big footer ends here */}

      {/* mobile footer starts here */}
      <div className="md:hidden flex flex-col">
        <div className="text-xl font-montserrat">We are Social :&#41;</div>
        <div className="flex flex-row space-x-4 object-contain mx-auto">
          <div>
            <img
              src="/facebook.png"
              alt="Facebook Icon"
              className="w-10 h-10"
            />
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
        <div className="flex flex-row space-x-4 py-2 object-contain mx-auto">
          <div>
            <img
              src="/institute_logo.svg"
              alt="Institute Logo"
              className="w-12 h-12"
            />
          </div>
          <div>
            <img src="/logo.svg" alt="SGM Logo" className="w-12 h-12" />
          </div>
        </div>
        <div className="md:text-md font-montserrat text-yellow-900 w-full md:w-4/5">
          Student Gyan Movement
        </div>
        <div className="md:text-md font-montserrat text-yellow-900 w-full md:11/12">
          ABV-Indian Institute of Information Technology and Management Gwalior,{" "}
        </div>
        <div className="md:text-md font-montserrat text-yellow-900 w-full md:w-4/5">
          Morena Link Road, Gwalior, Madhya Pradesh, India, 474015.
        </div>
      </div>
      {/* mobile footer ends here*/}
    </footer>
  );
}
