// CHANGEMENT DE THEME DE COULEUR

let mainToggle = document.getElementById('main_theme');         // bouton vert
let altToggle = document.getElementById('alt_theme');           // bouton bleu

let header = document.getElementById('colored_header');         // partie colorée du header
let profil = document.getElementById('profil');                 // image de profil
let button = document.getElementById('button');                 // bouton du formulaire
let footer = document.getElementById('footer');                 // partie coloréé du footer
let underlinedH2 = document.querySelectorAll('h2');             // underline des titres



// clic sur le bouton vert (theme principal)
mainToggle.addEventListener('click', () => {
    header.classList.remove('alt_theme');
    header.classList.add('main_theme');

    profil.classList.remove('alt_theme');
    profil.classList.add('main_theme');

    button.classList.remove('alt_theme');
    button.classList.add('main_theme');

    footer.classList.remove('alt_theme');
    footer.classList.add('main_theme');

     underlinedH2.forEach((h2) => {
        h2.classList.remove('alt_theme');
        h2.classList.add('main_theme');
     })
})


// clic sur le bouton bleu (theme alternatif)
altToggle.addEventListener('click', () => {
    header.classList.remove('main_theme');
    header.classList.add('alt_theme');

    profil.classList.remove('main_theme');
    profil.classList.add('alt_theme');

    button.classList.remove('main_theme');
    button.classList.add('alt_theme');

    footer.classList.remove('main_theme');
    footer.classList.add('alt_theme');

    underlinedH2.forEach((h2) => {
        h2.classList.remove('main_theme');
        h2.classList.add('alt_theme');
    })
})



// 