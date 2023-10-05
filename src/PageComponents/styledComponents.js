import Button from '@mui/material/Button';

const MyStyledButton = (props) => (
  <Button
    variant='contained'
    sx={{
      padding: 1,
      width: '200px',
      height: '30px',
      background: `linear-gradient(#d8a272, #F7C145)`,
      color: 'black',
      '&:hover': {
        color: 'black',
        backgroundColor: 'white',
      },
      border: '2px solid black',
    }}
  >
    Book Today!
  </Button>
);

export { MyStyledButton };
