import { Outlet } from "react-router-dom";
import { Header } from "../pages/Header";

import '../global.css'


export function Root() {
  return (
    <>
      <Header />

      <div className="layout">
        <Outlet />
      </div>
    </>


  )
}