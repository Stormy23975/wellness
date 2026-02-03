const saveButton = document.querySelector('#saveProfile');

saveButton.addEventListener('click', () => {
    let first = document.querySelector('input[name="first"]');
    localStorage.setItem('first', first.value);

    let last = document.querySelector('input[name="last"]');
    localStorage.setItem('last', last.value);

    let select = document.querySelector('#physical');
    let emotionIcon = select.options[select.selectedIndex].value;
    localStorage.setItem('emotionIcon', emotionIcon);

    let emotionText = select.options[select.selectedIndex].text;
    localStorage.setItem('emotionText', emotionText);
});


const deleteButton = document.querySelector('#delProfile');

deleteButton.addEventListener('click', () => {
    localStorage.removeItem('first');
    localStorage.removeItem('last');
    localStorage.removeItem('emotionIcon');
    localStorage.removeItem('emotionText');
    location.reload();
});

const check = localStorage.getItem('first');
if (check === null) {
    document.querySelector('#newProfile').className = 'showMe';
    document.querySelector('#myProfile').className = 'hideMe';
} else {

    document.querySelector('#newProfile').className = 'hideMe';
    document.querySelector('#myProfile').className = 'showMe';

    document.querySelector('#first').textContent = localStorage.getItem('first');
    document.querySelector('#last').textContent = localStorage.getItem('last');
    document.querySelector('#emotion').textContent = localStorage.getItem('emotionText');
    document.querySelector('#emoji').src = localStorage.getItem('emotionIcon');
}