import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { ROUTES } from '../../config/routes'
import { LoadingSpinner } from '../common/LoadingSpinner'

/**
 * @param {{ children: import('react').ReactNode }} props
 */
export function PrivateRoute({ children }) {
  const { user, authLoading } = useAuth()
  const location = useLocation()

  if (authLoading) {
    return <LoadingSpinner label="Checking session" />
  }
  if (!user) {
    return <Navigate to={ROUTES.login} replace state={{ from: location.pathname }} />
  }
  return children
}
