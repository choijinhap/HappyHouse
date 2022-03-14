import { useEffect, useState } from 'react';
import MyButton from './MyButton';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SignOut from './SignOut';
import UserInfo from './UserInfo';
import Modal from '@mui/material/Modal';

const style = {
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

function Top({ setUserInfo, userInfo }) {
	const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
	const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
	const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);
	const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);
	function closeModal() {
		setIsSignInModalOpen(false);
		setIsSignUpModalOpen(false);
		setIsSignOutModalOpen(false);
		setIsUserInfoModalOpen(false);
	}
	function openSignInModal() {
		closeModal();
		setIsSignInModalOpen(true);
	}

	function openSignUpModal() {
		closeModal();
		setIsSignUpModalOpen(true);
	}

	function openSignOutModal() {
		closeModal();
		setIsSignOutModalOpen(true);
	}

	function openUserInfoModal() {
		closeModal();
		setIsUserInfoModalOpen(true);
	}
	useEffect(() => {
		if (
			isSignInModalOpen ||
			isSignUpModalOpen ||
			isSignOutModalOpen ||
			isUserInfoModalOpen
		) {
			document.body.style.cssText = `
		  position: fixed;
		  top: -${window.scrollY}px;
		  overflow-y: scroll;
		  width: 100%;`;
			return () => {
				const scrollY = document.body.style.top;
				document.body.style.cssText = '';
				window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
			};
		}
	});
	return (
		<div className='top'>
			{!userInfo ? (
				<>
					<MyButton text='로그인' onClick={openSignInModal} />
					<Modal
						open={isSignInModalOpen}
						onClose={closeModal}
						aria-labelledby='modal-modal-title'
						aria-describedby='modal-modal-description'
					>
						<SignIn setUserInfo={setUserInfo} style={style} />
					</Modal>
					<MyButton
						text='회원가입'
						onClick={openSignUpModal}
						component={<SignUp isOpen={isSignUpModalOpen} close={closeModal} />}
					/>
				</>
			) : null}
			{userInfo ? (
				<>
					<MyButton
						text='로그아웃'
						onClick={openSignOutModal}
						component={
							<SignOut
								setUserInfo={setUserInfo}
								isOpen={isSignOutModalOpen}
								close={closeModal}
							/>
						}
					/>
					<MyButton
						text='회원정보'
						onClick={openUserInfoModal}
						component={
							<UserInfo
								userInfo={userInfo}
								isOpen={isUserInfoModalOpen}
								close={closeModal}
							/>
						}
					/>
				</>
			) : null}
		</div>
	);
}

export default Top;
