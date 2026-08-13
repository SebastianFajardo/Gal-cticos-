export default function Home() {
  return (
    <main>
      <nav className="nav"><div className="logo">GALÁCTICOS</div><div className="links"><a href="#historia">Historia</a><a href="#equipos">Equipos</a><a href="#noticias">Noticias</a></div></nav>
      <section className="hero"><div className="heroContent"><span className="eyebrow">PASIÓN · TALENTO · FÚTBOL</span><h1>Los que nacieron<br/><em>para ser grandes.</em></h1><p>Una nueva generación de fútbol. Intensidad, talento y mentalidad ganadora en cada partido.</p><a className="button" href="#equipos">Conoce el equipo →</a></div><div className="ball">⚽</div></section>
      <section id="historia" className="intro"><span className="eyebrow">NUESTRA IDENTIDAD</span><h2>El fútbol no se juega.<br/><em>Se vive.</em></h2><p>Galácticos es una comunidad que comparte una obsesión: competir, mejorar y disfrutar el juego. Cada entrenamiento es una oportunidad para demostrar de qué estamos hechos.</p></section>
      <section id="equipos" className="stats"><div><strong>01</strong><span>Un solo objetivo</span></div><div><strong>11</strong><span>Jugadores en cancha</span></div><div><strong>∞</strong><span>Pasión por el fútbol</span></div></section>
      <section id="noticias" className="cta"><span className="eyebrow">GALÁCTICOS</span><h2>El próximo capítulo<br/>lo escribimos <em>juntos.</em></h2><a className="button" href="mailto:galacticos@example.com">Únete a nosotros →</a></section>
      <footer><span>© 2026 GALÁCTICOS</span><span>Fútbol · Comunidad · Pasión</span></footer>
    </main>
  );
}
