export const cities = [
	{ value: '11', title: '서울시' },
	{ value: '26', title: '부산시' },
	{ value: '27', title: '대구시' },
	{ value: '28', title: '인천시' },
	{ value: '29', title: '광주시' },
	{ value: '30', title: '대전시' },
	{ value: '31', title: '울산시' },
	{ value: '41', title: '경기도' },
	{ value: '42', title: '강원도' },
	{ value: '43', title: '충북도' },
	{ value: '44', title: '충남도' },
	{ value: '45', title: '전북도' },
	{ value: '46', title: '전남도' },
	{ value: '47', title: '경북도' },
	{ value: '50', title: '제주도' },
];
// async function parse() {
// 	let city = [];
// 	let county = [];
// 	let r = await fetch('./code.txt');
// 	let txt = await r.text();
// 	const rows = txt.split('\r\n');
// 	city = rows.map((row) => {
// 		const a = row.split('|');
// 		if (a[0]) return { value: a[0].trim(), title: a[1].trim() };
// 	});
// 	county = rows.map((row) => {
// 		const a = row.split('|');
// 		if (a[0]) return { value: a[2].trim(), title: a[3].trim() };
// 	});

// 	const cityMap = new Map();
// 	for (const character of city) {
// 		cityMap.set(JSON.stringify(character), character); // name, company가 모두 같은 객체 요소는 제외한 맵 생성
// 	}
// 	const cityUnique = [...cityMap.values()];

// 	const countyMap = new Map();
// 	for (const character of county) {
// 		countyMap.set(JSON.stringify(character), character); // name, company가 모두 같은 객체 요소는 제외한 맵 생성
// 	}
// 	const countyUnique = [...countyMap.values()];
// 	return [cityUnique, countyUnique];
// }
// export default parse;
