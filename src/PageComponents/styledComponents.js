import Button from '@mui/material/Button';

const MyStyledButton = (props) => (
  <Button
  variant="contained"
    sx={{
      padding: 1,
      width: '200px',
      height: '30px',
      color: `black`,
      marginLeft: '140px',
      background: 'linear-gradient(#EDE9E5, #FFFFFF)',
      '&:hover':{
        color: 'black',
        backgroundColor: 'white',
      }
    }}
  >
    Book Today!
  </Button>
);

export {MyStyledButton};