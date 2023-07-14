import Header from './components/layouts/Header'
import { Routes, Route } from 'react-router-dom';
import Todos from './components/pages/Todos';
import Interiores from './components/pages/Interiores';
import Exteriores from './components/pages/Exteriores';
import Jardin from './components/pages/Jardin';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export default function add(ontainedButtons, ImageAvatars) {
  return (
    <Stack direction="row" spacing={2}>
      <Header />
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/Interiores" element={<Interiores/>} />
        <Route path="/Exteriores" element={<Exteriores />} />
        <Route path="/Jardin" element={<Jardin />} />
      </Routes>     
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>Disabled</Button>
      <Button variant="contained" href="#contained-buttons">Link</Button>
    </Stack>
  );
}
