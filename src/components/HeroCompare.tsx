import React from "react";
import { Compare } from "@/components/ui/compare";
import heroCompareBefore from './hero-compare-before.png'
import heroCompareAfter from './hero-compare-after.png'

export function HeroCompare() {
  return (
    <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
      <Compare
        firstImage={'/hero-compare-before.jpg'}
        secondImage="/hero-compare-after.jpg"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-center-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
        autoplay={true}
      />
    </div>
  );
}
