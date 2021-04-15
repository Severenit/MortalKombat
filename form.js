const $form = document.querySelector('.form');
console.dir($form);

const answer = {};

$form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('####: event', event);

    for (let i = 0; i < $form.length; i++) {
        const item = $form[i];

        if (item.type === 'radio' || item.type === 'checkbox') {
            answer[item.value] = item.checked;
        } else if (item.type === 'text' || item.type === 'textarea') {
            answer[item.name] = item.value;
        }
    }

    console.log(answer);
});
