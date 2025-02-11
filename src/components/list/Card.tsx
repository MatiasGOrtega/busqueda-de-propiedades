import Image from "next/image";
import Link from "next/link";
import React from "react";
import Card from "@mui/material/Card";
import { CardActions, CardContent, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BedIcon from "@mui/icons-material/Bed";
import BathroomIcon from "@mui/icons-material/Bathroom";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChatIcon from "@mui/icons-material/Chat";

function CardItem({ item }) {
  return (
    <div>
      <Card className="flex items-center gap-2 p-4">
        <Link
          href={`/list/${item.id}`}
          className="flex-[2] relative h-52 hidden tablet:block"
        >
          <Image
            className="h-full object-cover rounded-lg"
            width={1260}
            height={750}
            src={item.img}
            alt="image apartment"
          />
        </Link>
        <CardContent
          sx={{ padding: 0, paddingBottom: "0 !important" }}
          className="flex-[3] flex flex-col justify-between gap-4"
        >
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            sx={{ fontWeight: "600" }}
          >
            <Link href={`/list/${item.id}`} className="hover:underline">
              {item.title}
            </Link>
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
            <LocationOnIcon />
            <span>{item.address}</span>
          </Typography>
          <Typography
            variant="subtitle2"
            className="text-xl font-light p-1 rounded bg-yellow-400 max-w-max"
          >
            $ {item.price}
          </Typography>
          <div className="flex items-center justify-between gap-2">
            <Typography
              variant="subtitle2"
              sx={{ color: "text.secondary" }}
              className="flex gap-5 text-sm"
            >
              <div className="flex items-center gap-1 bg-gray-200 p-1 rounded-md">
                <BedIcon />
                <span>{item.bedroom} dormitorios</span>
              </div>
              <div className="flex items-center gap-1 bg-gray-200 p-1 rounded-md">
                <BathroomIcon />
                <span>{item.bathroom} baños</span>
              </div>
            </Typography>
            <CardActions className="flex gap-2">
              <Link
                href={`/list/${item.id}`}
                className="rounded-md border-[1px] cursor-pointer flex items-center justify-center py-1 px-2 hover:bg-gray-200"
              >
                <BookmarkBorderIcon />
              </Link>
              <Link
                href={`/list/${item.id}`}
                className="rounded-md border-[1px] cursor-pointer flex items-center justify-center py-1 px-2 hover:bg-gray-200 transition-colors"
              >
                <ChatIcon />
              </Link>
            </CardActions>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default CardItem;
