import React from "react";
import Tag from "@/components/Tag";

async function Tags() {
  const res = await fetch(' https://qevent-backend.labs.crio.do/tags');
  const data = await res.json();

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-wrap gap-4 justify-center w-3/4">
        {data.map((item, index) => (
          <Tag text={item.name} key={index} ></Tag>
        ))}
      </div>
    </div>
  );
}

export default Tags;
