import { localhostUserToModel } from '../mappers/localhost-user.mapper';
import { userModelToLocalhost } from '../mappers/user-to-localhost.mapper';
import { User } from '../models/users';

/**
 *
 * @param {Like<User>} userLike
 */
export const saveUser = async (userLike) => {
    const user = new User(userLike);
    
    if (!user.firstName || !user.lastName) {
        throw new Error('FirsName and LastName are required');
    }

    const userToSave = userModelToLocalhost(user);
    let userUpdated;


    if (user.id) {
        userUpdated = await updateUser(userToSave);
    } else {
        userUpdated = await createUser(userToSave);
    }

    return localhostUserToModel(userUpdated);

};

/**
 *
 * @param {Like<User>} user
 */
const createUser = async (user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users`;
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });

    const newUser = await res.json();

    console.log('newUser', newUser);

    return newUser;
};

/**
 *
 * @param {Like<User>} user
 */
const updateUser = async (user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${user.id}`;
    const res = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });

    const updatedUser = await res.json();

    console.log('newUser', updatedUser);

    return updatedUser;
};
