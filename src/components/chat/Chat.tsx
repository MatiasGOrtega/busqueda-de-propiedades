"use client";
import Image from "next/image";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="h-full flex flex-col">
      <div className="flex-[1] flex flex-col gap-5 overflow-y-scroll">
        <h1 className="font-light">Messages</h1>
        <div className="bg-white p-5 rounded-lg flex items-center gap-5 cursor-pointer">
          <Image
            width={1260}
            height={750}
            className="w-10 h-10 rounded-full object-cover"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span className="font-bold">John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="bg-white p-5 rounded-lg flex items-center gap-5 cursor-pointer">
          <Image
            width={1260}
            height={750}
            className="w-10 h-10 rounded-full object-cover"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span className="font-bold">John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="bg-white p-5 rounded-lg flex items-center gap-5 cursor-pointer">
          <Image
            width={1260}
            height={750}
            className="w-10 h-10 rounded-full object-cover"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span className="font-bold">John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="bg-white p-5 rounded-lg flex items-center gap-5 cursor-pointer">
          <Image
            width={1260}
            height={750}
            className="w-10 h-10 rounded-full object-cover"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span className="font-bold">John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="bg-white p-5 rounded-lg flex items-center gap-5 cursor-pointer">
          <Image
            width={1260}
            height={750}
            className="w-10 h-10 rounded-full object-cover"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span className="font-bold">John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="bg-white p-5 rounded-lg flex items-center gap-5 cursor-pointer">
          <Image
            width={1260}
            height={750}
            className="w-10 h-10 rounded-full object-cover"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span className="font-bold">John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      {chat && (
        <div className="flex-[1] bg-white flex flex-col justify-between">
          <div className="bg-yellow-400 p-5 font-bold flex items-center justify-between">
            <div className="flex items-center gap-5">
              <Image
                width={1260}
                height={750}
                className="w-10 h-10 rounded-full object-cover"
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              John Doe
            </div>
            <span className="cursor-pointer" onClick={() => setChat(null)}>
              <CloseIcon className="text-white" />
            </span>
          </div>
          <div className="h-80 overflow-y-scroll flex flex-col gap-5 p-5">
            <div className="h-80 p-5 flex flex-col">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="text-xs text-gray-400">1 hour ago</span>
            </div>
            <div className="h-80 p-5 flex flex-col self-end text-right">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="text-xs text-gray-400">1 hour ago</span>
            </div>
            <div className="h-80 p-5 flex flex-col">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="text-xs text-gray-400">1 hour ago</span>
            </div>
            <div className="h-80 p-5 flex flex-col self-end text-right">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="text-xs text-gray-400">1 hour ago</span>
            </div>
            <div className="h-80 p-5 flex flex-col">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="text-xs text-gray-400">1 hour ago</span>
            </div>
            <div className="h-80 p-5 flex flex-col self-end text-right">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="text-xs text-gray-400">1 hour ago</span>
            </div>
            <div className="h-80 p-5 flex flex-col">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="text-xs text-gray-400">1 hour ago</span>
            </div>
            <div className="h-80 p-5 flex flex-col self-end text-right">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="text-xs text-gray-400">1 hour ago</span>
            </div>
            <div className="h-80 p-5 flex flex-col">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="text-xs text-gray-400">1 hour ago</span>
            </div>
            <div className="h-80 p-5 flex flex-col self-end text-right">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="text-xs text-gray-400">1 hour ago</span>
            </div>
          </div>
          <div className="border-t-2 h-14 flex items-center justify-between">
            <textarea className="flex-[3] resize-none"></textarea>
            <button className="flex-[1] bg-yellow-500 h-full cursor-pointer">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
