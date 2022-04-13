if (localStorage.getItem('count')){
    let count = localStorage.getItem('count');
    localStorage.setItem('count', +count + 1);    
} else localStorage.setItem('count',1);

$('form').on('submit', function(){
    localStorage.setItem('string', $('#stringInput').val());
});

if (localStorage.getItem('string')){
    $('#stringDisplay').text(`Text: ${localStorage.getItem('string')}`);
};

if (localStorage.getItem('count')){
    $('#showCount').text(`Refresh count: ${localStorage.getItem('count')}`);
};