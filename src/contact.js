   
   
   export function loadContact() {
    // mainContent
    const mainContent = document.querySelector('#content');
    //h2 header "Contact Us"
    const h2HeaderDiv = document.createElement('div');
    const h2Header = document.createElement('h2');
    h2HeaderDiv.classList.add('h2HeaderDiv');
    h2Header.classList.add('h2Header');
    h2Header.textContent = 'Contact Us';
    mainContent.appendChild(h2HeaderDiv);
    h2HeaderDiv.appendChild(h2Header);

    

    // p with information
    const contactPDiv = document.createElement('div');
    const contactP = document.createElement('p');
    contactPDiv.classList.add('contactPDiv');
    contactP.innerHTML = 'The Bear <br> Location: Somewhere in Texas <br> Hours: 8am - 12pm Mon - Fri <br> Phone: 888-888-BEAR';
    mainContent.appendChild(contactPDiv);
    contactPDiv.appendChild(contactP);

    // form
    const formDiv = document.createElement('div');
    const form = document.createElement('form');
    formDiv.classList.add('formDiv');
    form.classList.add('form');


    // Set form attributes
    form.setAttribute('action', '/submit');
    form.setAttribute('method', 'post');

    // Create input elements
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Name: ';
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('name', 'name');

    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email: ';
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('name', 'email');

    const Reserve = document.createElement('label');
    Reserve.textContent = 'Reserve: ';
    const yesRadio = document.createElement('input');
    yesRadio.setAttribute('type', 'radio');
    yesRadio.setAttribute('id', 'yes');
    yesRadio.setAttribute('name', 'gender');
    yesRadio.setAttribute('value', 'yes');
    const yesLabel = document.createElement('label');
    yesLabel.setAttribute('for', 'yes');
    yesLabel.textContent = 'yes';

    const noRadio = document.createElement('input');
    noRadio.setAttribute('type', 'radio');
    noRadio.setAttribute('id', 'no');
    noRadio.setAttribute('name', 'gender');
    noRadio.setAttribute('value', 'no');
    const noLabel = document.createElement('label');
    noLabel.setAttribute('for', 'no');
    noLabel.textContent = 'no';

    const subscribeLabel = document.createElement('label');
    subscribeLabel.setAttribute('for', 'subscribe');
    subscribeLabel.textContent = 'Subscribe to newsletter: ';
    const subscribeCheckbox = document.createElement('input');
    subscribeCheckbox.setAttribute('type', 'checkbox');
    subscribeCheckbox.setAttribute('id', 'subscribe');
    subscribeCheckbox.setAttribute('name', 'subscribe');

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Submit';
    submitButton.classList.add('contactSubmit');

    // Append elements to the form
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(document.createElement('br'));

    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(document.createElement('br'));

    form.appendChild(Reserve);
    form.appendChild(yesRadio);
    form.appendChild(yesLabel);
    form.appendChild(noRadio);
    form.appendChild(noLabel);
    form.appendChild(document.createElement('br'));

    form.appendChild(subscribeLabel);
    form.appendChild(subscribeCheckbox);
    form.appendChild(document.createElement('br'));

    form.appendChild(submitButton);

    // Append form to the formDiv and formDiv to mainContent
    mainContent.appendChild(formDiv);
    formDiv.appendChild(form);

}