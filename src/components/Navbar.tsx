"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background px-6">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <Link href="/" className="text-lg font-bold">
          Movie<span className="text-primary">4u</span>
        </Link>

        {/* Navbar Desktop */}
        <nav className="hidden md:flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/movies">Movies</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Navbar Mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="md:hidden">Menu</Button>
          </SheetTrigger>
          <SheetContent side="left" aria-describedby={undefined}>
            {/* Tambahkan SheetHeader, SheetTitle & SheetDescription */}
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
              <SheetDescription>Select a page to navigate</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-4 p-6">
              <Link href="/">Home</Link>
              <Link href="/movies">Movies</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
