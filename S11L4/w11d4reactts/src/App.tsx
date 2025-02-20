import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import MainNews from "./components/MainNews";
// import MyArticles from "./components/MyArticles";
import MyNavBar from "./components/MyNavBar";
import MyHomePage from "./components/MyHomePage";
import MyArticles from "./components/MyArticles";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path="/" element={<MyHomePage />} />
          <Route path="/articles" element={<MyArticles />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
