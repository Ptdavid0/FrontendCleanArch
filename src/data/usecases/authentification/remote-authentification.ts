import { HttpPostClient } from "@/data/protocols/http/http-post-client";
import { AuthentificationParams } from "@/domain/usecases/authentification";

export class RemoteAuthentification {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth(params: AuthentificationParams): Promise<void> {
    await this.httpPostClient.post({
      url: this.url,
      body: params,
    });
  }
}
