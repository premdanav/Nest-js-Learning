import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  @Get("/login")
  getRootRoute() {
    return "Hi there";
  }
}
