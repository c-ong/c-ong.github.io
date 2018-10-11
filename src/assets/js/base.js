function adjust_for_dark(  ) {
    if ( $('html').hasClass('dark-mode') ) {
        $( '.themeable-logo' ).forEach(
            function ( x ) {
                var target = $( x );
                target.attr( 'src', target.data( 'dark-src' ) );
            }
        );
    
        $( '.themeable-img' ).forEach(
            function ( x ) {
                var target = $( x );
                target.attr( 'src', target.data( 'dark-src' ) );
            }
        );
    }
}
function change_theme_by_day(  ) {
    var hours = ( new Date() ).getHours();
    
    if ( 6 > hours || hours > 16 ) {
        var html = $('html');
        
        html.addClass( 'dark-mode' );
    }
}