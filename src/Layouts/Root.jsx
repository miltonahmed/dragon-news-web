import { Outlet } from "react-router";
import Header from "../Components/Header/Header";

const Root = () => {
  return (
    <div>
      <Header/>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default Root