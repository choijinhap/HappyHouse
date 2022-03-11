import House from './House';
function HouseList({ houses }) {
	if (houses) {
		houses.forEach((e) => {
			console.log(e);
		});
	}
	return (
		<div>
			{houses.map((element, i) => {
				return <House house={element} key={i} />;
			})}
		</div>
	);
}
export default HouseList;
