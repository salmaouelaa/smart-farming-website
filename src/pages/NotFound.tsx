
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-farm-green mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! This page is not cultivated yet.</p>
        <p className="text-gray-500 mb-8">The resource you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Button asChild className="bg-farm-green hover:bg-farm-lightGreen">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
