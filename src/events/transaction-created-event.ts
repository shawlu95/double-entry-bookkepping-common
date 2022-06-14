import { Subjects } from './subjects';
import { Entry } from '../interfaces/entry';

export interface TransactionCreatedEvent {
  subject: Subjects.TransactionCreated;
  data: {
    id: string;
    userId: string;
    memo: string;
    date: Date;
    entries: Entry[];
  };
}
