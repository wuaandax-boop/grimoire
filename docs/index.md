<style>
  /* --- WIDGET CONTAINER --- */
  .aoe4-widget-container {
    position: fixed; right: 20px; top: 100px; width: 300px;
    z-index: 9999; font-family: 'Segoe UI', sans-serif;
    background-color: #111; border: 1px solid #d4af37;
    border-radius: 6px; box-shadow: 0 10px 40px rgba(0,0,0,0.95);
    display: flex; flex-direction: column; overflow: hidden;
  }
  
  /* Mobile */
  @media (max-width: 768px) {
    .aoe4-widget-container { position: relative; right: auto; top: auto; width: 100%; margin-bottom: 20px; }
  }

  /* Header */
  .aoe4-header {
    background: linear-gradient(90deg, #d4af37 0%, #8a7322 100%);
    color: #000; padding: 10px 15px; font-weight: 800; font-size: 14px;
    display: flex; justify-content: space-between; align-items: center; letter-spacing: 0.5px;
  }
  .close-x { cursor: pointer; font-size: 16px; } .close-x:hover { color: #fff; }

  /* Body */
  .aoe4-body { padding: 15px; color: #eee; font-size: 13px; }

  /* Sezioni */
  .section-title {
    font-size: 11px; font-weight: bold; color: #d4af37; border-bottom: 1px solid #333;
    padding-bottom: 5px; margin-bottom: 10px; margin-top: 5px; text-transform: uppercase;
  }

  /* Griglia */
  .stat-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 15px;
  }

  /* Box Dati */
  .stat-box {
    background: #1e1e1e; border: 1px solid #333; border-radius: 4px; padding: 8px;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    min-height: 60px;
    overflow: hidden; /* IMPORTANTE: Taglia tutto ciò che esce */
  }
  
  .stat-label { font-size: 9px; color: #888; text-transform: uppercase; margin-bottom: 6px; letter-spacing: 0.5px; }

  /* Immagini Badge */
  .badge-data { height: 20px; display: block; border-radius: 2px; max-width: 100%; object-fit: contain; }
  
  /* Contenitore W/L */
  .wl-container { display: flex; gap: 4px; justify-content: center; margin-top: 4px; width: 100%; }
  
  /* IMPORTANTE: Questo forza i badge piccoli a non uscire mai */
  .badge-mini { height: 18px; max-width: 48%; object-fit: contain; }

  /* Bottone */
  .profile-btn {
    display: block; width: 100%; padding: 10px 0; background: #222; color: #d4af37;
    text-align: center; text-decoration: none; font-size: 11px; font-weight: bold;
    border-radius: 4px; border: 1px solid #444; transition: 0.2s; text-transform: uppercase;
  }
  .profile-btn:hover { background: #333; border-color: #d4af37; }
</style>

<div class="aoe4-widget-container" id="aoe4-widget-box">
  
  <div class="aoe4-header">
    <span>🏆 PAVONCELLA</span>
    <span class="close-x" onclick="document.getElementById('aoe4-widget-box').style.display='none'">✕</span>
  </div>

  <div class="aoe4-body">
    
    <div class="section-title">Solo Ranked (1v1)</div>
    <div class="stat-grid">
      
      <div class="stat-box">
        <span class="stat-label">RANK & ELO</span>
        <img class="badge-data" src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Faoe4world.com%2Fapi%2Fv0%2Fplayers%2F2478066&query=%24.modes.rm_1v1.rating&label=ELO&color=d4af37&labelColor=111&style=flat-square" alt="Elo">
        <div style="margin-top:4px;">
           <img class="badge-data" src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Faoe4world.com%2Fapi%2Fv0%2Fplayers%2F2478066&query=%24.modes.rm_1v1.rank_level&label=&color=222&style=flat-square" alt="Rank">
        </div>
      </div>

      <div class="stat-box">
        <span class="stat-label">PERFORMANCE</span>
        <img class="badge-data" src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Faoe4world.com%2Fapi%2Fv0%2Fplayers%2F2478066&query=%24.modes.rm_1v1.win_rate&label=WIN%20RATE&suffix=%25&color=orange&labelColor=111&style=flat-square" alt="WR">
        
        <div class="wl-container">
           <img class="badge-mini" src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Faoe4world.com%2Fapi%2Fv0%2Fleaderboards%2Frm_1v1%3Fprofile_id%3D2478066&query=%24.players%5B0%5D.wins&label=W&color=2e7d32&labelColor=1e1e1e&style=flat-square" alt="Wins">
           <img class="badge-mini" src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Faoe4world.com%2Fapi%2Fv0%2Fleaderboards%2Frm_1v1%3Fprofile_id%3D2478066&query=%24.players%5B0%5D.losses&label=L&color=b71c1c&labelColor=1e1e1e&style=flat-square" alt="Losses">
        </div>
      </div>

    </div>

    <div class="section-title">Team Ranked</div>
    <div class="stat-grid">
      
      <div class="stat-box">
        <span class="stat-label">RANK & ELO</span>
        <img class="badge-data" src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Faoe4world.com%2Fapi%2Fv0%2Fplayers%2F2478066&query=%24.modes.rm_team.rating&label=ELO&color=1565c0&labelColor=111&style=flat-square" alt="Team Elo">
        <div style="margin-top:4px;">
           <img class="badge-data" src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Faoe4world.com%2Fapi%2Fv0%2Fplayers%2F2478066&query=%24.modes.rm_team.rank_level&label=&color=222&style=flat-square" alt="Team Rank">
        </div>
      </div>

      <div class="stat-box">
        <span class="stat-label">PERFORMANCE</span>
        <img class="badge-data" src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Faoe4world.com%2Fapi%2Fv0%2Fplayers%2F2478066&query=%24.modes.rm_team.win_rate&label=WIN%20RATE&suffix=%25&color=orange&labelColor=111&style=flat-square" alt="Team WR">
        
        <div class="wl-container">
           <img class="badge-data" src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Faoe4world.com%2Fapi%2Fv0%2Fplayers%2F2478066&query=%24.modes.rm_team.games_count&label=GAMES&color=444&labelColor=1e1e1e&style=flat-square" alt="Total Games">
        </div>
      </div>

    </div>

    <a href="https://aoe4world.com/players/2478066" target="_blank" class="profile-btn">
      Vedi Profilo Completo ↗
    </a>
  </div>
</div>

<br> # 🎄 Dax's Grimoire 🎄

Benvenuto, stratega.
Questo è il mio archivio tattico per dominare Age of Empires 4.

??? info "⌨️ Tabella Hotkeys (Clicca per espandere)"
    Ecco i comandi rapidi essenziali.
    *(Nota: La configurazione si basa sul layout "Griglia" standard)*.

    ### 🌍 Gestione Globale e Selezione
    | Tasto (Default) | Azione |
    | :--- | :--- |
    | **Ctrl + A** | Seleziona **tutte** le unità visibili **a schermo** |
    | **Ctrl + Shift + C** | Seleziona tutto l'Esercito (Intera Mappa) |
    | **Ctrl + Shift + V** | Seleziona tutti gli Abitanti (Intera Mappa) |
    | **.** *(Punto)* | Seleziona 1 Abitante Inattivo (Idle) |
    | **Ctrl + .** | Seleziona **TUTTI** gli Abitanti Inattivi |
    | **H** | Centra camera sul Centro Città (TC) |

    ### 🌾 Gestione Economia (Cicla/Seleziona)
    | Tasto (Default) | Azione |
    | :--- | :--- |
    | **Ctrl + Shift + F** | Seleziona tutti gli abitanti su **Cibo** (Food) |
    | **Ctrl + Shift + W** | Seleziona tutti gli abitanti su **Legna** (Wood) |
    | **Ctrl + Shift + G** | Seleziona tutti gli abitanti su **Oro** (Gold) |
    | **Ctrl + Shift + S** | Seleziona tutti gli abitanti su **Pietra** (Stone) |

    ### ⚔️ Comandi e Gruppi
    | Tasto (Default) | Azione |
    | :--- | :--- |
    | **A** + Click Terra | **Attack Move** (Attacca muovendosi) |
    | **S** | **Stop** (Ferma unità / Cancella coda) |
    | **Tab** | Cicla tra i tipi di unità nella selezione corrente |
    | **Ctrl + [0-9]** | Crea Gruppo di Controllo |
    | **Shift + [0-9]** | Aggiungi unità al Gruppo esistente |