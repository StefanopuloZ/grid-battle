import React from 'react';
import Box from '../../styled-components/Box';
import { colors } from '../../theme';

const Home = props => {
    return (
        <Box bg={colors.blue} width={400} m="auto">
            <h1>Home page</h1>
        </Box>
    );
};

export default Home;
