
import PropTypes from 'prop-types';
import  profile from '../../assets/images/profile.png'

const Header = () => {
   return (
      <header className='flex items-center justify-between p-4 mx-4 border-b-2'>
          <h1 className='text-6xl bg-green-400'>Knowledge cafe</h1>
          <img src={profile} alt="" />
      </header>
   );
};

Header.propTypes = {

};

export default Header;