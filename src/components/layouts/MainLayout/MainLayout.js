import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";
import { Outlet } from "react-router-dom";

const MainLayout = (props) => {
  console.log("props", props);
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-content">
        <Outlet />
      </div>
      <Navigation />
    </div>
  );
};

export { MainLayout };
