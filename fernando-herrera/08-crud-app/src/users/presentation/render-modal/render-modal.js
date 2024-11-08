import modalHtml from './render-modal.html?raw';
import './render-modal.css';
import { getUserById } from '../../use-cases/get-user-by-id';

let modal, form;
let loaderUser = {};

/**
 * 
 * @param {String|Number} id 
 */
export const showModal = async(id) => {
    modal?.classList.remove('hide-modal');
    loaderUser = {};

    if (!id) return;
    
    const user = await getUserById(id);
    loaderUser = user;
    setFormValues(user);
};

export const hideModal = () => {
    modal?.classList.add('hide-modal');
    form?.reset();
};

/**
 * 
 * @param {User} user 
 */
const setFormValues = (user) => {
    form.querySelector('[name="firstName"]').value = user.firstName;
    form.querySelector('[name="lastName"]').value = user.lastName;
    form.querySelector('[name="balance"]').value = user.balance;
    form.querySelector('[name="isActive"]').checked = user.isActive;
}

/**
 *
 * @param {HTMLDivElement} element
 * @param {(userLike) => Promise<void>} saveUserCallback
 */
export const renderModal = (element, saveUserCallback) => {
    if (modal) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';
    form = modal.querySelector('form');

    modal.addEventListener('click', (event) => {
        if (event.target.className === 'modal-container') {
            hideModal();
        }
    });

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        /*
         * FormData es una clase que nos permite obtener los datos de un formulario
         * en un objeto clave-valor.
         */
        const formData = new FormData(form);
        const userLike = {...loaderUser};
        for (const [key, value] of formData) {
            if (key === 'balance') {
                userLike[key] = +value;
                continue;
            }

            if (key === 'isActive') {
                userLike[key] = value === 'on';
                continue;
            }

            userLike[key] = value;
        }
        await saveUserCallback(userLike);
        hideModal();
    });

    element.append(modal);
};
