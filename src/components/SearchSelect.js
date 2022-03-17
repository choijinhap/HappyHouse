import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useEffect, useState } from 'react';
import { getAllHouseData } from '../API/House';
import { getDong, getDosi, getGugun } from '../API/Region';

export default function SearchSelect({ setHouses, setPage }) {
	const [dosi, setDosi] = useState([]);
	const [gugun, setGugun] = useState([]);
	const [dong, setDong] = useState([]);
	const [dosiSelected, setDosiSelected] = useState('');
	const [gugunSelected, setGuGunSelected] = useState('');
	const [dongSelected, setDongSelected] = useState('');
	const [dongNameSelected, setDongNameSelected] = useState('');
	const dosiHandleChange = (e) => {
		setDosiSelected(e.target.value);
	};
	const gugunHandleChange = (e) => {
		setGuGunSelected(e.target.value);
	};
	const dongHandleChange = (e) => {
		setDongSelected(e.target.value);
	};
	const getHouses = async (e) => {
		setDongNameSelected(e.target.name);
		const res = await getAllHouseData(gugunSelected.slice(0, 5), '201912');
		setPage(0);
		setHouses(
			res.data.response.body.items.item.filter(
				(v) => v['법정동'].trim() === e.target.getAttribute('name')
			)
		);
	};
	useEffect(() => {
		async function fetch() {
			setDosi(await getDosi());
		}
		fetch();
	}, []);
	useEffect(() => {
		async function fetch() {
			setGugun(await getGugun(dosiSelected.slice(0, 2)));
		}
		if (dosiSelected) {
			fetch();
		}
	}, [dosiSelected]);
	useEffect(() => {
		async function fetch() {
			setDong(await getDong(gugunSelected.slice(0, 4)));
		}
		if (gugunSelected) {
			fetch();
		}
	}, [gugunSelected]);
	return (
		<Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
			<FormControl sx={{ m: 2, minWidth: 150 }}>
				<InputLabel id='demo-simple-select-label'>도/광역시</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={dosiSelected}
					label='Age'
					onChange={dosiHandleChange}
				>
					{dosi.map((d) => (
						<MenuItem key={d.code} value={d.code}>
							{d.name.split(' ')[d.name.split(' ').length - 1]}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl sx={{ m: 2, minWidth: 150 }}>
				<InputLabel id='demo-simple-select-label'>시/구/군</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={gugunSelected}
					label='Age'
					onChange={gugunHandleChange}
				>
					{gugun.map((d) => (
						<MenuItem key={d.code} value={d.code}>
							{d.name.split(' ')[d.name.split(' ').length - 1]}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl sx={{ m: 2, minWidth: 150 }}>
				<InputLabel id='demo-simple-select-label'>동/면/리</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={dongSelected}
					label='Age'
					name={dongNameSelected}
					onChange={dongHandleChange}
				>
					{dong.map((d) => (
						// <MenuItem key={d.code} value={d.code}>
						<MenuItem
							key={d.code}
							value={d.code}
							name={d.name.split(' ')[d.name.split(' ').length - 1]}
							onClick={getHouses}
						>
							{d.name.split(' ')[d.name.split(' ').length - 1]}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
}
