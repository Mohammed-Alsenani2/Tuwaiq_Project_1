$(document).ready(function () {
    const page = sessionStorage.getItem('page');
    if (page !== null) {
        if (page === "Home") {
            $('.Sign_up').css('display', 'none');
            $('.Sign_in').css('display', 'none');
            $('.servicesPage').css('display', 'none');
            $('.oneServicePage').css('display', 'none');
            $('#myFavoritePage').css('display', 'none');

            $('.navbar').css('display', 'block');
            $('.homePage').css('display', 'block');
            $('.footer').css('display', 'block');
        } else if (page === "Favorite") {
            $('.Sign_up').css('display', 'none');
            $('.Sign_in').css('display', 'none');
            $('.servicesPage').css('display', 'none');
            $('.oneServicePage').css('display', 'none');
            $('#myFavoritePage').css('display', 'block');

            $('.navbar').css('display', 'block');
            $('.homePage').css('display', 'none');
            $('.footer').css('display', 'block');
        } else if (page === "Sign_in") {
            $('.Sign_up').css('display', 'none');
            $('.Sign_in').css('display', 'block');
            $('.servicesPage').css('display', 'none');
            $('.oneServicePage').css('display', 'none');
            $('#myFavoritePage').css('display', 'none');

            $('.navbar').css('display', 'none');
            $('.homePage').css('display', 'none');
            $('.footer').css('display', 'none');
        } else if (page === "Sing_up") {
            $('.Sign_up').css('display', 'block');
            $('.Sign_in').css('display', 'none');
            $('.servicesPage').css('display', 'none');
            $('.oneServicePage').css('display', 'none');
            $('#myFavoritePage').css('display', 'none');

            $('.navbar').css('display', 'none');
            $('.homePage').css('display', 'none');
            $('.footer').css('display', 'none');
        }
    }
});

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
    KK: {
        name: 'API',
        description: 'API',
        image: 'https://www.astera.com/wp-content/uploads/2020/01/rest.png',
    },
};


// Save Services in the localStorage
$(document).ready(function () {
    const servicesList = JSON.parse(localStorage.getItem('servicesList'));
    if (servicesList !== null) {
        const sName = servicesList.find(({ name }) => name === 'Programming');
        alert(sName);
        // servicesList.forEach(element => {
        //     for (const key in element) {
        //         const result = element[key].find((name) => name['name'] === element[key]['name']);
        //         alert(result);
        //         // if (result) {
        //         //     alert("Hello");
        //         // } else {
        //         //     servicesList.push(Services);
        //         //     localStorage.setItem('servicesList', JSON.stringify(servicesList));
        //         // }
        //     }
        // });
    } else {
        let newService = [];
        newService.push(Services);
        localStorage.setItem('servicesList', JSON.stringify(newService));
    }
});


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
            // add and remove pages
            $('.servicesPage').css('display', 'block');
            $('.homePage').css('display', 'none');
            $('.Sign_up').css('display', 'none');
            $('.Sign_in').css('display', 'none');
            $('#myFavoritePage').css('display', 'none');
            $('.oneServicePage').css('display', 'none');
            $('.navbar').css('display', 'block');
            $('.footer').css('display', 'block');

            $('.servicesPage .category-title').html(''); // clear data

            $('.servicesPage .category-title').append(property);

            $('.category-items').html(''); // clear data

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

        // Check if the usersList Empty or not
        if (usersList !== null) {
            // Check if the usersList have this user or not
            const result = usersList.find((name) => name.name === inputUser && name.email === inputEmail);
            if (result) {
                // if the user there then pritn alert
                $('#haveAnAccount').css('display', 'block');
                $('.Sign_up .alert-warning').css('display', 'none');
            } else {
                // add the user
                usersList.push(users);
                localStorage.setItem('userData', JSON.stringify(usersList));
                $('.Sign_up').css('display', 'none');
                $('.Sign_in').css('display', 'block');
            }
        } else {
            // add new user if data is Empty
            let newUser = [];
            newUser.push(users)
            localStorage.setItem('userData', JSON.stringify(newUser));
            $('.Sign_up').css('display', 'none');
            $('.Sign_in').css('display', 'block');
        }
    } else {
        $('.Sign_up .alert-warning').css('display', 'block');
        $('#haveAnAccount').css('display', 'none');
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
                $('#signIn-username').val("");
                $('#signIn-password').val("");

                // Check if Session Storage have Data or No *****
                sessionStorage.setItem('UserName', inputUser);
                const userLogin = sessionStorage.getItem('UserName');
                if (userLogin !== null) {
                    $('#SignOutBtn').css('display', 'block');
                    $('#SignInBtn').css('display', 'none');
                    $('#WelcomeUser').text(`Welcome: ${userLogin}`);
                } else {
                    $('#SignOutBtn').css('display', 'none');
                    $('#SignInBtn').css('display', 'block');
                }

                // put Home page in sessionStorage
                sessionStorage.setItem('page', 'Home');
            } else {
                $('.alert-warning').css('display', 'block');
                $('#information').css('display', 'none');
            }
        });
    } else {
        $('#information').css('display', 'block');
    }
});

