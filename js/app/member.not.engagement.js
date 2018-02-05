$Page.define('member.not.engagement', {

    title: 'Hi',

    html: '<div class="page-ui">' +
            '<h1>Hi</h1>' +
            '<p>For testing logic expression, tap bellow "Sign in" button to simulate a member engagement</p>' +
            '<hr/>' +
            '<button class="sign-in">Sign in</button>' +
            '<a class="xfly-page__back" href="">Get back</a>' +
          '</div>',

    onCreateView: function() {
        
    },

    onRendering: function() {

    },

    onRendered: function() {
        // Mark a member are signed
        $('.sign-in').on( 'click', function () {
            hasMember = true;

            weui.toast( 'Member flag was updated', { duration: 900 } );
        } );
    }
});