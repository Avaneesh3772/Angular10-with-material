export class PostList {
  constructor(
    public userId: number,
    public id: number,
    public title: string,
    public body: string
  ) { }
}

export class CreatePostModel {
  constructor(
    public title: string,
    public body: string,
    public userId: number,
  ) { }
}

export class CommentList {
  constructor(
    public postId: number,
    public id: number,
    public name: string,
    public email: string,
    public body: string
  ) { }
}
