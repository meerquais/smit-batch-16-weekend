/**
 * Client-side uploads via Cloudinary unsigned preset (configure in Cloudinary dashboard).
 * @see https://cloudinary.com/documentation/upload_images#unsigned_upload
 */

export const isCloudinaryConfigured = Boolean(
  import.meta.env.VITE_CLOUDINARY_CLOUD_NAME && import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
)

/**
 * @param {File|Blob} file
 * @returns {'image' | 'raw'}
 */
function resourceTypeForFile(file) {
  const type = typeof file.type === 'string' ? file.type : ''
  if (type.startsWith('image/')) return 'image'
  return 'raw'
}

/**
 * Split virtual path "folder/sub/file.ext" into Cloudinary folder + unique public_id.
 * @param {string} virtualPath
 */
function folderAndPublicId(virtualPath) {
  const segments = virtualPath.split('/').filter(Boolean)
  if (segments.length === 0) {
    return { folder: undefined, publicId: `upload_${Date.now()}` }
  }
  const fileName = segments.pop()
  const folder = segments.length ? segments.join('/') : undefined
  const base = fileName.replace(/\.[^/.]+$/, '').replace(/[^a-zA-Z0-9_-]/g, '_') || 'file'
  const publicId = `${Date.now()}_${base}`.slice(0, 200)
  return { folder, publicId }
}

/**
 * Upload a file and return the HTTPS URL (secure_url).
 * @param {string} virtualPath Logical path used as Cloudinary folder + public_id hint (e.g. thumbnails/courseId/name.jpg)
 * @param {File|Blob} file
 * @returns {Promise<string>}
 */
export async function uploadFileToPath(virtualPath, file) {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
  if (!cloudName || !uploadPreset) {
    throw new Error(
      'Cloudinary is not configured. Set VITE_CLOUDINARY_CLOUD_NAME and VITE_CLOUDINARY_UPLOAD_PRESET in .env.'
    )
  }

  const resourceType = resourceTypeForFile(file)
  const { folder, publicId } = folderAndPublicId(virtualPath)

  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', uploadPreset)
  formData.append('public_id', publicId)
  if (folder) {
    formData.append('folder', folder)
  }

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`
  const res = await fetch(url, {
    method: 'POST',
    body: formData,
  })

  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    const msg = data?.error?.message || res.statusText || 'Upload failed'
    throw new Error(msg)
  }
  if (!data.secure_url) {
    throw new Error('Cloudinary response missing secure_url')
  }
  return data.secure_url
}
