"use client";

import { CssBaseline, ThemeProvider } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import theme from './theme';

const cache = createCache({key: 'mui',prepend : true})

export default function MUIProvider({children}){
    return(
    <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
                {children}    
        </ThemeProvider>
    </CacheProvider>
    )
}