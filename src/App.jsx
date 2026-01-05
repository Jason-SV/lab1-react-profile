import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProfileCard from './components/ProfileCard'

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>My Team Portfolio</h1>
      <ProfileCard
        name={"Jason Chawsuan"}
        role={"Student @ CEDT"}
        bio={"I am a very general student with a little bit skill in backend."}
      />
      <ProfileCard
        name={"Robloxian Stevens"}
        role={"Student @ SOMEPLACE"}
        bio={"I come from Roblox."}
      />
    </div>
  );
}

export default App;
