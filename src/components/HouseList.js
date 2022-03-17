import {
	Button,
	Card,
	CardActions,
	CardContent,
	Grid,
	Typography,
} from '@mui/material';

export default function HouseList({ houses }) {
	return (
		<Grid container>
			{houses.map((h, i) => (
				<Grid item xs={12} md={6} key={i}>
					<Card
						sx={{
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<CardContent
							sx={{
								flexGrow: 1,
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								paddingBottom: 0,
							}}
						>
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								textAlign='center'
							>
								{h['아파트']}
							</Typography>
							<Typography>{h['거래금액']}</Typography>
							<Typography sx={{ mb: 0.5 }} color='textSecondary' fontSize={1}>
								거래금액
							</Typography>
							<Typography>{h['전용면적']}</Typography>
							<Typography sx={{ mb: 0.5 }} color='textSecondary' fontSize={1}>
								전용면적
							</Typography>
							<Typography>{`${h['년']}-${h['월']}-${h['일']}`}</Typography>
							<Typography sx={{ mb: 0.5 }} color='textSecondary' fontSize={1}>
								거래일
							</Typography>
						</CardContent>
						<CardActions sx={{ alignSelf: 'center' }}>
							<Button size='small'>상세보기</Button>
						</CardActions>
					</Card>
				</Grid>
			))}
		</Grid>
	);
}
