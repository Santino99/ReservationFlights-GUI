export class Ticket {
    constructor(
      public id: number,
      public author: number, 
      public name: string,
      public surname: string,
      public departure: string,
      public destination: string,
      public departureDateTime: Date,
      public timeFlight: any
    ){ }
}