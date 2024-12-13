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
  const [user, setUser ] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsSignedIn(true);
        setUser (user);
      } else {
        setIsSignedIn(false);
        setUser (null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <header
      className={`sticky h-[65px] bg-white border-b border-gray-200 flex-col w-full transition-shadow duration-300 ${isScrolled  ? "shadow-sm shadow-gray-300" : "null"}`}
    >
      <div className="flex items-center justify-between w-full h-full">
        <div className="flex items-center justify-center bg-red-000">
          <div className={`ml-4 visible`}>
            <Hamburger toggleSideBar={toggleSideBar} />
          </div>
          
          <div className="ml-5">
            <Branding />
          </div>      
        </div>

        <div className="flex items-center justify-center mr-5 bg-red-000">
          <div className="mr-4">
            <Notification />
          </div>
          
          <div className="mr-3">
            {isSignedIn ? <Account user={user} /> : <SignInButton />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;