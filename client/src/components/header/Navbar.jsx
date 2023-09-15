import AccountIcon from "./AccountIcon";
import CartIcon from "./CartIcon";
import WishlistLink from "./WishListIcon";
import MyListing from "./MyListing";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { Button } from "../common";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav className="flex items-center space-x-4 p-2 gap-3">
      {user ? (
        <>
          <WishlistLink />
          <MyListing />
          <CartIcon />
          <AccountIcon />
        </>
      ) : (
        <>
          <NavItem action="Sign up" />
          <NavItem action="Sign In" />
        </>
      )}
    </nav>
  );
};

const NavItem = ({ action }) => {
  return (
    <Button
      btnTxt={action}
      btnClass=" px-4 py-2 border border-white rounded-lg text-white hover:text-blue-400 active:scale-95 transition-colors duration-300 relative"
    >
      <Link path="auth" />
    </Button>
  );
};

export default Navbar;
