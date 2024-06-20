import mongoose, { Model, Schema, Document } from "mongoose";

export interface Message extends Document {
  content: string;
  createdAt: Date;
}

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verficationCode: string;
  verificationCodeExpiry: Date;
  isVerified: boolean;
  isAcceptingMessage: boolean;
  messages: Array<Message>;
}

const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "username is reuired."],
    min: [3, "username must contain atleast 3 charcters"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "username is reuired."],
    match: [
      new RegExp(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`),
      "Invalid email",
    ],
  },
  password: {
    type: String,
    required: [true, "password is reuired."],
    min: [6, "password must contain atleast 6 charcters"],
  },
  verficationCode: {
    type: String,
    min: [6, "verficationCode must contain atleast 6 charcters"],
  },
  verificationCodeExpiry: {
    type: Date,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMessage: {
    type: Boolean,
    default: true,
  },
  messages: [MessageSchema],
});

const UserModel: Model<User> =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
