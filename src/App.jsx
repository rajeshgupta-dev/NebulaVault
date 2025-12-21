import React, { useState } from 'react'
import Tabview from './Tabview';
import Listview from './Listview';


const App = () => {
  const [ativetab, setActiveTab] = useState("artifacts");
  return (
    <div>
      <h1>NebulaVault</h1>
      {/* <p>{ativetab}</p> */}
      <button onClick={() => setActiveTab("Artifacts")}>Artifacts</button>
      <button onClick={() => setActiveTab("creatures")}>Creatures</button>
      <button onClick={() => setActiveTab("logs")}>Logs</button>
      <Tabview tab={ativetab} />

    </div>
  )
}

export default App