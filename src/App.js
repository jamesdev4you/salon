import Home from './PageComponents/Home/home.js';
import Gallery from './PageComponents/Gallery/gallery.js';
import Appointment from '../src/PageComponents/Appointment/appointment.js';
import Reviews from './PageComponents/Reviews/reviews.js';
import Team from './PageComponents/Team/team.js';
import NavBar from './PageComponents/NavBar/navbar.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import { MyServiceButton } from '../src/PageComponents/styledComponents.js';
import homeImage from '../src/PageComponents/assets/headerhome.jpg';
import contactImage from '../src/PageComponents/assets/headercontact.jpg';
import headerReviews from '../src/PageComponents/assets/headerReviews.jpg';
import headerTeam from '../src/PageComponents/assets/headerTeam.jpg';
import headerGallery from '../src/PageComponents/assets/headerGallery.jpg';

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
  const headerOptions = [
    {
      title: 'Shear Bliss',
      desc: 'of Tampa Bay',
      button: MyServiceButton,
      backgroundImg: homeImage,
    },
    {
      title: 'Book Today',
      desc: '& Begin Beauty',
      button: MyServiceButton,
      backgroundImg: contactImage,
    },
    {
      title: 'Reviews From',
      desc: 'Our Amazing Clients',
      button: MyServiceButton,
      backgroundImg: headerReviews,
    },
    {
      title: "Shear Beauty's",
      desc: 'Fantastic team!',
      button: MyServiceButton,
      backgroundImg: headerTeam,
    },
    {
      title: 'The Wonderful',
      desc: 'Gallery of our Work',
      button: MyServiceButton,
      backgroundImg: headerGallery,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<NavBar />} color='secondary'>
          <Route path='/' element={<Home headerOp={headerOptions[0]} />} />
          <Route
            path='/appointment'
            element={<Appointment headerOp={headerOptions[1]} />}
          />
          <Route
            path='/reviews'
            element={<Reviews headerOp={headerOptions[2]} />}
          />
          <Route path='/team' element={<Team headerOp={headerOptions[3]} />} />
          <Route
            path='/gallery'
            element={<Gallery headerOp={headerOptions[4]} />}
          />
          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
