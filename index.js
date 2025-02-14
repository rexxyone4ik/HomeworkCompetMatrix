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

let str = "aaccaadaa";

function findPalindrome(str) {
    let palindromes = {
        longestPalindrome: "",
        allPalindromes: []
    };
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let subStr = str.slice(i, j);
            if (subStr === subStr.split('').reverse().join('') && subStr.length > 1) {
                palindromes.allPalindromes.push(subStr);
                if (subStr.length > palindromes.longestPalindrome.length) {
                    palindromes.longestPalindrome = subStr;
                }
            }
        }
    }
    return palindromes;
}

findPalindrome(str);
console.log(findPalindrome(str));
