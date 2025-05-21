
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // This would come from an auth context in a real implementation
  const isLoggedIn = false;
  const isAdmin = false;

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-support-500 text-white rounded p-1 text-xl font-bold">DS</div>
            <span className="font-bold text-xl hidden sm:inline-block">Dern-Support</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-foreground/80 hover:text-foreground transition-colors">
            Services
          </Link>
          <Link to="/knowledge" className="text-foreground/80 hover:text-foreground transition-colors">
            Knowledge Base
          </Link>
          {isLoggedIn && (
            <Link to="/support" className="text-foreground/80 hover:text-foreground transition-colors">
              Support
            </Link>
          )}
          {isAdmin && (
            <Link to="/admin" className="text-foreground/80 hover:text-foreground transition-colors">
              Admin
            </Link>
          )}
        </nav>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          
          <div className="hidden md:flex items-center gap-2">
            {isLoggedIn ? (
              <Button variant="outline" asChild>
                <Link to="/profile">Profile</Link>
              </Button>
            ) : (
              <>
                <Button variant="outline" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link to="/register">Register</Link>
                </Button>
              </>
            )}
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={mobileMenuOpen ? "hidden" : "block"}>
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={mobileMenuOpen ? "block" : "hidden"}>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} border-t`}>
        <div className="container mx-auto py-4 flex flex-col gap-2">
          <Link to="/" className="px-2 py-2 hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/services" className="px-2 py-2 hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>
            Services
          </Link>
          <Link to="/knowledge" className="px-2 py-2 hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>
            Knowledge Base
          </Link>
          {isLoggedIn && (
            <Link to="/support" className="px-2 py-2 hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>
              Support
            </Link>
          )}
          {isAdmin && (
            <Link to="/admin" className="px-2 py-2 hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>
              Admin
            </Link>
          )}
          
          <div className="border-t mt-2 pt-2 flex flex-col gap-2">
            {isLoggedIn ? (
              <Button variant="outline" asChild className="justify-start">
                <Link to="/profile" onClick={() => setMobileMenuOpen(false)}>Profile</Link>
              </Button>
            ) : (
              <>
                <Button variant="outline" asChild className="justify-start">
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Login</Link>
                </Button>
                <Button asChild className="justify-start">
                  <Link to="/register" onClick={() => setMobileMenuOpen(false)}>Register</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
