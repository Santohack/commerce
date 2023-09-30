import {  Container, ThemeProvider } from '@mui/material';
import { grey } from '@mui/material/colors';
import theme from './styles/theme';
import AppBar from './components/appBar'
import Banner from './components/banner';
import Promotion from './components/promotion';

function App() {
  return (
    <ThemeProvider theme={theme}>

  
    <Container maxWidth='xl' 
     sx={{
      backgroundColor:grey
     }}
    >
      
      <AppBar />
      <Banner />
      <Promotion />
    </Container>
    </ThemeProvider>
  );
}

export default App;
