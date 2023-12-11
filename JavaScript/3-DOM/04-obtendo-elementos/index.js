function show(){
    const contaclist = document.getElementById('contact-list')
    console.log(contaclist)

    const listElements = document.getElementsByTagName('li')
    console.log(listElements)

    const contactInput = document.getElementsByClassName('contact-input')
    console.log(contactInput)

    const contacts = document.querySelectorAll('#contact-list > li > label')
    console.log(contacts)

    const contact1 = document.getElementsByName('contact1')
    console.log(contact1)

    const frist = document.querySelector('#contact-list > li > label')
    console.log(frist)
}