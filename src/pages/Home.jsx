import { useNavigate } from 'react-router-dom'
import { ArrowDown, ArrowUp } from 'lucide-react'
import { useRef } from 'react'

export default function Home() {
  const navigate = useNavigate()
  const inputRef = useRef()

  function handleDrop(e) {
    e.preventDefault()
    navigate('/result')
  }

  function handleFileChange(e) {
    if (e.target.files.length > 0) navigate('/result')
  }

  return (
    <div className="max-w-3xl mx-auto px-4 pt-12 pb-20">
      {/* Hero */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-light text-foreground mb-4 leading-tight">
          Your own <strong className="font-bold">Easy Read</strong> in minutes!
        </h1>
        <p className="text-muted-foreground">Get started for free. No account required.</p>
      </div>

      {/* Drop zone */}
      <div
        onDrop={handleDrop}
        onDragOver={e => e.preventDefault()}
        onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-border rounded-2xl cursor-pointer hover:border-foreground/40 hover:bg-muted/30 transition-colors"
        style={{ minHeight: '380px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}
      >
        <ArrowDown size={28} strokeWidth={1.5} className="text-foreground" />
        <p className="text-2xl font-bold text-foreground">Drop your pdf/doc here!</p>
        <p className="text-sm text-muted-foreground">or tap to select your file</p>
        <ArrowUp size={28} strokeWidth={1.5} className="text-foreground" />
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.doc,.docx,.txt"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </div>
  )
}
