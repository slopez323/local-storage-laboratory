let arr = JSON.parse(localStorage.getItem('list')) || [];
displayList();

if (localStorage.getItem('count')) {
    let count = localStorage.getItem('count');
    localStorage.setItem('count', +count + 1);
} else localStorage.setItem('count', 1);

$('#stringChallenge').on('submit', function () {
    localStorage.setItem('string', $('#stringInput').val());
});

if (localStorage.getItem('string')) {
    $('#stringDisplay').text(`Text: ${localStorage.getItem('string')}`);
};

if (localStorage.getItem('count')) {
    $('#showCount').text(`Refresh count: ${localStorage.getItem('count')}`);
};

$('#listBuilder').on('submit', function (evnt) {
    arr.push($('#listInput').val());
    localStorage.setItem('list', JSON.stringify(arr));
    displayList();
});

function displayList() {
    $('ol').empty();
    for(let i of arr){
        // console.log(arr[i])
        $('ol').append(`<li>${i}</li>`);
    };
};