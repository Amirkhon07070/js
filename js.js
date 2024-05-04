let items = document.querySelector('.items'),
    video =document.querySelector('.v');

async function getUsers() {
    try {
        let title = document.createElement('h1')
        title = video
        items.append(title)
        
        video.style.margin = 0 + 'auto'
        
        let res = await fetch(' https://jsonplaceholder.typicode.com/comments')
        let data = await res.json()
        items.removeChild(title)
        
        outUsers(data)
    } catch (error) {
        console.log(error);
    }
}

getUsers()


function outUsers(data) {
    data.forEach((user) => {
        let item = document.createElement('div')
        item.classList.add('item')
        
        let name = document.createElement('h2')
        let body = document.createElement('p')
        let email = document.createElement('a')
        
        name.textContent = `Имя: ${user.name}`
        body.textContent = `Описание: ${user.body}`
        email.textContent = user.email
        email.href = `mailto:${user.email}`
        
        item.append(name, body, email)
        items.append(item)
        
    })
}