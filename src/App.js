import React from 'react';

function App() {
  // const greeting = "Hiiiii, TOM!!!"
  // const dom = <h1 className="foo">{greeting}</h1>

const profiles = [
  { name: "Taro", age: 10 },
  { name: "Hanako", age: 5 },
  { name: "Noname"}
]

  return (
    // <input type="text"  onClick={() => {console.log("I am a cat")}}/>
    // <input type="text"  onChange={() => {console.log("I am a cat")}}/>
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
      <User name={"Taro"} age={10} />
      <User name={"Hanako"} age={5} />
    </div>
);
}

const User = (props) => {
  return <div>Hi, I am {props.name}! , and {props.age}years old!</div>
}


User.defaultProps = {
  age: 1
}

export default App;
