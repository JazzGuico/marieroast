import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-coffee-light">
      <Header />
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-8xl font-bold text-coffee-dark mb-4">404</h1>
          <h2 className="text-3xl font-serif text-coffee-medium mb-4">
            Oops! This brew went missing
          </h2>
          <p className="text-xl text-coffee-bean/70 mb-8">
            The page you're looking for seems to have been misplaced like a
            coffee cup on a Monday morning.
          </p>
          <Link to="/">
            <Button className="bg-coffee-gold text-coffee-dark hover:bg-coffee-gold/90 font-semibold px-8 py-3 text-lg rounded-full">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
