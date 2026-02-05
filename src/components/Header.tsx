import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => scrollToSection("hero")} className="flex items-center gap-3">
            <img src={logo} alt="ყველის სახლი logo" className="h-10 w-10 object-contain" />
            <span className="text-lg font-semibold text-foreground hover:text-primary transition-colors">ყველის სახლი - სათემო</span>
          </button>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            ჩვენს შესახებ
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            პროდუქცია
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            კონტაქტი
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
