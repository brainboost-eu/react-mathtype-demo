import type { Editor } from 'ckeditor5'
import {
  Alignment,
  Autoformat,
  BlockQuote,
  Bold,
  Code,
  CodeBlock,
  DecoupledEditor,
  Essentials,
  Heading,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  ListProperties,
  Markdown,
  Paragraph,
  PasteFromOffice,
  PictureEditing,
  RemoveFormat,
  Strikethrough,
  Table,
  TableToolbar,
  TextTransformation,
  Underline,
} from 'ckeditor5'

import 'ckeditor5/ckeditor5.css'

export class CKInlineEditor extends DecoupledEditor {}

function AddClasses(editor: Editor) {
  editor.ui.view.editable.extendTemplate({
    attributes: {
      class: 'my-tailwind-classes',
    },
  })
}

CKInlineEditor.builtinPlugins = [
  AddClasses,
  Alignment,
  Autoformat,
  BlockQuote,
  Bold,
  Code,
  CodeBlock,
  Essentials,
  Heading,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  ListProperties,
  Markdown,
  Paragraph,
  PasteFromOffice,
  PictureEditing,
  RemoveFormat,
  Strikethrough,
  Table,
  TableToolbar,
  TextTransformation,
  Underline,
]

CKInlineEditor.defaultConfig = {
  codeBlock: {
    languages: [
      { language: 'css', label: 'CSS' },
      { language: 'html', label: 'HTML' },
      { language: 'javascript', label: 'JavaScript' },
      { language: 'php', label: 'PHP' },
    ],
  },
  image: {
    resizeUnit: 'px',
    toolbar: [
      'imageStyle:inline',
      'imageStyle:wrapText',
      'imageStyle:breakText',
      '|',
      'toggleImageCaption',
      'imageTextAlternative',
    ],
  },
  table: {
    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
  },
  language: 'en',
}
