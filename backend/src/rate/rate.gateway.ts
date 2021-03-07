import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';
import { Logger } from "@nestjs/common";
import { Socket, Server } from "socket.io";
import { RateService } from "./rate.service";

@WebSocketGateway()
export class RateGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly rateService: RateService) {}

  @WebSocketServer() server;

  private logger: Logger = new Logger('RateGateway');

  afterInit(server: Server) {
    this.logger.log('Initialized rate gateway.');
    global.setInterval(() => {
      // Emit an event each 30 seconds updating the rate
      this.server.emit('msgToClientForRate', this.rateService.getRate());
    }, 30000);
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
}
