import DropDown from './components/DropDown';
import Header from './components/Header/Header';
import HouseList from './components/HouseList';
import { useEffect, useState } from 'react';
import MainLeft from './components/MainLeft';
import getRegions from './API/Region';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './css/App.css';
import Search from './components/Search';
import Footer from './components/Footer';
import Map from './components/Map';
function App() {
	const [sido, setSido] = useState();
	const [gugun, setGugun] = useState([]);
	const [dong, setDong] = useState([]);
	const [city, setCity] = useState('0');
	const [county, setCounty] = useState('0');
	const [town, setTown] = useState('0');
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
	async function onTownChange(e) {
		setTown(e.target.value);
		navigate(`/search/${e.target.value.slice(0, 5)}/${e.target.value}`);
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
		console.log(pathname.split('/'));
		if (pathname.split('/')[1] === 'search') {
			const path = pathname.split('/');
			if (path[2]) {
				setCity(path[2].slice(0, 2) + '00000000');
				setCounty(path[2] + '00000');
			}
			if (path[3]) {
				setTown(path[3]);
			}
		}
	}, [pathname]);
	return (
		<div className='App'>
			<Header setUserInfo={setUserInfo} userInfo={userInfo} />
			<div className='main_img'>
				<img src='/img/main_image.png' />
			</div>
			<Search
				sido={sido}
				city={city}
				onCityChange={onCityChange}
				county={county}
				gugun={gugun}
				onCountyChange={onCountyChange}
				dong={dong}
				town={town}
				onTownChange={onTownChange}
			/>
			<div className='main'>
				<Routes>
					<Route path='/' element={<MainLeft />} />
					<Route path='/search/:county' element={<HouseList />} />
					<Route path='/search/:county/:town' element={<HouseList />} />
				</Routes>
				<Map />
			</div>
			<Footer />
		</div>
	);
}

export default App;
