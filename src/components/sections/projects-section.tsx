import ProjectCards from "../contents/project-cards";
import AnimationContainer from "../utils/animation-container";
import Heading from "../utils/heading";
import Wrapper from "../utils/wrapper";

const ProjectSection = () => {
  return (
    <Wrapper>
      <div className="flex flex-col items-start w-full mt-0 lg:mt-8">
        <Heading title="Projects" />

        <AnimationContainer className="w-full flex flex-col gap-5 mb-8">
          <p className="text-base text-justify lg:leading-8 text-foreground/80">
            Here’s a collection of my work, where I’ve transformed ideas into
            functional and scalable solutions. From dynamic web applications to
            cross-platform mobile experiences, these projects showcase my
            expertise in building innovative products using modern web and
            mobile technologies.
          </p>
        </AnimationContainer>

        <ProjectCards />
      </div>
    </Wrapper>
  );
};

export default ProjectSection;
