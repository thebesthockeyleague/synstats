// Animate Smooth Scroll
$('#view-heroes').on('click', function() {
    const images = $('#heroes').position().top;

    $('html, body').animate(
        {
         scrollTop: images
        },
        900
    );
});