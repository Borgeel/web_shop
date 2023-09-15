import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: { type: String, unique: true },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: { type: String },
  googleId: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  picture: { type: String },
  orders: [
    {
      orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
      status: { type: String, enum: ["Pending", "Shipped", "Delivered"] },
    },
  ],
});

export default mongoose.model("User", userSchema);
