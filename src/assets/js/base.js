function adjust_assets_for_mode_change(mode) {
    mode = mode || 'dark-mode';
    
    var dark = $('html').hasClass( mode );
    
    function update(selector) {
        $( selector ).forEach(
            function ( x ) {
                var target = $( x );
                var desire_src = dark ? 'dark-mode-src' : 'default-mode-src';
            
                if ( ! target.data( 'default-mode-src' ) ) {
                    target.data( 'default-mode-src', target.attr( 'src' ) );
                }
            
                if ( target.attr( 'src' ) !== target.data( desire_src ) ) {
                    target.attr( 'src', target.data( desire_src ) );
                }
            }
        );
    }
    
    update( '.themeable-logo' );
    update( '.themeable-img' );
}

function change_theme_by_time(  ) {
    function now() {
        return ( new Date() ).getHours();
    }
    
    function check() {
        var hours = now();
        var html = $('html');
    
        if ( 6 > hours || hours >= 16 ) {
            html.addClass( 'dark-mode' );
            adjust_assets_for_mode_change( 'dark-mode' );
        } else if ( html.hasClass( 'dark-mode' ) ) {
            adjust_assets_for_mode_change( 'default-mode' );
            html.removeClass( 'dark-mode' );
        }
    
        setTimeout( check, 6e4 );
    }
    
    check();
}