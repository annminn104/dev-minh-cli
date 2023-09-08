'use client';

import { ReactQueryProvider, StyledComponentsRegistry, MuiConfigRegistry } from '@libs/configs';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, themeStyledComponent } from '@libs/material/styles';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />
      <MuiConfigRegistry options={{ key: 'mui' }}>
        <body>
          <StyledComponentsRegistry>
            <ThemeProvider theme={themeStyledComponent}>
              <GlobalStyles />
              <ReactQueryProvider>{children}</ReactQueryProvider>
            </ThemeProvider>
          </StyledComponentsRegistry>
        </body>
      </MuiConfigRegistry>
    </html>
  );
}
