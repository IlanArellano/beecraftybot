
import { addUser, deleteUser, getStatusUser } from '../../DTO/users';
import { addUserParams, deleteUserParams, getStatusUserParams } from '../../entity';



export const addUserController = async (args: addUserParams) => await addUser(args);

/**
 * Desactiva un usuario o lo elimina permanentemente
 * @param {string} username El nombre de usuario
 * @param {boolean} desactivate si es true solo lo desactivara en la base de datos pero sin eliminarlo
 */
export const deleteUserController = async (args: deleteUserParams) =>
  await deleteUser(args);

export const getStatusUserController = async (args: getStatusUserParams) =>
  await getStatusUser(args);

