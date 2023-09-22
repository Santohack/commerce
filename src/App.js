import { Button, Container, ThemeProvider } from '@mui/material';
import { grey } from '@mui/material/colors';
import theme from './styles/theme';
import AppBar from './components/appBar'

function App() {
  return (
    <ThemeProvider theme={theme}>

  
    <Container maxWidth='xl' 
     sx={{
      backgroundColor:grey
     }}
    >
      {/* <Button variant='contained'>CLick me</Button> */}
      <AppBar />
    </Container>
    </ThemeProvider>
  );
}

export default App;
