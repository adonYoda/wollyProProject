import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Profile from "./components/Customer/Index";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { State } from "./types";
import { homePage, profilePage } from "./utils/constants";

function App() {

const token = useSelector<State, string|undefined|null>(state=> state.token)

  return (
    <div>
      <Routes>
        <Route path={profilePage} element = {token? <Profile/>:<Link to = {homePage}/>}/>
      </Routes>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
