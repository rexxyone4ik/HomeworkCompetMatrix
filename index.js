let competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
    
];

let results = [0, 0, 1];

function findWinner(competitions, results) {
    let scores = {};
    let topTeam = { 
         team: "",
         score: 0 };

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

        if (scores[winningTeam] > topTeam.score) {
            topTeam.score = scores[winningTeam];
            topTeam.team = winningTeam;
        }
    }
    return topTeam.team;
}


const winner = findWinner(competitions, results);
console.log(winner, "is the winner of the tournament. COME ON GUYS")