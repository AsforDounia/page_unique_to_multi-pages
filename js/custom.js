// Get Current Year
function getCurrentYear() {
    var d = new Date();
    var year = d.getFullYear();
    document.querySelector("#displayDateYear").innerText = year;
}
getCurrentYear()

//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(35.172216, -2.933460),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}




// header scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// About
// function toggleInfo(isMore) {
//     const moreInfo = document.querySelector('.more-info-about');
//     const buttonMoreInfo = document.querySelector('.button-more-info-about');
//     const buttonLessInfo = document.querySelector('.button-less-info-about');

//     if (isMore) {
//         moreInfo.style.display = 'inline-block';
//         buttonMoreInfo.style.display = 'none';
//         buttonLessInfo.style.display = 'inline-block';
//     } else {
//         moreInfo.style.display = 'none';
//         buttonMoreInfo.style.display = 'inline-block';
//         buttonLessInfo.style.display = 'none';
//     }
// }

// function toggleMoreInfo() {
//     toggleInfo(true);
// }

// function toggleLessInfo() {
//     toggleInfo(false);
// }



// Service
function toggleServiceInfo(showMore) {
    const moreInfo = document.getElementById('more-services');
    const buttonMoreInfo = document.querySelector('.button-more-info-service');
    const buttonLessInfo = document.querySelector('.button-less-info-service');

    if (showMore) {
        moreInfo.style.display = 'block'; // Change to block for better layout
        buttonMoreInfo.style.display = 'none';
        buttonLessInfo.style.display = 'inline-block';
    } else {
        moreInfo.style.display = 'none';
        buttonMoreInfo.style.display = 'inline-block';
        buttonLessInfo.style.display = 'none';
    }
}

function toggleMore() {
    toggleServiceInfo(true);
}

function toggleLess() {
    toggleServiceInfo(false);
}



// about
function toggleAboutInfo(isMore) {
    const moreInfo = document.querySelector('.more-info-about');
    const buttonMoreInfo = document.querySelector('.button-more-info-about');
    const buttonLessInfo = document.querySelector('.button-less-info-about');

    if (isMore) {
        moreInfo.style.display = 'inline-block';
        buttonMoreInfo.style.display = 'none';
        buttonLessInfo.style.display = 'inline-block';
    } else {
        moreInfo.style.display = 'none';
        buttonMoreInfo.style.display = 'inline-block';
        buttonLessInfo.style.display = 'none';
    }
}

function toggleMoreInfo() {
    toggleAboutInfo(true);
}

function toggleLessInfo() {
    toggleAboutInfo(false);
}

document.addEventListener('DOMContentLoaded', function() {
    // Initial state: hide more info for both sections
    toggleServiceInfo(false);
    toggleAboutInfo(false);
});

document.querySelector('.navbar-toggler').addEventListener('click', function() {
    document.querySelector('header').style.backgroundColor = '#d1e3ff';
});