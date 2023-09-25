window.jsPDF = window.jspdf.jsPDF;

const downloadPDF = () => {
    var doc = new jsPDF();

    var elementHTML = document.getElementById("resume");

    doc.html(elementHTML, {
        callback: doc => doc.save('curriculum-vitae.pdf'),
        margin: [15, 15, 0, 15],
        x: 0,
        y: 0,
        width: 180,
        windowWidth: 1240
    });
}