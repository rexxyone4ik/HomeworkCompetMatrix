var array = [
    [1,   2,  3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10,  9,  8, 7]
];


function checkNeighbour(w, h, startingH, startingW) {
   
    if(startingW < w && startingH < ) {
    map.set(array[startingH][startingW]);
    startingW++;
   }

   if(startingW === w && startingH < h && !map.has(array[startingH + 1][startingW])) {
    map.set(array[startingH][startingW]);
    startingH++;
    
   }
   
   if(startingW > 0 && startingH === h && !map.has(array[startingH][startingW - 1])) {
    map.set(array[startingH][startingW]);
    startingW--;

   }

   if(startingW === 0 && startingH < 0 && !map.has(array[startingH - 1][startingW])) {
    map.set(array[startingH][startingW]);
    startingH--;
   }
}
function checkDirection() { 

}

function spiralTraverse (ar){
    var h = ar.length - 1;
    var w = ar[0].length - 1;
    var startingH = 0;
    var startingW = 0;
    var step = 0;
    var map = new.map();

    do {
        
       var weDidOurStep = checkNeighbour(w, h, startingH, startingW, map, array);
    } while  (step < w * h);


}

spiralTraverse(array);
console.log(spiralTraverse(array));