function SendMail() {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('zoho', 'template_TjSgGS73', this, 'user_3fLdbiFWKtZnpy1zRxCXU')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                $("#over").fadeIn();
                setTimeout(() => {
                    $("#over").fadeOut();    
                }, 2000);
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
}

$(document).ready(function () {
    emailjs.init("user_3fLdbiFWKtZnpy1zRxCXU");
    SendMail();
    $('.scroll-bt').click(function () {
        $('html').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });
});