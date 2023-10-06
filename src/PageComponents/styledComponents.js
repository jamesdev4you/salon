import Button from '@mui/material/Button';

const MyStyledButton = (props) => (
  <Button
    variant='contained'
    sx={{
      padding: 1,
      width: '200px',
      height: '30px',
      background: `linear-gradient(to bottom left, #5B5C50, #1B1E1E)`,
      color: '#F5DE6D',
      '&:hover': {
        color: '#5B5C50',
        background: '#F5DE6D',
        border: '2px solid #5B5C50',
        fontWeight: 'bold',
      },
      border: '2px solid #F5DE6D',
    }}
  >
    Book Today!
  </Button>
);

export { MyStyledButton };
