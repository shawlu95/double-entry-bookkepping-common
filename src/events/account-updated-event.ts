import { Subjects } from './subjects';
import { AccountType } from '../enums/account-type';
export interface AccountUpdatedEvent {
  subject: Subjects.AccountUpdated;
  data: {
    id: string;
    userId: string; // for debug
    name: string;
    type: AccountType; // for debug
  };
}
