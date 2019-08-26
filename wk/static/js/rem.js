
function setRem() {
    var dpr, rem, scale;
    var docEl = document.documentElement;
    var fontEl = document.createElement('style');
    var metaEl = document.querySelector('meta[name="viewport"]');
    dpr = window.devicePixelRatio || 1;
    scale = 1 / dpr;
    let _win = window.screen.width || docEl.clientWidth;
    rem = _win * dpr / 10;;
    // 设置viewport，进行缩放，达到高清效果
    metaEl.setAttribute('content', 'width=' + dpr * _win + ', ' +
        'initial-scale = ' + scale + ', maximum-scale = ' + scale + ',' +
        'minimum-scale = ' + scale + ', user-scalable = no ');
    // 设置data-dpr属性，留作的css hack之用
    docEl.setAttribute('data-dpr', dpr);
    // 动态写入样式
    docEl.style.fontSize = rem + 'px';
    // 给js调用的，某一dpr下rem和px之间的转换函数
    window.rem2px = function(v) {
        v = parseFloat(v);
        return v * rem;
    };
    window.px2rem = function(v) {
        v = parseFloat(v);
        return v / rem;
    };
    window.dpr = dpr;
    window.rem = rem;
};
export default setRem;