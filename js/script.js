'use strict';

//menu button
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
});

//text appearence animation
const textrev = gsap.timeline();

textrev.from(".line span", 1, {
    y: 200,
    ease: "power4.out",
    delay: 1,
    skewY: 10,
    stagger: {
        amount: 0.4
    }
});

//all projects button link
if (document.querySelector('.description__explore')) {
    const projLink = document.querySelector('.description__explore');

    projLink.addEventListener('click', () => {
        location.href = "work.html";
    });
}
//thumbnails hover effect
if (document.querySelector('.description__thumbnails')) {
    const thumbnails = document.querySelector('.description__thumbnails'),
        thumbnailItems = thumbnails.querySelectorAll('div');

    thumbnailItems.forEach(elem => {
        let span = elem.querySelector('span');
        elem.addEventListener('mouseover', () => {
            span.innerHTML = elem.querySelector('img').alt;
            span.style = 'opacity: 1;';
        })
        elem.addEventListener('mouseout', () => {
            span.style = 'opacity: 0;';
        })
    });
}
//project linking 
const linksBD = document.querySelectorAll('.project__item');

linksBD.forEach(elem => {
    elem.addEventListener("click", () => {
        sessionStorage.setItem('Product#', elem.id);
        location.href = "project.html";
    })
})

