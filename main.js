$('form').on('submit', function(){
    localStorage.setItem('string', $('#stringInput').val());
});

if (localStorage.getItem('string')){
    $('#stringDisplay').text(localStorage.getItem('string'));
};