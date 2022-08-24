/*input asina libellé ou placeholder
label for"id" de input 
input type + id
case : 
snake_case: html
 PascalCase: var  class php
 Kebab-case: class html 
camelCase :var js/php
this: equivalent parent an action = ilay _.onchange mila mitandrina 
*/
//2eme evenement: .onchange
var birthInput = document.getElementById("birth_input");
var ageInput = document.getElementById("age_input");

var birthSpan = document.getElementById("birth_span");
var ageSpan = document.getElementById("age_span");

birthInput.onchange = function() {
    //console.log(this.value);    
    //ou
    //console.log(birthInput.value);

    var birthValue = this.value;
    birthSpan.innerText = birthValue;
}

ageInput.onchange = function() { // input na select no ampaiasana
    var ageValue = this.value;
    ageSpan.innerText = ageValue;
}

//3eme evenement: .onkeyup
ageInput.onkeyup = function() { 
    var ageValue = this.value;
    ageSpan.innerText = ageValue;
}
/*nom profil 
nom
prenom
age
date de naissance
adress
tel
formulaire + information
*/