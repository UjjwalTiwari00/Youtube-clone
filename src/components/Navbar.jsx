import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdNotifications } from "react-icons/io";
import { PiVideoCameraFill } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { slide, SetName } from "../SliceComponents/Side_slice";
import axios from "axios";
import { SEARCH_API } from "../utils/Constans";
import { useNavigate } from "react-router-dom";
import youtubeIcon from "./assets/youtube.svg";

function Navbar() {
  const dispatch = useDispatch();
  const [inputs, SetInputs] = useState("");
  const [suggestion, SetSuggestion] = useState([]);
  const [showSuggestion, SetShowSuggestion] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => FetchData(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [inputs]);

  const handleSearchClick = (e) => {
    dispatch(SetName(inputs));
    navigate("/results?search_query=" + inputs);
  };

  const FetchData = () => {
    axios.get(SEARCH_API + inputs).then((data) => SetSuggestion(data.data[1]));
  };

  return (
    <div
      className="flex justify-between p-2 items-center fixed top-0 left-0 right-0  bg-white"
      
     
    >
      <div className=" flex justify-around w-1/6 items-center ">
        <div
          className=" hover:shadow-lg hover:bg-gray-300 p-1 rounded-full cursor-pointer"
          onClick={() => dispatch(slide())}
        >
          {" "}
          <GiHamburgerMenu size={20} />
        </div>

        <img className="w-40" src={youtubeIcon} />
      </div>

      <div>
        <div className="flex  items-center h-10 w-[32rem] rounded-lg justify-center">
          <input
            className="px-2 border-t-2 border-b-2 border-l-2 w-[32rem] h-8 rounded-l-lg border-gray-400"
            type="text"
            value={inputs}
            onChange={(e) => {
              SetInputs(e.target.value);
            }}
            onFocus={() => SetShowSuggestion(true)}
          />
          <div className="border-2 border-gray-400 h-8 w-10 items-center justify-center flex rounded-r-lg bg-slate-300 ">
            <IoIosSearch size={20} onClick={handleSearchClick}></IoIosSearch>
          </div>
        </div>

        {showSuggestion && (
          <div className="fixed bg-white w-[30rem] shadow-lg rounded-lg">
            <ul>
              {suggestion.map((sugest,index) => (
                <li key={index}
                  className="px-2 py-1 cursor-pointer"
                  onClick={() => {SetInputs(sugest)
                  SetShowSuggestion(false)
                  }}
                  
                >
                  {sugest}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className=" flex justify-around w-32 items-center mr-7">
        <div className=" hover:shadow-lg hover:bg-gray-300 p-1 rounded-full">
          <IoMdNotifications size={25} />
        </div>
        <div className=" hover:shadow-lg hover:bg-gray-300 p-1 rounded-full">
          <PiVideoCameraFill size={25} />
        </div>
        <div className=" hover:shadow-lg hover:bg-gray-300 p-1 rounded-full">
          <VscAccount size={25} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
