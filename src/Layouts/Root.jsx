import { Outlet } from "react-router";
import Header from "../Components/Header/Header";

const Root = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="left"></section>
        <section className="main">
          <Outlet />
        </section>
        <section className="right"></section>
      </main>
    </div>
  );
}

export default Root