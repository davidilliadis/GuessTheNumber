

const newGuess = document.querySelector("#new-guess");
const message = document.querySelector("#message");
const lowHigh = document.querySelector("#low-high");
const checkButton = document.querySelector("#check");
const restartButton = document.querySelector("#restart");
const root = document.querySelector(":root");

// 2. ορίζω τους σχετικούς χειριστές συμβάντων
document.getElementById("newGuess").addEventListener('keypress', checkKey);
document.getElementById("check").addEventListener('click', checkGuess);
document.getElementById("restart").addEventListener('click', restart);

let previousGuesses = [];
let theGuess;

window.onload = newRandom();
//newGuess.focus(); 
document.getElementById("newGuess").focus();

  //Κάνω αλλαγ΄ή των ids 
  //To "Προηγούμενες προσπάθειες" θα είναι απο κάτω, και όλα τα μηνύματα με κόκκινο και πράσινο θα είναι απο πάνω του
 document.getElementById("message").id = "test";
 document.getElementById("low-high").id = "message";
 document.getElementById("test").id = "low-high";
 
  
  

  
  
function newRandom(){
/* 3. συνάρτηση που βρίσκει ένα τυχαίο αριθμό μεταξύ 1 και 100
 και τον εκχωρεί στη μεταβλητή theGuess */
	theGuess = Math.floor(Math.random() * 100) + 1;
  console.log(theGuess);
}
 

function checkKey(e){
/* 4. συνάρτηση που όταν ο χρήστης πατήσει <<enter>>
 να καλεί τη συνάρτηση που αποτελεί τον κεντρικό ελεγκτή του παιχνιδιού.
 */
	if (e.key === 'Enter' && previousGuesses.length < 10) {
		checkGuess();
	}
}

function checkGuess(){
/* 5. Ορίζω συνάρτηση checkGuess η οποία καλείται είτε όταν ο χρήστης πατήσει <<enter>>
στο πεδίο "new-guess" είτε όταν πατήσει το πλήκτρο "check", η οποία είναι ο κεντρικός ελεγκτής,
καλεί τη συνάρτηση processGuess (η οποία αποφαίνεται για την ορθότητα του αριθμού) και κάνει
τις κατάλληλες ενέργειες για να μην μπορεί να εισάγει ο χρήστης νέο αριθμό ή να ανασταλεί η
λειτουργία του <<enter>>, εμφάνιση του πλήκτρου 'restart' και την εξαφάνιση του πλήκτρου 'check'
σε περίπτωση ολοκλήρωσης του παιχνιδιού. */
var test = document.getElementById("newGuess").value;
  previousGuesses.push(test);
  processGuess(test);	
 
  document.getElementById("message").innerHTML = '<br> Προηγούμενες προσπάθειες: ';
  for (i = 0; i < previousGuesses.length; i++) {
	  document.getElementById("message").innerHTML = document.getElementById("message").innerHTML + ' ' + previousGuesses[i];
  }
  

  /* Μετακίνησα λίγο πιο δεξιά την πρόταση "Προηγούμενες προσπάθειες:"" για να είναι στην ίδια ευθεία με το υπόλοιπο κείμενο όπως στο βίντεο του καθηγητή */
  document.getElementById("message").style.marginLeft = "0.9em";

  /* Xρώμα ιστορικού προσπαθειών */
  document.getElementById("message").style.color = (' --low-high-color', 'gray');
  

}
 

