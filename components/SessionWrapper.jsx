"use client";

import { SessionProvider } from "next-auth/react";

export default function SessionWrapper(props) {
  return <SessionProvider>{props.children}</SessionProvider>;
}
