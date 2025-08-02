import styled from 'styled-components';

// Styled components
const StatusContainer = styled.div`
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0;
`;

const LoadingContainer = styled(StatusContainer)`
  background-color: #f0f0f0;
`;

const ConnectedContainer = styled(StatusContainer)`
  background-color: #d4edda;
  color: #155724;
`;

const ErrorContainer = styled(StatusContainer)`
  background-color: #f8d7da;
  color: #721c24;
`;

const StatusMessage = styled.p`
  margin: 0;
`;

// Props interface
interface DbConnectionStatusViewProps {
  status: 'loading' | 'connected' | 'error';
  message: string;
}

// View component
export default function DbConnectionStatusView({ status, message }: DbConnectionStatusViewProps) {
  // Render the appropriate container based on status
  const renderContainer = () => {
    switch (status) {
      case 'loading':
        return <LoadingContainer><StatusMessage>{message}</StatusMessage></LoadingContainer>;
      case 'connected':
        return <ConnectedContainer><StatusMessage>{message}</StatusMessage></ConnectedContainer>;
      case 'error':
        return <ErrorContainer><StatusMessage>{message}</StatusMessage></ErrorContainer>;
      default:
        return <StatusContainer><StatusMessage>{message}</StatusMessage></StatusContainer>;
    }
  };

  return renderContainer();
}