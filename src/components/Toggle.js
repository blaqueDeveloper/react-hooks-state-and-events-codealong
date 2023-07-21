import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState('false')

  function switchState(){
    setIsOn(!isOn)
  }

  // function currentState(){
  //   if(isOn = 'off'){

  //   }
  // }
  const buttonColor = isOn ? "red" : "white"
  // style=color:'red'

  return <button style={{background: buttonColor}} onClick={switchState} >{isOn? "ON" : "OFF"}</button>;
}

export default Toggle;

