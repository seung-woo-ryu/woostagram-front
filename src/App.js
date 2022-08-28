import {Routes,Route}from 'react-router-dom';
import {SignPage} from './routes';
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignPage />}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
