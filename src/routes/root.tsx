import { Outlet } from "react-router-dom";
import { Header } from "../pages/Header/Header";

import '../global.css'
import { Footer } from "../pages/Footer/Footer";


export function Root() {
  return (
    <>
      <Header />

      <section className="container">
        <div className="layout">
          <Outlet />
        </div>
      </section>
      <Footer />
    </>
  )
}