//MatrixCompet 

// let competitions = [
//     ["HTML", "C#"],
//     ["C#", "Python"],
//     ["Python", "HTML"],

// ];

// let results = [0, 0, 1];

// function findWinner(competitions, results) {
//     let scores = {};
//     let topTeam = { 
//          team: "",
//          score: 0 };

//     for (let i = 0; i < competitions.length; i++) {
//         const [homeTeam, awayTeam] = competitions[i];
//         const result = results[i];
//         let winningTeam;

//         if (result === 1) {
//             winningTeam = homeTeam;
//         } else {
//             winningTeam = awayTeam;
//         }
//         if (!scores[winningTeam]) {
//             scores[winningTeam] = 0;
//         }

//         scores[winningTeam] += 3;

//         if (scores[winningTeam] > topTeam.score) {
//             topTeam.score = scores[winningTeam];
//             topTeam.team = winningTeam;
//             console.log(topTeam.score, "points scored by", topTeam.team);
//         }
//     }
    
//     return topTeam.team;
// }


// const winner = findWinner(competitions, results);
// console.log(winner, "is the winner of the tournament. COME ON GUYS")


//PalindromeFinder

// let str = "asdfghjkllkjhgfdsaqweqweqw";

// function findPalindrome(s) {
//     let palindromes = {
//         longestPalindrome: "",
//         allPalindromes: []
//     };
//     for (let i = 0; i < s.length; i++) {
//         for (let j = i + 1; j <= s.length; j++) {
//             let subStr = s.slice(i, j);
//             if (subStr === subStr.split('').reverse().join('') && subStr.length > 1) {
//                 palindromes.allPalindromes.push(subStr);
//                 if (subStr.length > palindromes.longestPalindrome.length) {
//                     palindromes.longestPalindrome = subStr;
//                 }
//             }
//         }
//     }
//     return palindromes;
// }

// findPalindrome(str);
// console.log(findPalindrome(str));


//snakeMatrix

var array = [
    [1,   2,  3, 4],
    [12, 13, 14, 5],
    [11, 16, 15]
    [10,  9,  8, 7]
];


function movementCrossMatrix(ar){
  let topCol = 0;
  let topRow = 0;
  let botCol = ar[0].length - 1;
  let botRow = ar.length - 1;
  let direction = 0;
  let result = [];

  while(topRow <= botRow && topCol <= botCol) {
    if(direction === 0) {
      for(let i = topCol; i <= botCol; i++) {
        result.push(ar[topRow][i]);
      }
      topRow++;
    } else if(direction === 1) {
      for(let i = topRow; i <= botRow; i++) {
        result.push(ar[i][botCol]);
      }
      botCol--;
    } else if(direction === 2) {
      for(let i = botCol; i >= topCol; i--) {
        result.push(ar[botRow][i]);
      }
      botRow--;
    } else {
      for(let i = botRow; i >= topRow; i--) {
        result.push(ar[i][topCol]);
      }
      topCol++;
    }
    direction++;
    if (direction > 3){
        direction = 0;
    }
} return result;
}
movementCrossMatrix(array);
console.log(movementCrossMatrix(array));


