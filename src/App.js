import {Routes,Route}from 'react-router-dom';
import {SignPage,HomePage} from './routes';
import {BrowserRouter} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';

function App() {
  
  return (
    <BrowserRouter>
    <CssBaseline />
    <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <Routes>
        <Route path="/" element={<SignPage />}> </Route>
        <Route path="/home" element={<HomePage/>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
