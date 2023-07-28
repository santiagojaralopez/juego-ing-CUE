import { useRoutes, BrowserRouter } from 'react-router-dom';

import { Home } from '../Home';
import { SoftMaze } from '../SoftMaze';

import './App.css';


const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/soft-maze', element: <SoftMaze /> }
  ])

  return routes
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App