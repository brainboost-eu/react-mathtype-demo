import { CKEditor } from '@ckeditor/ckeditor5-react'
import MathType from '@wiris/mathtype-ckeditor5/src/plugin.js'
import { Bold, DecoupledEditor, Essentials, Italic, Paragraph } from 'ckeditor5'
import type { ComponentProps } from 'react'

export type EditorProps = Omit<ComponentProps<typeof CKEditor>, 'editor'>

export function Editor(props: EditorProps) {
  return (
    <CKEditor
      editor={DecoupledEditor}
      disableWatchdog
      {...props}
      config={{
        placeholder: 'Type here',
        // FIXME Adding this breaks everything and causes 'Uncaught CKEditorError: ckeditor-duplicated-modules'.
        // Comment out 'MathType,' to see working version.
        plugins: [Essentials, Paragraph, Bold, Italic, MathType],
        toolbar: [
          'undo',
          'redo',
          '|',
          'bold',
          'italic',
          '|',
          'MathType',
          'ChemType',
        ],
        ...(props.config ?? {}),
      }}
    />
  )
}
