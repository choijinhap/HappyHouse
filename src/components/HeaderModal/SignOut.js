import { Box, Button, Container, CssBaseline, Typography } from '@mui/material';

export default function SignOut({ close, setUserInfo, style }) {
	const signOutHandler = () => {
		setUserInfo(null);
		close();
	};
	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					...style,
				}}
			>
				<Typography component='h1' variant='h5'>
					정말 로그아웃 하시겠습니까?
				</Typography>
				<Button
					// type='submit'
					fullWidth
					variant='contained'
					sx={{ mt: 3, mb: 2 }}
					onClick={signOutHandler}
					color='secondary'
				>
					로그아웃
				</Button>
			</Box>
		</Container>
	);
}
