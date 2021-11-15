
type nullUndefined = null | undefined;

export interface usuarios {
    id_usuario?: number | nullUndefined;
    correo?: string | nullUndefined;
    usuario?: string | nullUndefined;
    contrasena?: string | nullUndefined;
    nombre?: string | nullUndefined;
    apellido_paterno?: string | nullUndefined;
    apellido_materno?: string | nullUndefined;
    activo?: boolean | nullUndefined;
    enlace_discord?: boolean | nullUndefined;
    discord_token?: string | nullUndefined;
    ip?: string | nullUndefined;
    fecha_registro?: Date | nullUndefined;
    fecha_actualizacion?: Date | nullUndefined;
    usuario_discord?: string | nullUndefined;
    fk_rango?: number | nullUndefined;
}

export interface addUserParams {
    username: string;
    username_discord: string;
    ip: string | null;
    id_username_discord: string;
}

export interface deleteUserParams {
    username: string;
    desactivate: boolean;
}
  
export interface getStatusUserParams {
    id_username_discord: string;
}
  