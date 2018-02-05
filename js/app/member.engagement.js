$Page.define('member.engagement', {

    title: 'Yeah, you are joined',

    html: '<div class="page-ui">' +
            '<h1>Yeah, you are joined</h1>' +
            '<hr/>' +
            '<button class="sign-out">Tap to sign out</button>' +
            '<a class="xfly-page__back" href="">Get back</a>' +
          '</div>',

    onCreateView: function() {

    },

    onRendering: function() {

    },

    onRendered: function() {
        $('.sign-out').on( 'click', function () {
            hasMember = false;

            weui.toast( 'Member flag was updated', { duration: 900 } );
        } );
    }
});