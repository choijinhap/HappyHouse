import React, { Component, useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Geocode from 'react-geocode';

const containerStyle = {
	width: '50%',
	height: '700px',
	zIndex: 0,
};

function Gmap({ houses }) {
	Geocode.setApiKey('AIzaSyCKCaHeSqYGKMk2y4cP0C8RQT1ya8aHTn4');
	Geocode.setRegion('kr');
	Geocode.setLanguage('ko');
	const [center, setCenter] = useState({ lat: 37.56, lng: 126.97 });
	const [coords, setCoords] = useState([]);
	const getAdd = async (currentAddr) => {
		return Geocode.fromAddress(currentAddr)
			.then((response) => {
				const { lat, lng } = response.results[0].geometry.location;
				return { lat, lng };
			})
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		async function fetchData() {
			const tmp = [];
			for (let h of houses) {
				const data = await getAdd(`${h['법정동']} ${h['도로명']} ${h['지번']}`);
				tmp.push(data);
			}
			setCoords(tmp);
			setCenter(tmp[0]);
		}
		if (houses && houses.length > 0) {
			fetchData();
		}
	}, [houses]);
	return (
		<LoadScript googleMapsApiKey='AIzaSyCKCaHeSqYGKMk2y4cP0C8RQT1ya8aHTn4'>
			<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={20}>
				{coords.length > 0 &&
					houses.length > 0 &&
					houses.length === coords.length &&
					coords.map((coord, i) => {
						// console.log(houses[i]);
						// console.log(coord);
						return (
							<Marker
								position={{ lat: coord.lat, lng: coord.lng }}
								key={i}
								clickable={true}
								label={`${houses[i]['아파트']}  ${houses[i]['거래금액']}`}
							/>
						);
					})}
			</GoogleMap>
		</LoadScript>
	);
}

export default Gmap;
