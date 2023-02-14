import { QueryResult } from "pg";

export interface iDataUser {
  name: string;
  email: string;
  password: string;
  admin: boolean;
}

export interface iDataEncrementId extends iDataUser {
  id: number;
}
export type iUserWithoutPassword = Omit<iDataEncrementId, "password">
export type userQueryResult = QueryResult<iUserWithoutPassword>;
export type keysUser = "name" | "email" | "password" | "admin";
