import { Editor } from '@src/components/editor'
import './styles/global.css'

function App() {
  return (
    <main className="max-w-xl mx-auto h-svh grid place-items-center">
      <div className="w-full px-4 py-3 *:last:border-b *:outline-none flex flex-col gap-2">
        <label htmlFor="editor">Input</label>
        <Editor id="editor" />
      </div>
    </main>
  )
}

export default App
