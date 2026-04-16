const data = [{
        title: 'Frontent',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis quaerat itaque minus consectetur omnis eligendi, quos excepturi necessitatibus aspernatur quia laudantium molestias vel, voluptatum similique. Accusantium molestias illo inventore delectus alias, quae odio vero non, suscipit voluptatibus fuga iure dignissimos quaerat, ipsum modi maiores vitae et. Molestiae voluptatum mollitia eveniet tenetur atque suscipit nostrum magnam illo vitae ea consectetur sint quisquam, consequuntur voluptate eius asperiores. Dolorem rem autem excepturi recusandae fugiat, delectus dolores, laboriosam nemo, earum a debitis illo.'
    },
    {
        title: 'Graphic Design',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis quaerat itaque minus consectetur omnis eligendi, quos excepturi necessitatibus aspernatur quia laudantium molestias vel, voluptatum similique. Accusantium molestias illo inventore delectus alias, quae odio vero non, suscipit voluptatibus fuga iure dignissimos quaerat, ipsum modi maiores vitae et. Molestiae voluptatum mollitia eveniet tenetur atque suscipit nostrum magnam illo vitae ea consectetur sint quisquam, consequuntur voluptate eius asperiores. Dolorem rem autem excepturi recusandae fugiat, delectus dolores, laboriosam nemo, earum a debitis illo.'
    },
    {
        title: 'Backend',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis quaerat itaque minus consectetur omnis eligendi, quos excepturi necessitatibus aspernatur quia laudantium molestias vel, voluptatum similique. Accusantium molestias illo inventore delectus alias, quae odio vero non, suscipit voluptatibus fuga iure dignissimos quaerat, ipsum modi maiores vitae et. Molestiae voluptatum mollitia eveniet tenetur atque suscipit nostrum magnam illo vitae ea consectetur sint quisquam, consequuntur voluptate eius asperiores. Dolorem rem autem excepturi recusandae fugiat, delectus dolores, laboriosam nemo, earum a debitis illo.'
    },
    {
        title: 'Machine Learning',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis quaerat itaque minus consectetur omnis eligendi, quos excepturi necessitatibus aspernatur quia laudantium molestias vel, voluptatum similique. Accusantium molestias illo inventore delectus alias, quae odio vero non, suscipit voluptatibus fuga iure dignissimos quaerat, ipsum modi maiores vitae et. Molestiae voluptatum mollitia eveniet tenetur atque suscipit nostrum magnam illo vitae ea consectetur sint quisquam, consequuntur voluptate eius asperiores. Dolorem rem autem excepturi recusandae fugiat, delectus dolores, laboriosam nemo, earum a debitis illo.'
    },
    {
        title: 'Computer technologies',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis quaerat itaque minus consectetur omnis eligendi, quos excepturi necessitatibus aspernatur quia laudantium molestias vel, voluptatum similique. Accusantium molestias illo inventore delectus alias, quae odio vero non, suscipit voluptatibus fuga iure dignissimos quaerat, ipsum modi maiores vitae et. Molestiae voluptatum mollitia eveniet tenetur atque suscipit nostrum magnam illo vitae ea consectetur sint quisquam, consequuntur voluptate eius asperiores. Dolorem rem autem excepturi recusandae fugiat, delectus dolores, laboriosam nemo, earum a debitis illo.'
    },
    {
        title: 'One Million Koders',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis quaerat itaque minus consectetur omnis eligendi, quos excepturi necessitatibus aspernatur quia laudantium molestias vel, voluptatum similique. Accusantium molestias illo inventore delectus alias, quae odio vero non, suscipit voluptatibus fuga iure dignissimos quaerat, ipsum modi maiores vitae et. Molestiae voluptatum mollitia eveniet tenetur atque suscipit nostrum magnam illo vitae ea consectetur sint quisquam, consequuntur voluptate eius asperiores. Dolorem rem autem excepturi recusandae fugiat, delectus dolores, laboriosam nemo, earum a debitis illo.'
    },
    {
        title: 'IT English',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis quaerat itaque minus consectetur omnis eligendi, quos excepturi necessitatibus aspernatur quia laudantium molestias vel, voluptatum similique. Accusantium molestias illo inventore delectus alias, quae odio vero non, suscipit voluptatibus fuga iure dignissimos quaerat, ipsum modi maiores vitae et. Molestiae voluptatum mollitia eveniet tenetur atque suscipit nostrum magnam illo vitae ea consectetur sint quisquam, consequuntur voluptate eius asperiores. Dolorem rem autem excepturi recusandae fugiat, delectus dolores, laboriosam nemo, earum a debitis illo.'
    },
    {
        title: 'Cyber Sport',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis quaerat itaque minus consectetur omnis eligendi, quos excepturi necessitatibus aspernatur quia laudantium molestias vel, voluptatum similique. Accusantium molestias illo inventore delectus alias, quae odio vero non, suscipit voluptatibus fuga iure dignissimos quaerat, ipsum modi maiores vitae et. Molestiae voluptatum mollitia eveniet tenetur atque suscipit nostrum magnam illo vitae ea consectetur sint quisquam, consequuntur voluptate eius asperiores. Dolorem rem autem excepturi recusandae fugiat, delectus dolores, laboriosam nemo, earum a debitis illo.'
    },
    {
        title: 'Mobile Developer',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis quaerat itaque minus consectetur omnis eligendi, quos excepturi necessitatibus aspernatur quia laudantium molestias vel, voluptatum similique. Accusantium molestias illo inventore delectus alias, quae odio vero non, suscipit voluptatibus fuga iure dignissimos quaerat, ipsum modi maiores vitae et. Molestiae voluptatum mollitia eveniet tenetur atque suscipit nostrum magnam illo vitae ea consectetur sint quisquam, consequuntur voluptate eius asperiores. Dolorem rem autem excepturi recusandae fugiat, delectus dolores, laboriosam nemo, earum a debitis illo.'
    },
]

const coursesItems = document.querySelectorAll('.courses .item')
const courseModal = document.querySelector('.courses-modal')
const courseModalCloseBtn = document.querySelector('.courses-modal .close')

const title = courseModal.querySelector('.title')
const text = courseModal.querySelector('.text')

coursesItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        courseModal.classList.add('active')
        body.classList.add('hidden')
        title.textContent = data[index].title
        text.textContent = data[index].text
    })
})

courseModalCloseBtn.addEventListener('click', () => {
    courseModal.classList.remove('active')
    body.classList.remove('hidden')
})