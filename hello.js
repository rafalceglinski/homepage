console.log('Witaj!!')


const kontakt = document.querySelector('.footer__text--js')


kontakt.innerHTML = kontakt.innerHTML + '<br> Telefon 811 000 222'


const hello  = (name, age) => {
    return `Czesc, nazywam sie ` + name + ' i mam ' + age
}

console.log(hello('Rafal', 30));


const hamburger = document.querySelector('.hamburger--js')

console.log(hamburger)

hamburger.addEventListener('click', ()=> {
    console.log('click')
    const navigation = document.querySelector('.navigation--js')
    navigation.classList.toggle('navigation--open')
})