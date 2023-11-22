
// вызов модального окна с классом css: modalClass, h1 = title, content = html
export function pCreateModal(title, html, modalClass, user, error){
    return new Promise((resolve, reject) => {
        const modal = document.createElement('div');
        modal.classList.add(modalClass);
        modal.innerHTML = `<h1>${title}</h1>
        <div class="modal-content">${html}<h1>${user}</h1><h1>${error}</h1></div>`
        resolve(mui.overlay('on', modal))
    })
}

export async function aBuildModal (form, user='', error=''/*text, form, id, modalClass*/) {
    const title = form.title;
    const html = form.html;
    const id = form.id;
    const modalClass = form.modalClass;
    await pCreateModal(title, html, modalClass, user, error); // Жду создания модального окна в DOM на странице вызова модального окна...
}


