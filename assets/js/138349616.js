!function(){template("codes/xfly/examples/header.tpl",'<div class="page-wrapper page-ui xfly-example"> <header class="header header-index animated fade-in-enter-effect" id="header" style="position: absolute"> <nav class="navbar navbar-default"> <div class="container"> <div class="row"> <div class="col-md-2 col-sm-2 col-xs-6"> <div class="navbar-header"> <h1>Xfly</h1> </div> </div> <div class="col-md-10 col-sm-10 col-xs-6" style="text-align: right"> <a class="src-expand" href="" target="_blank">CODE</a> </div> </div> </div> </nav> </header> <div class="project-intro xfly-example"> <div class="container"> <section class=""> <div class="row"> <div class="col-md-12 xfly-example-inner"> </div> </div> </section> </div>  </div>  <footer class="footer" id="footer"></footer> </div> <div id="xfly_dialog"> <div id="dialog_mask"></div> </div>');var e={base_path:"https://github.com/c-ong/c-ong.github.io/tree/master/src/app/codes/xfly/examples/",map:{"codes.xfly.examples.index":"index.js","codes.xfly.examples.welcome":"welcome.js","codes.xfly.examples.multi.instance":"multi.instance.js","codes.xfly.examples.page.with.args":"page.with.args.js","codes.xfly.examples.reload":"reload.js","codes.xfly.examples.see.you.again":"see.you.again.js","codes.xfly.examples.member.not.engagement":"member.not.engagement.js","codes.xfly.examples.member.engagement":"member.engagement.js"},updateExpandButton:function(){var e=getCurrentPage().id;e&&($(".src-expand")[0].href=this.base_path+this.map[e])}};$Page.define("codes.xfly.examples.page.with.args",{onCreateView:function(){var e=this.getArgs();this.render({html:template("codes/xfly/examples/header.tpl")()}),$(".xfly-example-inner").html("<h1>Got the arg is "+e.key+'</h1><hr/><a class="xfly-page__back" href="">Get back</a>'),setTimeout(function(){$(".project-intro").addClass("animated fade-in-enter-effect")},400)},onRendering:function(){},onRendered:function(){$("#page_load_indicator").toggle(!1),e.updateExpandButton()}})}();