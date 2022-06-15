import { Subjects } from './subjects';
import { Entry } from '../interfaces/entry';

export interface TransactionDeletedEvent {
  subject: Subjects.TransactionDeleted;
  data: {
    id: string;
    userId: string;
    memo: string;
    date: Date;
    entries: Entry[];
  };
}
