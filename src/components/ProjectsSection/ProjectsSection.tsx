import { SvgCode } from "@/icons/SvgCode";
import { SectionContainer } from "@/components/SectionContainer";
import { ProjectItem } from "./ProjectItem";
import { PROJECTS_DATA } from "@/components/ProjectsSection/ProjectsData";

const ProjectsSection = () => {
  return (
    <div className="">
      <SectionContainer id="projects">
        <h2 className="text-3xl font-semibold flex gap-x-2 items-center pb-8">
          <SvgCode />
          Projects
        </h2>
        <div className="flex flex-col gap-y-16">
          {PROJECTS_DATA.map((project) => {
            return (
              <article
                className="flex flex-col space-x-0 space-y-8 md:flex-row md:space-x-8 md:space-y-0"
                key={project.title}
              >
                <ProjectItem {...project} />
              </article>
            );
          })}
        </div>
      </SectionContainer>
    </div>
  );
};
export default ProjectsSection;
