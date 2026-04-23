export const skills = [
  { name: 'Python',      level: 90, color: '#00ff9f' },
  { name: 'FastAPI',     level: 85, color: '#00ff9f' },
  { name: 'React',       level: 80, color: '#00cfff' },
  { name: 'JavaScript',  level: 78, color: '#00cfff' },
  { name: 'PostgreSQL',  level: 70, color: '#a78bfa' },
  { name: 'Express.js',  level: 40, color: '#f59e0b', learning: true },
]

export const projects = [
  {
    id: '01',
    name: 'Hospital Management System',
    desc: 'A full-stack hospital management system built to manage patients, doctors, appointments, and medical records with role-based access control and secure authentication.',
    stack: ['FastAPI', 'PostgreSQL', 'JWT', 'REST API'],
    live: null,
    github: 'https://github.com/AwoniyiIbrahim/Hospital-management-system',
    featured: true,
  },
  {
    id: '02',
    name: 'TestAlchemy',
    desc: 'A backend testing and automation project built with FastAPI for creating and running structured API tests, helping validate endpoints and improve backend reliability.',
    stack: ['FastAPI', 'Python', 'REST API','JWT'],
    live: null,
    github: 'https://github.com/AwoniyiIbrahim/testalchemy',
    featured: false,
  },
  {
    id: '03',
    name: 'Digital Wallet System',
    desc: 'A secure digital wallet backend built with FastAPI that enables user authentication, wallet creation, fund transfers, and transaction tracking with a PostgreSQL database.',
    stack: ['FastAPI', 'PostgreSQL', 'JWT', 'SQLAlchemy', 'REST API'],
    live: null,
    github: 'https://github.com/AwoniyiIbrahim/Digital_wallet',
    featured: false,
  },
  {
    id: '04',
    name: 'Tic Tac Toe Game',
    desc: 'A simple interactive Tic Tac Toe game built using HTML, CSS, and JavaScript with basic game logic, player turns, and win/draw detection in the browser.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://tic-tac-two-omega.vercel.app/',
    github: 'https://github.com/AwoniyiIbrahim/tic-tac',
    featured: false,
  },
    {
    id: '05',
    name: 'CV Builder / Portfolio CV App',
    desc: 'A React-based CV builder application that allows users to input personal details and dynamically generate a structured resume layout in real time.',
    stack: ['React', 'JavaScript', 'CSS', 'HTML'],
    live: 'https://cv-ochre-five.vercel.app/',
    github: 'https://github.com/AwoniyiIbrahim/CV',
    featured: false,
  },
]

export const navItems = ['home', 'skills', 'projects', 'about', 'contact']

export const terminalLines = [
  '$ whoami',
  '> ibrahim — fullstack developer',
  '$ skills --list',
  '> python | fastapi | react | js',
  '$ location',
  '> lagos, nigeria',
  '$ status',
  '> available for work ✓',
  '$ _',
]

export const stats = [
  { num: '5+', label: 'projects shipped' },
  { num: '2+', label: 'years coding' },
  { num: '3',  label: 'core languages' },
]
