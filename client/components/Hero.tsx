import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 20, 15, 0.7), rgba(30, 20, 15, 0.7)), url('https://images.pexels.com/photos/261434/pexels-photo-261434.jpeg')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
          <span className="italic text-coffee-gold">Welcome to</span>
          <br />
          <span className="font-bold">Marie Roast!</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-serif italic mb-6 text-coffee-cream">
          A Perfect Roast for Every Story
        </h2>

        <p className="text-lg md:text-xl mb-8 text-coffee-cream/90 max-w-2xl mx-auto">
          Kape? Tara! Sarap ka namin dito
        </p>

        <Button
          size="lg"
          className="bg-coffee-gold text-coffee-dark hover:bg-coffee-gold/90 font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          View Shop
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-coffee-dark/50 to-transparent"></div>

      {/* Coffee Bean Decorations */}
      <div className="absolute top-20 left-10 w-4 h-6 bg-coffee-medium rounded-full opacity-20 transform rotate-12"></div>
      <div className="absolute top-40 right-20 w-3 h-5 bg-coffee-medium rounded-full opacity-15 transform -rotate-12"></div>
      <div className="absolute bottom-32 left-1/4 w-5 h-7 bg-coffee-medium rounded-full opacity-10 transform rotate-45"></div>
    </section>
  );
}
