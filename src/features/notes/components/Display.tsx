import { Outlet } from "react-router-dom";

function Display() {
  return (
    <div className="flex flex-1 w-full">
      <Outlet />
    </div>
  );
}

export default Display;
