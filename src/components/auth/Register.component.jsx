import React, {useState} from 'react'
import firebase from '../../firebase'

const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(email, password, passwordConfirmation)

        if (password === passwordConfirmation) {
            firebase.auth().createUserWithEmailAndPassword(email, password).catch( error => {
                console.log('Error Code', error.code)
                console.log('Error Msg', error.message)
            })
        } else {
            console.log('Password is not matching please try again')
        }
        
    }

    return (
        <div>
         
           <form onSubmit={handleSubmit}>
                <div>
                    <input name='email' onChange={event => setEmail(event.target.value)} value={email} type='text' />
               </div>
               <div>
                   <input name='password' onChange={event=> setPassword(event.target.value)} value={password} type='password'   />
               </div>
               <div>
                   <input name='passwordConfirmation' onChange={event=> setPasswordConfirmation(event.target.value)}  value={passwordConfirmation} type='password' />
               </div>
               <button>라라라라</button>
           </form>
        </div>
    )
}

export default Register
