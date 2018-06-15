$(document).ready(function(){
var randomVar;
getQuote();
function getQuote(){
var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

  $.getJSON(url, function(data){
  randomVar = data.quoteText; 

    $(".quote").hide().fadeIn(1000).html('"' + data.quoteText +'"');
    $(".author").html("- " + data.quoteAuthor); 
randomVar = data.quoteText;  
});
}
  
$('#tweet').on("click",function(){
window.open("https://twitter.com/intent/tweet?text=" + randomVar);
});
$("#next-quote").on("click",function(){
getQuote();
});
});