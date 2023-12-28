import * as bcrypt from 'bcrypt';

export const roundsOfHashing = 10;

export const emailFromAccount = (account: string): string =>
  `${account}@sa.promopoket.com`;

export const hashPassword = async (password: string) =>
  await bcrypt.hash(password, roundsOfHashing);
