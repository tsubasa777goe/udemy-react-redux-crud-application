import React from 'react';

function App() {
  // const greeting = "Hiiiii, TOM!!!"
  // const dom = <h1 className="foo">{greeting}</h1>
  return (
    // <input type="text"  onClick={() => {console.log("I am a cat")}}/>
    <input type="text"  onChange={() => {console.log("I am a cat")}}/>
);
}


export default App;
