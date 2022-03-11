import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getHouseData from '../API/HouseDetail';
import House from './House';
function HouseList() {
	const { county } = useParams();
	const [houses, setHouses] = useState();
	useEffect(() => {
		async function fetchData() {
			const res = await getHouseData(2, 10, county, 202101);
			setHouses(res.data.response.body.items.item);
		}
		fetchData();
	}, [county]);
	return (
		<div>
			{houses &&
				houses.map((element, i) => {
					return <House house={element} key={i} />;
				})}
		</div>
	);
}
export default HouseList;
