import { SkillsProps } from "../types";

export default function Skills({ skills }: SkillsProps) {
  return (
    <ul
      className="
        flex flex-row flex-wrap justify-center
        manrope-400
        text-customGreenDark
        custom-margin-b-third
        gap-2 md:gap-4
      "
    >
      {skills?.map((skill, index) => (
        <li
          className="
            bg-customGreenExtraBright
            hover:bg-opacity-60
            rounded-md
            p-0  md:p-0 2xl:p-0
          "
          key={index}
        >
          {skill.label ? (
            skill.link ? (
              <a
                href={skill.link}
                className="
        block
        h-full
        w-full
        p-2 md:p-3 2xl:p-4
        rounded-md
        text-center
        bg-customGreenExtraBright
        hover:bg-opacity-60
      "
                target="_blank"
              >
                {skill.label}
              </a>
            ) : (
              <div
                className="
        block
        h-full
        w-full
        p-2 md:p-3 2xl:p-4
        rounded-md
        text-center
        bg-customGreenExtraBright
        hover:bg-opacity-60
      "
              >
                {skill.label}
              </div>
            )
          ) : null}
        </li>
      ))}
    </ul>
  );
}
