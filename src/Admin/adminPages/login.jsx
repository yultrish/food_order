import React from 'react'
import './login.css'

const Login = () => {
  return (
    <>
    <div class="form-container">  	
		

			<div class="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button className='btn'>Login</button>
				</form>
			</div>
	</div>
    </>
  )
}

export default Login