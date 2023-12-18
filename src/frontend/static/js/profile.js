const userMenu = document.getElementById('userMenu')

export async function addUserMenu(user){
    let div = document.createElement('div')
    div.innerHTML = `<h1>${user}</h1>`
    userMenu.append(div)
}