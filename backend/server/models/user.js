import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  id: { type: String },
});

userSchema.plugin(passportLocalMongoose);

export default mongoose.model("User", userSchema);
