import { useState } from 'react';

function SignIn({ isOpen, close, setUserInfo }) {
	const [id, setId] = useState('');
	const [pw, setPw] = useState('');

	function loginIdHandler(e) {
		setId(e.target.value);
	}
	function loginPwHandler(e) {
		setPw(e.target.value);
	}

	function loginClickHandler() {
		const userInfos = JSON.parse(localStorage.getItem('userInfos'));
		if (userInfos) {
			for (let info of userInfos) {
				if (id === info.id && pw === info.pw) {
					//로그인통과 구현필요
					setUserInfo(info);
					return;
				}
			}
		}
		//로그인불가
		alert('없는 아이디입니다');
	}

	return (
		<>
			{isOpen ? (
				<div className='modal'>
					<div>
						<div className='loginModal'>
							<span className='close' onClick={close}>
								&times;
							</span>
							<div className='modalContents'>
								<input
									name='loginId'
									className='loginId'
									type='text'
									placeholder='아이디'
									onChange={loginIdHandler}
								/>
								<input
									name='loginPw'
									className='loginPw'
									type='password'
									placeholder='비밀번호'
									onChange={loginPwHandler}
								/>
								<div className='loginMid'>
									<div className='findPw'>비밀번호 찾기</div>
								</div>
								<button className='loginBtn' onClick={loginClickHandler}>
									{' '}
									로그인{' '}
								</button>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
}

export default SignIn;
