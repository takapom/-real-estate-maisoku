import * as React from 'react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function Printpdf() {
    const printDocument = () => {
        const target = document.getElementById('pdf');
        if (target === null) return;
        html2canvas(target, { scale: 2.5 }).then((canvas) => {
        const imgData = canvas.toDataURL('image/svg', 1.0);
        let pdf = new jsPDF('l', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width / 10;
        const imgHeight = canvas.height / 10;
        const x = (pdfWidth - imgWidth) / 2;
        const y = (pdfHeight - imgHeight) / 2;
        pdf.addImage(imgData, 'SVG', x, y, imgWidth, imgHeight);
        const date = new Date();
        const dateString = `${date.getFullYear()}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}_${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
        pdf.save(`preview-${dateString}.pdf`);
        });
    };
    return (
    <>
        <button type = 'button' onClick={printDocument}>
            PDFダウンロード
        </button>
    </>
    )
}