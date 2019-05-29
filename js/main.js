console.log('Starting up');


$(document).ready(init);


function init() {
    createProjects();
    renderProj();

}


function renderProj() {
    var strHtml = '';
    var projects = gprojects;

    for (var i = 0; i < projects.length; i++) {
        strHtml += ` <div class="col-md-4 col-sm-6 portfolio-item">
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
    };


    $('.innerPro').html(strHtml);

}

function renderModal(projId) {
    console.log(projId)
    var strHtml = '';
    var projects = gprojects;
    var proj = projects[projId - 1];
    console.log(proj)

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
            <a class= "visit" href="${proj.url}">Visit ${proj.name} </a>
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
    console.log('hi')
    var email = $('.email').val();
    var subject = $('.subject').val();
    var msg = $('.message').val();

    var emailLink = createEmailLink(email, subject, msg);
    window.open(emailLink)
}