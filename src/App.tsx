import { InlineEditor } from '@src/components/inline-editor'
import './styles/global.css'

function App() {
  return (
    <main className="max-w-xl mx-auto h-svh grid place-items-center">
      <div className="w-full px-4 py-3 *:last:outline flex flex-col gap-2">
        <label htmlFor="editor">Input</label>
        <InlineEditor id="editor" />
      </div>
    </main>
  )
}

export default App
