const catAndMouse = (x, y, z) => {
    return ((Math.abs(x - z)) < Math.abs(z -y)) ? 'Cat A' : ((Math.abs(x - z)) > Math.abs(z - y) ? 'Cat B' : 'Mouse C');
}

console.log(catAndMouse(12,4,70));