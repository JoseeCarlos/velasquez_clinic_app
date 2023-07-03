import { signIn } from "../repositories/AuthenticationRepository";

export const signInUser = async (
  email: string,
  password: string
): Promise<void> => {
  console.log("llegaaaa useCase");
  await signIn(email, password);
};
