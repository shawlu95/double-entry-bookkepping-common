import { Subjects } from './subjects';
import { AccountType } from '../enums/account-type';
export interface AccountCreatedEvent {
  subject: Subjects.AccountCreated;
  data: {
    id: string;
    userId: string;
    name: string;
    type: AccountType;
  };
}
