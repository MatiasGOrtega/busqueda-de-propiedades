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
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <ConstructionIcon />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <PetsIcon />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <AttachMoneyIcon />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <AspectRatioIcon />
              <span>80 sqft</span>
            </div>
            <div className="size">
              <BedIcon />
              <span>2 beds</span>
            </div>
            <div className="size">
              <BathroomIcon />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <SchoolIcon />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <DirectionsBusIcon />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <RestaurantIcon />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <ChatIcon />
              Send a Message
            </button>
            <button>
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
