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

export default function Home() {
  const [selected, setSelected] = useState(players[9]);

  return (
    <main className="site">
      <header className="hero">
        <div>
          <span className="eyebrow">GALÁCTICOS FC</span>
          <h1>Plantilla <span>2026</span></h1>
          <p>Conoce nuestra alineación, jugadores y estadísticas de temporada.</p>
        </div>
        <div className="record"><strong>12</strong><span>Partidos</span></div>
        <div className="record"><strong>38</strong><span>Goles</span></div>
      </header>

      <section className="content">
        <div className="pitch-card">
          <div className="section-title"><div><span>ALINEACIÓN</span><h2>Once inicial</h2></div><b>4-3-3</b></div>
          <div className="pitch">
            <div className="half-line" />
            <div className="center-circle" />
            <div className="goal top" /><div className="goal bottom" />
            <Player player={players[9]} onClick={setSelected} />
            <div className="row r1"><Player player={players[10]} onClick={setSelected} /><Player player={players[6]} onClick={setSelected} /><Player player={players[8]} onClick={setSelected} /></div>
            <div className="row r2"><Player player={players[4]} onClick={setSelected} /><Player player={players[7]} onClick={setSelected} /><Player player={players[5]} onClick={setSelected} /></div>
            <div className="row r3"><Player player={players[3]} onClick={setSelected} /><Player player={players[2]} onClick={setSelected} /><Player player={players[1]} onClick={setSelected} /></div>
            <div className="row keeper"><Player player={players[0]} onClick={setSelected} /></div>
          </div>
        </div>

        <aside className="panel">
          <div className="section-title"><div><span>JUGADOR</span><h2>Estadísticas</h2></div></div>
          <div className="profile"><div className="avatar">{selected.number}</div><div><h3>{selected.name}</h3><p>{selected.position} · #{selected.number}</p></div></div>
          <div className="stats-grid">
            <Stat label="Partidos" value={selected.matches} /><Stat label="Goles" value={selected.goals} /><Stat label="Asistencias" value={selected.assists} /><Stat label="Amarillas" value={selected.yellow} />
          </div>
          <div className="table-title">Plantilla completa</div>
          <div className="players-list">{players.map((p) => <button className={selected.number === p.number ? 'player active' : 'player'} key={p.number} onClick={() => setSelected(p)}><span className="shirt">{p.number}</span><span><strong>{p.name}</strong><small>{p.position}</small></span><b>{p.goals} ⚽</b></button>)}</div>
        </aside>
      </section>
    </main>
  );
}

function Player({ player, onClick }: { player: typeof players[number]; onClick: (p: typeof players[number]) => void }) {
  return <button className="pitch-player" onClick={() => onClick(player)}><span>{player.number}</span><strong>{player.name.split(' ')[0]}</strong><small>{player.position}</small></button>;
}

function Stat({ label, value }: { label: string; value: number }) {
  return <div className="stat"><strong>{value}</strong><span>{label}</span></div>;
}
