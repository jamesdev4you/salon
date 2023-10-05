import Home from './PageComponents/Home/home.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#5B5C50',
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
