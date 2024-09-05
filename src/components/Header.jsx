import logo from '../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto mt-3' src={logo} alt="" />
            <p className='font-medium'>Journalism Without Fear or Favour</p>
            <p className='text-3xl'>{moment().format('LLLL')}</p>
        </div>
    );
};

export default Header;