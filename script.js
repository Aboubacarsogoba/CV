

function telechargercv() {
    var element = document.getElementById('cvcomplet');
    var opt = {
      margin:       0,
      filename:     'myfile.pdf',
      image:        { type: 'jpeg', quality: 1 },
      html2canvas:  { 
        scale: 2,
        /*scrollX: 250,*/
        scrollY: 0,
        /*windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,*/
        useCORS: true, //pour la securité concernant les liens externes
      },
      jsPDF: { 
        unit: 'px', 
        format: [794,1123], 
        orientation: 'portrait' 
      }
    };

// New Promise-based usage:
html2pdf().set(opt).from(element).save();
  }


function changerCouleur(couleur){
    document.documentElement.style.setProperty('--bgColor',couleur);
}
    