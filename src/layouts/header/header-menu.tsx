import Link from "next/link";
import React from "react";
import menu_data from "@/data/menu-data";

export default function HeaderMenu() {
  return (
    <ul>
      {menu_data.map((item, i) => (
        <li
          key={i}
          className={`${
            item.drop_down
              ? "has-dropdown"
              : item.mega_menu
              ? "has-dropdown has-mega-menu"
              : ""
          }`}
        >
          <Link href={item.link}>
            {item.title}
          </Link>

          {item.drop_down && (
            <ul className="tp-submenu">
              {item.dropdown_menus &&
                item.dropdown_menus.map((drop_m, j) => (
                  <li key={j}>
                    <Link href={drop_m.link}>
                      {drop_m.title}
                    </Link>
                  </li>
                ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
