import { Subjects } from './subjects';

export interface UserSignupEvent {
  subject: Subjects.UserSignup;
  data: {
    id: string;
    email: string;
  };
}
