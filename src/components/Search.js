import DropDown from "./DropDown";
function Search({sido,city,onCityChange,county,gugun,onCountyChange,dong,town,onTownChange}) {
	return (
		<div className='search'>
			{sido && (
				<DropDown
					head='도 / 광역시'
					selected={city}
					options={sido}
					onChange={onCityChange}
				/>
			)}
			{gugun && (
				<DropDown
					head='시 / 구 / 군'
					selected={county}
					options={gugun
						.filter((c) => {
							return (
								city.slice(0, 2) === c.code.slice(0, 2) &&
								c.name.split(' ').length > 1
							);
						})
						.map((c) => {
							let newName = c.name.split(' ');
							newName.shift();

							return { code: c.code, name: newName.join(' ') };
						})}
					onChange={onCountyChange}
				/>
			)}
			{dong && (
				<DropDown
					head='동선택'
					selected={town}
					options={dong
						.filter((d) => {
							return (
								county.slice(0, 5) === d.code.slice(0, 5) &&
								d.name.split(' ').length > 2
							);
						})
						.map((d) => {
							let newName = d.name.split(' ');
							newName.shift();
							newName.shift();
							return { code: d.code, name: newName.join(' ') };
						})}
					onChange={onTownChange}
				/>
			)}
		</div>
	);
}
export default Search;
