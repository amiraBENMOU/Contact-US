const firstName=document.getElementById('frst-name');
const lastName=document.getElementById('last-name');
const email=document.getElementById('email');
// 7na win ra7 nraja3 l message 
const error= document.getElementById('error');
const envoyer= document.getElementById('bienEnvoyer');

document.getElementById('Envoyer').addEventListener('click',(e)=>{
    let message=[];
    if(firstName.value ===''|| firstName.value == null)
    message.push("entrer votre nom");
    if(lastName.value===''|| lastName.value ==null)
    message.push("entrer votre prenom")
    if(email.value===''|| email.value ==null)
    message.push("entrer votre adresse email")
    if (message.length>0){
    e.preventDefault()
    error.innerHTML=message.join(',')
  }
 else {
    document.getElementById("bienEnvoyer").innerHTML = "Votre email a etait bien envoyer ! merci .on vas vous connecter bientot";
  }
  })
 

