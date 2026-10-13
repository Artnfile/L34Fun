import { useMemo, useState } from 'react'
import RobotScene from './RobotScene'

const targets = [3, 5, 2, 4, 1]
type Trial = { trial: number; target: number; response: number; correct: boolean; elapsedMs: number }

function csv(trials: Trial[]) {
  return ['trial,target_number,response_number,correct,response_time_ms', ...trials.map(t => `${t.trial},${t.target},${t.response},${t.correct},${t.elapsedMs}`)].join('\n')
}

export default function App() {
  const [index, setIndex] = useState(0)
  const [trials, setTrials] = useState<Trial[]>([])
  const [startedAt, setStartedAt] = useState(() => performance.now())
  const [message, setMessage] = useState('BOLT-5 is ready. Choose the number of stars you see!')
  const target = targets[index]
  const finished = index === targets.length
  const score = useMemo(() => trials.filter(t => t.correct).length, [trials])

  function choose(response: number) {
    if (finished) return
    const correct = response === target
    const next = [...trials, { trial: index + 1, target, response, correct, elapsedMs: Math.round(performance.now() - startedAt) }]
    setTrials(next)
    setMessage(correct ? 'Nice noticing! That is right.' : `Good try — there are ${target} stars. Let's keep exploring.`)
    setIndex(index + 1)
    setStartedAt(performance.now())
  }

  function download() {
    const blob = new Blob([csv(trials)], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = 'anmo-fictional-trials.csv'; a.click()
    URL.revokeObjectURL(url)
  }

  return <main>
    <header><div className="brand"><span>AN</span>MO <small>LEARNING LAB</small></div><div className="pill">Number explorer</div></header>
    <section className="hero">
      <div className="copy"><p className="eyebrow">A gentle, playful practice space</p><h1>Count. Choose. <em>Celebrate.</em></h1><p className="intro">Meet BOLT-5, your curious robot guide. This short activity helps practice noticing small groups of objects with clear, calm feedback.</p><div className="principles"><span>✓ No names collected</span><span>✓ Fictional practice data</span><span>✓ Keyboard friendly</span></div></div>
      <RobotScene />
    </section>
    <section className="game" aria-labelledby="game-title">
      <div className="game-head"><div><p className="eyebrow">Activity {Math.min(index + 1, targets.length)} of {targets.length}</p><h2 id="game-title">How many stars?</h2></div><div className="score">{score} <small>correct</small></div></div>
      {!finished ? <><div className="star-card" aria-label={`${target} stars`}><div className="stars">{Array.from({ length: target }, (_, i) => <span key={i}>★</span>)}</div></div><p className="prompt">{message}</p><div className="answers" aria-label="Choose a number">{[1,2,3,4,5].map(n => <button key={n} onClick={() => choose(n)}>{n}</button>)}</div></> : <div className="complete"><h3>Mission complete!</h3><p>You found {score} of {targets.length} star groups. BOLT-5 saved a fictional, anonymous practice record.</p><button className="download" onClick={download}>Download fictional CSV</button><button className="again" onClick={() => { setIndex(0); setTrials([]); setMessage('BOLT-5 is ready. Choose the number of stars you see!'); setStartedAt(performance.now()) }}>Play again</button></div>}
    </section>
    <footer>Made for low-pressure practice. This demo stores nothing and does not identify learners.</footer>
  </main>
}
