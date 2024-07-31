"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
// import Encryption from "@/components/Encryption";
import Approach from "@/components/Approach";

import Contact from "@/components/Contact";

import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";

import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Grid />
        <RecentProjects />
        <Clients />
        {/* <Encryption /> */}
        <Experience />
        <div className="relative z-5">
          <Contact />
        </div>
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
