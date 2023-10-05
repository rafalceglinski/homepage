console.log('Witaj!!')


const kontakt = document.querySelector('.footer__text--js')


kontakt.innerHTML = kontakt.innerHTML + '<br> Telefon 811 000 222'


const hello  = (name, age) => {
    return `Czesc, nazywam sie ` + name + ' i mam ' + age
}

console.log(hello('Rafal', 30));