import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex ml-20">
            <button className="btn btn-accent">Latest</button>
            <Marquee pauseOnClick={true} speed={100}>
                I can be a React component, multiple React components, or just some text. This is an online journal.You can find all types of news in 24 hours...
            </Marquee>
        </div>
    );
};

export default BreakingNews;