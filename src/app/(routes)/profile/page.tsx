import Chat from "@/components/chat/Chat";
import List from "@/components/list/List";
import Image from "next/image";
import React from "react";

function ProfilePage() {
  return (
    <div className="flex h-[calc(100vh-96px)] p-5 laptop:p-0 flex-col overflow-y-scroll tablet:flex-row">
      <div className="flex-[3] pb-12">
        <div className="pr-0 tablet:pr-12">
          <div className="flex items-center justify-center">
            <h1 className="font-light">User Information</h1>
            <button className="py-3 px-6 bg-white cursor-pointer">
              Update Profile
            </button>
          </div>
          <div className="flex flex-col gap-5">
            <span className="flex items-center gap-5">
              Avatar:
              <Image
                width={1260}
                height={750}
                className="w-10 h-10 rounded-full object-cover"
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </span>
            <span className="flex items-center gap-5">
              Username: <b>John Doe</b>
            </span>
            <span className="flex items-center gap-5">
              E-mail: <b>john@gmail.com</b>
            </span>
          </div>
          <div className="flex items-center justify-center p-2">
            <h1 className="text-xl font-semibold">My List</h1>
            <button className="py-3 px-6 bg-white cursor-pointer">
              Create New Post
            </button>
          </div>
          <List />
          <div className="flex items-center justify-center p-2">
            <h1 className="text-xl font-semibold">Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="tablet:flex-[2] bg-yellow-100 max-h-max tablet:h-full">
        <div className="pl-4 h-full">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
