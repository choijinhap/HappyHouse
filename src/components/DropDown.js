import '../css/DropDown.css';
function DropDown({ head, options, onChange, selected }) {
	return (
		<select onChange={onChange} value={selected}>
			<option value='0'>{head}</option>
			{options.map((option) => {
				return (
					<option value={option.code} key={option.code}>
						{option.name.trim()}
					</option>
				);
			})}
		</select>
	);
}
export default DropDown;
