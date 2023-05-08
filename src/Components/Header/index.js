import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Header = () => {
    const navigate = useNavigate();
    const [cookie, setCookie, removeCookie] = useCookies(['accessToken']);

    const handleLogout = async () => {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/signout`, {userCredentials: true});
        if(response){
            removeCookie('accessToken');
            navigate('/login')
        }
    }

    return (
        <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#"><h2 >Bulk Email Tool</h2></a>
          </div>
        </div>
      </nav>
    )
}

export default Header;