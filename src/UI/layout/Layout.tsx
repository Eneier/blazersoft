import React, {ReactNode} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

interface ILayout {
    children: ReactNode;
}

const Layout: React.FC<ILayout> = ({children}) => {
    return (
        <>
            <CssBaseline/>
            <Container
                maxWidth="sm"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px',
                    justifyContent: 'center',
                    height: '100vh',
                }}>
                {children}
            </Container>
        </>
    );
}

export default Layout;
