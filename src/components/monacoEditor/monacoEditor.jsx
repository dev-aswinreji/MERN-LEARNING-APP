import { Editor } from '@monaco-editor/react'
import React from 'react'

const MonacoEditor = ({ code, onChange, readonly = false, height = "250px" }) => {
    return (
        <Editor
            height={height}
            defaultLanguage='javascript'
            value={code}
            onChange={onChange}
            options={{
                readonly,
                minimap: { enabled: false },
                fontSize: 16,
                automaticLayout: true
            }}
        />
    )
}

export default MonacoEditor