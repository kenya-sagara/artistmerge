import type { Metadata } from "next";
import { works } from "@/lib/works";
import { Hero } from "@/components/home/hero";
import { ThreePillars } from "@/components/home/three-pillars";
import { TrackRecord } from "@/components/home/track-record";
import { RecurringOps } from "@/components/home/recurring-ops";
import { SelectedWorks } from "@/components/home/selected-works";
import { ProducerNote } from "@/components/home/producer-note";
import { PlatformTeaser } from "@/components/home/platform-teaser";
import { ContactCta } from "@/components/contact-cta";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ThreePillars />
      <TrackRecord />
      <RecurringOps />
      <SelectedWorks works={works} />
      <PlatformTeaser />
      <ProducerNote />
      <ContactCta />
    </>
  );
}
