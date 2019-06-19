console.log('Starting up');


$(document).ready(init);


function init() {
    createProjects();
    renderProj();

}


function renderProj() {
    var strHtml = '';
    var projects = getProjects();

    for (var i = 0; i < projects.length; i++) {
        strHtml += ` <div class="d-block w-100 portfolio-item">
        <a class="portfolio-link" onclick ="renderModal(${projects[i].id}) " >
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                </div>
            </div>
            <img class="img-fluid" src="${projects[i].img}" alt="${projects[i].name}">
        </a>
        <div class="portfolio-caption">
            <h4>${projects[i].name}</h4>
            <p class="text-muted">${projects[i].desc}</p>
        </div>
    </div>`;
        if (i === 0) {
            $('.one').html(strHtml);
            strHtml = '';
        } else if (i === 1) {
            $('.two').html(strHtml);
            strHtml = '';
        } else if (i === 2) {
            $('.three').html(strHtml);
            strHtml = '';
        } else if (i === 3) {
            $('.four').html(strHtml);
            strHtml = '';
        } else if (i === 4) {
            $('.five').html(strHtml);
            strHtml = '';
        } else if (i === 5) {
            $('.six').html(strHtml);
            strHtml = '';
        } else if (i === 6) {
            $('.seven').html(strHtml);
            strHtml = '';
        }


    };


}

function renderModal(projId) {

    var strHtml = '';
    var proj = getProjById(projId);

    strHtml += `
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl"></div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <div class="modal-body">
                            <!-- Project Details Go Here -->
                            <h2>${proj.name}</h2>
        <p class="item-intro text-muted">${proj.title}</p>
        <img class="img-fluid d-block mx-auto" src="${proj.img}" alt="">
        <p>${proj.desc}</p>
      
        <ul class="list-inline">
            <li>${proj.publishedAt}</li>
            <li>${proj.labels}</li>
            <li>Category: Games</li>
            <a href="${proj.url}">Visit ${proj.name} </a>
        </ul>
        <button class="btn btn-primary" data-dismiss="modal" type="button">
    <i class="fa fa-times"></i>
    Close Project</button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;



    $('.portfolio-modal').html(strHtml);
    $('.portfolio-modal').modal('show');
}

function sendMail() {

    var email = $('.email').val();
    var subject = $('.subject').val();
    var msg = $('.message').val();

    var emailLink = createEmailLink(subject, msg);
    window.open(emailLink)
}