import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './pages/Main';
import Search from './pages/Search';
function App() {
	return (
		<Container>
			<Layout>
				<Routes>
					<Route path='/' element={<Main />}></Route>
					<Route path='/search' element={<Search />}></Route>
				</Routes>
			</Layout>
		</Container>
	);
}

export default App;
