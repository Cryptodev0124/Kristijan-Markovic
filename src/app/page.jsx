"use client";

import Cnsole from "console-art-x";
import { motion } from "framer-motion";
import Social from "@/components/Social";
import Transmission from "@/components/Transmission";
import Animation from "@/components/Animation";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <Cnsole />
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 p-20">
        <div className="h-1/2 lg:h-full lg:w-5/12 flex justify-center items-center">
          <div className="deneme"></div>
        </div>
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            Blockchain Developer <br />
            <span className="md:text-5xl">
              <Animation />
            </span>
          </h1>

          <p className="md:text-xl">
            Welcome to my portfolio, where innovation and creativity
            converge. A creative person with solid design and development expertise. 
            I build strong smart contracts, defi 1.0, defi 2.0, dapps and readymade websites.
          </p>
          {/* <Social /> */}
          <Transmission />
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
