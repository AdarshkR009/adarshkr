function registration()
{
    var fname=document.myform.fname.value;
    var email= document.myform.email.value;
	var pword= document.myform.pword.value;
		var letters = /^[A-Za-z]+$/;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
       if(fname=='')
		{
			alert('Please enter your name');
		}
		else if(!letters.test(fname))
		{
			alert('Name field required only alphabet characters');
		}
		else if(email=='')
		{
			alert('Please enter your user email id');
		}
		else if (!filter.test(email))
		{
			alert('Invalid email');
		}
        else if(pword=='')
		{
			alert('Please enter Password');
		}
        else
		{				                            
               alert('Thank You for Login & Welcome to focusbank');
		}
	
    
    
}

