import React, { useEffect, useRef, useState } from 'react'

const useSandBox = ({ code: initialCode }) => {
  const iframeRef = useRef(null)
  const [output, setOutput] = useState("")
  const runCode = (codeToRun = initialCode) => {
    setOutput("")
    console.log(codeToRun, 'code to run is here')
    const safeCode = codeToRun.replace(/<\/script>/g, "<\\/script>");

    const script = `
    <script>
      // Redirect console.log
      window.console.log = (...args) => {
        parent.postMessage(
          { type: 'console', message: args.map(a => String(a)).join(' ') },
          '*'
        );
      };

      try {
        ${safeCode}
      } catch (err) {
        console.log('Error:', err.message);
      }
    <\/script>`;
    iframeRef.current.srcdoc = script;

  }
  useEffect(() => {
    console.log('inside useEffect')
    const listener = (event) => {
      console.log(event, 'event')
      if (event.data && event.data.type === "console") {
        console.log(event.data.message, 'event message')
        setOutput((prev) => prev + event.data.message + "\n");
      } else {
        console.log('error is here')
      }
    }
    window.addEventListener("message", listener);
    return () => window.removeEventListener("message", listener)
  }, []);
  return {
    runCode,
    output,
    iframe: <iframe ref={iframeRef} sandbox='allow-scripts' style={{ display: "none" }}></iframe>
  }
}

export default useSandBox
