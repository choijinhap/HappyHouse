import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from '@mui/material';

export default function HouseList() {
	return (
		<Grid container>
			<Grid item xs={12} md={6}>
				<Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
					<CardContent sx={{ flexGrow: 1 }}>
						<Typography gutterBottom variant='h5' component='h2'>
							아파트이름
						</Typography>
						<Typography>
							This is a media card. You can use this section to describe the
							content.
						</Typography>
					</CardContent>
					<CardActions>
						<Button size='small'>View</Button>
						<Button size='small'>Edit</Button>
					</CardActions>
				</Card>
			</Grid>
			<Grid item xs={12} md={6}>
				<Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
					<CardContent sx={{ flexGrow: 1 }}>
						<Typography gutterBottom variant='h5' component='h2'>
							아파트이름
						</Typography>
						<Typography>
							This is a media card. You can use this section to describe the
							content.
						</Typography>
					</CardContent>
					<CardActions>
						<Button size='small'>View</Button>
						<Button size='small'>Edit</Button>
					</CardActions>
				</Card>
			</Grid>
		</Grid>
	);
}
