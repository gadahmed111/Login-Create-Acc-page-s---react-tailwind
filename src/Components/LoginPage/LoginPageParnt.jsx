import LoginPageHeaderTxt from "./LoginPageHeaderTxt"
import TheInputBody from "./TheInputBody"
import { useState } from "react";
function LoginPageParnt() {
  const [inputValue, setInputValue] = useState('');
  let handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value)
  }
  return (
    <div className="mx-auto TheBCParntBody text-left p-3 pt-4  pb-4 rounded-2xl px-5  text-slate-100 w-5/12">
        <LoginPageHeaderTxt></LoginPageHeaderTxt>
        <br />
        <TheInputBody TheInputType="Email" Placeholder="Enter your email" inputType="txt" valueOfInput={inputValue} OnChangeInputValue={handleInputChange}>
        
        </TheInputBody>
    </div>
  )
}

export default LoginPageParnt