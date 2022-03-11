function userInfo({ isOpen, close, userInfo }) {
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
								<div>아이디:{userInfo.id}</div>
								<div>비밀번호:{userInfo.pw}</div>
								<div>이름:{userInfo.name}</div>
								<div>주소:{userInfo.address}</div>
								<div>전화번호:{userInfo.tel}</div>
								<button className='loginBtn' onClick={close}>
									{' '}
									확인{' '}
								</button>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
}

export default userInfo;
