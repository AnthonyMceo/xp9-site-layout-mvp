import { PDFDocument, PDFPage, StandardFonts, rgb } from "pdf-lib";

export async function generatePlaceholderPdf({
  title,
  author,
  uuid,
}: {
  title: string;
  author: string;
  uuid: string;
}) {
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const addFooter = (page: PDFPage) => {
    const { width } = page.getSize();
    const footer = `XP9 Placeholder • ID: ${uuid}`;
    page.drawText(footer, {
      x: 40,
      y: 24,
      size: 9,
      font,
      color: rgb(0.4, 0.4, 0.4),
      maxWidth: width - 80,
    });
  };

  // Page 1: Title
  {
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    page.drawText(title, {
      x: 40,
      y: height - 120,
      size: 30,
      font: fontBold,
      color: rgb(0.1, 0.1, 0.1),
      maxWidth: width - 80,
    });
    page.drawText("Title Page", {
      x: 40,
      y: height - 150,
      size: 12,
      font,
      color: rgb(0.4, 0.4, 0.4),
    });
    addFooter(page);
  }

  // Page 2: Author
  {
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    page.drawText("Author", {
      x: 40,
      y: height - 120,
      size: 22,
      font: fontBold,
      color: rgb(0.1, 0.1, 0.1),
    });
    page.drawText(author, {
      x: 40,
      y: height - 160,
      size: 18,
      font,
      color: rgb(0.15, 0.15, 0.15),
      maxWidth: width - 80,
    });
    addFooter(page);
  }

  // Page 3+: filler content
  const fillerParagraphs = [
    "This is a placeholder PDF generated for MVP validation. The real book generation engine is not enabled yet.",
    "Use this PDF to validate the user flow: title creation, public product page, shareable link, and download entitlement rules.",
    "Look Inside preview and public metadata will be replaced with real content in a later phase.",
  ];

  for (let i = 0; i < 2; i++) {
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    page.drawText("Sample content", {
      x: 40,
      y: height - 80,
      size: 16,
      font: fontBold,
      color: rgb(0.1, 0.1, 0.1),
    });

    let y = height - 120;
    for (const p of fillerParagraphs) {
      page.drawText(p, {
        x: 40,
        y,
        size: 12,
        font,
        color: rgb(0.15, 0.15, 0.15),
        maxWidth: width - 80,
        lineHeight: 16,
      });
      y -= 70;
    }

    addFooter(page);
  }

  const bytes = await pdfDoc.save();
  return bytes;
}

