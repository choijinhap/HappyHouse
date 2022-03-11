import { useState } from 'react';

function Button({ text, component, onClick }) {
	return (
		<>
			<a onClick={onClick}>{text}</a>
			{component}
		</>
	);
}

export default Button;
