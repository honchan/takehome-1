import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('exchange-routing')
  getBestPrice(@Query('amount') amount: number): string {
    return this.appService.getBestPrice();
  }
}
