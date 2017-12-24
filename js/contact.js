$(document).ready(function(){
	$("#nameAlert").hide();
	$("#messageAlert").hide();
	$("#emailAlert").hide();
	$("#thankDisplay").hide();
	console.log("Ready called");

	$("#submitButton").click(function(){
		submitAction();
	});

	$("#backButton").click(function(){
		backAction();
	});
});

function backAction()
{
	console.log("Back Button Called");
	$("#nameAlert").hide();
	$("#messageAlert").hide();
	$("#emailAlert").hide();
	$("#thankDisplay").hide();
	$("#contactForm").show();
}

function submitAction()
{
	console.log("Submit Button Clicked!");

	if(isValid())
	{
		$("#contactForm").submit();
		$("#nameAlert").hide();
		$("#messageAlert").hide();
		$("#emailAlert").hide();
		$("#thankDisplay").hide();
		$("#contactForm").hide();
		$("#thankDisplay").show();
	}
}

function ValidateEmail(mail)   
{  
	console.log("Email Tested", mail);
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