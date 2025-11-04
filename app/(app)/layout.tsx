"use client";
import React, { useState } from "react";
import { useClerk, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import {LogOutIcon, MenuIcon, LayoutDashboardIcon, Share2Icon, UploadCloudIcon, ImageIcon, UploadIcon} from "lucide-react"
import Link from "next/link";

const SidebarItems = [
  { href: "/home", icon: LayoutDashboardIcon, label: "Home Page"},
  { href: "/social-share", icon: Share2Icon, label: "Social Share"},
  { href: "/video-upload", icon: UploadIcon, label: "Video Upload"},
]

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
   const { user } = useUser();// Get the current user
   console.log("Current User:", user);

   const handleLogoClick = () => {
    router.push("/")// Navigate to the home page on logo click
   }

   const handleSignOut = async () => {
    await signOut();// Sign out the user
   }

  return (
    <div className="drawer lg:drawer-open">
      <input 
         id="sidebar-drawer" 
         type="checkbox" 
         className="drawer-toggle"
         checked={sidebarOpen}// Bind the checkbox to sidebarOpen state
         onChange={() => setsidebarOpen(!sidebarOpen)}// Toggle sidebar visibility on change 
         />
      <div className="drawer-content flex flex-col ">
          {/*Navbar */}
          <header className="w-full bg-base-200">
            <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex-none lg-hidden">
                 <label htmlFor="sidebar-drawer"
                  className="btn btn-square btn-ghost drawer-button">
                    <MenuIcon/>
                 </label>
               </div>
               <div className="flex-1">
                  <Link href="/" onClick={handleLogoClick}>
                   <div className="btn btn-ghost normal-case text-2xl font-bold tracking-tight cursor-pointer">
                    Cloudinary Showcase
                   </div>
                  </Link>
               </div>
               <div className="flex-none flex items-center space-x-4 ">
                {user && (
                  <>
                   <div className="avatar">
                     <div>
                      <img src={user.imageUrl} alt={
                        user.username || user.emailAddresses[0].emailAddress
                      } 
                      className="w-10 rounded-full"
                       />
                     </div>
                   </div>
                   <span className="text-sm truncate max-w-xs lg:max-w-md">
                    {user.username || user.emailAddresses[0].emailAddress}
                   </span>
                    <button className="btn btn-ghost btn-circle" 
                      onClick={handleSignOut}
                      >
                      <LogOutIcon className="h-6 w-6"/>
                    </button>
                  </>
                )}

               </div>
            </div>
          </header>
          {/* Paige content */}
          <main className="flex-grow">
              <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 my-8">
                {children} {/*Render the child components here */}
              </div>
          </main>
      </div>
      <div className="drawer-side">
          <label htmlFor="side-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <aside className="bg-base-200 w-64 h-full flex flex-col">
              <div className="flex items-center justify-center py-4">
                <ImageIcon className="w-10 h-10 text-primary"/>
              </div>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
              {SidebarItems.map((item)=>(
                <li key={item.href} className="mb-2">
                  <Link
                   href={item.href}
                   className={`flex items-center space-x-4 px-4 py-2 rounded-lg ${pathname === item.href ? "bg-primary text-white" : "hover:bg-base-300"}`}
                   onClick={()=>{setsidebarOpen(false)}}
                   >
                    <item.icon className="w-6 h-6"/>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))} 
          </ul>  
            {user && (
              <div className="p-4">
                <button
                 onClick={handleSignOut}
                 className="btn btn-outline btn-error w-full"
                 >
                  <LogOutIcon className="w-5 h-5 mr-2"/>
                  Sign Out
                </button>
              </div>
            )}
          </aside>
      </div>
   </div>
  );
}
