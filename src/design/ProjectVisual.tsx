import { Check, Pause, Play } from 'lucide-react'
import { useEffect, useState } from 'react'

function DashboardMockup() {
  return (
    <div
      className="dashboard"
      aria-label="Conceptual TradeSphere dashboard mockup"
    >
      <div className="mock-label">CONCEPTUAL UI MOCKUP</div>
      <aside>
        <b>TS</b>
        {['Overview', 'Inventory', 'Orders', 'Customers'].map((x, i) => (
          <span className={i === 1 ? 'active' : ''} key={x}>
            {x.slice(0, 1)}
            <small>{x}</small>
          </span>
        ))}
      </aside>
      <div className="dash-main">
        <header>
          <div>
            <small>WAREHOUSE / CENTRAL</small>
            <h4>Inventory overview</h4>
          </div>
          <i />
        </header>
        <div className="metric-row">
          <div>
            <small>TOTAL PRODUCTS</small>
            <b>—</b>
            <em>Catalog</em>
          </div>
          <div>
            <small>STOCK STATUS</small>
            <b>Live</b>
            <em>Reserved + available</em>
          </div>
          <div>
            <small>FULFILLMENT</small>
            <b>Flow</b>
            <em>Order operations</em>
          </div>
        </div>
        <div className="chart">
          <div className="chart-head">
            <b>Inventory movement</b>
            <span>Concept preview</span>
          </div>
          <svg viewBox="0 0 500 130">
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop stopColor="#8b5cf6" stopOpacity=".35" />
                <stop offset="1" stopColor="#8b5cf6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              className="area"
              d="M0 110 C65 105 70 72 130 80S205 32 275 50s98-20 150-6 55-25 75-30V130H0Z"
            />
            <path d="M0 110 C65 105 70 72 130 80S205 32 275 50s98-20 150-6 55-25 75-30" />
          </svg>
        </div>
      </div>
    </div>
  )
}

function LostFoundVisual() {
  return (
    <div className="network-visual">
      <div className="network-copy">
        <span>REAL-TIME FLOW</span>
        <b>
          Find. Verify.
          <br />
          Reconnect.
        </b>
      </div>
      <svg viewBox="0 0 640 390">
        <path d="M85 90C190 20 260 180 340 125S465 40 560 92M80 310c110 65 170-110 270-35s140-90 225-10M200 210c60-80 170-70 240 10" />
        {[
          [85, 90],
          [200, 210],
          [340, 125],
          [440, 220],
          [560, 92],
          [80, 310],
          [350, 275],
          [575, 265],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={i % 3 === 0 ? 14 : 8} />
            <circle className="pulse" cx={x} cy={y} r={i % 3 === 0 ? 24 : 16} />
          </g>
        ))}
        <circle className="packet" r="6">
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path="M85 90C190 20 260 180 340 125S465 40 560 92"
          />
        </circle>
      </svg>
      <div className="network-legend">
        <span>
          <i /> ITEM REPORT
        </span>
        <span>
          <i /> VERIFICATION
        </span>
        <span>
          <i /> MESSAGE
        </span>
      </div>
    </div>
  )
}

function PhoneVisual() {
  const [view, setView] = useState<'focus' | 'tasks' | 'analytics'>('focus')
  const [seconds, setSeconds] = useState(25 * 60)
  const [running, setRunning] = useState(false)
  useEffect(() => {
    if (!running) return
    const timer = setInterval(
      () => setSeconds((v) => (v > 0 ? v - 1 : 25 * 60)),
      1000,
    )
    return () => clearInterval(timer)
  }, [running])
  return (
    <div className="phone-scene">
      <div className="mock-label">INTERACTIVE WEB DEMONSTRATION</div>
      <div className="phone">
        <div className="phone-top" />
        <div className="phone-ui">
          <header>
            <small>GOOD MORNING,</small>
            <b>Stay focused.</b>
          </header>
          {view === 'focus' && (
            <div className="timer">
              <small>FOCUS SESSION</small>
              <strong>
                {String(Math.floor(seconds / 60)).padStart(2, '0')}:
                {String(seconds % 60).padStart(2, '0')}
              </strong>
              <button onClick={() => setRunning(!running)}>
                {running ? <Pause size={16} /> : <Play size={16} />}{' '}
                {running ? 'Pause' : 'Begin focus'}
              </button>
            </div>
          )}
          {view === 'tasks' && (
            <div className="tasks">
              <small>TODAY'S TASKS</small>
              {[
                'Review API tests',
                'Refine dashboard UI',
                'Study software architecture',
              ].map((x, i) => (
                <div key={x}>
                  <span className={i === 0 ? 'done' : ''}>
                    {i === 0 && <Check size={12} />}
                  </span>
                  {x}
                </div>
              ))}
            </div>
          )}
          {view === 'analytics' && (
            <div className="analytics">
              <small>FOCUS RHYTHM</small>
              <div>
                {[42, 65, 36, 78, 56, 88, 68].map((h, i) => (
                  <i key={i} style={{ height: `${h}%` }} />
                ))}
              </div>
              <b>Weekly view</b>
            </div>
          )}
          <nav>
            {(['focus', 'tasks', 'analytics'] as const).map((v) => (
              <button
                key={v}
                className={view === v ? 'active' : ''}
                onClick={() => setView(v)}
              >
                {v}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

function LampVisual() {
  const [ambient, setAmbient] = useState(35)
  const brightness = 100 - ambient * 0.7
  return (
    <div className="lamp-scene">
      <div className="mock-label">INTERACTIVE SENSOR SIMULATION</div>
      <div className="lamp-glow" style={{ opacity: brightness / 100 }} />
      <div className="lamp">
        <div className="lamp-head">
          <i style={{ opacity: brightness / 100 }} />
        </div>
        <div className="lamp-arm" />
        <div className="lamp-base" />
      </div>
      <div className="sensor-panel">
        <div>
          <span>LDR</span>
          <b>{ambient < 45 ? 'LOW LIGHT' : 'BRIGHT'}</b>
        </div>
        <div>
          <span>PIR</span>
          <b>OCCUPIED</b>
        </div>
        <div>
          <span>ULTRA</span>
          <b>POSTURE OK</b>
        </div>
        <label>
          AMBIENT LIGHT <output>{ambient}%</output>
          <input
            aria-label="Ambient light"
            type="range"
            value={ambient}
            onChange={(e) => setAmbient(+e.target.value)}
          />
        </label>
      </div>
    </div>
  )
}

export function ProjectVisual({ slug }: { slug: string }) {
  if (slug === 'tradesphere') return <DashboardMockup />
  if (slug === 'smart-lost-and-found-sl') return <LostFoundVisual />
  if (slug === 'focuspilot') return <PhoneVisual />
  return <LampVisual />
}
