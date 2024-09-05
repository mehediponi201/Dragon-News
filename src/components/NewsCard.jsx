import { NavLink } from "react-router-dom";

const NewsCard = ({ aNews }) => {
    const { title, image_url, details,_id } = aNews;
    console.log(aNews);

    return (
        <div className="card bg-base-100 w-full shadow-xl">
            <figure>
                <img
                    src={image_url}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    details.length > 400 ?
                        <p>{details.slice(0, 200)}
                            <NavLink to={`/aNews/${_id}`}><span className="text-blue-600 font-medium">see more..</span></NavLink></p>
                        :
                        <p>{details}</p>
                }
            </div>
        </div>
    );
};

export default NewsCard;