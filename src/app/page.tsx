import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { ProofBar } from '@/components/sections/ProofBar';
import { FeaturedWork } from '@/components/sections/FeaturedWork';
import { CoreSpecialties } from '@/components/sections/CoreSpecialties';
import { EngineeringPhilosophy } from '@/components/sections/EngineeringPhilosophy';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { ConsultationCta } from '@/components/sections/ConsultationCta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofBar />
      <FeaturedWork />
      <CoreSpecialties />
      <EngineeringPhilosophy />
      <ExperienceTimeline />
      <ConsultationCta />
    </>
  );
}
