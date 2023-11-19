
// вызов модального окна с классом css: modalClass, h1 = title, content = html
export function pCreateModal(title, content, modalClass){
    return new Promise((resolve, reject) => {
        const modal = document.createElement('div');
        modal.classList.add(modalClass);
        modal.innerHTML = `<h1>${title}</h1>
        <div class="modal-content">${content}</div>`
        resolve(mui.overlay('on', modal))
    })
}

//
/*async function aCreateDiv(form){
    let div = document.createElement('div');
    div.innerHTML = form;
    return div;
}*/

export async function aBuildModal (text, form, id, modalClass) {
    await pCreateModal(text, form, modalClass); // Жду создания модального окна в DOM на странице вызова модального окна...
    //return await aCreateDiv(form);
}

/*
export const aAuthorizationHandler = async (text, form, id, modalClass) => {
        const authModal = await aBuildModal (text, form, id, modalClass);
        return authModal;
}
*/

