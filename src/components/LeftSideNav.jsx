import { useState } from "react";
import { NavLink } from "react-router-dom";
import pic_1 from '../assets/1.png';
import pic_2 from '../assets/2.png';
import pic_3 from '../assets/3.png';
import moment from 'moment';

const LeftSideNav = () => {
    const [category, setCategory] = useState([]);
    fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    return (
        <div>
            <h4 className="text-3xl">All Category</h4>
            {
                category.map(categories =>
                    <NavLink className='block text-lg font-mediu ml-5 mt-4' key={categories.id}>{categories.name}</NavLink>)
            }
            <div className="mt-4">
                <div className="card bg-base-100 w-86 shadow-xl">
                    <figure>
                        <img src={pic_1}/>
                    </figure>
                    <div className="card-body">
                        <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                        <small className="ml-6">Sports, <span>{moment().format('LL')}</span></small>
                    </div>
                </div>
                <div className="card bg-base-100 w-86 shadow-xl">
                    <figure>
                        <img src={pic_2}/>
                    </figure>
                    <div className="card-body">
                        <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                        <small className="ml-6">Sports, <span>{moment().format('LL')}</span></small>
                    </div>
                </div>
                <div className="card bg-base-100 w-86 shadow-xl">
                    <figure>
                        <img src={pic_3}/>
                    </figure>
                    <div className="card-body">
                        <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                        <small className="ml-6">Sports, <span>{moment().format('LL')}</span></small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;