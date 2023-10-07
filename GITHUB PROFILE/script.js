const APIURL = 'https://api.github.com/users/'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')


async function getUser(username){
    // const { data } = await axios(APIURL + username)
    // const res = await axios(APIURL + username)
    // console.log(data)
    try{
        const { data } = await axios(APIURL + username)

        createUserCard(data)
        getRopos(username)
    } catch(err){
        if(err.response.status === 404){
            createErrorCard('No profile with this username')
        }
    }
}

async function getRopos(username){
    try{
        const { data } = await axios(APIURL + username + '/repos?sort=created')

        addReposToCard(data)
    } catch(err){
        createErrorCard('Problem fetching repos')
    }
}

function createUserCard(user){
    const cardHTML = `
        <div class="card">
            <div>
                <img src="${user.avater_url}" alt="${user.name}" class="avater">
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>

                <ul>
                    <li>${user.followers} <Strong>Followers</Strong></li>
                    <li>${user.following} <Strong>Following</Strong></li>
                    <li>${user.public_repos} <Strong>Repo</Strong></li>
                </ul>

                <div id="repos"></div>
            </div>
        </div>
    `

    main.innerHTML = cardHTML
}

function createErrorCard(msg){
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `

    main.innerHTML = cardHTML
}

function addReposToCard(repos){
    const reposEl = document.getElementById('repos')

    repos
        .slice(0, 5)
        .forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repo')
            repoEl.href = repo.html_url
            repoEl.target = '_blank'
            repoEl.innerText = repo.name

            reposEl.appendChild(repoEl)
        })

}

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const user = search.value

    if(user){
        getUser(user)

        search.value = ''
    }
})