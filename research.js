// 1. Buscador por texto
function searchPapers() {
    let input = document.getElementById('paperSearch').value.toLowerCase();
    let cards = document.querySelectorAll('.paper-card'); // Usamos querySelectorAll es más moderno

    cards.forEach(card => {
        let title = card.getAttribute('data-title').toLowerCase();
        // Si el título incluye lo que escribimos, se muestra como flex, si no, se oculta
        card.style.display = title.includes(input) ? "flex" : "none";
    });
}

// 2. Filtros por Categoría (Journal / Conference)
// Agregamos 'e' para recibir el evento del click
function filterPapers(category, e) {
    let cards = document.querySelectorAll('.paper-card');
    let tags = document.querySelectorAll('.tag');

    // Quitar clase active de todos y ponerla al que clickeamos
    tags.forEach(tag => tag.classList.remove('active'));
    
    // Si pasamos el evento, marcamos el botón como activo
    if(e) {
        e.target.classList.add('active');
    }

    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = "flex";
        } else {
            // Verifica si la tarjeta tiene la clase exacta (journal o conference)
            card.style.display = card.classList.contains(category) ? "flex" : "none";
        }
    });
}

// 3. Función para copiar BibTeX
function copyBib_1() {
    const bibtex = `@article{flores2025online,
  title={An Online Modular Framework for Anomaly Detection and Multiclass Classification in Video Surveillance},
  author={Flores-Monroy, Jonathan and Benitez-Garcia, Gibran and Nakano-Miyatake, Mariko and Takahashi, Hiroki},
  journal={Applied Sciences},
  volume={15},
  number={17},
  pages={9249},
  year={2025},
  publisher={MDPI}
}`;
    navigator.clipboard.writeText(bibtex).then(() => {
        alert("BibTeX copiado al portapapeles. ¡Gracias por citar!");
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}


function copyBib_2() {
    const bibtex = `@article{flores2025online,
  title={An Online Modular Framework for Anomaly Detection and Multiclass Classification in Video Surveillance},
  author={Flores-Monroy, Jonathan and Benitez-Garcia, Gibran and Nakano-Miyatake, Mariko and Takahashi, Hiroki},
  journal={Applied Sciences},
  volume={15},
  number={17},
  pages={9249},
  year={2025},
  publisher={MDPI}
}`;
    navigator.clipboard.writeText(bibtex).then(() => {
        alert("BibTeX copiado al portapapeles. ¡Gracias por citar!");
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}


function copyBib_3() {
    const bibtex = `@inproceedings{flores2024ownership,
  title={Ownership Authentication and Integrity Verification of Digital Images Using Generative Models and Custom Signature},
  author={Flores-Monroy, Jonathan and Cedillo-Hernandez, Manuel and Nakano-Miyatake, Mariko and Perez-Meana, Hector},
  booktitle={2024 47th International Conference on Telecommunications and Signal Processing (TSP)},
  pages={101--106},
  year={2024},
  organization={IEEE}
}`;
    navigator.clipboard.writeText(bibtex).then(() => {
        alert("BibTeX copiado al portapapeles. ¡Gracias por citar!");
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}



function copyBib_4() {
    const bibtex = `@incollection{flores2024optimal,
  title={Optimal Feature Extractor for Video Anomaly Detection in Public Transportation Applications},
  author={Flores-Monroy, Jonathan and Benitez-Garcia, Gibran and Nakano, Mariko and Takahashi, Hiroki},
  booktitle={New Trends in Intelligent Software Methodologies, Tools and Techniques},
  pages={249--262},
  year={2024},
  publisher={IOS Press}
}`;
    navigator.clipboard.writeText(bibtex).then(() => {
        alert("BibTeX copiado al portapapeles. ¡Gracias por citar!");
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}



function copyBib_5() {
    const bibtex = `@article{flores2023deteccion,
  title={Detecci{\'o}n de somnolencia y distracci{\'o}n en conductores y su implementaci{\'o}n en dispositivos m{\'o}viles},
  author={Flores-Monroy, Jonathan and Nakano-Miyatake, Mariko and Escamilla-Hern{\'a}ndez, Enrique and P{\'e}rez-Meana, H{\'e}ctor},
  journal={Informaci{\'o}n tecnol{\'o}gica},
  volume={34},
  number={4},
  pages={1--12},
  year={2023},
  publisher={SciELO Chile}
}`;
    navigator.clipboard.writeText(bibtex).then(() => {
        alert("BibTeX copiado al portapapeles. ¡Gracias por citar!");
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}




function copyBib_6() {
    const bibtex = `@inproceedings{sanchez2023face,
  title={Face Expression Recognition using Recurrent Neural Networks},
  author={Sanchez-Ruiz, Marcos and Flores-Monroy, Jonathan and Nakano-Miyatake, Mariko and Escamilla-Hernandez, Enrique and Perez-Meana, Hector},
  booktitle={2023 46th International Conference on Telecommunications and Signal Processing (TSP)},
  pages={148--153},
  year={2023},
  organization={IEEE}
}`;
    navigator.clipboard.writeText(bibtex).then(() => {
        alert("BibTeX copiado al portapapeles. ¡Gracias por citar!");
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}






function copyBib_7() {
    const bibtex = `@article{sanchez2022deteccion,
  title={Detecci{\'o}n de estados de {\'a}nimo en ambientes no restringidos},
  author={S{\'a}nchez-Ruiz, Marcos and Flores-Monroy, Jonathan and Escamilla-Hern{\'a}ndez, Enrique and Nakano-Miyatake, Mariko and Perez-Meana, Hector and others},
  journal={P{\"a}di Bolet{\'\i}n Cient{\'\i}fico de Ciencias B{\'a}sicas e Ingenier{\'\i}as del ICBI},
  volume={10},
  pages={110--115},
  year={2022}
}`;
    navigator.clipboard.writeText(bibtex).then(() => {
        alert("BibTeX copiado al portapapeles. ¡Gracias por citar!");
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}






function copyBib_8() {
    const bibtex = `@article{flores2022somn_ia,
  title={SOMN\_IA: Portable and universal device for real-time detection of driver’s drowsiness and distraction levels},
  author={Flores-Monroy, Jonathan and Nakano-Miyatake, Mariko and Escamilla-Hernandez, Enrique and Sanchez-Perez, Gabriel and Perez-Meana, Hector},
  journal={Electronics},
  volume={11},
  number={16},
  pages={2558},
  year={2022},
  publisher={MDPI}
}`;
    navigator.clipboard.writeText(bibtex).then(() => {
        alert("BibTeX copiado al portapapeles. ¡Gracias por citar!");
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}






function copyBib_9() {
    const bibtex = `@inproceedings{flores2022cnn,
  title={A CNN-based driver’s drowsiness and distraction detection system},
  author={Flores-Monroy, Jonathan and Nakano-Miyatake, Mariko and Perez-Meana, Hector and Escamilla-Hernandez, Enrique and Sanchez-Perez, Gabriel},
  booktitle={Mexican Conference on Pattern Recognition},
  pages={83--93},
  year={2022},
  organization={Springer}
}`;
    navigator.clipboard.writeText(bibtex).then(() => {
        alert("BibTeX copiado al portapapeles. ¡Gracias por citar!");
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}





function copyBib_10() {
    const bibtex = `@incollection{flores2022implementation,
  title={Implementation of a CNN-Based Driver Drowsiness and Distraction Detector in Mobile Devices},
  author={Flores-Monroy, Jonathan and Nakano-Miyatake, Mariko and Perez-Meana, Hector and Escamilla-Hernandez, Enrique and Sanchez-Perez, Gabriel},
  booktitle={New Trends in Intelligent Software Methodologies, Tools and Techniques},
  pages={272--285},
  year={2022},
  publisher={IOS Press}
}`;
    navigator.clipboard.writeText(bibtex).then(() => {
        alert("BibTeX copiado al portapapeles. ¡Gracias por citar!");
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}


function copyBib_11() {
    const bibtex = `@inproceedings{flores2021visual,
  title={Visual-based real time driver drowsiness detection system using CNN},
  author={Flores-Monroy, Jonathan and Nakano-Miyatake, Mariko and Sanchez-Perez, Gabriel and Perez-Meana, Hector},
  booktitle={2021 18th International Conference on Electrical Engineering, Computing Science and Automatic Control (CCE)},
  pages={1--5},
  year={2021},
  organization={IEEE}
}`;
    navigator.clipboard.writeText(bibtex).then(() => {
        alert("BibTeX copiado al portapapeles. ¡Gracias por citar!");
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}