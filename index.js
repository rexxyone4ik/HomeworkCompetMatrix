let competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
    
];

let results = [0, 0, 1];

function findWinner(competitions, results) {
    let scores = {};
    let currentBestTeam = '';
    let maxScore = 0;

    for (let i = 0; i < competitions.length; i++) {
        const [homeTeam, awayTeam] = competitions[i];
        const result = results[i];
        let winningTeam;

        if (result === 1) {
            winningTeam = homeTeam;
        } else {
            winningTeam = awayTeam;
        }
        if (!scores[winningTeam]) {
            scores[winningTeam] = 0;
        }

        scores[winningTeam] += 3;

        if (scores[winningTeam] > maxScore) {
            maxScore = scores[winningTeam];
            currentBestTeam = winningTeam;
            console.log(maxScore, "points scored by", currentBestTeam);
        }
    }
    return currentBestTeam;
}


const winner = findWinner(competitions, results);
console.log(winner, "is the winner of the tournament. COME ON GUYS")