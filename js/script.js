$(document).ready(function(){
	
	
	$('.SendEmail').submit(function(){
		var	Nom = $("#Nom").val();
		var	Courriel = $("#Courriel").val();
		var	Message = $("#Message").val();
		var	Sujet = $("#Sujet").val();
		
		$.post('SendEmail.php',{Nom:Nom,Courriel:Courriel,Message:Message,Sujet:Sujet},function(donnees){
			$("#Nom").val('');
			$("#Courriel").val('');
			$("#Message").val('');
			$("#Sujet").val('');
		});
		
		return false;
	});

	});	