import React from "react";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

//img
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 ">
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-sn mb-16 ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
                eos quae amet repellat inventore obcaecati adipisci ratione sunt
                fugit consequuntur.
              </p>
              <button className="btn btn-sm">View all Projects</button>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img className="group-hover:scale-125" src={Img1} alt="" />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient"> UI/UX Design</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </div>
          <div className="flex-1">2</div>
        </div>
      </div>
    </section>
  );
};

export default Work;
 