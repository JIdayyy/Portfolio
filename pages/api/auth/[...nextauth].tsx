import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackUrl: "https://portfolio-jidayyy.vercel.app/api/auth/callback/github",
  ],
});
