"use client";
import { useClerk, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { use, useState } from "react";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This is the main layout for the app, which can be used to wrap all pages
   const [sidebarOpen, setsidebarOpen] = useState(false); // State to manage sidebar visibility
   const pathname = usePathname();// Get the current path
   const router = useRouter();// Get the router object
   const {signOut} = useClerk();// Get the signOut function from Clerk
   const user = useUser();// Get the current user

   const handleLogoClick = () => {
    router.push("/")// Navigate to the home page on logo click
   }

   const handlesSignOut = async () => {
    await signOut();// Sign out the user
   }

  return (
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
      Open drawer
    </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
  );
}
