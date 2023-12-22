import { Outlet } from "react-router-dom";
import { Header } from "../pages/layout/Header";

import '../global.css'


export function Root() {
  return (
    <section className="container">
      <Header />

      <div className="layout">
        <Outlet />
      </div>
    </section>
  )
}