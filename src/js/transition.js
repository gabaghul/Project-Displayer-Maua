$(document).ready(() => {
    $('a.js-scroll.trigger').click(e => {
        const link = e.target.getAttribute('href').substr(1)
        document.querySelector(`section[id=${link}]`)
            .scrollIntoView({ block: 'start', behavior: 'smooth' })
    })
})