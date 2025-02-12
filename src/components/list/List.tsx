import { listData } from "@/lib/dummydata";
import React from "react";
import CardItem from "./Card";

function List() {
  return (
    <div className="flex flex-col gap-12">
      {listData.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default List;
