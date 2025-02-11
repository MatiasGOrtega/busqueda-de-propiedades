import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Marker, Popup } from "react-leaflet";

function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup className="w-52">
        <div className="flex flex-row gap-1">
          <Image
            width={800}
            height={500}
            src={item.img}
            alt={`Imagen de ${item.title}`}
            className="rounded-md object-cover w-16 h-12"
          />
          <div className="flex flex-col justify-between">
            <Link href={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
