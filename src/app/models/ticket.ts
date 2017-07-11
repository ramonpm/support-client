import {User} from './user';
export class Ticket {
  id: number;
  title: string;
  description: string;
  status: number;
  closed_at: Date;
  user: User = new User();
}
