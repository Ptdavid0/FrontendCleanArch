import { HttpPostClient } from "@/data/protocols/http/http-post-client";
import { RemoteAuthentification } from "./remote-authentification";

describe("RemoteAuthentification", () => {
  test("Should call HttpPostClient with corret URL", async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string;
      async post(url: string): Promise<void> {
        this.url = url;
        return Promise.resolve();
      }
    }
    const url = "any_url";
    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuthentification(url, httpPostClientSpy);
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});

// sut -> System Under Test (Objeto que está sendo testado), é uma convenção de nomenclatura
