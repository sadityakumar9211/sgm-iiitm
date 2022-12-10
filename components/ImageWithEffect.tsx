import Image from "next/image";

export default function ImageWithEffect(props: any) {
  const customStyle = {
    backgroundPosition: "center",
    backgroundSize: "auto",
  };
  return (
    <>
      <div className="bg-blue-500/50 w-full h-64">
        <img
          src={props.source}
          alt={props.imageTitle}
          style={customStyle}
          className="h-64 w-full"
        />

        <div className="relative -top-20 px-6 z-40">
          <h2 className="text-xl font-montserrat-700 text-white">{props.imageTitle}</h2>
          <h3 className="text-md font-montserrat-700 text-white">{props.imageDate}</h3>
        </div>
      </div>
    </>
  );
}
