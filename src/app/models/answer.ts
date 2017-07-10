import {User} from './user';

export class Answer {
  id: number;
  message: string;
  ticket_id: number;
  user: User;
}
