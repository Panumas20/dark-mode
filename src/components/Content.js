import light from '../image/light.svg';
import Dark from '../image/dark.svg';
import { useContext } from 'react';
import { ThemeContext } from '../App';
const Content = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<main className={theme}>
			<div>
				<h1>Student First</h1>
				<p>Darkmode Workshop</p>
			</div>
			<img src={theme === 'dark' ? Dark : light} alt="logo" />
		</main>
	);
};

export default Content;
