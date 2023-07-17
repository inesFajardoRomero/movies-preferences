export interface LoginI {
  nick:string;
  password:string;
}

export interface ILoginResult {
  token:string;
}

export interface LogupI {
  usuario: string,
  nombres: string,
  apellidos: string,
  correo: string,
  password: string,
}

export interface IRegister {
  usuario: string,
  contrasena: string,
  correo: string,
  nombre: string,
  apellido: string,
  usuarioGenero:IUsuarioGenero[],
}

export interface IUsuarioGenero{
  generoId:number
}
