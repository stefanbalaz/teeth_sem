import { NavigationProps } from "../types";

export default function Navigation({ navigationList }: NavigationProps) {
  return (
    <ul
      className="
        flex flex-col lg:flex-row lg:items-center
        manrope-400
        gap-2 lg:gap-6
        lg:mb-0 lg:mt-0
      "
    >
      {navigationList?.map((item) => (
        <li key={item.id}>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              hover:text-customGreenDark
              transition-colors
              whitespace-nowrap
            "
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
