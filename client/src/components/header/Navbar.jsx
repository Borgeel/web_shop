import AccountIcon from "./AccountIcon";
import CartIcon from "./CartIcon";
import WishlistLink from "./WishListIcon";
import MyListing from "./MyListing";
import { useAuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { Button } from "../common";

const Navbar = () => {
  const { user } = useAuthContext();

  return (
    <nav className="flex items-center space-x-2 px-2 py-1 gap-2">
      {user ? (
        <>
          <MyListing />
          <WishlistLink />
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
    <Link to="/auth">
      <Button
        btnTxt={action}
        btnClass="px-4 py-2 text-white hover:text-blue-400 relative"
      />
    </Link>
  );
};

export default Navbar;
