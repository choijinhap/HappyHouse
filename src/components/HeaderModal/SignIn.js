import {
	Avatar,
	Box,
	Button,
	Checkbox,
	Container,
	CssBaseline,
	FormControlLabel,
	Grid,
	Link,
	TextField,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
export default function SignIn({ setUserInfo, style, close }) {
	const [id, setId] = useState('');
	const [password, setPassword] = useState('');

	function loginIdHandler(e) {
		setId(e.target.value);
	}
	function loginpasswordHandler(e) {
		setPassword(e.target.value);
	}
	function handleSubmit(e) {
		e.preventDefault();
	}
	function check() {
		const userInfos = JSON.parse(localStorage.getItem('userInfos'));
		for (let info of userInfos) {
			if (id === info.id && password === info.password) return true;
		}
	}
	function loginClickHandler() {
		console.log(`id : ${id}`);
		console.log(`password : ${password}`);

		if (check()) {
			console.log('로그인되었습니다');
			//수정 : 로그인되면 로그인처리
			// setUserInfo();
			close();
			return;
		}
		//로그인불가
		alert('없는 아이디입니다');
	}

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
						// autoComplete='email'
						autoComplete='off'
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
						// autoComplete='current-password'
						autoComplete='off'
						onChange={loginpasswordHandler}
					/>
					{/* 추가 기능 : 유저 로그인 정보 저장기능 */}
					{/* 
				<FormControlLabel
					control={<Checkbox value='remember' color='primary' />}
					label='Remember me'
				/> */}
					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}
						onClick={loginClickHandler}
					>
						로그인하기
					</Button>
					{/* 추가 기능 : 구현안됨 */}
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
		</Container>
	);
}
