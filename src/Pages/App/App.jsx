import { useRoutes, BrowserRouter } from 'react-router-dom';
import { NextUIProvider } from "@nextui-org/react";

import { Home } from '../Home';
import { SoftMaze } from '../SoftMaze';
import DevTeamIntro from '../DevTeamIntro';
import DevTeamRoles from '../DevTeamRoles';
import ClientRequirements from '../ClientRequirements';
import RolesSelection from '../RolesSelection';

import './App.css';


const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/soft-maze', element: <SoftMaze /> },
    { path: '/dev-team-intro', element: <DevTeamIntro /> },
    { path: '/team-roles-info', element: <DevTeamRoles /> },
    { path: '/client-requirements', element: <ClientRequirements /> },
    { path: '/roles-selection', element: <RolesSelection />},
  ])

  return routes
}

function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </NextUIProvider>
  )
}

export default App