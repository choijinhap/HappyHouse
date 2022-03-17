import { Grid } from '@mui/material';
import { useState } from 'react';
import HouseList from '../components/HouseList';
import SearchSelect from '../components/SearchSelect';

export default function Main() {
	return (
		<div>
			<SearchSelect></SearchSelect>
			<Grid container spacing={2} mt={1}>
				<Grid item xs={12} md={5} border='1px red solid'>
					<HouseList />
				</Grid>
				<Grid item xs={12} md={7} border='1px blue solid'>
					gmap
				</Grid>
			</Grid>
		</div>
	);
}
