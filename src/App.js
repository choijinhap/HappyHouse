import DropDown from './components/DropDown';
import { cities } from './API/Cities';
import { counties } from './API/Counties';
import Header from './components/Header/Header';
import HouseList from './components/HouseList';
import { useEffect, useState } from 'react';
import getHouseData from './API/HouseDetail';
import MainLeft from './components/MainLeft';
import {
	BrowserRouter,
	Route,
	Routes,
	Link,
	useNavigate,
	useLocation,
} from 'react-router-dom';
import './css/App.css';
function App() {
	const [city, setCity] = useState('0');
	const [userInfo, setUserInfo] = useState(null);
	const navigate = useNavigate();
	const { pathname } = useLocation();
	function onCityChange(e) {
		setCity(e.target.value);
	}
	async function onCountyChange(e) {
		const county = e.target.value;
		navigate(`/search/${county}`);
	}
	useEffect(() => {
		if (pathname === '/') setCity('0');
	}, [pathname]);
	return (
		<div className='App'>
			<Header setUserInfo={setUserInfo} userInfo={userInfo} />
			<div className='main_img'>
				<img src='/img/main_image.png' />
			</div>
			<div className='search'>
				<DropDown
					head='도/광역시'
					selected={city}
					options={cities}
					onChange={onCityChange}
				/>
				<DropDown
					head='시/구/군'
					options={counties.filter((county) => {
						return county.value.slice(0, 2) === city;
					})}
					onChange={onCountyChange}
				/>
			</div>
			<div className='main'>
				<Routes>
					<Route path='/' element={<MainLeft />} />
					<Route path='/search/:county' element={<HouseList />} />
				</Routes>
				<div className='map'>
					<img
						src='/img/map.png'
						alt=''
						style={{ width: '600px', height: '800px' }}
					/>
				</div>
			</div>
			<div className='footer'>
				<div className='contact'>
					<div className='member'>
						<div>김우건</div>
						<div>rladnrjs123@gmail.com</div>
					</div>
					<div className='member'>
						<div>최진합</div>
						<div>wlsgkq123@gmail.com</div>
					</div>
				</div>
				<p>Copyright by SSAFY All rights reserved.</p>
			</div>
		</div>
	);
}

export default App;
