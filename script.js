function Factorial(){
  let num1 = parseInt(document.getElementById("a").value);
  let fact = 1 ;
  for(let i = 1 ; i <= num1 ; i++){
  fact*=i;

}
  document.getElementById("res").innerHTML=fact;
 
}