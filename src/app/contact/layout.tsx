import React from "react";
import {ContactProvider} from "@/app/contact/context";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ContactProvider>
      {children}
    </ContactProvider>
  )
}
