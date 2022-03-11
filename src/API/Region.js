import axios from 'axios';
async function getRegions(regcode) {
	const url = 'https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes';
	try {
		const response = await axios({
			url: `${url}?regcode_pattern=${regcode}`,
			responseType: 'json',
			method: 'get',
		});
		// console.log(response);
		return response;
	} catch (error) {
		//응답 실패
		console.error(error);
	}
}
export default getRegions;
