$(document).ready(function() {
    const headerBtn = $('.burger-btn');
    headerBtn.click(function() {
        const ul = $('.nav-menu_header');

        if (ul.css('display') === 'none') {
            ul.show();
        } else {
            ul.hide();
        }
    });
});