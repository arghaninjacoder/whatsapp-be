import mongoose from "mongoose"
import validator from "validator"

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your name"],
    },
    email: {
      type: String,
      required: [true, "Please provide your email address"],
      unique: [true, "This email address is already exist"],
      lowercase: true,
      validate: [validator.isEmail, "Please enter a valid email address"],
    },
    picture: {
      type: String,
      default:
        "https://cdn.vectorstock.com/i/preview-1x/70/84/default-avatar-profile-icon-symbol-for-website-vector-46547084.jpg",
    },
    status: {
      type: String,
      default: "Hey there! I am using whatsapp.",
    },
    password: {
      type: String,
      required: [true, "Please provide your password"],
      minLength: [6, "Please make sure you have at least 6 characters"],
      maxLength: [
        128,
        "Please make your password is between 6 and 128 characters",
      ],
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
)

const UserModel =
  mongoose.models.UserModel || mongoose.model("UserModel", userSchema)

export default UserModel
