import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { ROUTES } from '../../config/routes'
import { ROLES } from '../../config/constants'
import { PrivateRoute } from './PrivateRoute'

/**
 * @param {{ children: import('react').ReactNode }} props
 */
export function StudentRoute({ children }) {
  const { profile } = useAuth()

  return (
    <PrivateRoute>
      {profile?.role === ROLES.STUDENT && profile?.isActive !== false ? (
        children
      ) : (
        <Navigate to={ROUTES.home} replace />
      )}
    </PrivateRoute>
  )
}
