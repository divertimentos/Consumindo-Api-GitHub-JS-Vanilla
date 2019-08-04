(function() {
    const search = document.getElementById("search")
    const profile = document.getElementById("profile")
    const url = "https://api.github.com/users"
    const client_id = "9d71a8c4106f4ea74ef9"
    const client_secret = "f9ff9a14fad8c26a809624c6bd2007690311b4af"    

    async function getUser(user) {
        const profileResponse = await fetch(
            `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
            )
        const profile = profileResponse.json()
        
        return profile
    }

    function showProfile(user) {
        profile.innerHTML = `<div class="row">
        <div class="col-md-4">
            <div class="card mt-3" style="width: 18rem;">
                <img src="${user.avatar_url}" class="card-img-top">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Repositórios: <span class="badge badge-success">${user.public_repos}</span></li>
                    <li class="list-group-item">Seguidores: <span class="badge badge-primary">${user.followers}</span></li>
                    <li class="list-group-item">Seguindo: <span class="badge badge-info">${user.following}</span></li>
                </ul>
                <div class="card-body">
                    <a href="${user.html_url}" target="_blank" class="btn btn-warning btn-block">Ver Perfil</a>
                </div>
            </div>
        </div>
        <div class="col-md-8"><div id="repos"></div></div>
    </div>`
    }

    search.addEventListener("keyup", e => {
        const user = e.target.value

        if (user.length > 0) {
            getUser(user).then(res => showProfile(res))
        }

    })
})()

