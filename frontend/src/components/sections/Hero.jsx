import React, { useState } from 'react';

export default function Hero({ profile, onOpenResume }) {
  const [imgError, setImgError] = useState(false);

  // Fallback to Google CDN image from Stitch AI if local file is not loaded
  const fallbackImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuDCPT2mzuGKv981JdyKqKPRHE4vpkYZ3kzMhpYHKj8TxtPGNkDiJStVwX4naoqxGdRYqv2Cf67Z1TgelGZAan6L7r_B5GeUDfTw6z5LZGimCGtMXNJtnK0UDWBdl2aDVniJA21UE02lJuEVsUoCCreHWgfYnrsFT9Wehx-3LEF5Y82BBHTLcsymaeWHpEqiYeRBMeiAi9b9uDuzJ8dqIXfLXUVpgReh0mmKuiaVZ99U-vcoeEBhTgv4kmXIFw8TctIkcg";
  const photoSrc = imgError ? fallbackImg : "/images/pushpa_rani.png";

  const stats = profile?.stats || [
    { id: "cgpa", value: "8.77", label: "CGPA" },
    { id: "program", value: "BBA", label: "Student" },
    { id: "focus", value: "Data Analytics", label: "Core Interest" }
  ];

  return (
    <section className="relative w-full max-w-[80rem] mx-auto px-margin-mobile lg:px-margin pt-space-lg lg:pt-space-xl pb-space-lg lg:pb-space-xl overflow-hidden" id="home">
      {/* Ambient Luminous Halo */}
      <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-secondary-container opacity-40 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 -right-32 w-[32rem] h-[32rem] rounded-full bg-surface-container-high opacity-60 blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-space-xl items-center">
        {/* Left Column: Copy & CTAs */}
        <div className="lg:col-span-7 flex flex-col gap-space-md z-10">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-surface-container-low shadow-sm border border-outline-variant/30">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
            <span className="font-code-badge text-code-badge text-primary font-semibold tracking-wider uppercase">
              {profile?.roleBadge || "BBA STUDENT • DATA ANALYTICS • AI"}
            </span>
          </div>

          {/* Name & Primary Title */}
          <div className="flex flex-col gap-space-xs">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-on-surface tracking-tight leading-[1.1]">
              {profile?.name || "Pushpa Rani"}
            </h1>
            <p className="font-display font-semibold text-xl sm:text-2xl text-primary">
              {profile?.headline || "BBA Student | Data Analytics & AI Enthusiast"}
            </p>
          </div>

          {/* Supporting Statement */}
          <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
            {profile?.subHeadline || "Turning data, creativity and technology into meaningful business solutions."}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-space-lg py-3 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-display font-semibold text-sm shadow-md hover:shadow-lg transition-all transform active:scale-95 group"
            >
              <span>View My Work</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>

            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-space-lg py-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-display font-semibold text-sm shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px] text-primary">
                description
              </span>
              <span>Download Resume</span>
            </button>
          </div>

          {/* Three Refined Stat Cards */}
          <div className="grid grid-cols-3 gap-space-sm pt-space-md max-w-lg">
            {stats.map((stat) => (
              <div
                key={stat.id || stat.label}
                className="p-space-sm rounded-2xl bg-surface-container-low shadow-sm border border-outline-variant/30 text-center flex flex-col justify-center transition-all hover:bg-surface-container"
              >
                <div className="font-display font-bold text-2xl sm:text-3xl text-primary">
                  {stat.value}
                </div>
                <div className="font-display text-xs text-secondary font-semibold mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Pushpa Rani Portrait with Ambient Floating Badges */}
        <div className="lg:col-span-5 relative flex justify-center items-center mt-space-lg lg:mt-0">
          {/* Structural Layered Background */}
          <div className="absolute inset-0 max-w-sm mx-auto bg-gradient-to-tr from-surface-variant via-surface-container to-surface-container-lowest rounded-3xl -rotate-2 transform scale-105 shadow-xl opacity-75" />

          {/* Main Photo Card Container */}
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-surface-container-lowest z-10 group border border-outline-variant/30">
            <img
              alt="Pushpa Rani"
              src={photoSrc}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-95 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
          </div>

          {/* Floating Badge: Top Left */}
          <div className="absolute -top-3 -left-3 sm:left-1 z-20 px-3.5 py-2 rounded-2xl bg-surface-container-lowest/95 backdrop-blur-md shadow-lg border border-outline-variant/30 flex items-center gap-2 transform hover:-translate-y-1 transition-transform">
            <span className="material-symbols-outlined text-primary text-[18px]">analytics</span>
            <span className="font-display text-xs text-on-surface font-semibold">Power BI &amp; Excel</span>
          </div>

          {/* Floating Badge: Bottom Left */}
          <div className="absolute bottom-5 -left-4 sm:left-0 z-20 px-3.5 py-2 rounded-2xl bg-surface-container-lowest/95 backdrop-blur-md shadow-lg border border-outline-variant/30 flex items-center gap-2 transform hover:-translate-y-1 transition-transform">
            <span className="material-symbols-outlined text-primary text-[18px]">query_stats</span>
            <span className="font-display text-xs text-on-surface font-semibold">Data Analytics</span>
          </div>

          {/* Floating Badge: Bottom Right */}
          <div className="absolute -bottom-3 -right-2 sm:right-2 z-20 px-3.5 py-2 rounded-2xl bg-surface-container-lowest/95 backdrop-blur-md shadow-lg border border-outline-variant/30 flex items-center gap-2 transform hover:-translate-y-1 transition-transform">
            <span className="material-symbols-outlined text-primary text-[18px]">smart_toy</span>
            <span className="font-display text-xs text-primary font-semibold">AI Tools</span>
          </div>
        </div>
      </div>
    </section>
  );
}
