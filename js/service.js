'use strict'

var gprojects;


function createProjects() {
    var projects = [createProj(1, 'Mine Sweeper', 'Mine Sweeper', 'The best game EVER', 'https://idanelbaz.github.io/mine-sweeper', '16.5.19', 'ELBAZ inc', 'img/wallpapper.jpg'),
        createProj(2, 'Book Store', 'Book Store', 'very good book store managment tool', 'https://idanelbaz.github.io/book-store/', '27.5.19', 'ELBAZ inc', 'img/book-shop1.jpg'),
        createProj(3, 'Guess Who', 'Guess Who', 'The user need to guess a person', 'https://idanelbaz.github.io/Guess-Who/', '26.5.19', 'ELBAZ inc', 'img/guess.png'),
        createProj(4, 'Pixel-Perfect', 'Pixel-Perfect', 'Making a Pixel-Perfect-Responsive live page', ' https://idanelbaz.github.io/Pixel-Perfect/', '2.6.19', 'Elbaz inc', 'img/pixel.png'),
        createProj(5, 'Painter', 'painter', 'Paint as you like', 'https://idanelbaz.github.io/painter/', '5.6.19', 'Elbaz inc', 'img/painter.jpg'),
        createProj(6, 'wikiTube', 'WikiTube', 'Search & Watch YouTube videos , and read about them on Wikipedia', 'https://idanelbaz.github.io/wikitube/', '13.6.19', 'Elbaz inc', 'img/wikitube.png'),
        createProj(7, 'Reader', 'Reader', 'My first VUE made project, Search your read books in Google-Books, and add them to your library', 'https://idanelbaz.github.io/miss-books/', '20.6.19', 'Elbaz inc', 'img/banner.png')
    ];


    gprojects = projects;
}


function createProj(id, name, title, desc, url, publishedAt, labels, img) {
    return {
        id: id,
        name: name,
        title: title,
        desc: desc,
        url: url,
        publishedAt: publishedAt,
        labels: labels,
        img: img,

    }
}

function getProjects() {
    return gprojects
}

function getProjById(id) {
    return gprojects.find(function(proj) {
        return proj.id === id
    })
}


function createEmailLink(subject, msg) {
    return 'https://mail.google.com/mail/?view=cm&fs=1&to=' + 'idanelbaz@gmail.com' + '&su=' + subject + '&body=' + msg;
}


function getTime() {
    var str = '';
    var time = new Date();
    str += time.getDate() + '.';
    str += Number(time.getUTCMonth()) + 1 + '.';
    str += time.getFullYear() + ' , ';
    str += time.getHours() + ":";
    str += time.getMinutes();

    return str;

}