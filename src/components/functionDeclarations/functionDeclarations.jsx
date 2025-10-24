import { useState } from "react"
import useSandBox from "../sandBox/sandBox"
import MonacoEditor from "../monacoEditor/monacoEditor";

const FunctionDeclarations = () => {
  const initialCode =
    `function greet(){
      return "hello"
     }
      console.log(greet())
      `;
  const [code, setCode] = useState(initialCode)
  const { runCode, output, iframe } = useSandBox(code)
  return (
    <div style={{ padding: "20px" }}>
      <h2>Lesson: Functions</h2>
      <p>Functions are the core concept in JS.</p>
      <MonacoEditor code={code} onChange={setCode} />

      <button onClick={() => runCode(code)} style={{ marginRight: "10px" }}>Run</button>
      <button onClick={() => setCode(initialCode)}> Reset</button>
      <h3>Output:</h3>
      <pre style={{ background: "black", color: "lime", padding: "10px", height: "120px", overflowY: "auto" }}>
        {output}
      </pre>
      {iframe}
    </div>
  )
}

export default FunctionDeclarations