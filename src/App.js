import "./App.css";
import Profile from "./components/Navigation/Profile/Profile";
import { Route, Routes, useMatch } from "react-router-dom";
import News from "./components/Navigation/News/News";
import Settings from "./components/Navigation/Settings/Settings";
import AuthLayout from "./components/layouts/AuthLayout/AuthLayout";
import { useLocalStorage } from "./useLocalStorage";
import { MainLayout } from "./components/layouts/MainLayout/MainLayout";
import { CSSTransition } from 'react-transition-group'

const App = (props) => {
  useLocalStorage();

  return (
    <Routes>
      <Route path="/" element={<AuthLayout />} />
      <Route element={<MainLayout />}>
        <Route path="/profile" element={<Profile />} />
        {/*<Route path="/dialogs" element={<Dialogs />} />
        <Route path="/dialogs/:id" element={<DialogPeoples />} />*/}
        <Route path="/news" element={<News />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="/signin" element={<AuthLayout />} />
      <Route path="/signup" element={<AuthLayout />} />
    </Routes>
  );
};
export default App;

/*
  const match = useMatch

  const routes = [
    {path: '/profile', Component: Profile },
    {path: '/news', Component: News },
    {path: '/settings', Component: Settings },
  ]
*/


{/*{routes.map(({path, Component}) =>
          <Route key={path} exact path={path}>
            {({match})} =>
            <CSSTransition
            timeout={1000}
            classNames={'page'}
            unmountOnExit
            in={match != null}
            >
              <Component/>
            </CSSTransition>
          </Route>
        )}*/}
