/* Dark mode */
$('#icon-light').click(function () {
    $('#icon-dark').toggleClass('remove');
    $('#icon-light').toggleClass('remove');

    $('.navbar').toggleClass('navbar-dark bg-dark');
    $('.navbar').toggleClass('navbar-light bg-light');
    $('body').toggleClass('dark');
    $('h1').css('color', '#212529');
    $('#header h1').css('color', '#212529');
});

$('#icon-dark').click(function () {
    $('#icon-dark').toggleClass('remove');
    $('#icon-light').toggleClass('remove');

    $('.navbar').toggleClass('navbar-dark bg-dark');
    $('.navbar').toggleClass('navbar-light bg-light');
    $('body').toggleClass('dark');
    $('h1').css('color', '#fff');
});



/* Get Data from Object */
const Services = {
    Programming: {
        name: 'Programming',
        description: 'Web Application Programming',
        image: 'https://images.theconversation.com/files/130217/original/image-20160712-9264-zt66ib.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',
        types: [{
            name: 'JavaScript',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
            description: 'JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript',
        }, ],
    },
    Design: {
        name: 'Design',
        description: 'Design Web Page',
        image: 'https://image.freepik.com/free-vector/web-design-landing-page-template_52683-18357.jpg',
        types: [{
            name: 'Bootstrap',
            image: 'https://getbootstrap.com/docs/5.1/assets/img/bootstrap-icons.png',
            description: 'Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with jsDelivr and a template starter page.',
        }, ],
    },
    Database: {
        name: 'Database',
        description: 'Database',
        image: 'https://www.openlogic.com/sites/openlogic/files/styles/social_preview_image/public/image/2020-07/image-blog-sql-database.jpg?itok=S2if8k9C',
    },
    API: {
        name: 'API',
        description: 'API',
        image: 'https://www.astera.com/wp-content/uploads/2020/01/rest.png',
    },
};

for (const property in Services) {
    $('.services-items').append(
        `<div class="col-12 col-md-3" id="${property}">
            <div class="card">
                <img src="${Services[property]['image']}" class="card-img-top" alt="..." height:"170px">
                <div class="card-body">
                    <h5 class="card-title">${Services[property]['name']}</h5>
                </div>
            </div>
        </div>`);

    $(`#${property}`).click(function () {
        $('.servicesPage').css('display', 'block');
        $('.homePage').css('display', 'none');
        $('.category-title').append(property);


        Services[property]['types'].forEach(element => {
            $('.category-items').append(
                `<div class="col-12 col-md-3" id="${element.name}">
                            <div class="card">
                                <img src="${element.image}" class="card-img-top" alt="..." height:"170px">
                                <div class="card-body">
                                    <h5 class="card-title">${element.name}</h5>
                                    <p class="card-text">${element.description}</p>
                                </div>
                            </div>
                        </div>`);

            $(`#${element.name}`).click(function () {
                $('.servicesPage').css('display', 'none');
                $('.homePage').css('display', 'none');
                $('.oneServicePage').css('display', 'block');
                $('.service-title').append(element.name);
                $('.service-img').attr('src', element.image);
                $('.service-description').append(element.description);
            });
        });
    });
}


/* Get User Data from Object */
const users = [
    {
        name: 'Mohammed',
        password: '123',
        email: 'tigermo2009@hotmail.com'
    },
];

