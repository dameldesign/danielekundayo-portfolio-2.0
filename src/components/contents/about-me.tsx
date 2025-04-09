import AnimationContainer from "../utils/animation-container";

const AboutMe = () => {
  return (
    <div className="w-full relative pt-10 pb-20 z-40">
      <AnimationContainer
        animation="slide-up"
        className="flex items-center justify-center overflow-hidden w-full mx-auto"
      >
        <div className="w-full">
          <h2 className="text-2xl lg:text-3xl font-medium text-left w-full">
            About Me
          </h2>
        </div>
      </AnimationContainer>
      <AnimationContainer
        animation="slide-up"
        className="flex items-center justify-center overflow-hidden w-full mx-auto pt-10"
      >
        <div className="w-full flex items-center justify-center">
          <p className="text-base md:text-lg text-justify w-full">
           I’m a results-driven Frontend and React Native Developer
            with a passion for crafting seamless, user-friendly digital
            experiences. With over three years of experience, I specialize in
            building responsive web applications using React and developing
            cross-platform mobile apps with React Native. My approach combines
            clean, efficient code with intuitive design, ensuring every project
            is both functional and visually compelling. Beyond coding, I stay
            ahead of the curve by continuously learning and exploring the latest
            frontend technologies. I thrive in collaborative environments,
            working closely with designers, developers, and product teams to
            bring innovative ideas to life. Whether optimizing performance,
            enhancing UI/UX, or solving complex development challenges, I’m
            committed to delivering high-quality, scalable solutions. Let’s
            build something exceptional together! 🚀
          </p>
        </div>
      </AnimationContainer>
    </div>
  );
};

export default AboutMe;
