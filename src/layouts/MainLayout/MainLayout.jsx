import { Outlet } from "react-router-dom";
import NavBar from "../navbar/navbar";

export default function MainLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
