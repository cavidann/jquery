$(document).ready(function () {
    var image = document.getElementById("img");

    var i;

     // eger tek bide bu funksiya
    $('.text').click(function () {
        var $this = $(this);

        if ($this.index() === 0 || $this.is(i = 2)) {}
        else if ($this.index() === 1 || $this.is(i = 3)) {}
        else if ($this.index() === 2 || $this.is(i = 4)) {}
       var $slide=$(".slide");
// var counter=1;
// counter++;
// if(counter%2==1){
    
// }
        
        $(".container:nth-child(" + i + ") .slide").animate({ left: '-1125px' }, 2000);
      
            if (i) {
                setTimeout(function () {
                    image.src = "img/" + i + ".jpg";
                }, 1000)
            }
    })

    // cutduse fikirles
         

})