import React from "react";
import { listData } from "@/lib/dummydata";
import Filter from "@/components/list/Filter";
import CardItem from "@/components/list/Card";
import Map from "@/components/map/DynamicMap";



function ListPage() {
  const data = listData;

  return (
    <div className="flex h-[calc(100vh-96px)]">
      <div className="flex-[3] flex flex-col gap-5">
        <Filter />
        <div className="overflow-y-scroll p-0 laptop:pr-12 pb-12 flex flex-col gap-5">
          {data.map((item) => (
            <CardItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="flex-[2] hidden h-full bg-gray-400 laptop:block">
        <Map items={data} />
      </div>
    </div>
  );
}

export default ListPage;
