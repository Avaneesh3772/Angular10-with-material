export class UserDetails {
  constructor(
       public userName: string,
       public userEmail: string,
       public userPhone: number,
       public userTopic: string,
       public userTimePreference: string,
       public userSubscription?: boolean,
  ) { }
}
export class TemplateDetails {
  constructor(
       public quarter: string,
       public month: number,
       public year: number,
       public template: string,
       public status: string,
       public initiationdate: string,
       public comments: string,
       public initiatedby: string,
  ) { }
}
