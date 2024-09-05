import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h4 className="text-center items-center mt-20 font-semibold text-4xl">Opps,there is no content yet...!!!
            <NavLink to='/'><button className="btn btn-outline btn-accent">click me</button></NavLink></h4>
        </div>
    );
};

export default ErrorPage;