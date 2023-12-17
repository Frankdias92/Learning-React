import { Outlet } from "react-router-dom";
import { Header } from "../pages/Header";

import '../global.css'


export function Root() {
  return (
    <section className="wrapper">
      <Header />

      <div className="layout">
        <Outlet />
      </div>
    </section>


  )
}