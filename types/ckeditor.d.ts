import { Editor } from '@ckeditor/ckeditor5-core'

declare global {
  interface Window {
    editor: Editor
  }
}
