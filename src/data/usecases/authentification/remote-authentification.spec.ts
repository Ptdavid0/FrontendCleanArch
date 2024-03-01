import { RemoteAuthentification } from "./remote-authentification";
import { HttpPostClientSpy } from "../../test/mock-http-client";

type SutTypes = {
  sut: RemoteAuthentification;
  httpPostClientSpy: HttpPostClientSpy;
};

const makeSut = (url: string = "any_url"): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuthentification(url, httpPostClientSpy);
  return {
    sut,
    httpPostClientSpy,
  };
};

describe("RemoteAuthentification", () => {
  test("Should call HttpPostClient with corret URL", async () => {
    const url = "other_url";
    const { sut, httpPostClientSpy } = makeSut(url);
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});

// sut -> System Under Test (Objeto que está sendo testado), é uma convenção de nomenclatura
