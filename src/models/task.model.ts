import { Guid } from "guid-typescript"

export class Task {
  id: Guid;
  title: string;
  isComplete: boolean;

  constructor(id: Guid, title: string, isComplete: boolean){
    this.id = id,
    this.title = title,
    this.isComplete = isComplete
  }
}
