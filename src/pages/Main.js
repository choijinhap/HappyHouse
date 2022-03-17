import { Box, Button, ButtonGroup, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getAllHouseData } from '../API/House';
import HouseList from '../components/HouseList';
import SearchSelect from '../components/SearchSelect';
const houseCnt = 6;
export default function Main() {
	const [houses, setHouses] = useState([]);
	const [page, setPage] = useState(0);

	const prevPageHandle = () => {
		setPage((cur) => cur - 1);
	};
	const nextPageHandle = () => {
		setPage((cur) => cur + 1);
	};
	console.log((houses.length - 1) / 6);
	console.log(page);
	return (
		<div>
			<SearchSelect setHouses={setHouses} setPage={setPage}></SearchSelect>
			<Grid container spacing={2} mt={1}>
				{houses.length > 0 ? (
					<>
						<Grid item xs={12} md={5} border='1px red solid'>
							<HouseList
								houses={houses.slice(houseCnt * page, houseCnt * (page + 1))}
							/>
							<ButtonGroup
								sx={{ display: 'flex', justifyContent: 'space-around' }}
							>
								{page > 0 && (
									<Button
										onClick={prevPageHandle}
										variant='contained'
										size='small'
									>
										이전
									</Button>
								)}
								{(houses.length - 1) / 6 > page + 1 > 0 && (
									<Button
										onClick={nextPageHandle}
										variant='contained'
										size='small'
									>
										다음
									</Button>
								)}
							</ButtonGroup>
						</Grid>
						<Grid item xs={12} md={7} border='1px blue solid'>
							gmap
						</Grid>
					</>
				) : (
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							flexGrow: 1,
						}}
					>
						<Typography margin={3} variant='h3' fontSize={{ xs: '2rem' }}>
							결과가 없습니다
						</Typography>
						<Typography variant='h3' fontSize={{ xs: '1.5rem' }}>
							검색 지역을 선택해주세요
						</Typography>
					</Box>
				)}
			</Grid>
		</div>
	);
}