$('#SignInBtn').click(function () {
    sessionStorage.setItem('page', 'Sign_in');
    $('.Sign_in').css('display', 'block');
    $('.homePage').css('display', 'none');
    $('.navbar').css('display', 'none');
    $('.footer').css('display', 'none');
})

// Sign out
$('#SignOutBtn').click(function () {
    sessionStorage.removeItem('UserName');
    sessionStorage.setItem('page', 'Sign_in');
    $('.Sign_in').css('display', 'block');
    $('.homePage').css('display', 'none');
    $('.navbar').css('display', 'none');
    $('.footer').css('display', 'none');

    $('.alert-warning').css('display', 'none');
    $('#information').css('display', 'none');
});

// Create Account button
$('.createAccount').click(function () {
    sessionStorage.setItem('page', 'Sing_up');

    $('.Sign_up').css('display', 'block');
    $('.Sign_in').css('display', 'none');
    $('.servicesPage').css('display', 'none');
    $('.oneServicePage').css('display', 'none');
    $('#myFavoritePage').css('display', 'none');

    $('.navbar').css('display', 'none');
    $('.homePage').css('display', 'none');
    $('.footer').css('display', 'none');
});

// Go to Sign in page
$('#goSignInPage').click(function () {
    sessionStorage.setItem('page', 'Sign_in');

    $('.Sign_up').css('display', 'none');
    $('.Sign_in').css('display', 'block');
    $('.servicesPage').css('display', 'none');
    $('.oneServicePage').css('display', 'none');
    $('#myFavoritePage').css('display', 'none');

    $('.navbar').css('display', 'none');
    $('.homePage').css('display', 'none');
    $('.footer').css('display', 'none');
});

/* Favorite Page */
$('#Favorite_Page').click(function () {
    sessionStorage.setItem('page', 'Favorite');
    $('.favorite-items').html('');
    // Show Favorite Page
    $('.Sign_in').css('display', 'none');
    $('#myFavoritePage').css('display', 'block');
    $('.homePage').css('display', 'none');

    const favoriteUserList = JSON.parse(localStorage.getItem('favoriteUser'));
    favoriteUserList.forEach(element => {
        for (const key in element) {
            const userID = sessionStorage.getItem('UserName');
            if (userID === element[key]['userName']) {
                for (const item in element[key]['Favorites']) {
                    $('.favorite-items').append(
                        `<div class="col-12 col-md-3">
                                <div class="card">
                                    <img src="${element[key]['Favorites'][item]['image']}" class="card-img-top" alt="..." height:"170px">
                                    <div class="card-body">
                                        <h5 class="card-title">${element[key]['Favorites'][item]['name']}</h5>
                                    </div>
                                </div>
                            </div>`);
                }
            }
        }
    });
});



/* Favorite Object */
/********************************************** Test Object **************************************************/
// const Favorite = [{
//         userName: 's',
//         Favorites: [{
//             name: 'JavaScript',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
//             description: 'JavaScript',
//         }, ],
//     },
//     {
//         userName: 'Mohammed',
//         Favorites: [{
//             name: 'JavaScript',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
//             description: 'JavaScript',
//         }, ],
//     }
// ];


// Save favorite of user
$('#Favorite_item').click(function () {
    const name = $('.service-title').text();
    const image = $('.service-img').attr('src');
    const description = $('.service-description').text();

    const Favorite = [{
        userName: sessionStorage.getItem('UserName'),
        Favorites: [{
            name: name,
            image: image,
            description: description,
        }, ],
    }];

    const favoriteUserList = JSON.parse(localStorage.getItem('favoriteUser'));

    if (favoriteUserList !== null) {
        favoriteUserList.push(Favorite);
        localStorage.setItem('favoriteUser', JSON.stringify(favoriteUserList));
    } else {
        let newFavorite = [];
        newFavorite.push(Favorite)
        localStorage.setItem('favoriteUser', JSON.stringify(newFavorite));
    }
})

/*  Click Navbar button   */
// home
$('#Home_Page').click(function () {
    sessionStorage.setItem('page', 'Home');
    $('.Sign_up').css('display', 'none');
    $('.Sign_in').css('display', 'none');
    $('#myFavoritePage').css('display', 'none');
    $('.servicesPage').css('display', 'none');
    $('.oneServicePage').css('display', 'none');

    $('.navbar').css('display', 'block');
    $('.homePage').css('display', 'block');
    $('.footer').css('display', 'block');
});

// favorite
$('#Favorite_Page').click(function () {
    $('.Sign_up').css('display', 'none');
    $('.Sign_in').css('display', 'none');
    $('.servicesPage').css('display', 'none');
    $('.oneServicePage').css('display', 'none');
    $('#myFavoritePage').css('display', 'block');

    $('.navbar').css('display', 'block');
    $('.homePage').css('display', 'none');
    $('.footer').css('display', 'block');
});


// how many users in the website
const numberOfUsers = JSON.parse(localStorage.getItem('userData')).length;
$('#numberOfUsers').html(numberOfUsers);

// how many services in the website
const numberOfServices = JSON.parse(localStorage.getItem('servicesList'));
let count = 0;
numberOfServices.forEach(element => {
    for (const key in element) {
        count++;
    }
});
$('#numberOfServices').html(count);