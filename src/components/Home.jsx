import { useState } from "react";
import BreakingNews from "./BreakingNews";
import Header from "./Header";
import LeftSideNav from "./LeftSideNav";
import Navbar from "./Navbar";
import RightSideNav from "./RightSideNav";
import NewsCard from "./NewsCard";

const Home = () => {
    const [news,setNews] = useState([]);
    fetch('news.json')
    .then(res => res.json())
    .then(data => setNews(data))
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
            {/* left side nav */}
             <div>
               <h4 className="text-xl">
                <LeftSideNav></LeftSideNav>
               </h4>
             </div>
             <div className="col-span-2">
                <h4 className="text-3xl text-center mb-5">Dragon News Home</h4>
                {
                    news.map(aNews => <NewsCard key={aNews._id} aNews={aNews}></NewsCard>)
                }
             </div>
             {/* Right side nav */}
             <div>
                <h4 className="text-xl">
                    <RightSideNav></RightSideNav>
                </h4>
             </div>
            </div>
        </div>
    );
};

export default Home;