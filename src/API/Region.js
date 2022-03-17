import axios from 'axios';
const url = 'https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes';
export async function getDosi() {
	const res = await axios({
		url: `${url}?regcode_pattern=*00000000`,
		responseType: 'json',
		method: 'get',
	});
	return res.data.regcodes;
}
export async function getGugun(string) {
	const res = await axios({
		url: `${url}?regcode_pattern=${string}*00000`,
		responseType: 'json',
		method: 'get',
	});
	return res.data.regcodes;
}
export async function getDong(string) {
	const res = await axios({
		url: `${url}?regcode_pattern=${string}*`,
		responseType: 'json',
		method: 'get',
	});
	return res.data.regcodes;
}
