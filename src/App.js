import Home from './PageComponents/Home/home.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#1B1E1E',
      },
      secondary: {
        main: '#E4DCC0',
      }
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
