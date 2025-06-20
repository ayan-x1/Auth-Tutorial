import jwt from "jsonwebtoken";

const SECRET_KEY = "your_secret_key";

export const generateTokenAndSetCookie = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maaxAge : 7 * 24 * 60 * 60 * 1000,
  });

  return token;
};
