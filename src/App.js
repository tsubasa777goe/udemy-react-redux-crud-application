import React from 'react';
import PropTypes from 'prop-types';


function App() {
  // const greeting = "Hiiiii, TOM!!!"
  // const dom = <h1 className="foo">{greeting}</h1>

const profiles = [
  { name: "Taro", age: 20 },
  { name: "Hanako", age: 5 },
  { name: "NoName", age: 3}
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

User.propTypes = {
  name: PropTypes.string,
  // string:文字列　それ以外を入力するとエラーを出力
  age: PropTypes.number.isRequired
  // number:数字　それ以外を入力するとエラーを出力
  // isRequired:入力必須　入力されていなければエラー
}

export default App;
