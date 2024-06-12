import React from "react";
import Button from "./Button";

const btnList = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Cricket",
  "News",
  "Bollywood",
  "Computer",
  "Scene",
  "Mixes",
  "History",
  "programming",
  "Hollywood",
];
function Button_list() {
  return (
    <div className="flex ml-[52px] pl-0 pr-0 pt-0 bg-white pb-2 justify-center items-center ">
      {btnList.map((name,index) => (
        <Button key={index} names={name} />
      ))}
    </div>
  );
}

export default Button_list;
