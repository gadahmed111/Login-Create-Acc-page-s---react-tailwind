/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
function TheInputBody(props) {
  return (
    <div className="TheInputBody ">
    <p className="TheTxtOfInput text-sm">{props.TheInputType}</p>
    <input className="TheGenralInput " type={props.inputType} placeholder={props.Placeholder} value={props.valueOfInput} onChange={props.OnChangeInputValue} />
    </div>
  )
}

export default TheInputBody