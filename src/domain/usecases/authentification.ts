import { AccountModel } from "../models/account-model";

export type AuthentificationParams = {
  email: string;
  password: string;
};

export interface Authentification {
  auth(params: AuthentificationParams): Promise<AccountModel>;
}

// -> Authentification is a use case that receives a set of parameters and returns a promise of an AccountModel.
