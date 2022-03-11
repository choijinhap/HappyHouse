import { useState } from 'react';

function SignUp({ isOpen, close }) {
	const [id, setId] = useState('');
	const [pw, setPw] = useState('');
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
	const [tel, setTel] = useState('');

	function signUpIdHandler(e) {
		setId(e.target.value);
	}
	function signUpPwHandler(e) {
		setPw(e.target.value);
	}
	function signUpNameHandler(e) {
		setName(e.target.value);
	}
	function signUpAddressHandler(e) {
		setAddress(e.target.value);
	}
	function signUpTelHandler(e) {
		setTel(e.target.value);
	}

	function signUpClickHandler() {
		const userInfos = JSON.parse(localStorage.getItem('userInfos'));
		if (userInfos) {
			for (let userInfo of userInfos) {
				if (userInfo.id === id) {
					alert('중복된 아이디입니다');
					return;
				}
			}
		}
		//회원가입 가능
		if (userInfos) {
			localStorage.setItem(
				'userInfos',
				JSON.stringify([
					{ id, pw, name, tel, address },
					...JSON.parse(localStorage.getItem('userInfos')),
				])
			);
		} else {
			localStorage.setItem(
				'userInfos',
				JSON.stringify([{ id, pw, name, tel, address }])
			);
		}
		alert('회원가입되었습니다.');
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
									onChange={signUpIdHandler}
								/>
								<input
									name='loginPw'
									className='loginPw'
									type='password'
									placeholder='비밀번호'
									onChange={signUpPwHandler}
								/>
								<input
									name='name'
									className='name'
									type='text'
									placeholder='이름'
									onChange={signUpNameHandler}
								/>
								<input
									name='address'
									className='address'
									type='text'
									placeholder='주소'
									onChange={signUpAddressHandler}
								/>
								<input
									name='tel'
									className='tel'
									type='text'
									placeholder='010-xxxx-xxxx'
									onChange={signUpTelHandler}
								/>

								<button className='loginBtn' onClick={signUpClickHandler}>
									{' '}
									등록{' '}
								</button>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
}

export default SignUp;
