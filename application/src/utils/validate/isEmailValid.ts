const VALIDATE_EMAIL = new RegExp(
  '^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$',
  'i'
);

export function isEmailValid(email: string) {
  return VALIDATE_EMAIL.test(email);
}
