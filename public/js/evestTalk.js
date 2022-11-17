

function myFunc(mobileSrc, desktopSrc, number_coming_soon_Slides) {
    let isMobile,
        mobileSrc = '<%- JSON.stringify(page.fields.coming_soon_src_mobile) %>',
        desktopSrc = '<%- JSON.stringify(page.fields.coming_soon_src_desktop) %>'

    $(document).ready(function () {
        let arr = $('.contentRowVideo video')
        for (let i = 0; i < arr.length; i++) {
            arr.css("height", "auto");
        }

        console.log(window.location.pathname.split("/")[1])


        // let number_coming_soon_Slides = '<%- JSON.stringify(page.fields.coming_soon_number) %>'

        isMobile = window.innerWidth <= 1078 ? true : false;

        if (isMobile)
            appentComingSoonSlides(mobileSrc, 330, number_coming_soon_Slides)
        else
            appentComingSoonSlides(desktopSrc, 1000, number_coming_soon_Slides)

    });

    function appentComingSoonSlides(src, width, number_coming_soon_Slides) {
        let pageContent = $('.contentContainer')[0];

        for (let i = 0; i < number_coming_soon_Slides; i++) {
            let slideContainer = document.createElement('div')

            let slide = document.createElement('img')

            slide.setAttribute('src', src.replace('"', ''))
            slide.setAttribute('width', `${width}px`)
            slideContainer.setAttribute('style', `margin-bottom:20px`)

            slideContainer.appendChild(slide)

            pageContent.appendChild(slideContainer)
        }
    }

}
export { myFunc }