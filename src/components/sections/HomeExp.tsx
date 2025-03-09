import React, { ReactNode } from "react";
import { SectionTitle } from "../common/SectionTitle";
import Separator from "../common/Separator";
import { HBAgency } from "../icons";
import { timelineExp } from "@/const";
import { experienceData } from "@/interfaces";

const Experience = ({
  company,
  position,
  ages,
  tasks,
  icon,
}: experienceData) => (
  <div className="first:border-t-0 border-t-2 py-6 font-regular">
    <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center ">
      <div className="flex gap-3 text-base md:text-xl lg:text-3xl items-center font-medium">
        <div>{position}</div>
        <div>{icon}</div>
        <div>
          at <span className=""> {company}</span>
        </div>
      </div>
      <div className="mt-2 text-sm md:text-xl lg:text-3xl">{ages}</div>
    </div>
    <div className="mt-2 text-sm md:text-lg w-full md:w-2/3  text-gray-800">
      {tasks}
    </div>
  </div>
);

const ExperienceMobile = ({
  company,
  position,
  ages,
  tasks,
  icon,
}: experienceData) => (
  <div className="first:border-t-0 border-t-2 py-4">
    <div className="flex gap-2 ">
      <div>{icon}</div>
      <div className="">
        <div className="text-3xl font-semibold">{company}</div>
        <div className="text-xl">{position}</div>
      </div>
    </div>
    <div className="text-lg mt-2">{ages}</div>

    <div className=" w-full md:w-4/5 mt-4">{tasks}</div>
  </div>
);

export default function HomeExp() {
  return (
    <section id="experience" className="my-20 md:my-44">
      <SectionTitle text="Work Experience" />
      <Separator />
      <div className="flex flex-col gap-4 ">
        {timelineExp.map((experience, index) => (
          <Experience key={experience.company} {...experience} />
        ))}
      </div>
    </section>
  );
}
