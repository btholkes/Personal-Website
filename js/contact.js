$(document).ready(function(){
	$("#nameAlert").hide();
	$("#messageAlert").hide();
	$("#emailAlert").hide();

	$("#submitButton").click(function(){
		tryToSubmit();
	});
});

function tryToSubmit()
{
	if(isValid())
	{
		$("#contactForm").submit();
	}
}

function ValidateEmail(mail)
{
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))  
	{  
    	return (true)  
  	}   
    	return (false)  
}  

function isValid()
{
	var name, message, email;

	name = $("#name").val();
	message = $("#message").val();
	email = $("#email").val();

	valid = true;

	if(name=="")
	{
		$("#nameAlert").show();
		valid = false;
	}
	else
		$("#nameAlert").hide();

	if(message == "")
	{
		$("#messageAlert").show();
		valid = false;
	}
	else
		$("#messageAlert").hide();

	if(!ValidateEmail(email))
	{
		$("#emailAlert").show();
		valid = false;
	}
	else
		$("#emailAlert").hide();

	return valid;
}