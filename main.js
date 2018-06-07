function callbackfunction(data){
	console.log(data);
	$("#phptest").append(data);
}

function callphp(){
	$.ajax({
		url: "test.php",
		method: "GET",
		dataType: "html",
		success: function(data){
			callbackfunction(data);
		}
	});
}


function callbackfunctionwithp(data){
	console.log(data);
	$("#phptest").append(data);
}

function callphpwithp(name){
	$.ajax({
		url: "test.php",
		method: "GET",
		dataType: "html",
		data: {namep: name},
		success: function(data){
			callbackfunction(data);
		}
	});
}

$(document).on("click", ".button", function(){
	// callphp();
	var name = $("#input").val();
	callphpwithp(name);

});

$(document).ready(function(){
	console.log("document ready");


});