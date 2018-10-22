export class Album {
 constructor(
  public id: string,
  public name: string,
  public description: string,
  public date: string,
  public photosPath: Array<Photo>
 ) {}
}

export class Photo {
  constructor(
   public name: string,
  ) {}
 }
