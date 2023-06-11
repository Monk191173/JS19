'use strict';

let sel = selector => document.querySelector(selector);

let validOk = className => sel(className).classList.contains('toolok');
/*--------------------------------------------------------------------- */
const first = sel('#first');
first.setAttribute('maxlength', '20');
sel('.first-name').classList.add('tool');
let nameRegExp = /^[a-zA-Z]{1,20}$/;

const last = sel('#last');
last.setAttribute('maxlength', '20');
sel('.last-name').classList.add('tool');

const email = sel('#email');
email.setAttribute('maxlength', '55');
sel('.email').classList.add('tool');
let mailRegExp = /^[\w-\.]+@{1}[a-zA-Z]+\.{1}[a-zA-Z]{2,}$/;

const password = sel('#password');
password.setAttribute('maxlength', '15');
sel('.password').classList.add('tool');
let passRegExp = /^[a-zA-Z0-9]{8,15}$/

const agree = sel('#agree');

const submit = sel('#submit');
submit.setAttribute('disabled', 'true');
submit.style.cursor = 'default';
/*-------------------------------------------------------------------first name */
first.addEventListener('focus', () => {
    first.style.outlineColor = 'rgb(159,198,242)';
    if (validOk('.first-name')) sel('.first-name').classList.remove('mestool')
    else {
        sel('.first-name').classList.add('tool');
        sel('.first-name').classList.add('mestool');
    }
    agree.checked = false;
});

first.addEventListener('blur', () => {
    sel('.first-name').classList.remove('mestool')
});

first.addEventListener('input', () => {
    first.previousSibling.previousSibling.style.top = '0';
    first.previousSibling.previousSibling.style.zIndex = '2';
    sel('.first-name').classList.add('tool');

    if (first.value.length <= 0) {
        first.previousSibling.previousSibling.style.top = '10px';
        first.previousSibling.previousSibling.style.zIndex = '0';
    }

    if (nameRegExp.test(first.value)) {
        first.style.outlineColor = 'green'
        sel('.first-name').classList.remove('toolx');
        sel('.first-name').classList.add('toolok');
        sel('.first-name').classList.remove('mestool');
    }
    else {
        first.style.outlineColor = 'red';
        sel('.first-name').classList.add('toolx');
        sel('.first-name').classList.remove('toolok');
        sel('.first-name').classList.add('mestool');
    }

});
/*-------------------------------------------------------------------last name */
last.addEventListener('focus', () => {
    last.style.outlineColor = 'rgb(159,198,242)';
    if (validOk('.last-name')) sel('.last-name').classList.remove('mestool')
    else {
        sel('.last-name').classList.add('tool');
        sel('.last-name').classList.add('mestool');
    }
    agree.checked = false;
});

last.addEventListener('blur', () => {
    sel('.last-name').classList.remove('mestool')
});

last.addEventListener('input', () => {
    last.previousSibling.previousSibling.style.top = '0';
    last.previousSibling.previousSibling.style.zIndex = '2';
    sel('.last-name').classList.add('tool');

    if (last.value.length <= 0) {
        last.previousSibling.previousSibling.style.top = '10px';
        last.previousSibling.previousSibling.style.zIndex = '0';
    }

    if (nameRegExp.test(last.value)) {
        last.style.outlineColor = 'green'
        sel('.last-name').classList.remove('toolx');
        sel('.last-name').classList.add('toolok');
        sel('.last-name').classList.remove('mestool');
    }
    else {
        last.style.outlineColor = 'red';
        sel('.last-name').classList.add('toolx');
        sel('.last-name').classList.remove('toolok');
        sel('.last-name').classList.add('mestool');
    }

});
/*-------------------------------------------------------------------email */
email.addEventListener('focus', () => {
    email.style.outlineColor = 'rgb(159,198,242)';
    if (validOk('.email')) sel('.email').classList.remove('mestool')
    else {
        sel('.email').classList.add('tool');
        sel('.email').classList.add('mestool');
    }
    agree.checked = false;
});

email.addEventListener('blur', () => {
    sel('.email').classList.remove('mestool')
});

