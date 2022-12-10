import Image from "next/image";
import { useState, useEffect } from "react";

export default function ImageWithEffect(props: any) {

console.log("The props are: -", props.source)
  const customClass = `bg-[url(/${props.source})] w-full md:h-60 h-56 bg-center bg-cover`
  const customColorClass = `w-full h-full bg-${props.color}-500/50 z-20 text-white`
  return (
    
    <>
      <div className="w-full md:w-1/2 md:h-60 h-56">
        <div className={customClass}>
          <div className={customColorClass}>
            <div className="pt-32 md:pt-40 pl-8">
              <div>{props.title}</div>
              <div>{props.date}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
