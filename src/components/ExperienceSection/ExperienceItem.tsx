import { SvgCalendar } from "@/icons/SvgCalendar";
import { iExperienceItem } from "@/types/types";

export function ExperienceItem({
  company,
  date,
  description,
  latest,
}: iExperienceItem) {
  return (
    <>
      <span className="absolute flex items-center justify-center size-6 bg-purple-300 rounded-full -start-3 ring-8 dark:ring-sky-700 dark:bg-purple-600">
        <SvgCalendar />
      </span>
      <div className="ml-3">
        <h3 className="flex items-center gap-3 text-lg font-semibold text-purple-500 text-balance">
          {company}
          {latest && (
            <span className="relative inline-flex h-7 overflow-hidden rounded-full dark:p-[1px] p-[1.5px] ml-8">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] bg-[conic-gradient(from_90deg_at_50%_50%,#ef4ff7_0%,#1315ff_50%,#ef4ff7_100%)]" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-full dark:bg-gray-950 bg-white/80 px-6 py-1 text-sm font-medium dark:text-gray-50  backdrop-blur-3xl">
                Latest
              </span>
            </span>
          )}
        </h3>
        <time className="block my-4 text-md font-normal leading-none text-blue-500 text-pretty dark:text-gray-500">
          {date}
        </time>
        <p className="mb-4  text-lg text-gray-600 text-pretty dark:text-gray-400">
          {description}
        </p>
      </div>
    </>
  );
}
