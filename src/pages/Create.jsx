import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Upload, FileText, Type, Wand2, ChevronRight, X } from 'lucide-react'

const inputModes = [
  { id: 'paste', label: 'Paste text', icon: Type },
  { id: 'upload', label: 'Upload file', icon: Upload },
]

const options = [
  { id: 'reading_age', label: 'Target reading age', type: 'select', choices: ['8–10 years', '10–12 years', '12–14 years'] },
  { id: 'include_images', label: 'Include image placeholders', type: 'toggle' },
  { id: 'formatting', label: 'Output format', type: 'select', choices: ['Word document (.docx)', 'PDF', 'Plain text'] },
]

export default function Create() {
  const [mode, setMode] = useState('paste')
  const [text, setText] = useState('')
  const [fileName, setFileName] = useState(null)
  const [step, setStep] = useState(1)
  const navigate = useNavigate()

  function handleGenerate() {
    navigate('/result')
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-foreground mb-2">Create a document</h1>
        <p className="text-muted-foreground">Paste your text or upload a file, and we'll translate it into Easy Read.</p>
      </div>

      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-8">
        {['Add content', 'Options', 'Generate'].map((label, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`flex items-center gap-2 ${step > i + 1 ? 'text-primary' : step === i + 1 ? 'text-foreground' : 'text-muted-foreground'}`}>
              <div className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center border-2 transition-colors ${
                step > i + 1 ? 'bg-primary border-primary text-primary-foreground' :
                step === i + 1 ? 'border-foreground text-foreground' :
                'border-border text-muted-foreground'
              }`}>
                {i + 1}
              </div>
              <span className="text-sm font-medium hidden sm:block">{label}</span>
            </div>
            {i < 2 && <ChevronRight size={14} className="text-muted-foreground mx-1" />}
          </div>
        ))}
      </div>

      {/* Step 1 — Add content */}
      {step === 1 && (
        <div className="space-y-6">
          {/* Mode toggle */}
          <div className="flex gap-2 p-1 bg-muted rounded-xl w-fit">
            {inputModes.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setMode(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  mode === id ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon size={15} /> {label}
              </button>
            ))}
          </div>

          {mode === 'paste' ? (
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Your text</label>
              <textarea
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Paste the text you want to translate into Easy Read here..."
                className="w-full h-64 p-4 rounded-xl border border-input bg-background text-foreground text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground"
              />
              <p className="text-xs text-muted-foreground mt-2">{text.length} characters</p>
            </div>
          ) : (
            <div className="border-2 border-dashed border-border rounded-xl p-12 text-center">
              {fileName ? (
                <div className="flex items-center justify-center gap-3">
                  <FileText size={20} className="text-primary" />
                  <span className="text-sm text-foreground font-medium">{fileName}</span>
                  <button onClick={() => setFileName(null)} className="text-muted-foreground hover:text-foreground">
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <>
                  <Upload size={28} className="text-muted-foreground mx-auto mb-3" />
                  <p className="text-sm font-medium text-foreground mb-1">Drop your file here</p>
                  <p className="text-xs text-muted-foreground mb-4">Word (.docx) or PDF — up to 10 MB</p>
                  <label className="inline-flex px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground cursor-pointer hover:bg-muted transition-colors">
                    Browse files
                    <input type="file" className="hidden" accept=".docx,.pdf,.txt" onChange={e => setFileName(e.target.files[0]?.name)} />
                  </label>
                </>
              )}
            </div>
          )}

          <div className="flex justify-end">
            <button
              onClick={() => setStep(2)}
              disabled={mode === 'paste' ? text.length < 10 : !fileName}
              className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold disabled:opacity-40 hover:opacity-90 transition-opacity"
            >
              Next: Options
            </button>
          </div>
        </div>
      )}

      {/* Step 2 — Options */}
      {step === 2 && (
        <div className="space-y-6">
          <div className="space-y-4">
            {options.map(({ id, label, type, choices }) => (
              <div key={id} className="flex items-center justify-between p-4 rounded-xl border border-border bg-card">
                <label htmlFor={id} className="text-sm font-medium text-foreground">{label}</label>
                {type === 'select' ? (
                  <select
                    id={id}
                    className="text-sm border border-input rounded-lg px-3 py-1.5 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    {choices.map(c => <option key={c}>{c}</option>)}
                  </select>
                ) : (
                  <button
                    id={id}
                    className="relative w-11 h-6 rounded-full bg-muted transition-colors peer-checked:bg-primary"
                    role="switch"
                    aria-checked="false"
                  >
                    <span className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow transition-transform" />
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <button onClick={() => setStep(1)} className="px-4 py-2.5 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors">
              Back
            </button>
            <button onClick={() => setStep(3)} className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
              Next: Generate
            </button>
          </div>
        </div>
      )}

      {/* Step 3 — Generate */}
      {step === 3 && (
        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-border bg-card space-y-3">
            <h3 className="font-semibold text-foreground">Ready to generate</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Input: {mode === 'paste' ? `${text.length} characters of text` : fileName}</p>
              <p>Target reading age: 8–10 years</p>
              <p>Format: Word document (.docx)</p>
            </div>
          </div>

          <div className="flex justify-between">
            <button onClick={() => setStep(2)} className="px-4 py-2.5 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors">
              Back
            </button>
            <button
              onClick={handleGenerate}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <Wand2 size={16} /> Generate Easy Read
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