//building project page
function getCurrentURL() {
    return window.location.pathname
}
if (getCurrentURL() == '/project.html' || getCurrentURL() == '/Captainloopz/project.html') {
    const projectsBD = {
        P1: {
            name: 'Vaporwave Bodies Vj Pack',
            description: 'Vaporwave Bodies is brand new Vj loops pack from CaptainLoopz. Pack includes 4 footages with alpha – channel and 4 backgrounds vj loops. All in Full HD.',
            purchanceLink: 'https://videohive.net/item/vaporwave-bodies-vj-pack/32696438',
            year: '2021',
            contentType: 'Моушн-Дизайн',
            videoURL: 'https://previews.customer.envatousercontent.com/files/9c016c4b-8517-4e06-9a76-f59c5f2cdeb2/video_preview_h264.mp4',
            picturesSRC: {
                first: 'img/projects/P001/first.jpg',
                second: 'img/projects/P001/second.jpg',
                third: 'img/projects/P001/third.jpg',
                forth: 'img/projects/P001/forth.jpg',
                video: 'img/projects/Vaporwave_Bodies_Vj_Pack.avif'
            }
        },
        P2: {
            name: 'Low Poly Animals',
            description: 'New vj loops pack from CaptainLoopz full of low poly animals.',
            purchanceLink: 'https://videohive.net/item/low-poly-animals-/29787854',
            year: '2020',
            contentType: 'Моушн-Дизайн',
            videoURL: 'https://previews.customer.envatousercontent.com/files/40862121-9c22-4a9e-9b5e-78f1628cbb89/video_preview_h264.mp4',
            picturesSRC: {
                first: 'img/projects/P002/first.jpg',
                second: 'img/projects/P002/second.jpg',
                third: 'img/projects/P002/third.jpg',
                forth: 'img/projects/P002/forth.jpg',
                video: 'img/projects/Low_Poly_Animals.avif'
            }
        },
        P3: {
            name: 'Body Parts Vaporwave',
            description: 'CaptainLoopz presents new surprising and peculiar pack of motion graphic footages for VJ-s “Body Parts Vaporwave”. Get some new ideas for your unique VJ shows with this pack. All footages are in Full HD, 60 frames per second.',
            purchanceLink: 'https://videohive.net/item/body-parts-vaporwave/27165396',
            year: '2020',
            contentType: 'Моушн-Дизайн',
            videoURL: 'https://previews.customer.envatousercontent.com/files/97621d05-c787-4f40-a516-71af2f836ea2/video_preview_h264.mp4',
            picturesSRC: {
                first: 'img/projects/P003/first.jpg',
                second: 'img/projects/P003/second.jpg',
                third: 'img/projects/P003/third.jpg',
                forth: 'img/projects/P003/forth.jpg',
                video: 'img/projects/Body_Parts_Vaporwave.avif'
            }
        },
        P4: {
            name: 'Ancient Power V.2',
            description: 'Ancient Power v.2<br><br>CaptainLoopz presents new pack “Ancient Power v.2” of motion graphics footages for professionals use.<br><br>Reccomended for vj - sets, video installations, making video – background for concerts and festivals.<br><br>All footages in Full HD. 60 fps.',
            purchanceLink: 'https://videohive.net/item/ancient-power-v2/25270640',
            year: '2019',
            contentType: 'Моушн-Дизайн',
            videoURL: 'https://previews.customer.envatousercontent.com/files/c5a51969-1ec4-4d5f-bb0b-fdb77cf2a0e9/video_preview_h264.mp4',
            picturesSRC: {
                first: 'img/projects/P004/first.jpg',
                second: 'img/projects/P004/second.jpg',
                third: 'img/projects/P004/third.jpg',
                forth: 'img/projects/P004/forth.jpg',
                video: 'img/projects/Ancient_Power_V_2.avif'
            }
        },
        P5: {
            name: 'Neon Hoops Vj Pack',
            description: 'CaptainLoopz proudly presents brand new pack of footages “Neon Hoops” full of sensitive mood for making professional video installations. With this pack of footages your not need to have much skills to create unique atmo for night club parties or special privat parties. Pack consists of four objects with alpha-channel and four backdrops.',
            purchanceLink: 'https://videohive.net/item/neon-hoops-vj-pack/23975251',
            year: '2019',
            contentType: 'Моушн-Дизайн',
            videoURL: 'https://previews.customer.envatousercontent.com/files/00220fc4-d3d4-459b-9827-4b0972680a23/video_preview_h264.mp4',
            picturesSRC: {
                first: 'img/projects/P005/first.jpg',
                second: 'img/projects/P005/second.jpg',
                third: 'img/projects/P005/third.jpg',
                forth: 'img/projects/P005/forth.jpg',
                video: 'img/projects/Neon_Hoops_Vj_Pack.avif'
            }
        },
        P6: {
            name: 'Heads & Bodies in Vaporwave',
            description: 'New pack of vj’s footages delivers vaporwave mood with four statues and backdrops.You’ll find two bodies and two heads of statues with alpha - channel and four backgrounds inside.<br><br>You’ll may easely create vaporwave back- up for lots of dance and other events using footages from “Heads and bodies in Vaporwave” on your screens.<br><br>All in Full HD.',
            purchanceLink: 'https://videohive.net/item/heads-bodies-in-vaporwave/23816053',
            year: '2019',
            contentType: 'Моушн-Дизайн',
            videoURL: 'https://previews.customer.envatousercontent.com/files/d74a2ac8-8234-4759-b520-0c449c600ae9/video_preview_h264.mp4',
            picturesSRC: {
                first: 'img/projects/P006/first.jpg',
                second: 'img/projects/P006/second.jpg',
                third: 'img/projects/P006/third.jpg',
                forth: 'img/projects/P006/forth.jpg',
                video: 'img/projects/Heads_&_Bodies_in_Vaporwave.avif'
            }
        }
    }
    function read_prop(prop) {
        return projectsBD[prop];
    }


    const projectID = 'P' + sessionStorage.getItem('Product#');
    const BDpath = read_prop(projectID);
    const projectMainInfo = document.querySelector('.project__description');
    const projectTags = document.querySelector('.project__tags');
    const projectMedia = document.querySelector('.project__absolute');

    document.title = 'Captain Loopz - ' + BDpath.name;

    projectMainInfo.firstElementChild.innerHTML = BDpath.name;
    projectMainInfo.lastElementChild.innerHTML = BDpath.description;
    document.getElementById("purchanceLink").addEventListener("click", () => {
        location.href = BDpath.purchanceLink;
    });
    projectTags.firstElementChild.innerHTML = '<span>Рік:</span>' + BDpath.year;
    projectTags.lastElementChild.innerHTML = '<span>Тип контенту:</span>' + BDpath.contentType;
    projectMedia.innerHTML = `<a class="project__video" href="${BDpath.videoURL}" data-fancybox><div><button class='button play'></button></div></a>
    <div class="project__photos">
        <a class="project__photo" rel="group" href="${BDpath.picturesSRC.first}" data-fancybox><img src="${BDpath.picturesSRC.first}"/></a>
        <a class="project__photo" rel="group" href="${BDpath.picturesSRC.second}" data-fancybox><img src="${BDpath.picturesSRC.second}"/></a>
        <a class="project__photo" rel="group" href="${BDpath.picturesSRC.third}" data-fancybox><img src="${BDpath.picturesSRC.third}"/></a>
        <a class="project__photo" rel="group" href="${BDpath.picturesSRC.forth}" data-fancybox><img src="${BDpath.picturesSRC.forth}"/></a>
    </div>`
    $('.project__photos').slick({
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><i class="arrow left"></i></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><i class="arrow right"></i></button>'
    });
    document.querySelector('.project__video').style = `background-image: url(${BDpath.picturesSRC.video});`

    const prevProject = document.getElementById('prevProject');
    const allProjects = document.getElementById('allProjects');
    const nextProject = document.getElementById('nextProject');

    allProjects.addEventListener('click', () => {
        location.href = "work.html";
    });

    let projectid = sessionStorage.getItem('Product#');
    nextProject.addEventListener('click', () => {
        projectid++;
        if (projectid > 6) {
            location.href = "work.html";
        } else {
            sessionStorage.setItem('Product#', projectid);
            location.href = "project.html";
        }
    })
    prevProject.addEventListener('click', () => {
        projectid--;
        if (!projectid) {
            location.href = "work.html";
        } else {
            sessionStorage.setItem('Product#', projectid);
            location.href = "project.html";
        }
    })
    console.log(projectid);
}   
