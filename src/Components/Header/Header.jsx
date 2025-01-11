
import PropTypes from 'prop-types';
import  profile from '../../assets/images/profile.png'

const Header = () => {
   return (
      <header className='flex items-center justify-between p-4 mx-auto border-b-2 max-w-7xl '>
          <h1 className='text-4xl'>Knowledge cafe</h1>
          <img src={profile} alt="" />
      </header>
   );
};

Header.propTypes = {

};

export default Header;