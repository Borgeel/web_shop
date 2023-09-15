import AccountIcon from "./AccountIcon";
import CartIcon from "./CartIcon";
import WishlistLink from "./WishListIcon";
import MyListing from "./MyListing";

import { TiThMenu } from "react-icons";

const Navbar = () => {
  return (
    <nav className="flex items-center space-x-4 p-2 gap-3">
      <WishlistLink />
      <MyListing />
      <CartIcon />
      <AccountIcon />
    </nav>
  );
};

export default Navbar;
