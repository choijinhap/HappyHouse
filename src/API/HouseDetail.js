import axios from 'axios';
async function getHouseData(pageNo, numOfRows, LAWD_CD, DEAL_YMD) {
	const url =
		'/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev';
	const serviceKey =
		'JGiaV30rSZ7miR4%2F8JtMoxDGqD8Hx%2BDLHJyrOhAKB31vbSuqUNdJwaCDXdaJAIGfrgfD5YYqcGxnYfmO7%2BvT6Q%3D%3D';
	try {
		const response = await axios({
			url: `${url}?serviceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=${numOfRows}&LAWD_CD=${LAWD_CD}&DEAL_YMD=${DEAL_YMD}`,
			responseType: 'xml',
			method: 'get',
		});
		// console.log(response);
        return response;
	} catch (error) {
		//응답 실패
		console.error(error);
	}
}
export default getHouseData;
