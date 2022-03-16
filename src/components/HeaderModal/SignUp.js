import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';

export default function SignUp({ style, close }) {
	const [id, setId] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
	const [tel, setTel] = useState('');
	const [idError, setIdError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [nameError, setNameError] = useState(false);
	const [addressError, setAddressError] = useState(false);
	const [telError, setTelError] = useState(false);
	const check = () => {
		const userInfos = JSON.parse(localStorage.getItem('userInfos'));

		if (id && password && name && address && tel) {
			if (userInfos) {
				for (let userInfo of userInfos) {
					if (userInfo.id === id) {
						alert('중복된 아이디입니다');
						return false;
					}
				}
			}
			if (userInfos) {
				localStorage.setItem(
					'userInfos',
					JSON.stringify([
						{ id, password, name, tel, address },
						...JSON.parse(localStorage.getItem('userInfos')),
					])
				);
			} else {
				localStorage.setItem(
					'userInfos',
					JSON.stringify([{ id, password, name, tel, address }])
				);
			}
			return true;
		}
		return false;
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		setIdError(false);
		setPasswordError(false);
		setNameError(false);
		setAddressError(false);
		setTelError(false);
		if (id === '') setIdError(true);
		if (password === '') setPasswordError(true);
		if (name === '') setNameError(true);
		if (address === '') setAddressError(true);
		if (tel === '') setTelError(true);
		console.log({
			id: data.get('id'),
			password: data.get('password'),
			name: data.get('name'),
			address: data.get('password'),
			tel: data.get('password'),
		});
		if (check()) {
			alert('회원가입되었습니다.');
			console.log(style);
			close();
		}
		return false;
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
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					회원가입
				</Typography>
				<Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								onChange={(e) => setId(e.target.value)}
								required
								fullWidth
								id='id'
								label='아이디'
								name='id'
								autoComplete='off'
								autoFocus
								error={idError}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								onChange={(e) => setPassword(e.target.value)}
								required
								fullWidth
								name='password'
								label='비밀번호'
								type='password'
								id='password'
								autoComplete='off'
								error={passwordError}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								onChange={(e) => setName(e.target.value)}
								required
								fullWidth
								name='name'
								label='이름'
								type='name'
								id='name'
								autoComplete='off'
								error={nameError}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								onChange={(e) => setAddress(e.target.value)}
								required
								fullWidth
								name='address'
								label='주소'
								type='address'
								id='address'
								autoComplete='off'
								error={addressError}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								onChange={(e) => setTel(e.target.value)}
								required
								fullWidth
								name='tel'
								label='연락처'
								type='tel'
								id='tel'
								placeholder='010-xxxx-xxxx'
								autoComplete='off'
								error={telError}
							/>
						</Grid>
					</Grid>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}
					>
						회원가입
					</Button>
					<Grid container justifyContent='flex-end'>
						<Grid item>
							<Link href='#' variant='body2'>
								이미 회원이신가요? 로그인하기
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
}
