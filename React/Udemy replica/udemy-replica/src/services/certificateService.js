import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

/**
 * Renders a DOM node to canvas and downloads a landscape PDF certificate.
 * @param {HTMLElement} element
 * @param {string} [fileName]
 * @returns {Promise<void>}
 */
export async function downloadCertificatePdf(element, fileName = 'certificate.pdf') {
  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    logging: false,
    backgroundColor: '#0f172a',
  })
  const imgData = canvas.toDataURL('image/png')
  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'px',
    format: [canvas.width, canvas.height],
  })
  pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height)
  pdf.save(fileName)
}
