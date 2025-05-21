
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <div className="text-support-500 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </svg>
      </div>
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        We couldn't find the page you're looking for. The page may have been moved, deleted, or never existed.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button asChild>
          <Link to="/">Return to Home</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/support">Request Support</Link>
        </Button>
      </div>
    </div>
  );
}
