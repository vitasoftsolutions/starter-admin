import React from "react";
import { NavLink } from "react-router-dom";

export const sidebarItemsGenerator = (items) => {
  const sidebarItems = items.reduce((acc, item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        icon: React.createElement(item.icon, {
          className: "size-5",
        }),
        label: (
          <NavLink
            className={({ isActive }) => (isActive ? "font-bold" : "")}
            to={`/${item.path}`}
          >
            {item.name}
          </NavLink>
        ),
      });
    }

    if (item.children) {
      acc.push({
        key: item.name,
        icon: React.createElement(item.icon, {
          className: "size-5",
        }),
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          icon: React.createElement(child.icon, {
            className: "size-5",
          }),
          label: (
            <NavLink
              className={({ isActive }) => (isActive ? "font-bold" : "")}
              to={`/${child.path}`}
            >
              {child.name}
            </NavLink>
          ),
        })),
      });
    }

    return acc;
  }, []);

  return sidebarItems;
};
