define([
    'ver!core-frame-nav-_page@core',
    'text!./index.html'
], function (ctor, tpl) {
    var base = ctor.export();
    base.template = tpl;
    return base;
});
