import { useState } from 'react';
import '../../css/modal.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
function SignIn({ setUserInfo, style }) {
	const [id, setId] = useState('');
	const [pw, setPw] = useState('');

	function loginIdHandler(e) {
		setId(e.target.value);
	}
	function loginPwHandler(e) {
		setPw(e.target.value);
	}
	function handleSubmit(e) {
		e.preventDefault();
	}

	function loginClickHandler() {
		console.log(`id : ${id}`);
		console.log(`pw : ${pw}`);
		const userInfos = JSON.parse(localStorage.getItem('userInfos'));
		if (userInfos) {
			for (let info of userInfos) {
				if (id === info.id && pw === info.pw) {
					console.log('로그인되었습니다');
					setUserInfo(info);

					return;
				}
			}
		}
		//로그인불가
		alert('없는 아이디입니다');
	}

	return (
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
				로그인
			</Typography>
			<Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
				<TextField
					margin='normal'
					required
					fullWidth
					id='email'
					label='아이디'
					name='email'
					autoComplete='email'
					autoFocus
					onChange={loginIdHandler}
				/>
				<TextField
					margin='normal'
					required
					fullWidth
					name='password'
					label='비밀번호'
					type='password'
					id='password'
					autoComplete='current-password'
					onChange={loginPwHandler}
				/>
				<FormControlLabel
					control={<Checkbox value='remember' color='primary' />}
					label='Remember me'
				/>
				<Button
					type='submit'
					fullWidth
					variant='contained'
					sx={{ mt: 3, mb: 2 }}
					onClick={loginClickHandler}
				>
					로그인하기
				</Button>
				<Grid container>
					<Grid item xs>
						<Link href='#' variant='body2'>
							비밀번호찾기
						</Link>
					</Grid>
					<Grid item>
						<Link href='#' variant='body2'>
							{'회원가입'}
						</Link>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}

export default SignIn;
