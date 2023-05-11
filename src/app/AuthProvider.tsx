"use client";

import { Amplify } from "aws-amplify";
import { SessionProvider } from "next-auth/react";

Amplify.configure({ ssr: true });

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};
