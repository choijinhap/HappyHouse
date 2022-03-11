import { useEffect } from 'react';
import getData from '../API/HouseDetail';
function Test() {
	useEffect(() => {
		getData(1, 10, 11110, 202101);
	}, []);
	return <div></div>;
}
export default Test;
