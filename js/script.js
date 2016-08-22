jQuery(document).ready(function($){
    window.preventAction = true;


        $("ul.wp-submenu li a").click(function(e){
            console.log('new')
            window.preventAction = false;

        });

        $("li.wp-not-current-submenu").click(function(e){
            var has_class = $(".wp-has-submenu");
            if ( has_class ){
                console.log('yes')
            }
            // window.preventAction = false;

        });

        $("#adminmenuwrap ul a").click(function(e){
              if (window.preventAction){
                     e.preventDefault();
              }


            //slide up all the link lists
            $("#adminmenuwrap ul ul").slideUp();
            console.log('ddddd')
            //slide down the link list below the h3 clicked - only if its closed
            if(!$(this).next().is(":visible"))
            {
                $(this).next().slideDown();
                console.log('ssss')
            }

        });
});
