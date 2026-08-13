'use client';

import { useState } from 'react';

const players = [
  { number: 1, name: 'Mateo Rojas', position: 'POR', matches: 12, goals: 0, assists: 1, yellow: 1 },
  { number: 4, name: 'Daniel Torres', position: 'DFC', matches: 11, goals: 1, assists: 0, yellow: 2 },
  { number: 5, name: 'Santiago Pérez', position: 'DFC', matches: 12, goals: 2, assists: 1, yellow: 3 },
  { number: 2, name: 'Juan David León', position: 'LD', matches: 10, goals: 1, assists: 3, yellow: 1 },
  { number: 3, name: 'Nicolás Gómez', position: 'LI', matches: 9, goals: 0, assists: 2, yellow: 2 },
  { number: 8, name: 'Sebastián Vargas', position: 'MC', matches: 12, goals: 4, assists: 5, yellow: 2 },
  { number: 10, name: 'Alejandro Ruiz', position: 'MCO', matches: 12, goals: 7, assists: 6, yellow: 1 },
  { number: 6, name: 'Samuel Castro', position: 'MC', matches: 11, goals: 3, assists: 4, yellow: 3 },
  { number: 7, name: 'Tomás Moreno', position: 'ED', matches: 10, goals: 5, assists: 4, yellow: 1 },
  { number: 9, name: 'Martín Rodríguez', position: 'DC', matches: 12, goals: 10, assists: 3, yellow: 2 },
  { number: 11, name: 'Gabriel Silva', position: 'EI', matches: 11, goals: 6, assists: 7, yellow: 1 },
];

type PlayerData = typeof players[number];

export default function Home() {
  const [selected, setSelected] = useState<PlayerData>(players[9]);

  return (
    <main>
      <nav className="nav"><div className="logo">GALÁCTICOS</div><div className="links"><a href="#historia">Historia</a><a href="#equipos">Equipos</a><a href="#plantilla">Plantilla</a><a href="#noticias">Noticias</a></div></nav>

      <section className="hero"><div className="heroContent"><span className="eyebrow">PASIÓN · TALENTO · FÚTBOL</span><h1>Los que nacieron<br/><em>para ser grandes.</em></h1><p>Una nueva generación de fútbol. Intensidad, talento y mentalidad ganadora en cada partido.</p><a className="button" href="#plantilla">Conoce el equipo →</a></div><div className="ball">⚽</div></section>

      <section id="historia" className="intro"><span className="eyebrow">NUESTRA IDENTIDAD</span><h2>El fútbol no se juega.<br/><em>Se vive.</em></h2><p>Galácticos es una comunidad que comparte una obsesión: competir, mejorar y disfrutar el juego. Cada entrenamiento es una oportunidad para demostrar de qué estamos hechos.</p></section>

      <section id="equipos" className="stats"><div><strong>01</strong><span>Un solo objetivo</span></div><div><strong>11</strong><span>Jugadores en cancha</span></div><div><strong>∞</strong><span>Pasión por el fútbol</span></div></section>

      <section id="plantilla" className="squad-section">
        <div className="squad-heading"><div><span className="eyebrow">PLANTILLA 2026</span><h2>El equipo.</h2><p>Conoce nuestra alineación, posiciones y estadísticas.</p></div><strong>4-3-3</strong></div>
        <div className="squad-content">
          <div className="pitch-card"><div className="pitch">
            <div className="half-line"/><div className="center-circle"/><div className="goal top"/><div className="goal bottom"/>
            <div className="row striker"><Player player={players[9]} onClick={setSelected}/></div>
            <div className="row r1"><Player player={players[10]} onClick={setSelected}/><Player player={players[6]} onClick={setSelected}/><Player player={players[8]} onClick={setSelected}/></div>
            <div className="row r2"><Player player={players[4]} onClick={setSelected}/><Player player={players[7]} onClick={setSelected}/><Player player={players[5]} onClick={setSelected}/></div>
            <div className="row r3"><Player player={players[3]} onClick={setSelected}/><Player player={players[2]} onClick={setSelected}/><Player player={players[1]} onClick={setSelected}/></div>
            <div className="row keeper"><Player player={players[0]} onClick={setSelected}/></div>
          </div></div>
          <aside className="player-panel"><span className="eyebrow">JUGADOR</span><h3>Estadísticas</h3><div className="profile"><div className="avatar">{selected.number}</div><div><strong>{selected.name}</strong><small>{selected.position} · #{selected.number}</small></div></div><div className="player-stats"><Stat label="Partidos" value={selected.matches}/><Stat label="Goles" value={selected.goals}/><Stat label="Asistencias" value={selected.assists}/><Stat label="Amarillas" value={selected.yellow}/></div><span className="list-label">PLANTILLA COMPLETA</span><div className="players-list">{players.map(p=><button className={selected.number===p.number?'player active':'player'} key={p.number} onClick={()=>setSelected(p)}><span className="shirt">{p.number}</span><span><b>{p.name}</b><small>{p.position}</small></span><i>{p.goals} ⚽</i></button>)}</div></aside>
        </div>
      </section>

      <section id="noticias" className="cta"><span className="eyebrow">GALÁCTICOS</span><h2>El próximo capítulo<br/>lo escribimos <em>juntos.</em></h2><a className="button" href="mailto:galacticos@example.com">Únete a nosotros →</a></section>
      <footer><span>© 2026 GALÁCTICOS</span><span>Fútbol · Comunidad · Pasión</span></footer>
    </main>
  );
}

function Player({ player, onClick }: { player: PlayerData; onClick: (p: PlayerData) => void }) { return <button className="pitch-player" onClick={()=>onClick(player)}><span>{player.number}</span><b>{player.name.split(' ')[0]}</b><small>{player.position}</small></button>; }
function Stat({ label, value }: { label: string; value: number }) { return <div><strong>{value}</strong><span>{label}</span></div>; }