email.addEventListener('input', () => {
    email.previousSibling.previousSibling.style.top = '0';
    email.previousSibling.previousSibling.style.zIndex = '2';
    sel('.email').classList.add('tool');

    if (email.value.length <= 0) {
        email.previousSibling.previousSibling.style.top = '10px';
        email.previousSibling.previousSibling.style.zIndex = '0';
    }

    if (mailRegExp.test(email.value)) {
        email.style.outlineColor = 'green'
        sel('.email').classList.remove('toolx');
        sel('.email').classList.add('toolok');
        sel('.email').classList.remove('mestool');
    }
    else {
        email.style.outlineColor = 'red';
        sel('.email').classList.add('toolx');
        sel('.email').classList.remove('toolok');
        sel('.email').classList.add('mestool');
    }

});
/*-------------------------------------------------------------------password */
password.addEventListener('focus', () => {
    password.style.outlineColor = 'rgb(159,198,242)';
    if (validOk('.password')) sel('.password').classList.remove('mestool')
    else {
        sel('.password').classList.add('tool');
        sel('.password').classList.add('mestool');
    }
    agree.checked = false;
});

password.addEventListener('blur', () => {
    sel('.password').classList.remove('mestool')
});

password.addEventListener('input', () => {
    password.previousSibling.previousSibling.style.top = '0';
    password.previousSibling.previousSibling.style.zIndex = '2';
    sel('.password').classList.add('tool');

    if (password.value.length <= 0) {
        password.previousSibling.previousSibling.style.top = '10px';
        password.previousSibling.previousSibling.style.zIndex = '0';
    }

    if (passRegExp.test(password.value)) {
        password.style.outlineColor = 'green'
        sel('.password').classList.remove('toolx');
        sel('.password').classList.add('toolok');
        sel('.password').classList.remove('mestool');
    }
    else {
        password.style.outlineColor = 'red';
        sel('.password').classList.add('toolx');
        sel('.password').classList.remove('toolok');
        sel('.password').classList.add('mestool');
    }

});
/*-------------------------------------------------------------------checkbox */
agree.addEventListener('click', () => {
    if (agree.checked) {
        if (validOk('.first-name') && validOk('.last-name') && validOk('.email') && validOk('.password')) {
            submit.style.backgroundColor = 'rgb(77, 162, 252)';
            submit.style.cursor = 'pointer';
            submit.removeAttribute('disabled');
        }
        else {
            submit.setAttribute('disabled', 'true');
            submit.style.cursor = 'default';
        }
    }
    else {
        submit.setAttribute('disabled', 'true');
        submit.style.cursor = 'default';
        submit.style.backgroundColor = 'rgb(125, 187, 253)';
    }
});
/*----------------------------------------------------------------sign up---- */
submit.addEventListener('click', () => {
    sel('.modal-bg').style.display = 'flex';
});

sel('#sign-submit').addEventListener('click', () => {
    sel('.modal-bg').style.display = 'none';
    document.forms['sign-form'].reset();
    sel('.first-name').classList.add('tool');
    sel('.first-name').classList.remove('toolok');
    sel('.first-name').classList.remove('toolx');
    first.previousSibling.previousSibling.style.top = '10px';
    first.previousSibling.previousSibling.style.zIndex = '0';
    sel('.last-name').classList.add('tool');
    sel('.last-name').classList.remove('toolok');
    sel('.last-name').classList.remove('toolx');
    last.previousSibling.previousSibling.style.top = '10px';
    last.previousSibling.previousSibling.style.zIndex = '0';
    sel('.email').classList.add('tool');
    sel('.email').classList.remove('toolok');
    sel('.email').classList.remove('toolx');
    email.previousSibling.previousSibling.style.top = '10px';
    email.previousSibling.previousSibling.style.zIndex = '0';
    sel('.password').classList.add('tool');
    sel('.password').classList.remove('toolok');
    sel('.password').classList.remove('toolx');
    password.previousSibling.previousSibling.style.top = '10px';
    password.previousSibling.previousSibling.style.zIndex = '0';
    submit.setAttribute('disabled', 'true');
    submit.style.cursor = 'default';
})

