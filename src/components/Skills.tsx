export default function Skills() {
  const skills = [
    "Ästhetische Zahnheilkunde",
    "Implantate",
    "Zahnersatz",
    "Endodontie",
    "Zahnheilkunde",
    "Funktionsanalyse",
    "Zahnfüllung",
    "Kinderzahnmedizin",
    "Zähneknirschen",
  ];

  return (
    <ul
      /* text-base sm:text-base md:text-lg lg:text-lg xl:text-xl */
      className="
        flex flex-row flex-wrap justify-center
        manrope-400
        text-customGreenDark
        custom-margin-b-third
        gap-2 md:gap-4
        "
    >
      {skills.map((skill, index) => (
        /* p-2 m-1 md:p-3 md:m-2 2xl:p-4 2xl:m-3 */
        <li
          className="
            bg-customGreenExtraBright
            hover:bg-opacity-60
            rounded-md
            p-2  md:p-3 2xl:p-4 
            "
          key={index}
        >
          {skill}
        </li>
      ))}
    </ul>
  );
}
