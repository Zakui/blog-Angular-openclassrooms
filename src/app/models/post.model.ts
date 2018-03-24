export class Post {
  public created_at: Date
  constructor(public title: string, public content: string, public loveIt: number) {
    this.created_at = new Date()
  }
}
