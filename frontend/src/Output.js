import React from 'react'
import JSONPretty from 'react-json-pretty';
function Output({result}) {
  return (
    <>
    <div>
      <JSONPretty json={result}></JSONPretty>
    </div>
    </>
    
  )
}

export default Output
