/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  emailVerified?: boolean;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
