import React from "react";

const DataItem = [
  {
    title: "Game Information",
    dropdownItems: [
      { path: "./heroes", label: "Heroes" },
      { path: "./roles", label: "Roles" },
      { path: "./emblem", label: "Emblem" }
    ]
  },
  {
    title: "Tournament",
    dropdownItems: [
      { path: "./mpl", label: "MPL" },
      { path: "./msc", label: "MSC" },
      { path: "./m-series", label: "M-Series" }
    ]
  },
  {
    title: "Support",
    dropdownItems: [
      { path: "./spec", label: "Spec" },
      { path: "./help", label: "Help" }
    ]
  },
  {
    title: "More About Us",
    dropdownItems: [
      { path: "./instagram", label: "Instagram" },
      { path: "./facebook", label: "Facebook" },
      { path: "./youtube", label: "Youtube" }
    ]
  }
];

export default DataItem;
