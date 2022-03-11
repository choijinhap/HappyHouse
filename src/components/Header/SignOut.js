function SignOut({ isOpen, close ,setUserInfo}) {
    function signOutClickHandler(){
        //로그아웃로직처리
        setUserInfo(null);
    }
	return <>
        {isOpen ? (
				<div className='modal'>
					<div>
						<div className='loginModal'>
							<span className='close' onClick={close}>
								&times;
							</span>
							<div className='modalContents'>
                                <div>로그아웃 하시겠습니까?</div>
								<button className='loginBtn' onClick={signOutClickHandler}>
									{' '}
									로그아웃{' '}
								</button>
							</div>
						</div>
					</div>
				</div>
			) : null}
    </>;
}
export default SignOut;
