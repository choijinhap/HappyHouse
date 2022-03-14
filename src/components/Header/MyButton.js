import { useState } from 'react';
import '../../css/Top.css'
function Button({ text, component, onClick }) {
	return (
		<>
			<a onClick={onClick}>{text}</a>
			{component}
		</>
	);
}

export default Button;
