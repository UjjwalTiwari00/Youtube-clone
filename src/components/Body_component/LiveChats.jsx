import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, addNewMessage } from "../../SliceComponents/ChatSlice";
import { generateRandomName, MakeRandomId } from "../../utils/helper";
import { IoSendSharp } from "react-icons/io5";

function LiveChats() {
  const dispatch = useDispatch();
  const [messageSent, SetmessageSent] = useState("");

  const ChatMessage = useSelector((state) => state.chat.Message);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          Message: MakeRandomId(20),
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, [messageSent]);

  function sendmessage() {
    dispatch(addNewMessage({
      name: "Ujjwal Tiwari",
      Message: messageSent,
    }))
    SetmessageSent("")
  }

  return (
    <div className="w-full">
      <div className="w-full h-[550px] ml-2 p-2 border border-black bg-slate-200 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {ChatMessage.map((chats) => (
          <ChatMessages name={chats.name} message={chats.Message} />
        ))}
      </div>
      <div className="ml-2 p-1 flex ">
        <input
          type="text"
          className="border border-black w-11/12 p-1 rounded-md"
          value={messageSent}
          onChange={(e) => {
            SetmessageSent(e.target.value);
          }}
        ></input>
        <button
          onClick={() => sendmessage()}
          className="mr-1 bg-slate-200 p-1 rounded-lg"
        >
          <IoSendSharp size={25} />
        </button>
      </div>
    </div>
  );
}

export default LiveChats;
