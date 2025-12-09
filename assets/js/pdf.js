const jsPDF = window.jspdf.jsPDF;

const downloadPDF = () => {
    const pdf = new jsPDF();

    const elementHTML = document.getElementById("resume");

    pdf.html(elementHTML, {
        callback: doc => doc.save('curriculum-vitae.pdf'),
        margin: [15, 15, 0, 15],
        x: 0,
        y: 0,
        width: 180,
        windowWidth: 1240
    });
}