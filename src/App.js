import DropDown from './components/DropDown';
import Header from './components/Header/Header';
import HouseList from './components/HouseList';
import { useEffect, useState } from 'react';
import MainLeft from './components/MainLeft';
import getRegions from './API/Region';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './css/App.css';
function App() {
	const [sido, setSido] = useState();
	const [gugun, setGugun] = useState([]);
	const [dong, setDong] = useState([]);
	const [city, setCity] = useState('0');
	const [county, setCounty] = useState('0');
	const [userInfo, setUserInfo] = useState(null);
	const navigate = useNavigate();
	const { pathname } = useLocation();
	function onCityChange(e) {
		setCity(e.target.value);
	}
	async function onCountyChange(e) {
		setCounty(e.target.value);
		navigate(`/search/${e.target.value.slice(0, 5)}`);
	}

	useEffect(() => {
		async function getSido() {
			const res = await getRegions('*00000000');
			setSido(res.data.regcodes);
		}
		getSido();
	}, []);
	useEffect(() => {
		async function getGugun() {
			if (city !== '0') {
				const res = await getRegions(city.slice(0, 2) + '*00000');
				setGugun(res.data.regcodes);
			}
		}
		getGugun();
	}, [city]);
	useEffect(() => {
		async function getDong() {
			if (county !== '0') {
				const res = await getRegions(county.slice(0, 4) + '*');
				setDong(res.data.regcodes);
			}
		}
		getDong();
	}, [county]);
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
				{sido && (
					<DropDown
						head='도 / 광역시'
						selected={city}
						options={sido}
						onChange={onCityChange}
					/>
				)}
				{gugun && (
					<DropDown
						head='시 / 구 / 군'
						options={gugun
							.filter((c) => {
								return (
									city.slice(0, 2) === c.code.slice(0, 2) &&
									c.name.split(' ').length > 1
								);
							})
							.map((c) => {
								let newName = c.name.split(' ');
								newName.shift();

								return { code: c.code, name: newName.join(' ') };
							})}
						onChange={onCountyChange}
					/>
				)}
				{dong && (
					<DropDown
						head='동선택'
						options={dong
							.filter((d) => {
								return (
									county.slice(0, 5) === d.code.slice(0, 5) &&
									d.name.split(' ').length > 2
								);
							})
							.map((d) => {
								let newName = d.name.split(' ');
								newName.shift();
								newName.shift();
								return { code: d.code, name: newName.join(' ') };
							})}
						// onChange={onDongChange}
					/>
				)}
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
