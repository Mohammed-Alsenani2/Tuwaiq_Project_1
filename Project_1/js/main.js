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

const userLogin = sessionStorage.getItem('UserName');
if (userLogin !== null) {
    $('#SignOutBtn').css('display', 'block');
    $('#SignInBtn').css('display', 'none');
} else {
    $('#SignOutBtn').css('display', 'none');
    $('#SignInBtn').css('display', 'block');
}

/* Get Data from Object */
const Services = {
    Programming: {
        name: 'Programming',
        description: 'Web Application Programming',
        image: 'https://images.theconversation.com/files/130217/original/image-20160712-9264-zt66ib.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',
        types: [{
                name: 'JavaScript',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
                description: 'JavaScript',
            },
            {
                name: 'Java',
                image: 'https://mofeeed.com/wp-content/uploads/2021/07/%D8%AA%D8%B9%D9%84%D9%85-%D9%84%D8%BA%D8%A9-%D8%AC%D8%A7%D9%81%D8%A7-1024x683.png',
                description: 'Java',
            },
            {
                name: 'HTML',
                image: 'https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw',
                description: 'HTML',
            },
            {
                name: 'CSS',
                image: 'https://www.victorkingsley.com/wp-content/uploads/edd/2020/12/css.jpg',
                description: 'CSS',
            },
            {
                name: 'Python',
                image: 'https://www.gom.com/-/media/gom-website/global/services/gom-training-overview/elearning/gom_elearning-python-for-beginners_teaser.jpg?as=0&dmc=0&thn=0',
                description: 'Python',
            },
        ],
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
        const userLogin = sessionStorage.getItem('UserName');
        if (userLogin !== null) {
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
        } else {
            $('.Sign_in').css('display', 'block');
            $('.homePage').css('display', 'none');
            $('.navbar').css('display', 'none');
            $('.footer').css('display', 'none');
        }
    });
}

/* Save User Data in localStorage and get it */

// Sign Up
$('.signUp').click(function () {
    let inputUser = $('#userName').val();
    let inputPassword = $('#password').val();
    let inputEmail = $('#email').val();

    if (inputUser !== "" && inputPassword !== "" && inputEmail !== "") {
        const users = {
            name: inputUser,
            password: inputPassword,
            email: inputEmail
        };
        const usersList = JSON.parse(localStorage.getItem('userData'));
        if (usersList !== null) {
            usersList.push(users);
            localStorage.setItem('userData', JSON.stringify(usersList));
        } else {
            let newUser = [];
            newUser.push(users)
            localStorage.setItem('userData', JSON.stringify(newUser));
        }

        $('.Sign_up').css('display', 'none');
        $('.Sign_in').css('display', 'block');
    } else {
        $('.Sign_up .alert-warning').css('display', 'block');
    }
});

// Sign in
$('.signIn').click(function () {
    let inputUser = $('#signIn-username').val();
    let inputPassword = $('#signIn-password').val();
    const usersList = JSON.parse(localStorage.getItem('userData'));

    if (inputUser !== "" && inputPassword !== "") {
        usersList.forEach(function (user) {
            if (inputUser === user.name && inputPassword === user.password) {
                $('.Sign_in').css('display', 'none');
                $('.homePage').css('display', 'block');
                $('.navbar').css('display', 'block');
                $('.footer').css('display', 'block');

                // Check if Session Storage have Data or No *****
                sessionStorage.setItem('UserName', inputUser);
                const userLogin = sessionStorage.getItem('UserName');
                if (userLogin !== null) {
                    $('#SignOutBtn').css('display', 'block');
                    $('#SignInBtn').css('display', 'none');
                } else {
                    $('#SignOutBtn').css('display', 'none');
                    $('#SignInBtn').css('display', 'block');
                }
            } else {
                $('.alert-warning').css('display', 'block');
            }
        });
    } else {
        alert(`Please enter your information !!!`);
    }
});

$('#SignInBtn').click(function () {
    $('.Sign_in').css('display', 'block');
    $('.homePage').css('display', 'none');
    $('.navbar').css('display', 'none');
    $('.footer').css('display', 'none');
})

// Sign out
$('#SignOutBtn').click(function () {
    sessionStorage.removeItem('UserName');
    $('.Sign_in').css('display', 'block');
    $('.homePage').css('display', 'none');
    $('.navbar').css('display', 'none');
    $('.footer').css('display', 'none');
});


/* Favorite Page */
$('#Favorite_Page').click(function () {
    // Show Favorite Page
});


/* Favorite Object */
const Favorite = [{
        userName: 's',
        Favorites: [{
            name: 'JavaScript',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
            description: 'JavaScript',
        }, ],
    },
    {
        userName: 'Mohammed',
        Favorites: [{
            name: 'JavaScript',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
            description: 'JavaScript',
        }, ],
    }
];

Favorite.forEach(element => {
    const userID = sessionStorage.getItem('UserName');
    if (userID === element['userName']) {
        element['Favorites'].forEach(key => {
            $('.favorite-items').append(
                `<div class="col-12 col-md-3" id="${key['name']}">
                            <div class="card">
                                <img src="${key['image']}" class="card-img-top" alt="..." height:"170px">
                                <div class="card-body">
                                    <h5 class="card-title">${key['name']}</h5>
                                </div>
                            </div>
                        </div>`);
        });
    }
});