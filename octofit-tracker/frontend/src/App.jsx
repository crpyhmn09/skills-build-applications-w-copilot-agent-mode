import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import { API_BASE_URL } from './api'
import Activities from './components/Activities'
import Leaderboard from './components/Leaderboard'
import Teams from './components/Teams'
import Users from './components/Users'
import Workouts from './components/Workouts'
import './App.css'

const navigation = [
  { label: 'Activities', to: '/activities', note: 'Movement log' },
  { label: 'Leaderboard', to: '/leaderboard', note: 'Current standings' },
  { label: 'Teams', to: '/teams', note: 'Train together' },
  { label: 'Athletes', to: '/users', note: 'Community' },
  { label: 'Workouts', to: '/workouts', note: 'Session library' },
]

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-lockup">
          <img src="/octofitapp-small.png" alt="OctoFit Tracker" className="brand-mark" />
          <div>
            <span className="brand-kicker">Mergington High</span>
            <strong>OctoFit</strong>
          </div>
        </div>

        <div className="sidebar-rule" />
        <p className="nav-label">Your arena</p>
        <nav className="main-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} key={item.to} to={item.to}>
              <span className="nav-link-index">{String(navigation.indexOf(item) + 1).padStart(2, '0')}</span>
              <span>
                <strong>{item.label}</strong>
                <small>{item.note}</small>
              </span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <span className="pulse-dot" />
          <div>
            <strong>API connected</strong>
            <small>{API_BASE_URL.replace('https://', '').replace('http://', '')}</small>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <span className="topbar-path">OCTOFIT / 2026 SEASON</span>
          <span className="topbar-status">Week 03 <span className="status-slash">/</span> Keep showing up</span>
        </header>
        <Routes>
          <Route path="/" element={<Navigate to="/activities" replace />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
