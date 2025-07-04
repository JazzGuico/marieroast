import Header from "@/components/Header";

export default function Blog() {
  return (
    <div className="min-h-screen bg-coffee-light">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-coffee-dark mb-6">
              Coffee Stories
            </h1>
            <p className="text-xl text-coffee-bean/80 max-w-2xl mx-auto">
              Discover the stories behind every bean, brewing technique, and
              coffee culture
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-2xl font-semibold text-coffee-dark mb-4">
                Coming Soon
              </h2>
              <p className="text-coffee-bean/70">
                We're brewing up some amazing content for you. Stay tuned for
                coffee insights, brewing tips, and stories from our journey.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
