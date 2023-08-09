document.addEventListener('DOMContentLoaded', function() {
    // Carregando as imagens SVG
    const img1 = new Image();
    img1.src = 'https://image-charts.com/chart?chs=300x300&cht=qr&chl=Hello%20world&choe=UTF-8&chof=.svg&chld=H';
    img1.onload = () => concatenateSVGs(img1);

    const img2 = new Image();
    img2.src = 'https://freesvg.org/download/198125';
    img2.onload = () => concatenateSVGs(img2);
});

function concatenateSVGs(img) {
    const svgDiv = document.getElementById('resultado');
    
    const svgNS = 'http://www.w3.org/2000/svg';
    const newSVG = document.createElementNS(svgNS, 'svg');
    newSVG.setAttribute('width', '400'); // Defina a largura desejada
    newSVG.setAttribute('height', '200'); // Defina a altura desejada
    
    // Clone a imagem carregada e insira no novo SVG
    const imgClone = img.cloneNode(true);
    newSVG.appendChild(imgClone);
    
    // Anexe o novo SVG à div de resultado
    svgDiv.appendChild(newSVG);
}
