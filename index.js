let arrayOfQuotes=[
{
    "author":"Ratan Tata",
    "quote":"None can destroy iron, but its own rust can! Likewise none can destroy a person, but its own mindset can!"

},
{
    "author":"Elon Musk",
    "quote":"When something is important enough,you do it even if the odds are not in your favour"

},
{
    "author":"Dr. A.P.J. Abdul kalam",
    "quote":"The best brains of nation may be found on the last bench of classroom"

},
{
    "author":"Dhirubhai Ambani",
    "quote":"If you don't build your dream someone else will hire you to help them theirs"

},
{
    "author":"Nelson Mandela",
    "quote":"The greatest glory in living lies not in never falling, but in rising every time we fall"

}

]

function randomSelector(arrayLength){
    return Math.floor(Math.random()*arrayLength);
}
function generateQuote(){
    let randomNumber=randomSelector(arrayOfQuotes.length);
    document.getElementById("quoteOutput").innerHTML=""+arrayOfQuotes[randomNumber].quote+"" ;
    document.getElementById("authorOutput").innerHTML="-"+arrayOfQuotes[randomNumber].author ;
}













