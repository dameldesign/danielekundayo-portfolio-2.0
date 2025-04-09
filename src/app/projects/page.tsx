import ProjectsSection from "@/components/sections/projects-section";
import GradientBackground from "@/components/utils/gradient-background";

const ProjectsPage = () => {
    return (
        <>
          <GradientBackground>

        <main className="relative flex flex-col items-center justify-center px-0 md:px-4 pt-20 pb-40">
            <ProjectsSection />
        </main>
          </GradientBackground>
        </>
    )
};

export default ProjectsPage;
