<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Test jQuery</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<p>On va bosser avec jQuery, c'est super !</p>

<div id="carousel">

        <img class="active" src="chihiro1.jpg">
        <img class="cache" src="chihiro2.jpg">
        <img class="cache" src="chihiro3.jpg">
        <img class="cache" src="chihiro4.jpg">
        <img class="cache" src="chihiro5.jpg">

</div>






<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script>
    $(document).ready(function(){
        //déclaration des variables
        var $carousel = $(#carousel);
        var $img = $(#carousel img);
        var $imgactive = $()


        $img.eq(0)
        //$img.find('.active').removeClass("active").addClass("cache");
        //.next().addClass("active")
        // $carousel.append('<div class="controls"> <span class="prev">Precedent</span> <span class="next">Suivant</span> </div>');

    });


</script>
</body>
</html>
