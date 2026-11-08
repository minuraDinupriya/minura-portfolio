import type { FormEvent, KeyboardEvent } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

import { SectionHead } from './SectionHead'
type TerminalLine = { cmd?: string; output: React.ReactNode }
export function Terminal() {
  const navigate = useNavigate()
  const [input, setInput] = useState('')
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      output:
        'Type “help” to explore. No fake system access — just useful portfolio shortcuts.',
    },
  ])
  const [history, setHistory] = useState<string[]>([])
  const [cursor, setCursor] = useState(0)
  const commands: Record<string, () => React.ReactNode> = {
    help: () =>
      `Commands: about, education, experience, skills, projects, tradesphere, focuspilot, contact, github, linkedin, resume, clear`,
    about: () =>
      `Minura Ranaweera — Software Engineering Undergraduate & Full-Stack Developer from Sri Lanka.`,
    education: () =>
      `BICT (Hons), Software Technology · University of Sri Jayewardenepura · Current GPA 3.80/4.00`,
    experience: () =>
      `Software Development Intern at iCET Sri Lanka — completed six-month internship.`,
    skills: () =>
      `Java · TypeScript · Spring Boot · React · Node.js · Flutter · PostgreSQL · MongoDB · Docker · Testing · CI/CD`,
    projects: () =>
      `TradeSphere · Sri Lanka Smart Lost & Found · FocusPilot · LumoSense`,
    tradesphere: () => {
      void navigate('/projects/tradesphere')
      return 'Opening TradeSphere case study…'
    },
    focuspilot: () => {
      void navigate('/projects/focuspilot')
      return 'Opening FocusPilot case study…'
    },
    contact: () => `minuraranaweera@gmail.com`,
    github: () => {
      window.open(
        'https://github.com/minuraDinupriya',
        '_blank',
        'noopener,noreferrer',
      )
      return 'Opening GitHub profile…'
    },
    linkedin: () => {
      window.open(
        'https://www.linkedin.com/in/minura-ranaweera',
        '_blank',
        'noopener,noreferrer',
      )
      return 'Opening LinkedIn profile…'
    },
    resume: () => {
      void navigate('/resume')
      return 'Opening résumé…'
    },
    clear: () => null,
  }
  const submit = (e: FormEvent) => {
    e.preventDefault()
    const cmd = input.trim().toLowerCase()
    if (!cmd) return
    if (cmd === 'clear') setLines([])
    else {
      const output = Object.hasOwn(commands, cmd)
        ? commands[cmd]?.()
        : `Command not found: ${cmd}. Type “help”.`
      setLines((l) => [...l, { cmd, output }])
    }
    setHistory((h) => [...h, cmd])
    setCursor(history.length + 1)
    setInput('')
  }
  const key = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const n = Math.max(0, cursor - 1)
      setCursor(n)
      setInput(history[n] || '')
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const n = Math.min(history.length, cursor + 1)
      setCursor(n)
      setInput(history[n] || '')
    }
  }
  return (
    <section className="section terminal-section">
      <SectionHead
        index="06"
        label="DEVELOPER TERMINAL"
        title={
          <>
            A DIRECT LINE
            <br />
            <em>INTO THE WORK.</em>
          </>
        }
      />
      <div className="terminal">
        <div className="terminal-bar">
          <i />
          <i />
          <i />
          <span>minura@portfolio:~</span>
        </div>
        <div className="terminal-body" aria-live="polite">
          {lines.map((l, i) => (
            <div className="terminal-line" key={i}>
              {l.cmd && (
                <b>
                  <span>→</span> {l.cmd}
                </b>
              )}
              <p>{l.output}</p>
            </div>
          ))}
          <form onSubmit={submit}>
            <label htmlFor="terminal-input">→</label>
            <input
              id="terminal-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={key}
              autoComplete="off"
              spellCheck={false}
              aria-label="Terminal command"
            />
          </form>
        </div>
      </div>
    </section>
  )
}
