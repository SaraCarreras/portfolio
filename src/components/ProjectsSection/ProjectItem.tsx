import { iProjectItem } from "@/types/types";
export function ProjectItem({
  title,
  description,
  preview,
  github,
  image,
  technology,
}: iProjectItem) {
  return (
    <article>
      <h3 className="text-2xl font-semibold  text-purple-500 mb-4">{title}</h3>
      <p className="text-lg mb-4 text-pretty">{description}</p>
      <a href={preview}>View</a>
      <a href={github}>Github</a>

      <ul className="flex gap-4 flew-row flex-wrap m-4">
        {technology?.map((el) => {
          return (
            <li key={el.name}>
              <span
                className={`flex gap-x-2 rounded-full items-center text-md   ${el.class} py-1 px-4 `}
              >
                <el.icon />

                {el.name}
              </span>
            </li>
          );
        })}
      </ul>
      <img
        className="rounded shadow-2xl shadow-gray dark:shadow/white"
        src={image}
        alt="project's screenshot"
      />
    </article>
  );
}
