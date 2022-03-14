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
				<a>공지 사항</a>
				<a>오늘의 뉴스</a>
				<a>주변 탐방</a>
				<a>관심 지역 설정</a>
				<a>관심 지역 둘러보기</a>
			</nav>
		</div>
	);
}
export default Nav;
