let arr = JSON.parse(localStorage.getItem('list')) || [];
displayList();
displayString();

if (localStorage.getItem('count')) {
    let count = localStorage.getItem('count');
    localStorage.setItem('count', +count + 1);
} else localStorage.setItem('count', 0);

$('#stringChallenge').on('submit', function (event) {
    event.preventDefault();
    localStorage.setItem('string', $('#stringInput').val());
    displayString();
    $('#stringInput').val('');
});

function displayString(){
if (localStorage.getItem('string')) {
    $('#stringDisplay').text(`Text: ${localStorage.getItem('string')}`);
};
};

if (localStorage.getItem('count')) {
    $('#showCount').text(`Refresh count: ${localStorage.getItem('count')}`);
};

$('#listBuilder').on('submit', function (event) {
    event.preventDefault();
    arr.push($('#listInput').val());
    localStorage.setItem('list', JSON.stringify(arr));
    displayList();
});

function displayList() {
    $('ol').empty();
    for(let i of arr){
        $('ol').append(`<li>${i}</li>`);
    };
    $('#listInput').val('');
};