import { Outlet } from "react-router-dom";
import { Header } from "../pages/Header/Header";

import '../global.css'
import './root.css'
import { Footer } from "../pages/Footer/Footer";


export function Root() {
  return (
    <div className="root" >
      <Header />
      <div className="wrapper-container">
        <section className="container">
          <div className="layout">
            <Outlet />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}