import App from './App.js';
import Profile from './Profile.js';
import MiniGame from './MiniGame.js';
import News from './News.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//index.js --> Routes.js --> App.js

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App /> } />  
                <Route path="/profile"  element={ <Profile/> } />
                <Route path="/minigame" element={ <MiniGame/>} />
                <Route path="/news" element={ <News/> } />
             </Routes>     
        </BrowserRouter>
    )
}

export default Router;