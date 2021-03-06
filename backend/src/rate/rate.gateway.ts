import {OnGatewayInit, SubscribeMessage, WebSocketGateway, WsResponse} from '@nestjs/websockets';
import { Logger } from "@nestjs/common";
import {Server, Socket} from "socket.io";
import { RateService } from "./rate.service";

@WebSocketGateway()
export class RateGateway implements OnGatewayInit {
  constructor(private readonly rateService: RateService) {}

  private logger: Logger = new Logger('RateGateway');

  afterInit(server: Server): void {
    this.logger.log('Initialized rate gateway.');
  }

  @SubscribeMessage('msgToServerForRate')
  handleMessage(client: Socket): WsResponse<Number> {
    return { event: 'msgToClientForRate', data: this.rateService.getRate() };
  }
}
