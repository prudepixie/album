export class Album {
 constructor(
  public name: string,
  public description: string,
  public date: string,
  public photos: Array<Photo>
 ) {}
}

export class Photo {
  constructor(
   public name: string,
  ) {}
 }
