import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Navigation/Profile/Profile";
import {Route, Routes, useMatch} from "react-router-dom";
import Dialogs from "./components/Navigation/Dialogs/Dialogs";
import News from "./components/Navigation/News/News";
import Settings from "./components/Navigation/Settings/Settings";
import Registration from "./components/Header/Registration/Registration";
import DialogPeoples from "./components/Navigation/Dialogs/DialogPeoples/DialogPeoples";


const App = (props) => {
    let match = useMatch("/registration");
    return (
        <div className={!match && 'app-wrapper'}>
            {!match && (
                <>
                    <Header/>
                    <Navigation/>
                </>
            )}
            <div className='app-content'>
                <Routes>
                    <Route path='/profile'
                           element={<Profile/>}/>
                    <Route path='/dialogs'
                           element={<Dialogs/>}/>
                    <Route path='/dialogs/:id'
                           element={<DialogPeoples/>}/>
                    <Route path='/news'
                           element={<News/>}/>
                    <Route path='/settings'
                           element={<Settings/>}/>
                    <Route path='/registration'
                           element={<Registration/>}/>
                </Routes>
            </div>
        </div>
    );
}
export default (App);