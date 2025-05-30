import { useState } from "react";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Search", to: "/search" },
  { label: "New", to: "/new" },
  { label: "Pre-Owned", to: "/pre-owned" },
];

const Header = () => {
  const { isSignedIn } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center shadow-sm p-5 relative">
      <img
        src="/logo.svg"
        alt="logo"
        width={150}
        height={100}
        className="cursor-pointer"
        onClick={() => window.location.href = '/'}
      />

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-16">
        {navLinks.map(link => (
          <li
            key={link.label}
            className="font-medium hover:scale-110 hover:shadow-xl transition-all cursor-pointer hover:text-primary"
          >
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {/* Desktop Auth */}
      <div className="hidden md:flex items-center gap-3">
        {isSignedIn ? (
          <>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: {
                    width: '40px',
                    height: '40px',
                  },
                },
              }}
            />
            <Link to={'/profile'}>
              <Button className="bg-primary text-primary-foreground hover:shadow-md hover:scale-102">Submit Listing</Button>
            </Link>
          </>
        ) : (
          <SignInButton>
            <Button className="bg-primary text-primary-foreground hover:shadow-md hover:scale-102">
              Sign In
            </Button>
          </SignInButton>
        )}
      </div>

      {/* Hamburger Icon */}
      <button
        className="md:hidden z-20 p-2"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(prev => !prev)}
      >
        <span className="block w-7 h-7 relative">
          <span
            className={`absolute left-0 top-2 w-7 h-1 bg-black rounded transition-all duration-300 ${menuOpen ? "rotate-45 top-6" : ""}`}
          />
          <span
            className={`absolute left-0 top-4 w-7 h-1 bg-black rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`absolute left-0 top-6 w-7 h-1 bg-black rounded transition-all duration-300 ${menuOpen ? "-rotate-45" : ""}`}
          />
        </span>
      </button>

      {/* Mobile Modal */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-opacity-60 flex justify-end z-10 shadow-md transition-all"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="bg-white w-3/4 max-w-xs h-full p-8 flex flex-col gap-8 shadow-lg"
            onClick={e => e.stopPropagation()}
          >
            <ul className="flex flex-col gap-6">
              {navLinks.map(link => (
                <li
                  key={link.label}
                  className="p-3 rounded-md font-medium text-lg hover:scale-102 hover:bg-[#eef0fc] transition"
                  onClick={() => setMenuOpen(false)}
                >
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 mt-auto">
              {isSignedIn ? (
                <>
                  <UserButton
                    appearance={{
                      elements: {
                        userButtonAvatarBox: {
                          width: '40px',
                          height: '40px',
                        },
                      },
                    }}
                  />
                  <Link to={'/profile'}>
                    <Button
                      className="bg-primary text-primary-foreground w-full hover:scale-102"
                      onClick={() => setMenuOpen(false)}
                    >
                      Submit Listing
                    </Button>
                  </Link>
                </>
              ) : (
                <SignInButton>
                  <Button className="bg-primary text-primary-foreground w-full hover:scale-102">
                    Sign In
                  </Button>
                </SignInButton>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;