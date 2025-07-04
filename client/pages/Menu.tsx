import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Menu() {
  return (
    <div className="min-h-screen bg-coffee-light">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-coffee-dark mb-6">
              Our Menu
            </h1>
            <p className="text-xl text-coffee-bean/80 max-w-2xl mx-auto">
              Discover our carefully curated selection of premium coffees and
              delicious treats
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-coffee-dark mb-2">
                  Signature Blend
                </h3>
                <p className="text-coffee-bean/70 mb-4">
                  Our house special roasted to perfection
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-coffee-medium">
                    ₱180
                  </span>
                  <Button className="bg-coffee-gold text-coffee-dark hover:bg-coffee-gold/90">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-coffee-dark mb-2">
                  Espresso
                </h3>
                <p className="text-coffee-bean/70 mb-4">
                  Rich and bold single shot
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-coffee-medium">
                    ₱120
                  </span>
                  <Button className="bg-coffee-gold text-coffee-dark hover:bg-coffee-gold/90">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-coffee-dark mb-2">
                  Cappuccino
                </h3>
                <p className="text-coffee-bean/70 mb-4">
                  Creamy foam with perfect balance
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-coffee-medium">
                    ₱150
                  </span>
                  <Button className="bg-coffee-gold text-coffee-dark hover:bg-coffee-gold/90">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
