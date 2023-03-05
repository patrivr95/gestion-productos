export interface Usuario {
    id: number;
    email: string;
    password: string;
    name: string;
    role: string;
    avatar: string;
    creationAt: string;
    updatedAt: string;
}

export interface UsuarioFormulario {
    email: string;
    name: string;
}
