import { useEffect, useState } from "react";
import Account from './Account.jsx';
import Branding from "../branding/Branding";
import Hamburger from "./Hamburger.jsx";
import Notification from "./Notification.jsx";
import SignInButton from "./SignInButton.jsx";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Header = ({ toggleSideBar }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      // console.log("isScrolled:", window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    const auth = getAuth();

    const unsubsrcibe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsSignedIn(true);
        setUser(user);
      } else {
        setIsSignedIn(false);
        setUser(null);
      }
    });

    return () => unsubsrcibe();
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 h-[65px] pr-[20px] bg-white border-b border-gray-100 flex justify-between items-center mx-auto w-full px-2 transition-shadow duration-300 ${isScrolled ? "shadow-md shadow-gray-400" : ""}`}
    >

      {/* cụm hamburger + logo */}
      <div className="flex items-center justify-center">
        <Hamburger toggleSideBar={toggleSideBar} />
        <Branding />
      </div>

      {/* Cụm theme switcher + noti + profile */}
      <div className="flex items-center justify-center">
        {/* Notification */}
        <Notification />

        {/* User avatar*/}
        <div className="ml-[15px]">
          {isSignedIn ? (<Account user={user} />) : (<SignInButton />)}
        </div>
      </div>

    </header>
  );
};

export default Header;