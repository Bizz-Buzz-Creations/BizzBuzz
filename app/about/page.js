import AboutHero from "@/components/sections/aboutHero";
import ClientLogo from "@/components/sections/clientLogo";
import Counter from "@/components/sections/counter";
import CTA from "@/components/sections/CTA";
import CTA2 from "@/components/sections/CTA-2";
import Reviews from "@/components/sections/reviews";
import React from "react";

export default function About() {
  return (
    <>
      <AboutHero />
      <CTA2 />
      <ClientLogo />
      <Reviews />
      <Counter />
      <CTA />
    </>
  );
}
