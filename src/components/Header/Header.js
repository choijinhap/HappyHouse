import Top from './Top';
import Nav from './Nav';
import '../../css/Top.css'
function Header({ setUserInfo, userInfo }) {
	return (
		<header>
				<Top setUserInfo={setUserInfo} userInfo={userInfo} />		
                <Nav/>
		</header>
	);
}
export default Header;
