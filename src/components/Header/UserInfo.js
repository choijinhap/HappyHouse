import Overlay from '../Overlay';
import '../../css/modal.css';
function userInfo({ isOpen, close, userInfo }) {
	return (
		<>
			{isOpen ? (
				<>
					<div className='modal'>
						<div>
							<div className='loginModal'>
								<div className='modal-header'>
									<h1 className='title'>로그인</h1>
									<img
										className='close'
										onClick={close}
										src='/img/icons8-x-50.png'
										alt=''
									/>
								</div>
								<div className='modal-contents'>
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
					<Overlay close={close} />
				</>
			) : null}
		</>
	);
}

export default userInfo;
