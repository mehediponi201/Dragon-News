import { useParams } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import RightSideNav from "./RightSideNav";
import editor_1 from '../assets/editorsInsight1.png';
import editor_2 from '../assets/editorsInsight2.png';

const News = () => {
    const newsCard = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-3">
                <div className="col-span-2">
                    <h4 className="text-3xl text-center font-medium mb-5">News Card</h4>
                    {/* card details */}
                    <div className="card bg-base-100 w-full shadow-xl">
                        <figure>
                            <img
                                src={editor_1}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Digital News Consumption</h2>
                            <p>The first image illustrates the modern shift in news consumption, where people use smartphones and digital devices to stay updated. With easy access to news apps and websites, individuals can receive real-time information from around the world, reflecting the increasing reliance on technology for staying informed.</p>
                        </div>
                    </div>
                     {/* card details */}
                     <div className="card bg-base-100 w-full shadow-xl">
                        <figure>
                            <img
                                src={editor_2}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Traditional Print Media Engagement</h2>
                            <p>The second image portrays a more traditional approach, with a woman reading a physical newspaper. This reflects the enduring appeal of print media, despite the growing dominance of digital platforms. It emphasizes the tactile experience and focused engagement that newspapers continue to provide for many readers.</p>
                        </div>
                    </div>
                     {/* card details */}
                     <div className="card bg-base-100 w-full shadow-xl">
                        <figure>
                            <img
                                src={editor_1}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Embracing Digital Platforms for News</h2>
                            <p>The first image showcases the widespread use of smartphones for accessing news. In the digital age, mobile devices have become the primary source of information, offering immediate and personalized news updates at the tap of a finger, signifying a major shift towards convenience and accessibility.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;