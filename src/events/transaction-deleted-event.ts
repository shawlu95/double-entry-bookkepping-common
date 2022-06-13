import { Subjects } from './subjects';

export interface TransactionDeletedEvent {
  subject: Subjects.TransactionDeleted;
  data: {
    id: string;
  };
}
