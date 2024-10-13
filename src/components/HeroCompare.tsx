import React from "react";
import { Compare } from "@/components/ui/compare";




export function HeroCompare({classes}: {classes?: string}) {
  return (
    <div className={`w-[80%] lg:flex p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4 ${classes}`}>
      <Compare
        firstImage='/hero-compare-after.jpg'
        secondImage="/hero-compare-before.jpg"
        firstImageClassName="object-cover object-center-top xl:object-left-top"
        secondImageClassname="object-cover object-left-top xl:object-left-top"
        className="w-full h-[450px] object-cover bg-cover object-left-top"
        slideMode="hover"
        autoplay={true}
        autoplayDuration={10000}
      />
    </div>
  );
}
