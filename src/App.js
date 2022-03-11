import DropDown from './components/DropDown';
import { cities } from './API/Cities';
import { counties } from './API/Counties';
import Header from './components/Header/Header';
import HouseList from './components/HouseList';
import { useEffect, useState } from 'react';
import getHouseData from './API/HouseDetail';
import MainLeft from './components/MainLeft';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './css/App.css';
function App() {
	const [city, setCity] = useState('0');
	const [county, setCounty] = useState('0');
	const [userInfo, setUserInfo] = useState();
	const [houses, setHouses] = useState();
	function onCityChange(e) {
		setCity(e.target.value);
	}
	function onCountyChange(e) {
		setCounty(e.target.value);
	}
	useEffect(() => {
		getHouseData(2, 10, county, 202101).then((res) => {
			setHouses(res.data.response.body.items.item);
			console.log(res.data.response.body.items.item);
		});
	}, [county]);
	return (
		<BrowserRouter>
			<div className='App'>
				<Header setUserInfo={setUserInfo} userInfo={userInfo} />
				<div className='main_img'>
					<img src='./img/main_image.png' />
				</div>
				<div className='search'>
					<DropDown head='도/광역시' options={cities} onChange={onCityChange} />
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
						{/* <Route
							path='/search'
							element={<HouseList houses={houses} }/>}
						></Route> */}
					</Routes>
					<div className='map'>
						<img src='./img/map.png' alt='' />
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
		</BrowserRouter>
	);
}

export default App;
