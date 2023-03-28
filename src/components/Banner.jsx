import React from "react";
//images
import Image from "../assets/avatar.svg";
//icons
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
//type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container  max-auto">
        <div className="flex flex-col gap-y-8 lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <h1 className="text-[55px] font-bold leading-[.8] lg:text-[110px]">
              DAM<span>EL</span>
            </h1>
            <div className=" mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] " >
              <span className=" text-white mr-4">I am a</span>
              <TypeAnimation sequence={[
                'Developer',
                2000,
                'Designer',
                2000,
              ]} 
              speed={50}
              className="text-accent"
              wrapper="span"
              repeat={Infinity}
              />
            </div>
              <p className="mb-8 max-w-lg mx-auto lg:mx-0">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quaerat, officia accusamus culpa nemo enim quam quas sunt nisi ipsam beatae.
              </p>
              <div className="flex max-w-max gap-x-6 items-center mb-12">
                <button className="btn btn-lg">Contact Me</button>
                <a href="#" className="text-gradient btn-link">My Portfolio</a>
              </div>
              {/* social */}
              <div className="flex text-[20px] gap-x-6 max-w-max mx-auto">
                <a href="#">
                  <FaGithub/>
                </a>
                <a href="#">
                  <FaYoutube/>
                </a>
                <a href="#">
                  <FaDribbble/>
                </a>
              </div>
          </div>

          {/* image */}
          <div>
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
