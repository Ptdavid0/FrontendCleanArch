import { RemoteAuthentification } from "./remote-authentification";
import { HttpPostClientSpy } from "../../test/mock-http-client";
import { faker } from "@faker-js/faker";
import { mockAuthentication } from "../../../domain/test/mock-authentication";

type SutTypes = {
  sut: RemoteAuthentification;
  httpPostClientSpy: HttpPostClientSpy;
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuthentification(url, httpPostClientSpy);
  return {
    sut,
    httpPostClientSpy,
  };
};

describe("RemoteAuthentification", () => {
  test("Should call HttpPostClient with corret URL", async () => {
    const url = faker.internet.url();
    const { sut, httpPostClientSpy } = makeSut(url);
    await sut.auth(mockAuthentication());
    expect(httpPostClientSpy.url).toBe(url);
  });

  test("Should call HttpPostClient with corret Body ", async () => {
    const { sut, httpPostClientSpy } = makeSut();
    const authParams = mockAuthentication();
    await sut.auth(authParams);
    expect(httpPostClientSpy.body).toEqual(authParams);
  });
});

// sut -> System Under Test (Objeto que está sendo testado), é uma convenção de nomenclatura
