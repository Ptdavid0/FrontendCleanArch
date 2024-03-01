import { AuthentificationParams } from "../usecases/authentification";
import { faker } from "@faker-js/faker";

export const mockAuthentication = (): AuthentificationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});
