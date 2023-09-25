window.jsPDF = window.jspdf.jsPDF;
const { jsPDF } = require('jspdf');

const downloadPDF = () => {
    var doc = new jsPDF();

    var elementHTML = document.querySelector("body");

    doc.html(elementHTML, {
        callback: function (doc) {
            doc.save('curriculum-vitae.pdf');
        },
        margin: [10, 10, 10, 10],
        autoPaging: 'text',
        x: 0,
        y: 0,
        width: 1240,
        windowWidth: 1240
    });
}