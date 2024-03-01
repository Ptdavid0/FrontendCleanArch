import { RemoteAuthentification } from "./remote-authentification";
import { HttpPostClientSpy } from "../../test/mock-http-client";

describe("RemoteAuthentification", () => {
  test("Should call HttpPostClient with corret URL", async () => {
    const url = "any_url";
    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuthentification(url, httpPostClientSpy);
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});

// sut -> System Under Test (Objeto que está sendo testado), é uma convenção de nomenclatura
