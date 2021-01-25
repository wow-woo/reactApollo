/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LoginInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: loginClient
// ====================================================

export interface loginClient_login {
  __typename: "LoginOutput";
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface loginClient {
  login: loginClient_login;
}

export interface loginClientVariables {
  loginInp: LoginInput;
}
