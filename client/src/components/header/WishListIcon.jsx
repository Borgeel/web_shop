import { Link } from "react-router-dom";

const WishlistLink = () => {
  return (
    <Link
      to="/wishlist"
      className="text-white hover:text-blue-400 active:scale-95 transition-colors duration-300 "
    >
      <div className="px-4 py-2 border border-white rounded-lg ">
        <span> WishList </span>
      </div>
    </Link>
  );
};

export default WishlistLink;
