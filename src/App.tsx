import { useState } from 'react';
import styled from 'styled-components';
import { AppProvider } from "./context/AppProvider";
// import { GlobalStyle } from './styles/GlobalStyle';
// import Pessoas from "./components/Pessoas";
// import Itens from "./components/Itens";
// import Total from "./components/Total";

interface AppProps {
	toggleTheme: () => void;
}

const Container = styled.div`
	padding: 2rem;
	text-align: center;
`;

const ToggleButton = styled.button`
	margin-top: 1rem;
	margin-bottom: 2rem;
	padding: 0.5rem 1rem;
	background: ${({ theme }) => theme.colors.primary};
	color: white;
	border: none;
	border-radius: 6px;
	cursor: pointer;
`;

const Tabs = styled.div`
	display: flex;
	justify-content: center;
	gap: 1rem;
	margin-bottom: 2rem;
`;

const TabButton = styled.button<{ active: boolean }>`
	padding: 0.5rem 1rem;
	background: ${({ active, theme }) => (active ? theme.colors.primary : '#ccc')};
	color: ${({ active }) => (active ? '#fff' : '#333')};
	border: none;
	border-radius: 6px;
	cursor: pointer;
	transition: background 0.3s ease;
`;

export default function App({ toggleTheme }: AppProps) {
	const [activeTab, setActiveTab] = useState('pessoas');

	return (
		<AppProvider>
			{/* <GlobalStyle /> */}
			<Container>
				<h1>Vamo Rachar 💸</h1>
				<ToggleButton onClick={toggleTheme}>Trocar Tema</ToggleButton>

				<Tabs>
					<TabButton active={activeTab === 'pessoas'} onClick={() => setActiveTab('pessoas')}>
						Pessoas
					</TabButton>
					<TabButton active={activeTab === 'itens'} onClick={() => setActiveTab('itens')}>
						Itens
					</TabButton>
					<TabButton active={activeTab === 'total'} onClick={() => setActiveTab('total')}>
						Total
					</TabButton>
				</Tabs>

				{/* {activeTab === "pessoas" && <Pessoas />}
        {activeTab === "itens" && <Itens />}
        {activeTab === "total" && <Total />} */}
				{activeTab === "pessoas" && <div>Aqui será criada a lista de pessoas</div>}
        {activeTab === "itens" && <div>Aqui será criada a lista de itens</div>}
        {activeTab === "total" && <div>Aqui será calculado o resultado</div>}
			</Container>
		</AppProvider>
	);
}
