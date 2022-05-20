import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Navigation/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./components/Navigation/Dialogs/Dialogs";
import News from "./components/Navigation/News/News";
import Music from "./components/Navigation/Music/Music";
import Settings from "./components/Navigation/Settings/Settings";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navigation/>
                <div className='app-content'>
                    <Routes>
                        <Route path='/profile'
                               element={<Profile post={props.state.ProfilePage.post}
                                                 description={props.state.ProfilePage.description}
                                                 addPost={props.addPost}/>}/>
                        <Route path='/dialogs'
                               element={<Dialogs dialogItem={props.state.DialogsPage.dialogItem}
                                                 messageItem={props.state.DialogsPage.messageItem}/>}/>
                        <Route path='/news'
                               element={<News/>}/>
                        <Route path='/music'
                               element={<Music/>}/>
                        <Route path='/settings'
                               element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;