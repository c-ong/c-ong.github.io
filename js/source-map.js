var SourceMap = {
    base_path: 'https://github.com/c-ong/c-ong.github.io/blob/master/js/app/',

    map: {
        'welcome':          'welcome.js',
        'multi.instance':   'multi.instance.js',
        'page.with.args':   'page.with.args.js',
        'reload':           'reload.js',
        'see.you.again':    'see.you.again.js'
    },

    updateExpandButton: function () {
        var id = getCurrentPage().id;

        if ( id ) {
            $('.src-expand')[ 0 ].href = this.base_path + this.map[id];
        }
    }
};