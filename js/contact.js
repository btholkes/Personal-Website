$(document).ready(function(){
	$("#nameAlert").hide();
	$("#messageAlert").hide();
	$("#emailAlert").hide();
	$("#thankDisplay").hide();
	$("#submitButton").click(submit());
	$("#backButton").click(back());
});

function back()
{
	$("#nameAlert").hide();
	$("#messageAlert").hide();
	$("#emailAlert").hide();
	$("#thankDisplay").hide();
	$("#contactForm").show();
}

function submit()
{
	if(isValid)
	{
		$("#contactForm").submit();
	}
}

function validateEmail(email) 
{
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

function isValid()
{
	var name, message, email;

	name = $("#name").val();
	message = $("#message").val();
	email = $("#email").val();

	if(name=="")
	{
		$("#nameAlert").show();
		return false;
	}
	else if(message == "")
	{
		$("#messageAlert").show();
		return false;
	}
	else if(validateEmail(email))
	{
		$("#emailAlert").show();
		return false;
	}
	else
	{
		return true;
	}
}