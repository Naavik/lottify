window.addEventListener("DOMContentLoaded", () => {

    // function

    function tabs(tab, activeClass) {

        tab.forEach((item, i) => {
            item.addEventListener('click', () => {
                tab.forEach(items => {
                    items.classList.remove(activeClass)
                })
                tab[i].classList.add(activeClass)
            })
        })

    }

    // burger-menu

    const wrapper = document.querySelector('.wrapper')
    const burgerBtn = document.querySelectorAll('.burger-btn')
    const burgerMenu = document.querySelector('.burger-menu')

    if (burgerBtn) {
        burgerBtn.forEach(item => {
            item.addEventListener('click', () => {
                burgerMenu.classList.toggle('burger-menu--visible')
                wrapper.classList.toggle('wrapper--bg')
            })
        })

        burgerMenu.addEventListener('click', (e) => {
            if (e.target == burgerMenu) {
                burgerMenu.classList.remove('burger-menu--visible')
                wrapper.classList.remove('wrapper--bg')
            }
        })
    }

    // swiper

    const swiperCounries = new Swiper('.swiper-countries', {
        slidesPerView: "auto",
        spaceBetween: 6,
        initialSlide: 1,
        centeredSlides: true,
        slideToClickedSlide: true,
        breakpoints: {
            601: {
                spaceBetween: 10,
            }
        }
    });

    const swiperCity = new Swiper('.swiper-city', {
        slidesPerView: "auto",
        spaceBetween: 6,
        initialSlide: 4,
        centeredSlides: true,
        slideToClickedSlide: true,
        breakpoints: {
            1201: {
                initialSlide: 4,
            },
            601: {
                spaceBetween: 10,
            }
        }
    });

    const swiperEvent = new Swiper('.swiper-event', {
        slidesPerView: "auto",
        spaceBetween: 6,
        initialSlide: 5,
        centeredSlides: true,
        slideToClickedSlide: true,
        breakpoints: {
            1201: {
                initialSlide: 5,
            },
            601: {
                spaceBetween: 10,
            }
        }
    });

    const swiperTopEvent = new Swiper('.swiper-top-events', {
        slidesPerView: "auto",
        spaceBetween: 10,
        loop: true,
        breakpoints: {
            769: {
                spaceBetween: 20,
            }
        },
        autoplay: {
            time: 3000
        }
    });

    const swiperPreviewCatalog = new Swiper('.swiper-catalog-review', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        speed: 500,
        pagination: {
            el: '.swiper-catalog-review-pagination',
            clickable: true
        },
        breakpoints: {

        },
        autoplay: {
            time: 3000
        }
    });

    // index

    const citysTab = document.querySelectorAll('.slider-city__slide-link')

    if (citysTab) {
        tabs(citysTab, 'slider-city__slide-link--active')
    }

    const eventTab = document.querySelectorAll('.slider-event__slide-link')

    if (eventTab) {
        tabs(eventTab, 'slider-event__slide-link--active')
    }

    // accordion

    const accordion = document.querySelectorAll('.faq__accordion').forEach(wrapper => {

        const accordionBtn = wrapper.querySelector('.faq__accordion-title')
        const accordionContent = wrapper.querySelector('.faq__accordion-content')
        const accordionTitle = wrapper.querySelector('.faq__accordion-title')

        if (accordionBtn !== null) {
            accordionBtn.addEventListener('click', () => {
                accordionContent.classList.toggle('faq__accordion--visible')
                accordionTitle.classList.toggle('faq__accordion-title--active')

                if (accordionContent.classList.contains('faq__accordion--visible')) {
                    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
                } else {
                    accordionContent.style.maxHeight = null
                }
            })
        }

    })


    // dropwdown

    const dropdown = document.querySelectorAll('.dropdown')

    if (dropdown) {

        dropdown.forEach(function (dropdown) {

            const dropdownBtn = dropdown.querySelector('.dropdown__title')
            const dropdownActive = dropdown.querySelector('.dropdown__title')
            const dropdownActiveText = dropdown.querySelector('.dropdown__title-text')
            const dropdownActiveContent = dropdown.querySelector('.dropdown__content')
            const dropdownListItem = dropdown.querySelectorAll('.dropdown__item-text')

            dropdownBtn.addEventListener('click', function (e) {

                dropdownActive.classList.toggle('dropdown__title--active')
                dropdownActiveContent.classList.toggle('dropdown__content--visible')

                if (dropdownActiveContent.classList.contains('dropdown__content--visible')) {
                    dropdownActiveContent.style.maxHeight = dropdownActiveContent.scrollHeight + 'px'
                } else {
                    dropdownActiveContent.style.maxHeight = null
                }

            })

            dropdownListItem.forEach((item, i) => {
                item.addEventListener('click', (e) => {
                    e.stopPropagation()

                    dropdownActive.classList.remove('dropdown__title--active')
                    dropdownActiveContent.classList.remove('dropdown__content--visible')
                    dropdownActiveContent.style.maxHeight = null

                    dropdownActiveText.innerText = e.target.innerText

                })
            })

            document.addEventListener('click', function (e) {
                if (e.target !== dropdownBtn) {
                    dropdownActive.classList.remove('dropdown__title--active')
                    dropdownActiveContent.classList.remove('dropdown__content--visible')
                    dropdownActiveContent.style.maxHeight = null
                }
            })

        })

    }

    // catalog

    const countriesTab = document.querySelectorAll('.slider-countries__slide-link')

    if (countriesTab) {
        tabs(countriesTab, 'slider-countries__slide-link--active')
    }

    // .checkout

    const checkoutCheckAllCheckbox = document.querySelector('.checkout__check-all-checkbox')
    const checkoutArticleTicketCheckbox = document.querySelectorAll('.checkout__article-ticket-checkbox')

    if (checkoutCheckAllCheckbox) {

        checkoutCheckAllCheckbox.addEventListener('change', () => {

            if (checkoutCheckAllCheckbox.checked) {
                checkoutArticleTicketCheckbox.forEach(item => {
                    item.checked = true
                })
            } else {
                checkoutArticleTicketCheckbox.forEach(item => {
                    item.checked = false
                })
            }

        })

        checkoutArticleTicketCheckbox.forEach(item => {
            item.addEventListener('change', () => {

                if (item.checked) {
                } else {
                    checkoutCheckAllCheckbox.checked = false
                }

            })
        })

    }

    // lot card

    const lotCardTab = document.querySelectorAll('.lot-card-info__tab')
    const lotCardTabContent = document.querySelectorAll('.lot-card-info__content')

    if (lotCardTab) {
        tabs(lotCardTab, 'lot-card-info__tab---active')

        lotCardTab.forEach((item, i) => {
            item.addEventListener('click', () => {
                lotCardTabContent.forEach(items => {
                    items.classList.remove('lot-card-info__content--active')
                })
                lotCardTabContent[i].classList.add('lot-card-info__content--active')
            })
        })
    }

    // my-lots

    const myLotsTab = document.querySelectorAll('.my-lots__tab')

    if (myLotsTab) {
        tabs(myLotsTab, 'my-lots__tab--active')
    }

    // ticket-selling-steps

    let current = 0

    const ticketSellingStepsBtnPrev = document.querySelectorAll('.ticket-selling-steps__btn-prev')
    const ticketSellingStepsBtnNext = document.querySelectorAll('.ticket-selling-steps__btn-next')

    const ticketSellingStepsContent = document.querySelectorAll('.ticket-selling-steps__content')

    const ticketSellingStepsStep = document.querySelectorAll('.ticket-selling-steps__step')

    const pageFaq = document.querySelector('.page__faq-ticket-selling-steps')

    const ticketSellingStepsBtns = document.querySelector('.ticket-selling-steps__right .ticket-selling-steps__btns')

    if (ticketSellingStepsContent) {

        ticketSellingStepsBtnPrev.forEach(item => {
            item.addEventListener('click', () => {
                if (current <= 0) {

                } else {
                    current--
                }
                ticketSellingStepsContentFunc()
            })
        })

        ticketSellingStepsBtnNext.forEach(item => {
            item.addEventListener('click', () => {
                if (current >= ticketSellingStepsContent.length - 1) {

                } else {
                    current++
                }
                ticketSellingStepsContentFunc()
            })
        })


        function ticketSellingStepsContentFunc() {
            ticketSellingStepsContent.forEach(item => {
                item.classList.remove('ticket-selling-steps__content--active')
                ticketSellingStepsContent[current].classList.add('ticket-selling-steps__content--active')
            })

            if (current == 0) {
                ticketSellingStepsStep.forEach(item => {
                    item.classList.remove('ticket-selling-steps__step--active')
                    item.classList.remove('ticket-selling-steps__step--accept')
                    ticketSellingStepsStep[current].classList.add('ticket-selling-steps__step--active')

                    pageFaq.style.display = 'block'
                    ticketSellingStepsBtns.style.display = 'flex'
                })
            } else if (current == 1) {
                ticketSellingStepsStep.forEach(item => {
                    item.classList.remove('ticket-selling-steps__step--active')

                    ticketSellingStepsStep[current - 1].classList.add('ticket-selling-steps__step--accept')
                    ticketSellingStepsStep[current].classList.add('ticket-selling-steps__step--active')

                    ticketSellingStepsStep[current].classList.remove('ticket-selling-steps__step--accept')

                    pageFaq.style.display = 'none'
                    ticketSellingStepsBtns.style.display = 'flex'
                })
            } else if (current == 2) {
                ticketSellingStepsStep.forEach(item => {
                    item.classList.remove('ticket-selling-steps__step--active')
                    ticketSellingStepsStep[0].classList.add('ticket-selling-steps__step--accept')
                    ticketSellingStepsStep[current - 1].classList.add('ticket-selling-steps__step--accept')
                    ticketSellingStepsStep[current].classList.add('ticket-selling-steps__step--active')

                    pageFaq.style.display = 'none'
                    ticketSellingStepsBtns.style.display = 'none'
                })
            }
        }


        const ticketSellingStepsRadio1 = document.querySelector('#ticket-selling-steps-radio-1')
        const ticketSellingStepsRadio2 = document.querySelector('#ticket-selling-steps-radio-2')
        const ticketSellingStepsRadioAll = document.querySelectorAll('.ticket-selling-steps__radio')

        const ticketSellingStepsTitleChoise = document.querySelector('.ticket-selling-steps__title-choise')
        const ticketSellingStepsSubtitleChoise = document.querySelector('.ticket-selling-steps__subtitle-choise')
        const ticketSellingStepsRowTypeTitleText = document.querySelector('.ticket-selling-steps__row-type-title')
        const ticketSellingStepsRowFile = document.querySelector('.ticket-selling-steps__row-file')

        const ticketSellingStepsResultRadioRow = document.querySelectorAll('.ticket-selling-steps__result-radio-row')

        function ticketSellingStepsRadio() {

            if (ticketSellingStepsRadio1.checked) {
                ticketSellingStepsTitleChoise.innerHTML = 'Электронный билет'
                ticketSellingStepsSubtitleChoise.style.display = 'none'
                ticketSellingStepsRowTypeTitleText.style.display = 'none'
                ticketSellingStepsRowFile.style.display = 'block'

                ticketSellingStepsResultRadioRow[0].classList.add('ticket-selling-steps__result-radio-row--active')
                ticketSellingStepsResultRadioRow[1].classList.remove('ticket-selling-steps__result-radio-row--active')
            } else {
                ticketSellingStepsTitleChoise.innerHTML = 'Бумажный билет'
                ticketSellingStepsSubtitleChoise.style.display = 'block'
                ticketSellingStepsRowTypeTitleText.style.display = 'block'
                ticketSellingStepsRowFile.style.display = 'none'

                ticketSellingStepsResultRadioRow[0].classList.remove('ticket-selling-steps__result-radio-row--active')
                ticketSellingStepsResultRadioRow[1].classList.add('ticket-selling-steps__result-radio-row--active')
            }
        }

        if (ticketSellingStepsRadioAll.length !== 0) {
            ticketSellingStepsRadio()

            ticketSellingStepsRadioAll.forEach(item => {
                item.addEventListener('change', () => {
                    ticketSellingStepsRadio()
                })
            })
        }



        const ticketSellingStepsInpAll = document.querySelectorAll('.ticket-selling-steps__input')

        const ticketSellingStepsEventNameInp = document.querySelector('.ticket-selling-steps-event-name-inp')
        const ticketSellingStepsEventName = document.querySelector('.ticket-selling-steps-event-name')

        const ticketSellingStepsLocationInp = document.querySelector('.ticket-selling-steps-location-inp')
        const ticketSellingStepsLocation = document.querySelector('.ticket-selling-steps-location')

        const ticketSellingStepsDateInp = document.querySelector('.ticket-selling-steps-date-inp')
        const ticketSellingStepsDate = document.querySelector('.ticket-selling-steps-date')

        const ticketSellingStepsTicketsInp = document.querySelector('.ticket-selling-steps-num-tickets-inp')
        const ticketSellingStepsTickets = document.querySelector('.ticket-selling-steps-num-tickets')

        const ticketSellingStepsCommentsInp = document.querySelector('.ticket-selling-steps__textarea')
        const ticketSellingStepsComments = document.querySelector('.ticket-selling-steps-comments')

        const ticketSellingStepsSectorInp = document.querySelector('.ticket-selling-steps-sector-inp')
        const ticketSellingStepsSector = document.querySelector('.ticket-selling-steps-sector')

        const ticketSellingStepsRowInp = document.querySelector('.ticket-selling-steps-row-inp')
        const ticketSellingStepsRow = document.querySelector('.ticket-selling-steps-row')

        const ticketSellingStepsPlaceInp = document.querySelector('.ticket-selling-steps-place-inp')
        const ticketSellingStepsPlace = document.querySelector('.ticket-selling-steps-place')

        const ticketSellingStepsPriceInp = document.querySelector('.ticket-selling-steps-price-inp')
        const ticketSellingStepsPrice = document.querySelector('.ticket-selling-steps-price')

        const ticketSellingStepsSurnameInp = document.querySelector('.ticket-selling-steps-surname-inp')
        const ticketSellingStepsSurname = document.querySelector('.ticket-selling-steps-surname')

        const ticketSellingStepsSurname2Inp = document.querySelector('.ticket-selling-steps-surname2-inp')
        const ticketSellingStepsSurname2 = document.querySelector('.ticket-selling-steps-surname2')

        const ticketSellingStepsNameInp = document.querySelector('.ticket-selling-steps-name-inp')
        const ticketSellingStepsName = document.querySelector('.ticket-selling-steps-name')

        const ticketSellingStepsTelInp = document.querySelector('.ticket-selling-steps-tel-inp')
        const ticketSellingStepsTel = document.querySelector('.ticket-selling-steps-tel')

        const ticketSellingStepsEmailInp = document.querySelector('.ticket-selling-steps-email-inp')
        const ticketSellingStepsEmail = document.querySelector('.ticket-selling-steps-email')

        function ticketSellingStepsInputChange(ticketSellingStepsInp, ticketSellingStepsResult) {

            ticketSellingStepsInp.addEventListener('input', () => {
                ticketSellingStepsResult.innerHTML = ticketSellingStepsInp.value
            })

        }

        ticketSellingStepsInpAll.forEach(item => {
            item.addEventListener('input', () => {
                ticketSellingStepsInputChange(ticketSellingStepsEventNameInp, ticketSellingStepsEventName)
                ticketSellingStepsInputChange(ticketSellingStepsLocationInp, ticketSellingStepsLocation)
                ticketSellingStepsInputChange(ticketSellingStepsDateInp, ticketSellingStepsDate)
                ticketSellingStepsInputChange(ticketSellingStepsTicketsInp, ticketSellingStepsTickets)
                ticketSellingStepsInputChange(ticketSellingStepsCommentsInp, ticketSellingStepsComments)
                ticketSellingStepsInputChange(ticketSellingStepsSectorInp, ticketSellingStepsSector)
                ticketSellingStepsInputChange(ticketSellingStepsRowInp, ticketSellingStepsRow)
                ticketSellingStepsInputChange(ticketSellingStepsPlaceInp, ticketSellingStepsPlace)
                ticketSellingStepsInputChange(ticketSellingStepsPriceInp, ticketSellingStepsPrice)
                ticketSellingStepsInputChange(ticketSellingStepsSurnameInp, ticketSellingStepsSurname)
                ticketSellingStepsInputChange(ticketSellingStepsSurname2Inp, ticketSellingStepsSurname2)
                ticketSellingStepsInputChange(ticketSellingStepsNameInp, ticketSellingStepsName)
                ticketSellingStepsInputChange(ticketSellingStepsTelInp, ticketSellingStepsTel)
                ticketSellingStepsInputChange(ticketSellingStepsEmailInp, ticketSellingStepsEmail)
            })
        })

    }
})