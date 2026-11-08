import { ChevronRight, Pause, Play, RotateCcw, SkipForward } from 'lucide-react'
import { useEffect, useState } from 'react'

import { SectionHead } from './SectionHead'
const simNodes = [
  'React Frontend',
  'Spring Boot API',
  'Business Logic',
  'PostgreSQL',
  'API Response',
]
export function EngineeringLab() {
  const [step, setStep] = useState(0)
  const [running, setRunning] = useState(false)
  const [details, setDetails] = useState(false)
  useEffect(() => {
    if (!running) return
    const t = setTimeout(() => {
      setStep(step + 1)
      if (step === 4) setRunning(false)
    }, 900)
    return () => clearTimeout(t)
  }, [running, step])
  const reset = () => {
    setRunning(false)
    setStep(0)
  }
  return (
    <section id="expertise" tabIndex={-1} className="section lab">
      <SectionHead
        index="03"
        label="ENGINEERING LAB"
        title={
          <>
            DON’T JUST READ.
            <br />
            <em>INTERACT WITH IT.</em>
          </>
        }
        copy="A conceptual full-stack request lifecycle inspired by TradeSphere. This demonstration is not connected to a live backend."
      />
      <div className="lab-console">
        <div className="lab-top">
          <span>REQUEST VISUALIZER / INVENTORY</span>
          <span className={running ? 'online' : ''}>
            <i /> {running ? 'PROCESSING' : 'READY'}
          </span>
        </div>
        <div className="flow">
          {simNodes.map((n, i) => (
            <div
              className={`flow-node ${step === i + 1 || (step === 5 && i === 0) ? 'active' : ''}`}
              key={n}
            >
              <span>0{i + 1}</span>
              <div>
                {i === 0
                  ? '⌁'
                  : i === 1
                    ? '<>'
                    : i === 2
                      ? '◇'
                      : i === 3
                        ? '▰'
                        : '↩'}
              </div>
              <b>{n}</b>
              <small>
                {
                  [
                    'Creates GET /inventory',
                    'Validates request',
                    'Applies stock rules',
                    'Reads inventory data',
                    'Updates the interface',
                  ][i]
                }
              </small>
              {i < 4 && (
                <i className={`connector ${step > i + 1 ? 'passed' : ''}`}>
                  <em />
                </i>
              )}
            </div>
          ))}
        </div>
        <div className="lab-result">
          <span>SIMULATED RESULT</span>
          <code>
            {step === 0
              ? '{ status: "waiting" }'
              : step < 5
                ? `{ stage: "${simNodes[step - 1]}", processing: true }`
                : '{ sku: "TS-042", available: 24, reserved: 3 }'}
          </code>
        </div>
        <div className="lab-controls">
          <button
            onClick={() => setRunning(true)}
            disabled={running || step === 5}
          >
            <Play size={14} /> Start simulation
          </button>
          <button onClick={() => setRunning(false)}>
            <Pause size={14} /> Pause
          </button>
          <button
            onClick={() => {
              setRunning(false)
              setStep((s) => Math.min(5, s + 1))
            }}
          >
            <SkipForward size={14} /> Step through
          </button>
          <button onClick={reset}>
            <RotateCcw size={14} /> Reset
          </button>
          <button
            className="details-button"
            onClick={() => setDetails(!details)}
          >
            {details ? 'Hide' : 'Show'} technical details{' '}
            <ChevronRight size={14} />
          </button>
        </div>
        {details && (
          <div className="technical-details">
            <div>
              <b>01 — REQUEST</b>
              <p>
                The React client creates a simulated REST request for current
                inventory data.
              </p>
            </div>
            <div>
              <b>02 — BUSINESS RULES</b>
              <p>
                The API and service layer validate access and apply inventory
                rules before reading data.
              </p>
            </div>
            <div>
              <b>03 — RESPONSE</b>
              <p>
                Structured data returns to the client, which updates the user
                interface.
              </p>
            </div>
          </div>
        )}
      </div>
      <DecisionPanel />
    </section>
  )
}

function DecisionPanel() {
  const decisions = [
    [
      'Transactional stock reservations',
      'Protect inventory consistency when orders compete for the same available stock.',
    ],
    [
      'REST API design',
      'Create clear contracts between frontend experiences and backend capabilities.',
    ],
    [
      'Offline-first persistence',
      'Keep core mobile workflows available without depending on a network.',
    ],
    [
      'Reactive state management',
      'Make application state transitions explicit, predictable, and testable.',
    ],
    [
      'Automated testing',
      'Use repeatable checks to protect important behavior as a system evolves.',
    ],
    [
      'CI/CD workflows',
      'Turn integration and release steps into reliable, repeatable processes.',
    ],
  ]
  const [active, setActive] = useState(0)
  return (
    <div className="decisions">
      <div>
        <span>ENGINEERING DECISIONS</span>
        <h3>How I think about systems.</h3>
        <p>
          Select a topic to explore the reasoning represented in my projects.
        </p>
      </div>
      <div className="decision-tabs">
        {decisions.map((d, i) => (
          <button
            className={active === i ? 'active' : ''}
            onClick={() => setActive(i)}
            key={d[0]}
          >
            <small>0{i + 1}</small>
            {d[0]}
          </button>
        ))}
      </div>
      <div className="decision-copy">
        <span>CONCEPT / 0{active + 1}</span>
        <h4>{decisions[active]?.[0]}</h4>
        <p>{decisions[active]?.[1]}</p>
      </div>
    </div>
  )
}
