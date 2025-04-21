import React from "react";

function Display() {
  return (
    <div>
      <div className="h-[10%] p-8">This is the header</div>
      <div className="grid grid-cols-[1fr_2fr_1fr] h-[90%]">
        <div className="bg-blue-600 p-10">1</div>
        <div className="bg-green-500">2</div>
        <div className="bg-yellow-500">3</div>
      </div>
    </div>
  );
}

export default Display;
