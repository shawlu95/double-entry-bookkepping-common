import { Subjects } from './subjects';
import { AccountType } from '../enums/account-type';
export interface AccountClosedEvent {
  subject: Subjects.AccountClosed;
  data: {
    id: string;
    userId: string; // for debug
    name: string; // for debug
    type: AccountType; // for debug
  };
}
