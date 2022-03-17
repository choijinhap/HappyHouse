import {
	AppBar,
	Avatar,
	Button,
	Container,
	CssBaseline,
	IconButton,
	Menu,
	MenuItem,
	Modal,
	Toolbar,
	Tooltip,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { forwardRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignIn from './HeaderModal/SignIn';
import SignUp from './HeaderModal/SignUp';
import SignOut from './HeaderModal/SignOut';
import UserInfo from './HeaderModal/UserInfo';

const pages = [
	{ name: '공지사항', link: 'notice' },
	{ name: '오늘의 뉴스', link: 'news' },
];
const settingsNotLogined = [
	{ name: '로그인', menu: 'signIn' },
	{ name: '회원가입', menu: 'signUp' },
];
const settingsLogined = [
	{ name: '로그아웃', menu: 'signOut' },
	{ name: '유저정보', menu: 'userInfo' },
];
const modalStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};
export default function Layout({ children }) {
	const [anchorElUser, setAnchorElUser] = useState(null);
	const [anchorElNav, setAnchorElNav] = useState(null);
	const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
	const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
	const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);
	const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);
	const [userInfo, setUserInfo] = useState(null);

	const settings = userInfo ? settingsLogined : settingsNotLogined;
	const navigate = useNavigate();

	const closeModal = () => {
		setIsSignInModalOpen(false);
		setIsSignUpModalOpen(false);
		setIsSignOutModalOpen(false);
		setIsUserInfoModalOpen(false);
	};
	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = (link) => {
		setAnchorElNav(null);
		navigate(link);
	};
	const handleCloseUserMenu = (menu) => {
		setAnchorElUser(null);
		if (menu === 'signIn') {
			setIsSignInModalOpen(true);
		}
		if (menu === 'signUp') {
			setIsSignUpModalOpen(true);
		}
		if (menu === 'signOut') {
			setIsSignOutModalOpen(true);
		}
		if (menu === 'userInfo') {
			setIsUserInfoModalOpen(true);
		}
	};
	const MySignIn = forwardRef((props, ref) => (
		<SignIn
			role='Box'
			close={closeModal}
			setUserInfo={setUserInfo}
			setIsSignUpModalOpen={setIsSignUpModalOpen}
			{...props}
		/>
	));
	const MySignUp = forwardRef((props, ref) => (
		<SignUp
			role='Box'
			close={closeModal}
			setIsSignInModalOpen={setIsSignInModalOpen}
			{...props}
		/>
	));
	const MySignOut = forwardRef((props, ref) => (
		<SignOut
			role='Box'
			close={closeModal}
			setUserInfo={setUserInfo}
			{...props}
		/>
	));
	const MyUserInfo = forwardRef((props, ref) => (
		<UserInfo role='Box' close={closeModal} userInfo={userInfo} {...props} />
	));
	return (
		<Container component='main' maxWidth='lg'>
			<CssBaseline />
			<AppBar position='static'>
				<Container maxWidth='xl'>
					<Toolbar disableGutters>
						<Link to='/' style={{ textDecoration: `none`, color: `white` }}>
							<Typography
								variant='h6'
								noWrap
								component='div'
								sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
							>
								Home
							</Typography>
						</Link>
						<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size='large'
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleOpenNavMenu}
								color='inherit'
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' },
								}}
							>
								{pages.map((page) => (
									<MenuItem
										key={page.name}
										onClick={() => handleCloseNavMenu(page.link)}
									>
										<Typography textAlign='center'>{page.link}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
						<Link to='/' style={{ textDecoration: `none`, color: `white` }}>
							<Typography
								variant='h6'
								noWrap
								component='div'
								sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
							>
								Home
							</Typography>
						</Link>
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							{pages.map((page) => (
								<Button
									key={page.name}
									onClick={() => handleCloseNavMenu(page.link)}
									sx={{ my: 2, color: 'white', display: 'block' }}
								>
									{page.name}
								</Button>
							))}
						</Box>

						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title='Open settings'>
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
									{userInfo ? (
										<Avatar
											alt={userInfo.name}
											src='/static/images/avatar/2.jpg'
										/>
									) : (
										<Avatar src='/broken-image.jpg' />
									)}
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: '45px' }}
								id='menu-appbar'
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								{settings.map((setting) => {
									return (
										<MenuItem
											key={setting.name}
											onClick={() => handleCloseUserMenu(setting.menu)}
										>
											<Typography textAlign='center'>{setting.name}</Typography>
										</MenuItem>
									);
								})}
							</Menu>
						</Box>
					</Toolbar>
				</Container>
				<Modal
					open={isSignInModalOpen}
					onClose={closeModal}
					aria-labelledby='modal-modal-title'
					aria-describedby='modal-modal-description'
				>
					<MySignIn style={modalStyle} />
				</Modal>
				<Modal
					open={isSignUpModalOpen}
					onClose={closeModal}
					aria-labelledby='modal-modal-title'
					aria-describedby='modal-modal-description'
				>
					<MySignUp style={modalStyle} />
				</Modal>
				<Modal
					open={isSignOutModalOpen}
					onClose={closeModal}
					aria-labelledby='modal-modal-title'
					aria-describedby='modal-modal-description'
				>
					<MySignOut style={modalStyle} />
				</Modal>
				<Modal
					open={isUserInfoModalOpen}
					onClose={closeModal}
					aria-labelledby='modal-modal-title'
					aria-describedby='modal-modal-description'
				>
					<MyUserInfo style={modalStyle} />
				</Modal>
			</AppBar>
			{children}
		</Container>
	);
}
