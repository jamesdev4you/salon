import Home from './PageComponents/Home/homeHeader.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#F7F5F3',
      },
    },
  });

function App() {
    return(
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    );
}

export default App;
