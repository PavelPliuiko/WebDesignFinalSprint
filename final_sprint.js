const container = document.getElementById('container')

const getNameWithUsername = user => `${user.name} (${user.username})`

function getFullAddress({ address }) {
    return `${address.suite}, ${address.street}, ${address.city}, ${address.zipcode}`
}

const getWebsite = function (user) {
    return user.website
}

fetch('./final_sprint.json')
    .then(res => res.json())
    .then(users => {
        users.forEach(user => {
            const username = getNameWithUsername(user)
            const address = getFullAddress(user)
            const website = getWebsite(user)

            const ul = document.createElement('li')
            ul.innerHTML = `User: ${username}</br>Address: ${address}</br>Website: <a target="blank" href="https://${website}">${website}</a>`

            container.appendChild(ul)
            console.log(`User: ${username}\nAddress: ${address}\nWebsite: ${website}`)
        })
    })
    .catch(console.error)

