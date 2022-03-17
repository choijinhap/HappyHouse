import {
	Box,
	Button,
	Container,
	CssBaseline,
	Divider,
	List,
	ListItem,
	ListItemText,
	TextField,
	Typography,
} from '@mui/material';
import { useState } from 'react';

export default function UserInfo({ close, userInfo, style }) {
	const [isModify, setIsModify] = useState(false);
	const [id, setId] = useState(userInfo.id);
	const [password, setPassword] = useState(userInfo.password);
	const [name, setName] = useState(userInfo.name);
	const [address, setAddress] = useState(userInfo.address);
	const [tel, setTel] = useState(userInfo.tel);
	const [idError, setIdError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [nameError, setNameError] = useState(false);
	const [addressError, setAddressError] = useState(false);
	const [telError, setTelError] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const check = () => {
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
		const userInfos = JSON.parse(localStorage.getItem('userInfos'));

		if (id && password && name && address && tel) {
			for (let info of userInfos) {
				if (info.id === id && userInfo.id !== id) {
					setIdError(true);
					alert('중복된 아이디입니다');
					return false;
				}
			}
			return true;
		}
		return false;
	};
	const modifyClickHandler = () => {
		console.log('수정');
		setIsModify(true);
	};
	const modifyCompleteClickHandler = () => {
		if (check()) {
			localStorage.setItem(
				'userInfos',
				JSON.stringify([
					{ id, password, name, tel, address },
					...JSON.parse(localStorage.getItem('userInfos')).filter(
						(i) => i.id !== userInfo.id
					),
				])
			);
			console.log('수정완료');
			setIsModify(false);
		}
	};
	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<Box
				component='form'
				onSubmit={handleSubmit}
				noValidate
				sx={{
					mt: 1,
					display: 'flex',
					flexDirection: 'column',
					...style,
				}}
			>
				<Typography component='h1' variant='h5' sx={{ alignSelf: 'center' }}>
					회원정보
				</Typography>
				<List component='div' aria-label='mailbox folders'>
					{!isModify ? (
						<>
							<ListItem divider>
								<ListItemText primary='아이디 ' />
								<ListItemText sx={{ justifySelf: 'center' }} primary={id} />
							</ListItem>
							<ListItem divider>
								<ListItemText primary='비밀번호' />
								<ListItemText
									sx={{ justifySelf: 'center' }}
									primary={password}
								/>
							</ListItem>
							<ListItem divider>
								<ListItemText primary='이름  ' />
								<ListItemText sx={{ justifySelf: 'center' }} primary={name} />
							</ListItem>
							<ListItem divider>
								<ListItemText primary='주소  ' />
								<ListItemText primary={address} />
							</ListItem>
							<ListItem divider>
								<ListItemText primary='전화번호' />
								<ListItemText primary={tel} />
							</ListItem>
						</>
					) : (
						<>
							<TextField
								margin='normal'
								required
								fullWidth
								id='email'
								label='아이디'
								name='email'
								// autoComplete='email'
								autoComplete='off'
								variant='standard'
								value={id}
								onChange={(e) => setId(e.target.value)}
								error={idError}
							/>
							<TextField
								margin='normal'
								required
								fullWidth
								id='password'
								label='비밀번호'
								name='password'
								// autoComplete='email'
								autoComplete='off'
								variant='standard'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								error={passwordError}
							/>
							<TextField
								margin='normal'
								required
								fullWidth
								id='name'
								label='이름'
								name='name'
								// autoComplete='email'
								autoComplete='off'
								variant='standard'
								value={name}
								onChange={(e) => setName(e.target.value)}
								error={nameError}
							/>
							<TextField
								margin='normal'
								required
								fullWidth
								id='address'
								label='주소'
								name='address'
								// autoComplete='email'
								autoComplete='off'
								variant='standard'
								value={address}
								onChange={(e) => setAddress(e.target.value)}
								error={addressError}
							/>
							<TextField
								margin='normal'
								required
								fullWidth
								id='tel'
								label='전화번호'
								name='tel'
								// autoComplete='email'
								autoComplete='off'
								variant='standard'
								value={tel}
								onChange={(e) => setTel(e.target.value)}
								error={telError}
								// onChange={loginIdHandler}
							/>
						</>
					)}
				</List>
				{!isModify ? (
					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}
						onClick={modifyClickHandler}
					>
						수정
					</Button>
				) : (
					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}
						onClick={modifyCompleteClickHandler}
					>
						수정완료
					</Button>
				)}
			</Box>
		</Container>
	);
}
