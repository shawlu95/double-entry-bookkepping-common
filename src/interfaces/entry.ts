import { AccountType } from '../enums/account-type';
import { EntryType } from '../enums/entry-type';

export interface Entry {
  amount: number;
  type: EntryType;
  accountId: string;
  accountName: string; // denormalized
  accountType: AccountType; // denormalized
}
