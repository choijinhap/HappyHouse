import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getHouseData from '../API/HouseDetail';
import House from './House';
import '../css/HouseList.css';
function HouseList() {
	const { county } = useParams();
	const [page, setPage] = useState(1);
	const [houses, setHouses] = useState();
	useEffect(() => {
		async function fetchData() {
			const res = await getHouseData(page, 10, county, 202101);
			setHouses(res.data.response.body.items.item);
		}
		fetchData();
	}, [county, page]);

	return (
		<div className='house-list'>
			<h1>거래 정보</h1>
			<hr></hr>
			<div className='house-infos'>
				{houses &&
					houses.map((element, i) => {
						return <House house={element} key={i} />;
					})}
			</div>
			<div className='buttons'>
				<div
					onClick={() => {
						setPage((cur) => (cur > 0 ? cur - 1 : cur));
					}}
				>
					이전
				</div>
				<div
					onClick={() => {
						setPage((cur) => (houses.length === 10 ? cur + 1 : cur));
					}}
				>
					다음
				</div>
			</div>
		</div>
	);
}
export default HouseList;
