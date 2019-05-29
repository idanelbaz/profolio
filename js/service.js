'use strict'

var gprojects;


function createProjects() {
    var projects = [createProj(1, 'Mine Sweeper', 'Mine Sweeper', 'The best game EVER', 'https://idanelbaz.github.io/mine-sweeper', '16.5.19', 'ELBAZ inc', 'img/wallpapper.jpg'),
        createProj(2, 'Book Store', 'Book Store', 'very good book store managment tool', 'https://idanelbaz.github.io/book-store/', '27.5.19', 'ELBAZ inc', 'img/book-shop1.jpg'),
        createProj(3, 'Guess Who', 'Guess Who', 'The user need to guess a person', 'https://idanelbaz.github.io/Guess-Who/', '26.5.19', 'ELBAZ inc', 'img/guess.png')
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