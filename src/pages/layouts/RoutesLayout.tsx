import { Route, Routes } from 'react-router-dom'
import AppLayout from './AppLayout'
import { Dashboard } from '../app/Dashboard/Dashboard'

export default function RoutesLayout() {
  return (
    <Routes>
        <Route path='/' element={<AppLayout />}>
            <Route index element={<Dashboard />} />
        </Route>
        <Route>
        
        </Route>
    </Routes>
  )
}
