import { Link } from 'react-router-dom';
import '../../css/Nav.css';
function Nav() {
	return (
		<div className='nav'>
			<div className='logo'>
				<Link to='/'>
					<img src='/img/logo.png' />
				</Link>
			</div>
			<nav className='menu'>
				<div>공지 사항</div>
				<div>오늘의 뉴스</div>
				<div>주변 탐방</div>
				<div>관심 지역 설정</div>
				<div>관심 지역 둘러보기</div>
			</nav>
		</div>
	);
}
export default Nav;
