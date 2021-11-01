const { addUser, deleteUser, getStatusUser } = require("../../DTO/users");

const addUserController = async ({
  username,
  username_discord,
  ip,
  id_username_discord,
}) => await addUser({ username, username_discord, ip, id_username_discord });

/**
 * Desactiva un usuario o lo elimina permanentemente
 * @param {string} username El nombre de usuario
 * @param {boolean} desactivate si es true solo lo desactivara en la base de datos pero sin eliminarlo
 */
const deleteUserController = async ({ username, desactivate }) =>
  await deleteUser({ username, desactivate });

const getStatusUserController = async ({ id_username_discord }) =>
  await getStatusUser({ id_username_discord });

module.exports = {
  addUserController,
  deleteUserController,
  getStatusUserController,
};
