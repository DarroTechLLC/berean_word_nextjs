import styled from 'styled-components';
import DbConnectionStatusController from '../db/DbConnectionStatusController';


// Props interface
interface HomeViewProps {
    title: string;
    welcomeMessage: string;
}

// View component
export default function HomeView({title, welcomeMessage}: HomeViewProps) {
    return (
        <Container>
            <Title>{title}</Title>
            <DbConnectionStatusController/>
            <WelcomeMessage>{welcomeMessage}</WelcomeMessage>
        </Container>
    );
}
// Styled components
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
`;

const Title = styled.h1`
    margin-bottom: 1rem;
`;

const WelcomeMessage = styled.p`
    margin-top: 1rem;
`;