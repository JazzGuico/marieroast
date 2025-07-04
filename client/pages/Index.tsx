import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Heart, Star, Users } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-coffee-light">
      <Header />
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-coffee-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-dark mb-4">
              Why Choose Marie Roast?
            </h2>
            <p className="text-lg text-coffee-bean/80 max-w-2xl mx-auto">
              Experience the perfect blend of tradition and innovation in every
              cup
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-coffee-cream shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-coffee-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <Coffee className="w-8 h-8 text-coffee-dark" />
                </div>
                <h3 className="text-xl font-semibold text-coffee-dark mb-4">
                  Premium Quality
                </h3>
                <p className="text-coffee-bean/70">
                  Sourced from the finest coffee farms worldwide, ensuring every
                  bean meets our exacting standards.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-coffee-cream shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-coffee-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-coffee-dark" />
                </div>
                <h3 className="text-xl font-semibold text-coffee-dark mb-4">
                  Made with Love
                </h3>
                <p className="text-coffee-bean/70">
                  Every cup is crafted with passion and care by our expert
                  baristas who share your love for great coffee.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-coffee-cream shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-coffee-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-coffee-dark" />
                </div>
                <h3 className="text-xl font-semibold text-coffee-dark mb-4">
                  Community Focus
                </h3>
                <p className="text-coffee-bean/70">
                  More than just coffee - we're building a community where
                  stories are shared and connections are made.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-coffee-dark text-coffee-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready for Your Perfect Cup?
          </h2>
          <p className="text-xl mb-8 text-coffee-cream/90 max-w-2xl mx-auto">
            Join thousands of coffee lovers who have made Marie Roast their
            daily ritual.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-coffee-gold text-coffee-dark hover:bg-coffee-gold/90 font-semibold px-8 py-4 text-lg rounded-full"
            >
              Order Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-coffee-gold text-coffee-gold hover:bg-coffee-gold hover:text-coffee-dark font-semibold px-8 py-4 text-lg rounded-full"
            >
              Visit Our Café
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-coffee-bean text-coffee-cream py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-coffee-gold rounded-full flex items-center justify-center">
                  <Coffee className="w-5 h-5 text-coffee-dark" />
                </div>
                <span className="text-xl font-serif italic text-coffee-gold">
                  Marie Roast
                </span>
              </div>
              <p className="text-coffee-cream/80">
                Crafting the perfect coffee experience since day one.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-coffee-gold">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-coffee-gold transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-coffee-gold transition-colors"
                  >
                    Menu
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-coffee-gold transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-coffee-gold transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-coffee-gold">
                Hours
              </h4>
              <p className="text-coffee-cream/80">
                Monday - Sunday
                <br />
                05:00 AM - 10:00 PM
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-coffee-gold">
                Follow Us
              </h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="hover:text-coffee-gold transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="hover:text-coffee-gold transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="hover:text-coffee-gold transition-colors"
                >
                  TikTok
                </a>
                <a
                  href="#"
                  className="hover:text-coffee-gold transition-colors"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-coffee-medium/30 mt-8 pt-8 text-center text-coffee-cream/60">
            <p>&copy; 2024 Marie Roast. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
