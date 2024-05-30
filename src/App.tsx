import React from 'react';
import './App.css';
import styled from 'styled-components';
import { MyImage } from './components/Img.styled';
import picture from "./assets/images/my_image.jpg"
import { StyledBtn } from './components/Button.styled';
import { myTheme } from './styles/Theme.styled';
import { MyTitle } from './components/Title.styled';
import { MyDescription } from './components/Description.styled';
import { BoxForBtn } from './components/Button.styled';
import { Card } from './components/Card';

function App() {
	return (
		<div className="App">
			<Card>
				<MyImage src={picture} />
				<MyTitle paddingLeft={"20px"}>Headline</MyTitle>
				<MyDescription paddingLeft={"20px"}>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</MyDescription>
				<BoxForBtn paddingLeft={"20px"}>
					<StyledBtn color={myTheme.colors.primary} btnType={"primary"}>See more</StyledBtn>
					<StyledBtn color={myTheme.colors.primary} btnType={"outline"}>Save</StyledBtn>
				</BoxForBtn>
			</Card>

		</div>
	);
}

export default App;








