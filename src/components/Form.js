import {useState} from 'react';
import "../Styles/Form.css";

function Form(props){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setMail] = useState('')
    const [emailVer, setMailVer] = useState('')
    const [error, setError]=useState(false)
    
    const handleSubmit = (e) =>{
        e.preventDefault();
       if(firstName.length==0 || lastName.length==0 || email.length==0 || emailVer == email){
        setError(true)
       }
       if(firstName&&lastName&&email){
        console.log("First Name: ",firstName,"\n Last Name: ",lastName,"\n Email: ", email)
       }
       
    }
    return (props.trigger) ? (
        <>
        <div onSubmit={handleSubmit} className='popup'>
            <form className='popup-inner'>
            <div >
                <input className="inputForm" placeholder="First Name" onChange={e=>setFirstName(e.target.value)}/>
            {error&&firstName.length<=0?
            <label className="labelForm">First Name can't be Empty</label>:""} 
            </div>
            <div >
            <input className="inputForm" placeholder="Last Name" onChange={e=>setLastName(e.target.value)}/>
            {error&&lastName.length<=0?
            <label className="labelForm">Last Name can't be Empty</label>:""}
            </div>
            <div >
            <input className="inputForm" placeholder="Email" onChange={e=>setMail(e.target.value)}/>
            {error&&email.length<=0?
            <label className="labelForm">Email can't be Empty</label>:""}
            </div>
            <div >
            <input className="inputForm" placeholder="Email Verification" onChange={e=>setMailVer(e.target.value)}/>
            {error&&(email != emailVer)?
            <label className="labelForm">Email Must match</label>:""}
            </div>
            <div className='FormDiv'>
            <button className="subButton" >Save Info</button>
            {props.childen}
            </div>
            <div>
                <button className="close-btn" onClick={() => props.setTrigger(false)}> X </button>
            </div>
            </form>
        </div>
        
        </>
    ) : "" ;
}
export default Form;