let slideIndex = 1;
showSlides(slideIndex);

let slideInterval = setInterval(function() {
    plusSlides(1); 
}, 10000); 


function plusSlides(n) {
    clearInterval(slideInterval); 
    slideInterval = setInterval(function() {
        plusSlides(1); 
    }, 10000); 

    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}
function toggleContent() {
    var contenu = document.getElementById('contenu');
    if (contenu.style.display === 'none' || contenu.style.display === '') {
        contenu.style.display = 'block';
    } else {
        contenu.style.display = 'none';
    }
}

document.addEventListener("DOMContentLoaded", function() {
  const prixLivraisonParVille = {
  "domicile": {
    "أدرار": 1400,
    "الشلف": 750,
    "الأغواط": 950,
    "أم البواقي": 800,
    "باتنة": 800,
    "بجاية": 800,
    "بسكرة": 950,
    "بشار": 1100,
    "البليدة": 400,
    "البويرة": 750,
    "تمنراست": 1600,
    "تبسة": 850,
    "تلمسان": 850,
    "تيارت": 800,
    "تيزي وزو": 750,
    "الجزائر": 500,
    "الجلفة": 950,
    "جيجل": 800,
    "سطيف": 750,
    "سعيدة": 800,
    "سكيكدة": 800,
    "سيدي بلعباس": 800,
    "عنابة": 800,
    "قالمة": 800,
    "قسنطينة": 800,
    "المدية": 750,
    "مستغانم": 800,
    "المسيلة": 850,
    "معسكر": 800,
    "ورقلة": 950,
    "وهران": 800,
    "البيض": 1100,
    "برج بوعريريج": 750,
    "بومرداس": 750,
    "الطارف": 800,
    "تيسمسيلت": 800,
    "الوادي": 950,
    "خنشلة": 800,
    "سوق أهراس": 800,
    "تيبازة": 750,
    "ميلة": 800,
    "عين الدفلى": 750,
    "النعامة": 1100,
    "عين تموشنت": 800,
    "غرداية": 950,
    "غليزان": 800,
    "تميمون": 1400,
    "أولاد جلال": 950,
    "بني عباس": 1000,
    "عين صالح": 1600,
    "عين قزام": 1600,
    "توقرت": 950,
    "المغير": 950,
    "المنيعة": 1000 
  },
  "bureau": {
    "أدرار":900,
    "الشلف": 450,
    "الأغواط": 600,
    "أم البواقي": 450,
    "باتنة": 450,
    "بجاية": 450,
    "بسكرة": 600,
    "بشار": 650,
    "البليدة": 300,
    "البويرة": 450,
    "تمنراست": 1050,
    "تبسة": 450,
    "تلمسان": 500,
    "تيارت": 450,
    "تيزي وزو": 450,
    "الجزائر": 350,
    "الجلفة": 600,
    "جيجل": 450,
    "سطيف": 450,
    "سعيدة": 450,
    "سكيكدة": 450,
    "سيدي بلعباس": 450,
    "عنابة": 450,
    "قالمة": 450,
    "قسنطينة": 450,
    "المدية": 450,
    "مستغانم": 450,
    "المسيلة": 500,
    "معسكر": 450,
    "ورقلة": 600,
    "وهران": 450,
    "البيض": 600,
    "برج بوعريريج": 450,
    "بومرداس": 450,
    "الطارف": 450,
    "الوادي": 600,
    "خنشلة": 000,
    "سوق أهراس": 450,
    "تيبازة": 450,
    "ميلة": 450,
    "عين الدفلى": 450,
    "النعامة": 600,
    "عين تموشنت": 450,
    "غرداية": 600,
    "غليزان": 450,
    "أولاد جلال": 600,
    "توقرت": 600,
 
  }
};
  
  const selectVille = document.getElementById("selectVille");
  const selectLivraison = document.getElementById("selectLivraison");
  const prixLivraison = document.getElementById("prixLivraison");
  const prixTotal = document.getElementById("prixTotal");
  
  selectVille.addEventListener("change", function() {
    const villeSelectionnee = this.value;
    const lieuLivraisonSelectionne = selectLivraison.value;
    
    const prixLivraisonVille = prixLivraisonParVille[lieuLivraisonSelectionne][villeSelectionnee];
    
    prixLivraison.textContent = " " + prixLivraisonVille + " د.ج";
    
    const prixProduit = 5800; 
    const prixTotalCommande = prixProduit + prixLivraisonVille;
    prixTotal.textContent = " " + prixTotalCommande + " د.ج";
  });
  
  selectLivraison.addEventListener("change", function() {
    const villeSelectionnee = selectVille.value;
    const lieuLivraisonSelectionne = this.value;
    
    const prixLivraisonVille = prixLivraisonParVille[lieuLivraisonSelectionne][villeSelectionnee];
    
    prixLivraison.textContent =  + prixLivraisonVille + " د.ج";
    
    const prixProduit = 5800; 
    const prixTotalCommande = prixProduit + prixLivraisonVille;
    prixTotal.textContent =  + prixTotalCommande + " د.ج";
  });
  
});