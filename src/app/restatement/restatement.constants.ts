export class RestatementConstants {
  public static displayedColumns = ["postId", "id", "name", "email"];
  public static get commentsApiURL(): string { return  'https://jsonplaceholder.typicode.com/comments' }
  public static employeeInfo = [
    {
      name: "Avaneesh",
      age: 35,
      isIndian: true
    },
    {
      name: "Mike",
      age: 22,
      isIndian: false
    },
    {
      name: "Vivek",
      age: 29,
      isIndian: true
    },
    {
      name: "Robert",
      age: 33,
      isIndian: false
    },
    {
      name: "Vijay",
      age: 26,
      isIndian: true
    },
    {
      name: "Maria",
      age: 17,
      isIndian: false
    }
  ];
}
