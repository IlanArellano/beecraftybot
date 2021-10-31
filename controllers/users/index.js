const { addUser, deleteUser } = require("../../DTO/users");

const addUserController = ({
  username,
  username_discord,
  ip,
  id_username_discord,
}) => addUser({ username, username_discord, ip, id_username_discord });

/**
 * Desactiva un usuario o lo elimina permanentemente
 * @param {string} username El nombre de usuario
 * @param {boolean} desactivate si es true solo lo desactivara en la base de datos pero sin eliminarlo
 */
const deleteUserController = ({ username, desactivate }) =>
  deleteUser({ username, desactivate });

module.exports = {
  addUserController,
  deleteUserController,
};
