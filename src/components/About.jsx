import React from "react";
import CountUp from "react-countup"
// intersection observer
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div>
          {/* img */}
          <div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top">
            img
          </div>
          {/* text */}
          <div className="">
            <h2>About me.</h2>
            <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quisquam, velit?
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A nemo in
              vero dolorum exercitationem voluptaunde ea placeat corporis eos.
              Aliquam, est!
            </p>
            {/* stats */}
            <div className="flex">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={6}/>  :null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">Years of <br/> Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      About
    </section>
  );
};

export default About;
