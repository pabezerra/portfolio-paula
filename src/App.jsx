
import React from 'react'
import { Icon } from './icons'
import { LINKS } from './config'
import foto from './assets/foto_paula_round.png'
import coverStudioP from './assets/cover_studiop.svg'
import coverMovie from './assets/cover_moviefinder.svg'
import logoMate from './assets/logo-mate.png'
import logoAnhembi from './assets/logo-uam.jpeg'

const skills = [
  {name:'JavaScript', icon:'js'},
  {name:'TypeScript', icon:'ts'},
  {name:'React', icon:'react'},
  {name:'Redux', icon:'redux'},
  {name:'HTML5', icon:'html'},
  {name:'CSS3', icon:'css'},
  {name:'Vue.js', icon:'vue'},
  {name:'Angular', icon:'angular'},
  {name:'SQL', icon:'sql'},
  {name:'POO', icon:'poo'},
  {name:'Git', icon:'git'},
  {name:'Terminal', icon:'terminal'},
  {name:'Scrum', icon:'scrum'},
  {name:'GenAI Essentials', icon:'genai'},
]

const projects = [
  { title: 'StudioP Concept', desc: 'Site institucional focado em responsividade, boa tipografia e UX.', href: 'https://studiop-concept.vercel.app/', stack: ['HTML', 'CSS', 'JavaScript'], cover: coverStudioP },
  { title: 'Movie Finder', desc: 'Busca de filmes com debounce, favoritos e Redux Toolkit.', href: 'https://movie-finder-7lfo.vercel.app/', stack: ['React', 'TypeScript', 'Redux Toolkit', 'Vite'], cover: coverMovie }
]

function CVButton(){
  const url = LINKS.cv
  const ready = url && url !== 'COLE_AQUI_SEU_LINK_DO_CV'
  const label = ready ? 'Currículo (PDF)' : 'Currículo — adicionar link'
  return <a className="btn" href={ready ? url : undefined} target="_blank" rel="noreferrer" aria-disabled={!ready} style={!ready?{opacity:.7, cursor:'not-allowed'}:{}}>{label}</a>
}

function Mascot({size=30}){
  return (
    <span aria-hidden="true" className="mascot" style={{width:size, height:size}}>
      <svg width={size} height={size} viewBox="0 0 100 100">
        <defs>
          <linearGradient id="m" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8C6FF6"/>
            <stop offset="100%" stopColor="#3DD9EB"/>
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="46" fill="url(#m)" opacity="0.9"/>
        <circle cx="35" cy="42" r="6" className="eye"/>
        <circle cx="65" cy="42" r="6" className="eye"/>
        <path d="M32 64c6 6 30 6 36 0" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round"/>
      </svg>
    </span>
  )
}

export default function App(){
  return (
    <div className="container">
      <nav className="nav">
        <div className="logo">
          <img src="/pb-mark.svg" alt="PB logo"/>
          <span>Paula Bezerra • Dev Front-End</span>
        </div>
        <div className="socials">
          <a className="iconbtn" href={LINKS.github} target="_blank" rel="noreferrer" title="GitHub">
            <Icon name="github" /><span>GitHub</span>
          </a>
          <a className="iconbtn" href={LINKS.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
            <img src={new URL('./assets/logo-linkedin.png', import.meta.url).href} alt="LinkedIn" style={{width:18, height:18, borderRadius:4}}/>
            <span>LinkedIn</span>
          </a>
          <CVButton />
        </div>
      </nav>

      <header className="hero">
        <div>
          <h1>
            Olá, eu sou a <span className="name-inline">Paula Bezerra <Mascot size={30}/></span>
          </h1>
          <div className="subtitle">Desenvolvedora Front-End</div>

          <p>
            Construo interfaces acessíveis, responsivas e bem testadas. Estudo <strong>Full Stack na Mate Academy</strong> e curso
            <strong> Análise e Desenvolvimento de Sistemas</strong> na <strong>Anhembi Morumbi</strong>.
          </p>
          <p>
            <strong>Sobre mim:</strong> atuo com JavaScript moderno e ecossistema React. Tenho base em <em>POO</em>, versionamento com Git, integração de APIs e organização de entregas com Scrum. Meu foco é transformar requisitos em experiências agradáveis e eficientes para quem usa.
          </p>

          <div className="skills">
            {skills.map(s => (
              <div key={s.name} className="skill" title={s.name}>
                <Icon name={s.icon}/> <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="photo" aria-hidden="true">
          <img src={foto} alt="Foto de Paula Bezerra" />
        </div>
      </header>

      <section id="projetos" className="section">
        <h2>Projetos em destaque</h2>
        <div className="grid">
          {projects.map(p => (
            <a key={p.title} className="card" href={p.href} target="_blank" rel="noreferrer">
              <span className="cover"><img src={p.cover} alt={"Capa de " + p.title} /></span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tags">
                {p.stack.map(s => <span key={s} className="badge">{s}</span>)}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Formação</h2>
        <div className="grid">
          <div className="card">
            <div className="brand"><img src={logoMate} alt="Logo Mate Academy"/><h3>Mate Academy — Full Stack</h3></div>
            <p className="small">Front-End moderno, boas práticas, Git, testes, UX e projetos reais.</p>
          </div>
          <div className="card">
            <div className="brand"><img src={logoAnhembi} alt="Logo Universidade Anhembi Morumbi"/><h3>Universidade Anhembi Morumbi — ADS</h3></div>
            <p className="small">Fundamentos de computação, POO, SQL e engenharia de software.</p>
          </div>
        </div>
      </section>

      <section id="contato" className="section">
        <h2>Contato</h2>
        <div className="card">
          <p className="small">
            Fale comigo: <a className="link" href="mailto:paula.abezerra@gmail.com">paula.abezerra@gmail.com</a> •
            <a className="link" style={{marginLeft:8}} href={LINKS.github} target="_blank" rel="noreferrer">GitHub</a> •
            <a className="link" style={{marginLeft:8}} href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
          <p className="small">
            Para ativar o botão do currículo, altere <code>LINKS.cv</code> em <code>src/config.js</code> para a URL do seu PDF.
          </p>
        </div>
      </section>

      <footer className="footer">
        <span className="small">© {new Date().getFullYear()} Paula Bezerra</span>
        <div className="badges">
          <span className="badge">Acessível</span>
          <span className="badge">Responsivo</span>
          <span className="badge">Performance</span>
        </div>
      </footer>
    </div>
  )
}
