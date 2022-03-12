import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getHouseData from '../API/HouseDetail';
import House from './House';
import '../css/HouseList.css';
function HouseList({ setShowedHouses, showedhouses }) {
	const MAX_LIST_NUM = 10;
	const { county, town } = useParams();
	const [page, setPage] = useState(0);
	const [houses, setHouses] = useState([]);
	const [filteredHouses, setFilteredHouses] = useState([]);
	// const [showedhouses, setShowedHouses] = useState();

	useEffect(() => {
		async function fetchData() {
			const res = await getHouseData('', '100000', county, 202101);
			setHouses(res.data.response.body.items.item);
			const sh = [];
			for (let i = 0; i < MAX_LIST_NUM; i++) {
				sh.push(res.data.response.body.items.item[i]);
			}
			setShowedHouses(sh);
		}
		fetchData();
	}, [county]);
	function pageChange(p) {
		setPage((cur) => {
			if (
				cur + p >= 0 &&
				(town
					? (cur + p) * MAX_LIST_NUM < filteredHouses.length
					: (cur + p) * MAX_LIST_NUM < houses.length)
			) {
				console.log(cur + p);
				const sh = [];
				for (
					let i = (cur + p) * MAX_LIST_NUM;
					i < (cur + p + 1) * MAX_LIST_NUM;
					i++
				) {
					if (town) {
						if (filteredHouses[i]) sh.push(filteredHouses[i]);
					} else if (houses[i]) sh.push(houses[i]);
				}
				setShowedHouses(sh);
				return cur + p;
			} else return cur;
		});
	}
	useEffect(() => {
		if (town) {
			const filtered = houses.filter((house) => {
				return house['법정동읍면동코드'].toString() === town.slice(5, 10);
			});
			setFilteredHouses(filtered);
			const sh = [];
			for (let i = 0; i < MAX_LIST_NUM; i++) {
				if (filtered[i]) sh.push(filtered[i]);
			}
			setShowedHouses(sh);
		}
	}, [town]);
	return (
		<div className='house-list'>
			<h1>거래 정보</h1>
			<hr></hr>
			<div className='house-infos'>
				{showedhouses &&
					showedhouses.map((element, i) => {
						// console.log(element);
						return <House house={element} key={i} />;
					})}
			</div>
			<div className='buttons'>
				<div
					onClick={() => {
						pageChange(-1);
					}}
				>
					이전
				</div>
				<div
					onClick={() => {
						pageChange(1);
					}}
				>
					다음
				</div>
			</div>
		</div>
	);
}
export default HouseList;
