import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[50vh] flex items-center justify-center gradient-hero relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-brand-cream rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 py-24">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-center">
            <img
              src={logo}
              alt="ყველის სახლი logo"
              className="h-44 w-44 md:h-64 md:w-64 lg:h-80 lg:w-80 object-contain -translate-x-4 md:-translate-x-6 lg:-translate-x-8"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-0 animate-fade-in">
              ყველის სახლი – სათემო
            </h1>
          </div>
        </div>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          100% ნატურალური რძის პროდუქტები კახეთიდან
        </p>
      </div>
    </section>
  );
};

export default Hero;
