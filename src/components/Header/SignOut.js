import Overlay from '../Overlay';
import '../../css/modal.css';
function SignOut({ isOpen, close, setUserInfo }) {
	function signOutClickHandler() {
		//로그아웃로직처리
		setUserInfo(null);
		console.log('로그아웃되었습니다.')
	}
	return (
		<>
			{isOpen ? (
				<>
					<div className='modal'>
						<div>
							<div className='loginModal'>
								<div className='modal-header'>
									<h1 className='title'></h1>
									<img
										className='close'
										onClick={close}
										src='/img/icons8-x-50.png'
										alt=''
									/>
								</div>
								<div className='modal-contents'>
									<div>로그아웃 하시겠습니까?</div>
									<button className='loginBtn' onClick={signOutClickHandler}>
										{' '}
										로그아웃{' '}
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
export default SignOut;
