jQuery(document).ready(function($){
    
        window.preventAction = false;


        $("#adminmenu li").click(function(e){
          if ( ! $(this).children().is( ".wp-submenu" ) ) return true;
          var href = event.target.getAttribute('href');
          return false; // отменить переход по url
        });

        $("#adminmenu li ul.wp-submenu li").click(function(e){
              e.stopPropagation();
        });

        $(".wp-has-current-submenu ul").css("display","block");

        $("#adminmenuwrap ul a").click(function(e){

            //slide up all the link lists
            $("#adminmenuwrap ul ul").slideUp();

            //slide down the link list below the h3 clicked - only if its closed
            if(!$(this).next().is(":visible"))
            {
                $(this).next().slideDown();
            }

        });
});
