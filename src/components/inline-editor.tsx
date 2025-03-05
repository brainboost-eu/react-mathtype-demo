import { CKEditor } from '@ckeditor/ckeditor5-react'
import type { ComponentProps } from 'react'
import { CKInlineEditor } from './inline-editor.ck'

export type InlineEditorProps = Omit<ComponentProps<typeof CKEditor>, 'editor'>

export function InlineEditor(props: InlineEditorProps) {
  return <CKEditor editor={CKInlineEditor} disableWatchdog {...props} />
}
