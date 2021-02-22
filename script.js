const canvas = document.querySelector('#can')
const ctx = canvas.getContext('2d');
const btn = document.querySelector('#btn')

function rysuj() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let x = parseFloat(document.getElementById('x').value)
    let y = parseFloat(document.getElementById('y').value)
    let a = parseFloat(document.getElementById('a').value)
    let b = parseFloat(document.getElementById('b').value)
    let h = parseFloat(document.getElementById('h').value)
    if (x > 0 && x < 500 && y > 0 && y < 500 && a > 0 && a < 500 && b > 0 && b < 500 && h > 0 && h < 500) {
        drawTrapeze(x, y, a, b, h)
        canvas.classList.add('active')
        ctx.font = '20px arial'
        let text = 'Pole Trapezu: ' + obliczPole(a, b, h)
        ctx.fillText(text, 5, 30);
        let text1 = 'Obwód Trapezu: ' + obliczObwod(a, b, h)
        ctx.fillText(text1, 5, 60);
        let text2 = 'Kąt nachylenia α: ' + obliczKat(a, b, h) + '⁰'
        ctx.fillText(text2, 5, 90);
    } else {
        alert('brak danych lub zły zakres')
    }
}

const obliczPole = (a, b, h) => {
    return (a + b) * h / 2
}
const obliczObwod = (a, b, h) => {
    return a + b + 2 * (Math.sqrt(h * h) + (Math.sqrt(Math.pow(0.5 * (b - a), 2))))
}

const obliczKat = (a, b, h) => {
    let tng = h / (b - a) * 0.5

    luk = (Math.atan(tng) * 180 / Math.PI).toFixed(2)

    return luk

}

//trapez
const drawTrapeze = (x, y, a, b, h) => {
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(x, y); //A
    ctx.lineTo(x + (b - a) / 2, y - h); //B
    ctx.lineTo(x + (b - a) / 2 + a, y - h); //C
    ctx.lineTo(x + b, y); //D
    ctx.lineTo(x, y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + (b - a) / 2, y);
    ctx.strokeStyle = 'green';
    ctx.lineTo(x + (b - a) / 2, y);
    ctx.lineTo(x + (b - a) / 2, y - h)
    ctx.setLineDash([20, 8])
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.arc(x, y, 30, 0, -90 * Math.PI / 180, true);
    ctx.stroke();

    ctx.font = '30px arial';
    ctx.fillText('a', x + b / 2, y - h);
    ctx.fillText('b', x + b / 2, y);
    ctx.fillText('h', x + (b - a) / 2, y - (h / 2));
    ctx.fillText('α', x + 1, y + 1);
}