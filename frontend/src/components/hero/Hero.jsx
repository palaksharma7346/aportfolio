import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 px-6">
      <div className="max-w-7xl w-full">
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;