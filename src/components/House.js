import '../css/House.css';
function House({ house }) {
	return (
		<div className='house-info'>
			<h2>{house['아파트'].trim()}</h2>
			<h4>거래금액:{house['거래금액'].trim()}</h4>
			<h4>면적:{house['전용면적']}</h4>
			<p>
				거래날짜:{house['년']}-{house['월']}-{house['일']}
			</p>
			<p>{house['법정동']}</p>
			<hr />
		</div>
	);
}
export default House;
