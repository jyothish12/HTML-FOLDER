import React, {useState} from 'react';


function Fun() {
	const [name , setName] = useState('');
	const [email , setEmail] = useState('');
	const [password , setPassword] = useState('');
	const [confPassword , setConfPassword] = useState('');

	// function to update state of name with
	// value enter by user in form
	const handleChange =(e)=>{
	setName(e.target.value);
	}
	
	
	// function to update state of email with value
	// enter by user in form
	const handleEmailChange =(e)=>{
	setEmail(e.target.value);
	}
	// function to update state of password with
	// value enter by user in form
	const handlePasswordChange =(e)=>{
	setPassword(e.target.value);
	}
	// function to update state of confirm password
	// with value enter by user in form
	const handleConfPasswordChange =(e)=>{
	setConfPassword(e.target.value);
	}
	// below function will be called when user
	// click on submit button .
	const handleSubmit=(e)=>{
	
	
	}
	e.preventDefault()
}
	
return(
	<div>
	<form onSubmit={(e) => {handleSubmit(e)}}>
	{/*when user submit the form , handleSubmit()
		function will be called .*/}
    <label >
		Name:
		</label><br/>
		<input type="text" value={name} required onChange={(e)=> {handleChange(e)}} /><br/>
		{ /*when user write in name input box , handleChange()
			function will be called. */}
	
		<label>
		Email:
		</label><br/>
		<input type="email" value={email} required onChange={(e)=> {handleEmailChange(e)}} /><br/>
		{/* when user write in email input box , handleEmailChange()
			function will be called.*/}
		<label>
		Password:
		</label><br/>
		<input type="password" value={password} required onChange={(e)=> {handlePasswordChange(e)}} /><br/>
			{/* when user write in password input box ,
				handlePasswordChange() function will be called.*/}
		<label>
		Confirm Password:
		</label><br/>
		<input type="password" value={confPassword} required onChange={(e)=> {handleConfPasswordChange(e)}} /><br/>
				{/* when user write in confirm password input box ,
					handleConfPasswordChange() function will be called.*/}
		<input type="submit" value="Submit"/>
	</form>
	
	</div>
)
}

export default Fun
