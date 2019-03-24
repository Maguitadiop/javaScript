
  document.querySelector("#formulaire-calcul-salaire").addEventListener("submit", function (event) {
         event.preventDefault();
   
         var isValide=true;
         var prenom = document.querySelector("#prenom").value;
         var nom = document.querySelector("#nom").value;
         var sexe = document.querySelector("#sexe").value;
        
         var salaireBrute = parseInt(document.querySelector("#salaire-brute").value,10);
         var nombreEnfant = parseInt(document.querySelector("#nombre-personne-a-charge").value,10);

         var supplement = document.querySelector("#supplement").checked;
         var allocation = document.querySelector("#allocation").checked;

         if(prenom.length===0) {
            document.querySelector("#error-prenom").style.display="block";
            isValide=false;
         }else {
            document.querySelector("#error-prenom").style.display="none";
         }

         if(nom.length===0) {
            document.querySelector("#error-nom").style.display="block";
            isValide=false;
         }else {
            document.querySelector("#error-nom").style.display="none";
         }

         if(isNaN(salaireBrute)) {
            document.querySelector("#error-salaire-brute").style.display="block";
            isValide=false;
         }else {
            document.querySelector("#error-salaire-brute").style.display="none";
         }
         if(isNaN(nombreEnfant)) {
            document.querySelector("#error-nombre-personne-a-charge").style.display="block";
            isValide=false;
         }else {
            document.querySelector("#error-nombre-personne-a-charge").style.display="none";
         }
         document.querySelector("#bulletin-employe").innerText=prenom+" "+nom;

        
         var montantSupplement= (supplement)?salaireBrute*0.2:0;
         var montantAllocation= (allocation)?salaireBrute*0.25:0;

         var salaireBruteTotal=salaireBrute+montantAllocation+montantSupplement;


         document.querySelector("#bulletin-allocation").innerText=montantAllocation.toLocaleString();
         document.querySelector("#bulletin-supplement").innerText=montantSupplement.toLocaleString();
         document.querySelector("#bulletin-salaire-brute").innerText=salaireBruteTotal.toLocaleString();
         var x1 = salaireBruteTotal*0.18;
         var x2 = salaireBruteTotal*0.07;
         var x3 = salaireBruteTotal*0.05
          
        

           document.querySelector("#ass").innerText=x2.toLocaleString();
           document.querySelector("#reg").innerText=x3.toLocaleString();
           

           function reduction(){
            var rd = 0;
            if(sexe=="Femme"){
             rd = rd + 0.02;
             }
         else if(nombreEnfant==3){
              rd = rd + 0.01;
            }
            else (nombreEnfant == 4) 
              rd = rd + 0.02;
            
            return rd;
          
          }

          x1 = x1 * (1-reduction());

           document.querySelector("#imp").innerText=x1.toLocaleString();
            
           var y = x1 + x2 + x3;

           var salaireNet = salaireBruteTotal - y;

           document.querySelector("#sal").innerText=salaireNet.toLocaleString();
        

        
         if(!isValide) {
             return false;
         }
    //return false;

     });


     
document.querySelector("body").addEventListener("click", function (event) { 

  document.querySelector("#formulaire-calcul-salaire").style.display="block";
  document.querySelector("#partie-bulletin").classList.add("col-md-4");
  document.querySelector("#partie-bulletin").classList.remove("col-md-12");


});

document.querySelector("#imprimer").addEventListener("click", function (event) { 

  document.querySelector("#formulaire-calcul-salaire").style.display="none";
  document.querySelector("#partie-bulletin").classList.remove("col-md-4");
  document.querySelector("#partie-bulletin").classList.add("col-md-12");
  print();

});