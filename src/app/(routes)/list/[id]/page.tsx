import React from "react";
import Image from "next/image";
import { singlePostData, userData } from "@/lib/dummydata";
import SliderImagesEstate from "@/components/SliderImagesEstate";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import ConstructionIcon from "@mui/icons-material/Construction";
import PetsIcon from "@mui/icons-material/Pets";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import BathroomIcon from "@mui/icons-material/Bathroom";
import SchoolIcon from "@mui/icons-material/School";
import BedIcon from "@mui/icons-material/Bed";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ChatIcon from "@mui/icons-material/Chat";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import Map from "@/components/map/DynamicMap";

function DetailEstatePage() {
  return (
    <div className="flex h-[calc(100vh-96px)] flex-col tablet:flex-row">
      <div className="flex-none h-full tablet:overflow-y-auto tablet:flex-[3] tablet:max-h-max tablet:mb-12">
        <div className="pr-0 tablet:pr-5 laptop:pr-12">
          <SliderImagesEstate images={singlePostData.images} />
          <div className="mt-12">
            <div className="flex justify-between flex-col mobile:flex-row gap-5">
              <div className="flex flex-col gap-5">
                <h1 className="text-2xl font-normal">{singlePostData.title}</h1>
                <div className="flex gap-1 items-center text-sm text-gray-500">
                  <LocationOnIcon />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="text-xl font-bold p-1 rounded bg-yellow-400 max-w-max">
                  $ {singlePostData.price}
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-5 py-5 px-12 rounded-lg font-semibold bg-gray-100 mobile:py-0">
                <Image
                  className="w-12 h-12 rounded-full object-cover"
                  width={1260}
                  height={750}
                  src={userData.img}
                  alt=""
                />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="mt-12 text-gray-500 leading-5">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[2] bg-yellow-100">
        <div className="p-5 flex flex-col gap-2 tablet:px-5 tablet:py-0">
          <p className="font-bold text-xl gap-2">General</p>
          <div className="flex flex-col gap-5 py-5 px-2 bg-white rounded-lg">
            <div className="flex items-center gap-2">
              <ConstructionIcon />
              <div>
                <span className="font-bold">Utilities</span>
                <p className="text-sm">Renter is responsible</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <PetsIcon />
              <div>
                <span className="font-bold">Pet Policy</span>
                <p className="text-sm">Pets Allowed</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <AttachMoneyIcon />
              <div>
                <span className="font-bold">Property Fees</span>
                <p className="text-sm">
                  Must have 3x the rent in total household income
                </p>
              </div>
            </div>
          </div>
          <p className="font-bold text-xl">Room Sizes</p>
          <div className="flex justify-between text-xs laptop:text-sm gap-2">
            <div className="flex items-center gap-2 bg-white p-2 rounded">
              <AspectRatioIcon />
              <span>80 sqft</span>
            </div>
            <div className="flex items-center gap-2 bg-white p-2 rounded">
              <BedIcon />
              <span>2 beds</span>
            </div>
            <div className="flex items-center gap-2 bg-white p-2 rounded">
              <BathroomIcon />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="font-bold text-xl gap-2">Nearby Places</p>
          <div className="flex justify-between py-5 px-2 bg-white rounded-lg">
            <div className="flex items-center gap-2">
              <SchoolIcon />
              <div>
                <span className="font-bold">School</span>
                <p className="text-sm">250m away</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <DirectionsBusIcon />
              <div>
                <span className="font-bold">Bus Stop</span>
                <p className="text-sm">100m away</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <RestaurantIcon />
              <div>
                <span className="font-bold">Restaurant</span>
                <p className="text-sm">200m away</p>
              </div>
            </div>
          </div>
          <p className="font-bold text-xl gap-2">Location</p>
          <div className="w-full h-52 z-0">
            <Map items={[singlePostData]} />
          </div>
          <div className="flex justify-between">
            <button className="p-5 flex items-center gap-1 bg-white rounded cursor-pointer">
              <ChatIcon />
              Send a Message
            </button>
            <button className="p-5 flex items-center gap-1 bg-white rounded cursor-pointer">
              <BookmarkBorderIcon />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailEstatePage;
