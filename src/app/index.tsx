import { CssBaseline } from '@mui/material';
import { MainProvider } from './main-provider';
import { Home, Layout } from 'pages';

function App() {
	return (
		<>
			<CssBaseline />
			<MainProvider>
				<Layout>
					<Home />
				</Layout>
			</MainProvider>
		</>
	);
}

export default App;
