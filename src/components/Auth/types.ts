

export interface IRequestToGoogleLogin{
    provider: string,
    token: string,
}

export interface ILogin
{
  email:string,
  password:string
}

export interface IRegistration
{
  email: string,
  password:string,
  userName: string,
  name: string ,
  surname: string ,
  role: string
}
