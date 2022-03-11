function House({ house }) {
	return (
		<div>
			<div>건물이름:{house['아파트'].trim()}</div>
			<div>거래금액:{house['거래금액'].trim()}</div>
			<div>면적:{house['전용면적']}</div>
			<div>
				거래날짜:{house['년']}-{house['월']}-{house['일']}
			</div>
		</div>
	);
}
export default House;
