import { RiGoogleFill } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import qZone_1 from '../assets/qZone1.png';
import qZone_2 from '../assets/qZone2.png';
import qZone_3 from '../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            {/* Login with */}
            <h4 className="text-3xl font-medium">Login With</h4>
            <div className="mt-2 pt-3 space-y-3">
                <a className="btn btn-outline flex">
                    <RiGoogleFill></RiGoogleFill>
                    <span>Login with Google</span>
                </a>
                <a className="btn btn-outline flex mt-3">
                    <SiGithub></SiGithub>
                    <span>Login with Github</span>
                </a>
            </div>
            {/* Find us on */}
            <h4 className="text-3xl font-semibold mt-4">Find us on</h4>
            <div className="mt-3 pt-3">
                <a className="btn btn-outline flex rounded-r-lg">
                    <MdOutlineFacebook></MdOutlineFacebook>
                    <span>Facebook</span>
                </a>
                <a className="btn btn-outline flex rounded-r-lg">
                    <FaTwitter></FaTwitter>
                    <span>Twitter</span>
                </a> 
                <a className="btn btn-outline flex rounded-b-lg">
                    <FaInstagram></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>
            {/* Q-Zone */}
            <h4 className="text-3xl font-semibold mt-4 pt-3">Q-Zone</h4>
            <div className="card bg-base-100 w-full shadow-xl items-center mx-auto pt-4">
                <figure>
                <img src={qZone_1} alt="" />
                </figure>
            </div>
            <div className="card bg-base-100 w-full shadow-xl items-center mx-auto pt-4">
                <figure>
                <img src={qZone_2} alt="" />
                </figure>
            </div>
            <div className="card bg-base-100 w-full shadow-xl items-center mx-auto pt-4">
                <figure>
                <img src={qZone_3} alt="" />
                </figure>
            </div>
        </div>
    );
};

export default RightSideNav;