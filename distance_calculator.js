'use strict';

let t0 = performance.now();
// Custom function to implement square root algorithm
// Very pointless, could've used built-in function
const squareRoot = (x) => {
    let r = x;
    const precision = 10 ** (-10);
    while (Math.abs(x - r * r) > precision) {
        r = (r + x / r) / 2;
     }
     return r;
}

const calculateDist = function(x1, y1, x2, y2) {
    const startCoords = [x1, y1];
    const endCoords = [x2, y2];

    let delta_x;
    let delta_y;

    delta_x = Math.abs(endCoords[0] - startCoords[0]);
    delta_y = Math.abs(endCoords[endCoords.length - 1] - startCoords[startCoords.length - 1]);

    // Invoke squareRoot function
    const calcDist = squareRoot((delta_x ** 2) + (delta_y ** 2));

    const getMidPoint = function() {
        let point = [];
        let x_mid = ((x1 + x2) / 2);
        let y_mid = ((y1 + y2) / 2);


        String(x_mid).length > 6 ? x_mid = Number(x_mid.toFixed(2)) : x_mid;
        String(y_mid).length > 6 ? y_mid = Number(y_mid.toFixed(2)) : y_mid;

        point.push(x_mid);
        point.push(y_mid);

        return point;

    }
    return calcDist, getMidPoint();
}

console.log(calculateDist(-4, -6, 12, 6.7));
let t1 = performance.now();

console.log(`Program executed in ${t1 - t0} milliseconds`);
