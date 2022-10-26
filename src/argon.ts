import * as argon from "argon2";

export async function encodePassword(rawPassword: string) {
  return await argon.hash(rawPassword);
}

export async function verifyPassword(hash: string, rawPassword: string) {
  return await argon.verify(hash, rawPassword);
}
