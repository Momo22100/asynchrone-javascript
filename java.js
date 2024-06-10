// Tâche 01 
// écrivez une fonction asynchrone iterateWithAsyncAwait qui prend un tableau de valeurs et enregistre chaque valeur avec un délai de 1 seconde entre les journaux.

async function iterateWithAsyncAwait(array) {
    for (const value of array) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Attendre 1 seconde
      console.log(value);
    }
  }
  
// tache 02
En attente d'un appel : créez une fonction asynchrone waitCall qui simule la récupération de données à partir d'une API. Utilisez wait pour attendre la réponse de l'API, puis enregistrez les données.

async function waitCall() {
    try {
      
      await new Promise(resolve => setTimeout(resolve, 2000));
  
      
      const data = { message: "Données récupérées avec succès depuis l'API" };
  
      
      console.log(data);
    } catch (error) {
      console.error("Une erreur s'est produite lors de l'appel à l'API :", error);
    }
  }
  
  waitCall();

//   tache03
Chaînage Async/Await : écrivez une fonction chainedAsyncFunctions qui appelle séquentiellement trois fonctions asynchrones distinctes. Chaque fonction doit enregistrer un message après un délai de 1 seconde. Chaînez ces fonctions en utilisant wait .

async function firstAsyncFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000)); 
    console.log("Première fonction asynchrone terminée");
  }
  
  async function secondAsyncFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000)); 
    console.log("Deuxième fonction asynchrone terminée");
  }
  
  async function thirdAsyncFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000)); 
    console.log("Troisième fonction asynchrone terminée");
  }
  
  async function chainedAsyncFunctions() {
    await firstAsyncFunction();
    await secondAsyncFunction();
    await thirdAsyncFunction();
  }
  
  
  chainedAsyncFunctions();

  
  
