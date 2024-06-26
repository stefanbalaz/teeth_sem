export default function Navigation() {
  const navigationList = ["Link 1", "Link 2", "Link 3"];

  return (
    <ul
      className="
      flex flex-col lg:flex-row lg:items-center
      manrope-400
      gap-2 lg:gap-6
      lg:mb-0 lg:mt-0
      "
    >
      {navigationList.map((item, index) => (
        <a
          key={index}
          href="#"
          target="_blank"
          className="
            hover:text-customGreenDark
            transition-colors
            whitespace-nowrap"
        >
          {item}
        </a>
      ))}
    </ul>
  );
}
