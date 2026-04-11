import Alert from '@mui/material/Alert'
import { isFirebaseConfigured } from '../services/firebase/config'
import { isCloudinaryConfigured } from '../services/cloudinary/upload'

/**
 * Shown when Firebase or Cloudinary env vars are missing.
 */
export function FirebaseSetupBanner() {
  if (!isFirebaseConfigured) {
    return (
      <Alert severity="warning" className="!rounded-none">
        Firebase is not configured. Copy <code className="rounded bg-black/10 px-1">.env.example</code> to{' '}
        <code className="rounded bg-black/10 px-1">.env</code> and add your project keys to enable auth and data.
      </Alert>
    )
  }
  if (!isCloudinaryConfigured) {
    return (
      <Alert severity="info" className="!rounded-none">
        Cloudinary is not configured. Add <code className="rounded bg-black/10 px-1">VITE_CLOUDINARY_CLOUD_NAME</code> and{' '}
        <code className="rounded bg-black/10 px-1">VITE_CLOUDINARY_UPLOAD_PRESET</code> to{' '}
        <code className="rounded bg-black/10 px-1">.env</code> for course thumbnails and assignment file uploads (unsigned
        preset in Cloudinary Dashboard).
      </Alert>
    )
  }
  return null
}
