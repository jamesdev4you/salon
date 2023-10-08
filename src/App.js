import Home from './PageComponents/Home/home.js';
import Gallery from './PageComponents/Gallery/gallery.js';
import appointment from '../src/PageComponents/Appointment/appointment.js';
import Reviews from './PageComponents/Reviews/reviews.js';
import Team from './PageComponents/Team/team.js';
import NavBar from './PageComponents/NavBar/navbar.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B1E1E',
    },
    secondary: {
      main: '#E4DCC0',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<NavBar />} color='secondary'>
          <Route path='/' element={<Home />} />
          <Route path='/appointment' element={<appointment />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/team' element={<Team />} />
          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
