import { Editor } from '@monaco-editor/react'
import React from 'react'

const MonacoEditor = ({ code, onChange, readonly = false, height = "150px" ,width= "550px"}) => {
    return (
        <Editor
            height={height}
            width={width}
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