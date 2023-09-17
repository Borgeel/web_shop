import React from "react";

const ProductPage = ({ product, user }) => {
  console.log(user);
  console.log(product);
  return (
    <div className="flex p-4">
      {/* Product Details */}
      <div className="w-70 mr-4">
        {/* Product Title */}
        <h1 className="text-3xl font-semibold mb-4">{product?.title}</h1>

        {/* Product? Photo */}
        <img
          src={product?.photoUrl}
          alt={product?.title}
          className="w-full h-auto mb-4"
        />

        {/* Product? Details */}
        <div className="flex flex-col mb-4">
          <div className="flex items-center mb-2">
            <span className="mr-2">Created at:</span>
            <span>{product?.createdAt}</span>
          </div>
          <div className="flex items-center mb-2">
            <span className="mr-2">ID:</span>
            <span>{product?.id}</span>
          </div>
          <div className="flex items-center mb-2">
            <span className="mr-2">Views:</span>
            <span>{product?.viewCount}</span>
          </div>
          <div className="flex items-center mb-2">
            <span className="mr-2">Edited at:</span>
            <span>{product?.editedAt}</span>
          </div>
          <div className="flex items-center mb-2">
            <span className="mr-2">Location:</span>
            <span>{product?.location}</span>
          </div>
        </div>

        {/* Product? Description */}
        <div className="border-t-2 border-gray-300 pt-4">
          <h2 className="text-lg font-semibold mb-2">Product? Description</h2>
          <p>{product?.description}</p>
        </div>
      </div>

      {/* User Information */}
      <div className="w-30">
        {/* User Details */}
        <div className="bg-gray-200 p-4 mb-4">
          <h2 className="text-xl font-semibold mb-2">User Information</h2>
          <p>{user.name}</p>
          <p>{user.email}</p>
          {/* Add more user details as needed */}
        </div>

        {/* Other Product?s from the Same User */}
        <div className="bg-gray-200 p-4">
          <h2 className="text-xl font-semibold mb-2">Other Product?s</h2>
          {/* Render cards with other products here */}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
