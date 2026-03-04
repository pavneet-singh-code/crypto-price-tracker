import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden px-4 sm:px-6 lg:px-8">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-emerald-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full text-center flex flex-col items-center">

        {/* Accent Line */}
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mb-10 opacity-50" />

        {/* Headline */}
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight mb-6">
          Track Crypto Markets <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-emerald-300 to-emerald-600">
            In Real Time
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-400 text-lg md:text-xl lg:text-2xl font-medium max-w-2xl mb-12 leading-relaxed">
          Monitor prices and analyze trends across the crypto market.
        </p>

        {/* Button */}
        <a
          href="#market"
          className="group inline-flex items-center justify-center px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-black font-black uppercase tracking-widest text-sm rounded-full transition-all duration-300 shadow-[0_0_40px_rgba(16,185,129,0.2)] hover:shadow-[0_0_60px_rgba(16,185,129,0.4)] hover:scale-105 active:scale-95"
        >
          View Market
          <ArrowDown className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-1" />
        </a>

        {/* Grid Lines */}
        <div className="absolute inset-0 -z-10 grid grid-cols-6 h-full w-full opacity-[0.03] pointer-events-none">
          <div className="border-x border-emerald-500" />
          <div className="border-x border-emerald-500" />
          <div className="border-x border-emerald-500" />
          <div className="border-x border-emerald-500" />
          <div className="border-x border-emerald-500" />
          <div className="border-x border-emerald-500" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
        <span className="text-[10px] text-emerald-500/50 uppercase tracking-[0.3em] font-bold">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-emerald-500 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;