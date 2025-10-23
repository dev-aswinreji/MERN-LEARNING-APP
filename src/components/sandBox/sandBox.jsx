import React, { useEffect, useRef, useState } from 'react'

const useSandBox = ({ code: initialCode }) => {
    const iframeRef = useRef(null)
    const [output, setOutput] = useState("")
    const runCode = (codeToRun = initialCode) => {
        setOutput("")
        const script = `
        <script>
        const log = (...args) => parent.postMessage({type:'console', message:args.join(' ') }, '*');
        console.log = log;
        try {
        ${codeToRun}
        } catch (err){
         log('Error:',err.message);
         }
        <\/script> 
        `;
        iframeRef.current.srcdoc = script;
    }
    useEffect(() => {
        const listener = (event) => {
            if (event.data && event.data.type === "console") {

                setOutput((prev) => prev + event.data.message + "\\n");
            }
        }
        window.addEventListener("message", listener``);
        return () => window.removeEventListener("message", listener)
    }, []);
    return {
        runCode,
        output,
        iframe: <iframe ref={iframeRef} sandbox='allow-scripts' style={{ display: "none" }}></iframe>
    }
}

export default useSandBox