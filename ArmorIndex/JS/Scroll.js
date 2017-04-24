$(function(){
    //document ready block $(function) waits until the DOM is loaded
    //jquery + javascript simple scrolling script
    var xPX = 0;
    setInterval(function()
    {
      var dynamicWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      var dynamicHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      console.log("ViewPort Width: " + dynamicWidth + " ViewPort Height: " + dynamicHeight);
      if(dynamicWidth <= 1920)
      {
        $('body').css('background-repeat', 'repeat-x');
        xPX -= .15;
        $('body').css('background-position', xPX + 'px 0');
      }
      else
      {
        xPX = 0;
        $('body').css('background-attachement', 'fixed');
        $('body').css('background-position', 'center');
        $('body').css('background-repeat', 'no-repeat');
      }
    }, 5);

})
