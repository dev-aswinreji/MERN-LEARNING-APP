import { useState } from "react";
import useSandBox from "../sandBox/sandBox";
import MonacoEditor from "../monacoEditor/monacoEditor";

const VariableDeclaration = () => {
  const initialCode = `let name = "John"; console.log("Hello", name);`;
  const [code, setCode] = useState(initialCode)
  const { runCode, output, iframe } = useSandBox(code)

  return (
    <div style={{ padding: "20px" }}>
      <h2>Lesson: JavaScript Variables</h2>
      <p>Variables are used to store data values.</p>
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

export default VariableDeclaration