function processGuess(newValue){
 /* 6.  Ορίζω την συνάρτηση processGuess(newValue) η οποία καλείται από τη συνάρτηση checkGuess,
 περιέχει τη λογική του παιχνιδιού, ελέγχει αν η τιμή του χρήστη είναι σωστή, ή αν το παιχνίδι έχει
 τελειώσει χωρίς ο χρήστης να έχει βρει τον αριθμό, και επιστρέφει αντίστοιχα την τιμή "win", ή "lost",
 δημιουργεί και εμφανίζει τα κατάλληλα μηνύματα, αλλάζοντας το χρώμα του στοιχείου μηνυμάτων.
 Όλα τα μηνύματα του προγράμματος εμφανίζονται από την processGuess().
 Σε περίπτωση που το παιχνίδι δεν έχει ακόμα τελειώσει, η συνάρτηση μπορεί είτε να μην επιστρέφει κάποια ιδιαίτερη τιμή, είτε να επιστρέφει κάποια τιμή της επιλογής σας */
   


	 //Σε περίπτωση που ο χρήστης ξεπεράσει τον αριθμό που είναι να μαντέψει, του βγάζει το μήνημα "Λάθος, το ξεπέρασες" με άσπρα γράμματα κεντραρισμένο στη μέση της σελίδας και κόκκινο (crimson) background
	 if (newValue > theGuess) {
    document.getElementById("low-high").innerHTML = "Λάθος, το ξεπέρασες";
    document.getElementById("low-high").style.textAlign = "center";
    document.getElementById("low-high").style.color = (' --msg-text', 'floralwhite' );
    document.getElementById("low-high").style.backgroundColor = (' --msg-wrong-color', 'crimson');
    
  }
  
   
  //Σε περίπτωση που ο χρήστης δεν ξεπεράσει τον αριθμό του βγάζει το μήνυμα "Λάθος, είσαι πιο χαμηλά" με άσπρα γράμματα κεντραρισμένο στη μέση της σελίδας και κόκκινο (crimson) background
	 if (newValue < theGuess) {
    document.getElementById("low-high").innerHTML = "Λάθος, είσαι πιο χαμηλά";
    document.getElementById("low-high").style.textAlign = "center";
    document.getElementById("low-high").style.color = (' --msg-text', 'floralwhite' );
    document.getElementById("low-high").style.backgroundColor = (' --msg-wrong-color', 'crimson');
    
  }

  
 /* Σε περίπτωση που ο χρήστης βάλει οτιδήποτε πέρα απο κάποιο ψηφίο το οποίο ψηφίο δεν θα είναι ανάμεσα στο 1 και στο 100
 τότε θα βγαίνει το μήνυμα "Δώσε σωστό αριθμό" και το χρώμα της πρότασης "Δώσε σωστό αριθμό γίνεται κόκκινο με άσπρα γράμματα" και είναι 
 κεντραρισμένο στη μέση της σελίδας */
   var isnum = /^\d+$/.test(newValue);
   
   if (!(isnum) || newValue <= 0 || newValue > 100) {

  document.getElementById("low-high").innerHTML = "Δώσε σωστό αριθμό!";
  document.getElementById("low-high").style.textAlign = "center";
  document.getElementById("low-high").style.color = (' --msg-text', 'floralwhite' );
  document.getElementById("low-high").style.backgroundColor = (' --msg-wrong-color', 'crimson');
  
  previousGuesses.splice(-1,1);
  
	}
   
  //Αν ο χρήστης βρεί τον αριθμό πριν τις 10 προσπάθειες, βγαίνει το μήνυμα "Μπράβο το βρήκες!" με άσπρα γράμματα κεντραρισμένο στη μέση της σελίδας και πράσινο background και εμφανίζεται το κουμπί "Παίξε ξανά" και εξαφανίζεται το κουμπί "Ελεγχος"
	 if (newValue == theGuess) {
    document.getElementById("low-high").innerHTML = "Μπράβο, το βρήκες!";
    document.getElementById("low-high").style.textAlign = "center";
    document.getElementById("restart").style.visibility = "visible";
    document.getElementById("check").style.visibility = "hidden";
    document.getElementById("low-high").style.color = (' --msg-text', 'floralwhite' );
    document.getElementById("low-high").style.backgroundColor = (' --msg-win-color', 'rgb(0, 128, 32)');
 
  }
	 
	
	 //Όταν ο χρήστης φτάσει τις 10 προσπάθειες και δεν κερδίσει, εμφανίζεται το μήνυμα "Τέλος παιχνιδιού, έχασες!" με άσπρα γράμματα κεντραρισμένο στη μέση της σελίδας και με κόκκινο background και τερματίζει το παιχνίδι και εμφανίζεται το κουμπί "Παίξε ξανά" 
	 if (previousGuesses.length >= 10) {
		document.getElementById("check").style.visibility = "hidden";
    document.getElementById("restart").style.visibility = "visible";
    document.getElementById("low-high").innerHTML = "Τέλος παιχνιδιού, έχασες!";
    document.getElementById("low-high").style.textAlign = "center";
    document.getElementById("low-high").style.color = (' --msg-text', 'floralwhite' );
    document.getElementById("low-high").style.backgroundColor = (' --msg-wrong-color', 'crimson');

  }
}


function restart(){
  /* 7. Ορίζω συνάρτηση restart η οποία καλείται όταν ο χρήστης πατήσει το πλήκτρο
  'restart' και επανεκινεί τη διαδικασία */
      location.reload();
  }