import { Subjects } from './subjects';
import { Entry } from '../interfaces/entry';

export interface TransactionUpdatedEvent {
  subject: Subjects.TransactionUpdated;
  data: {
    id: string;
    userId: string;
    memo: string;
    date: Date;
    entries: {
      old: Entry[];
      new: Entry[];
    };
  };
}
