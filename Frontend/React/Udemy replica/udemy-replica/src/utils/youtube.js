/**
 * Extract YouTube video ID from common URL shapes.
 * @param {string} url
 * @returns {string | null}
 */
export function getYouTubeId(url) {
  if (!url || typeof url !== 'string') return null
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/,
  ]
  for (const p of patterns) {
    const m = url.match(p)
    if (m?.[1]) return m[1]
  }
  return null
}

/**
 * @param {string} videoId
 * @returns {string}
 */
export function youtubeEmbedUrl(videoId) {
  return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`
}
