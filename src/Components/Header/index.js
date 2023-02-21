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
            <a className="navbar-brand" href="#"><h2>Bulk Email Tool</h2></a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
          
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="/register"><span className="glyphicon glyphicon-user"></span> Register</a></li>
            <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
            <div className="nav navbar-nav navbar-right">
            <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
      </nav>
    )
}

export default Header;