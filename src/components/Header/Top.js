import { useState } from 'react';
import Button from './Button';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SignOut from './SignOut';
import UserInfo from './UserInfo';
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

	return (
		<div className='top'>
			{!userInfo ? (
				<>
					<Button
						text='로그인'
						onClick={openSignInModal}
						component={
							<SignIn
								setUserInfo={setUserInfo}
								isOpen={isSignInModalOpen}
								close={closeModal}
							/>
						}
					/>
					<Button
						text='회원가입'
						onClick={openSignUpModal}
						component={<SignUp isOpen={isSignUpModalOpen} close={closeModal} />}
					/>
				</>
			) : null}
			{userInfo ? (
				<>
					<Button
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
					<Button
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
