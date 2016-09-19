$(document).ready(function() {

        // settings
        var $slider = $('.slider'); // définit une variable avec la class attribuée au carousel > sélectionne l'élément HTML avec la class .slider
        var $slide = 'li'; // ou img si on n'a pas fait de liste > sélectionne chaque li
        var $transition_time = 1000; // 1 seconde pour passe d'un slide à un autre
        var $time_between_slides = 3000; // reste 3 secondes

        function slides(){
            return $slider.find($slide); // définit une fonction slides qui trouve le nombre de slide en comptant dans .slider combien il trouve de li
        }

        slides().fadeOut(); // lance la fonction slides et anime avec un fadeOut.

        // set active classes
        slides().first().addClass('active'); //trouve le premier slide et lui ajoute la class active
        slides().first().fadeIn($transition_time); //lance un fadeIn avec en paramètre la variable transition slide qui exprime combien de temps elle reste.

        // auto scroll > défilement automatique des images
        $interval = setInterval(
            function(){
                var $i = $slider.find($slide + '.active').index();   // définit une variable i qui correspond au numéro d'index de la li dans la class .slider qui a la class active.
                                                                     // ça revient à trouver l'image active.

                slides().eq($i).removeClass('active');              // sélectionne la slide actuelle (i étant l'index de la slide qui a la class active) et lui enlève la class active
                slides().eq($i).fadeOut($transition_time);          // slide actuelle > effet de fadeOut avec le temps défini dans la transition)

                if (slides().length == $i + 1) $i = -1; // si le nombre total de slide (défini par la fonction slides) est égal à l'index actif +1, alors on réinitialise i à -1.

                slides().eq($i + 1).fadeIn($transition_time); // ajoute +1 à la slide actuelle (si c'est à -1, repart à 0, sinon, incrémente de 1) et ajoute un fade in avec temps de transi défini
                slides().eq($i + 1).addClass('active'); // ajoute la class active à cette nouvelle slide
            }
            , $transition_time +  $time_between_slides //attends le temps de transition des slides + le temps entre deux slide définit en haut
        );

    });