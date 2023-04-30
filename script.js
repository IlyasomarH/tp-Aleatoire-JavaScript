

  /*


  1-> on recupere un nombre un aleatoire dans un intervalle donnée

  2-> on doit demander de user de definer la valeur aleatoire dans un intervalle donné
  3-> on verifie s'il a reconnu la valeur aleatoire
        a-> si oui on afficher 'vous avez gangné'
        b-> sinon on lui donne trois essaie 
            1-> si dans les essaies, il reconnait je lui affiche 'vous avez gagné
            2-> sinon je lui affiche vous avez perdu 


            valeurAler = 4
            valeurUser=0
            valeurEstTrouvé=false
            iteration =1 
            i=0
            valeurUser=1
            i=1

            iteration=2
            valeurUser=4
            i=2
*/




let valeurAlea= Math.floor(Math.random()*11)

let valeurUser= prompt("definer la valeur Aleatoire entre 0 a 10 ")
let valeurEstTrouvé= false
let compteur =3



for(let i= 0; i<=2; i++){
    if(valeurAlea==valeurUser){
        valeurEstTrouvé=true
       
    }else{
        compteur--
        if(valeurAlea> valeurUser){
            alert("la valeur alatoire est un plus grand et vous avez " + compteur + " essaie ")
        }
        else{
            alert("la valeur aleatoire est plus petite " + compteur + " essaie")
        }
        valeurUser= prompt("definer un nouveau la valeur Aleatoire entre 0 a 10 ")
    }
}


if(valeurEstTrouvé==true){
    document.write("vous avez gagné")
}
else{
    document.write("vous avez perdu")
}



