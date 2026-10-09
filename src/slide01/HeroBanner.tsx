import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { SLIDE_01_COPY } from './data';

interface HeroBannerProps {
  isId: boolean;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ isId }) => {
  return (
    <div className="lg:col-span-7 flex flex-col justify-center">
      {/* Main Title without top badge as requested */}
      <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black tracking-tight text-white leading-[1.12]">
        {SLIDE_01_COPY.hero.titlePrefix} <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-amber-300 inline-block">
          {SLIDE_01_COPY.hero.titleHighlight}
        </span>
      </h1>

      {/* Indonesia Connect Lottie Animation - Scaled slightly down with contain fit so no map edges are clipped */}
      <div className="my-3 sm:my-4">
        <div className="w-full max-w-[380px] sm:max-w-[460px] lg:max-w-[540px] xl:max-w-[580px] aspect-[16/9] flex items-center justify-start pointer-events-none -ml-2 sm:-ml-3 lg:-ml-4">
          <DotLottieReact
            src={SLIDE_01_COPY.hero.lottieSrc}
            loop
            autoplay
            layout={{
              fit: 'contain',
              align: [0, 0.5],
            }}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Concise Description */}
      <p className="text-sm sm:text-base text-neutral-300 max-w-2xl font-normal leading-relaxed">
        {isId ? SLIDE_01_COPY.hero.descId : SLIDE_01_COPY.hero.descEn}
      </p>
    </div>
  );
};
