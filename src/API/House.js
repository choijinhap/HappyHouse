import axios from 'axios';
const serviceKey =
	'ACaENE9czfF4fNtrQMueeCFsAn7vX63M1cSNubEx3MrWdnNBeYQh2UGmRO7p0PE0ohxDPTTbq%2B1T4l4%2BK5SY8w%3D%3D';
export async function getAllHouseData(LAWD_CD, DEAL_YMD) {
	const url =
		'http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTrade';

	const response = await axios({
		url: `${url}?serviceKey=${serviceKey}&LAWD_CD=${LAWD_CD}&DEAL_YMD=${DEAL_YMD}`,
		responseType: 'xml',
		method: 'get',
	});
	return response;
}

export async function getHouseData(pageNo, numOfRows, LAWD_CD, DEAL_YMD) {
	const url =
		'/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev';
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
