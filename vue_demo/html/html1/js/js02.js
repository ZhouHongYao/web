function show_hide(s, func=null) {
    const o = document.getElementById(s);
    if (o.classList.contains('hide')){
        o.classList.remove('hide');
        func();
    }else {
        o.classList.add('hide');
        func();
    }
}
// function show() {
//     document.getElementById('tk').classList.remove('hide');
// }
//
// function hide() {
//     document.getElementById('tk').classList.add('hide');
// }

function show_img(s) {
    const o = document.getElementById(s);
    if (o.style.transform === '') {
        o.style.transform = 'rotate(180deg)';
    }else {
     o.style.transform = '';
}
}