import React from 'react'
import { Editor } from '@tinymce/tinymce-react'

const RTE = () => {
  return (
    <div>
        <Editor
        initialValue='default value'
        init={
            {branding: false,
            height: 500,
            menubar: true,
            plugins: [],
            toolbar: ''
        }
        }>

        </Editor>
    </div>
  )
}

export default RTE