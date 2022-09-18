import { Controller, Get } from '@nestjs/common';
import { ExampleEnum } from 'types';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    const example = ExampleEnum.ONE;
    console.log(example);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
