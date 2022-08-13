
$('#skill-btn').on('click',function (){
    $(this).addClass('active-btn')
    $("#edu-btn").removeClass('active-btn')
    $('.skill-card').removeClass('d-none')
    $('.edu-card').addClass('d-none')
})
$('#edu-btn').on('click',function (){
    $(this).addClass('active-btn')
    $("#skill-btn").removeClass('active-btn')
    $('.edu-card').removeClass('d-none')
    $('.skill-card').addClass('d-none')
})
$('.skill-btn').on('click',function (){
    $('#skill-btn').addClass('active-btn')
    $("#edu-btn").removeClass('active-btn')
    $('.skill-card').removeClass('d-none')
    $('.edu-card').addClass('d-none')
})
$('.edu-btn').on('click',function (){
    $("#edu-btn").addClass('active-btn')
    $("#skill-btn").removeClass('active-btn')
    $('.edu-card').removeClass('d-none')
    $('.skill-card').addClass('d-none')
})
if (window.matchMedia("(max-width :414px)").matches){

}
$('.mobile-slick').slick({
    dots: true,
    infinite: false,
    // nextArrow: '.next_caro',
    // prevArrow: '.previous_caro',
    speed: 300,
    slidesToShow:1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

let windowHeight = $(window).height()

$(window).scroll(
function () {
    let currentHeight = $(this).scrollTop();
if (currentHeight>windowHeight){
    $("header").addClass('position-fixed')
    $("header").addClass('bg-whitesmoke')
    $(".navbar-brand").addClass('text-primary')
}
else{
    $("header").removeClass('position-fixed')
    $("header").removeClass('bg-whitesmoke')
    $(".navbar-brand").removeClass('text-primary')
}
}

)
function setActive(currentSectionId){
    $('.nav-link').removeClass('active-Nav');
$(`.nav-link[href="#${currentSectionId}"]`).addClass('active-Nav');
console.log('hello')
}


function addActive() {
    let currentSection = $('section[id]')
    currentSection.waypoint(
        function (direction){
            if (direction=='down'){
                   let currentSectionId = $(this.element).attr('id')
                    setActive(currentSectionId)
            }

        },{offset:'25%'}
    )

    currentSection.waypoint(
        function (direction) {
            if (direction=='up'){
                let currentSectionId =$(this.element).attr('id')
                setActive(currentSectionId)
            }
            
        },{offset:'-25%'}
    )
}

addActive()