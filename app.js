const fuelEl  = document.getElementById('fuel');
const coinsEl = document.getElementById('coins');

let fuel = 100;
let coins = 0;
let level = 1;

// coin + fuel pickups
const pickups = []; // {mesh, x, type:'coin'|'fuel', taken:false}
