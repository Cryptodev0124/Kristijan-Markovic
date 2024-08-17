"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { PiProjectorScreen } from "react-icons/pi";

const items = [
  {
    id: 1,
    title: "Degen Fund",
    desc: "Degen.Fund is a platform that provides analytics and insights for cryptocurrency markets, with a particular focus on DeFi (Decentralized Finance) and degenerate trading activities. It typically offers various tools and metrics for tracking price movements, token liquidity, and other relevant data for traders looking to make high-risk, high-reward trades in the DeFi space.",
    img: "/degen.png",
    // link: "https://github.com/MehmetBozkir/React-PizzaShop-Website",
    demo: "https://degen.fund/",
  },
  {
    id: 2,
    title: "MEXC Frontend Bot",
    desc: "This is a frontend bot for MEXC Future Trading. Users can choose trading pair and options like BUY LONG, BUY SHORT, SELL LONG and SELL SHORT. Users can create and close orders with 4 percentage packages. And they can reverse and close all orders by clicking a button.",
    img: "/mexcbot.png",
    // link: "https://github.com/MehmetBozkir/React-interview-app",
    demo: "https://mexcbot.onrender.com/",
  },
  {
    id: 3,
    title: "TONIX App",
    desc: "Discover the revolutionary Mine-To-Earn app built on Telegram! Experience limitless opportunities for cloud mining Toncoin. Our infrastructure, powered by TON blockchain, ensures optimized transactions and reduced transfer fees. Be among the pioneers in earning with Tonix! Complete missions, invite friends, rent additional mining power to earn even more. Don't miss the opportunity to increase your income and strive for financial independence with us! ",
    img: "/tonix.png",
    // link: "https://github.com/MehmetBozkir/React_Zustand_CartTesting",
    demo: "https://t.me/Tonix_Mining_Bot",
  },
  {
    id: 4,
    title: "DOGUNI",
    desc: "In the ever-evolving landscape of cryptocurrencies, Dogunicoin emerges as a distinctive and innovative token, drawing inspiration from the beloved Shiba Inu-themed meme coin universe while introducing a new dimension.",
    img: "/doguni.png",
    // link: "https://github.com/MehmetBozkir/React-TypeScript-Example",
    demo: "https://ico.doguni.xyz/",
  },
  {
    id: 5,
    title: "BONK Swap",
    desc: "BonkSwap.io gained attention in the community, especially around the time when the Bonk (BONK) token, a meme coin similar to Dogecoin or Shiba Inu, became popular within the Solana community.",
    img: "/bonk.png",
    // link: "https://github.com/MehmetBozkir/React-eCommorce-Website",
    demo: "https://www.bonkswap.io/stake",
  },
  {
    id: 6,
    title: "Level2 App",
    desc: "Level 2 is a marketplace for transformative influencer marketing. We connect brands with creators using our technology with 1000+ variables.Brands post campaigns; Level 2 matches them with the right creators. We manage negotiations, payments, and campaign details for a smooth, all-inclusive, process.",
    img: "/level2.png",
    // link: "https://github.com/MehmetBozkir/React_Todo_App",
    demo: "https://www.level2app.com/",
  },
];

function Card() {
  return (
    <div className="grid grid-cols-2 gap-4 max-w-prose ">
      {items.map((item) => (
        <motion.div key={item.id} className="flex">
          <div className="card shadow-xl m-2 bg-opacity-20 bg-white">
            <figure>
              <img src={item.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">{item.title}</h2>
              <p className="text-white">{item.desc}</p>
              <div className="card-actions justify-center">
                {/* <Link href={item.link} target="_blank">
                  <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg ring-1 ring-black bg-black text-white bg-opacity-60 hover:scale-[1.15] font-semibold rounded-full flex">
                    Github <FaGithub className="text-xl" />
                  </button>
                </Link> */}
                <Link href={item.demo} target="_blank">
                  <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-white text-white bg-opacity-40 hover:scale-[1.15] font-semibold rounded-full flex">
                    Demo <PiProjectorScreen className="text-xl" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Card;
