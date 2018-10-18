export default class User {
  public displayName: string
  public photoUrl: string 
  public email: string

  constructor(displayName: string, photoUrl: string, email: string){
    this.displayName = displayName
    this.photoUrl = photoUrl
    this.email = email
  }
}