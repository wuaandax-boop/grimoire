document.addEventListener("DOMContentLoaded", function() {
    const profileId = '2478066'; 
    const apiUrl = `https://aoe4world.com/api/v0/players/${profileId}`;

    const nameMap = {
        "unranked": "unranked",
        "bronze_1": "bronze1", "bronze_2": "bronze2", "bronze_3": "bronze3",
        "silver_1": "silver1", "silver_2": "silver2", "silver_3": "silver3",
        "gold_1": "gold1", "gold_2": "gold2", "gold_3": "gold3",
        "platinum_1": "plat1", "platinum_2": "plat2", "platinum_3": "plat3",
        "diamond_1": "dia1", "diamond_2": "dia2", "diamond_3": "dia3",
        "conqueror_1": "conq1", "conqueror_2": "conq2", "conqueror_3": "conq3"
    };

    function updateStats(mode, prefix, season) {
        if (season) {
            const seasonEl = document.getElementById('aoe-season');
            if (seasonEl) seasonEl.innerText = "Season " + season;
        }

        const eloEl = document.getElementById(prefix + '-elo');
        const rankEl = document.getElementById(prefix + '-rank');
        const wrEl = document.getElementById(prefix + '-wr');
        const wlEl = document.getElementById(prefix + '-wl');
        const imgEl = document.getElementById(prefix + '-img');

        if (!eloEl) return;

        if (!mode || !mode.rating) {
            rankEl.innerText = "UNRANKED";
            eloEl.innerText = "---";
            imgEl.src = "assets/ranks/unranked.jpg";
            wlEl.innerHTML = `<span class="w-green">0W</span> - <span class="l-red">0L</span>`;
            return;
        }

        eloEl.innerText = mode.rating;
        rankEl.innerText = mode.rank_level ? mode.rank_level.replace(/_/g, ' ').toUpperCase() : 'UNRANKED';
        wrEl.innerText = (mode.win_rate || 0) + '% WR';

        // Calcolo matematico per W/L
        const totalGames = mode.games_count || 0;
        const winRate = mode.win_rate || 0;
        const wins = Math.round((totalGames * winRate) / 100);
        const losses = totalGames - wins;
        wlEl.innerHTML = `<span class="w-green">${wins}W</span> - <span class="l-red">${losses}L</span>`;

        // Gestione Immagini
        let fileName = (mode.rank_level && nameMap[mode.rank_level]) ? nameMap[mode.rank_level] : "unranked";
        let extension = (fileName === "unranked") ? ".jpg" : ".svg";
        imgEl.src = "assets/ranks/" + fileName + extension;
    }

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const currentSeason = data.modes.rm_1v1 ? data.modes.rm_1v1.season : 
                                 (data.modes.rm_team ? data.modes.rm_team.season : "");
            
            updateStats(data.modes.rm_1v1, 'solo', currentSeason);
            updateStats(data.modes.rm_team, 'team', null);
        })
        .catch(error => console.error('Errore:', error));
});