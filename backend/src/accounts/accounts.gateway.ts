import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket } from 'socket.io';
import { AccountsService } from './accounts.service';

@WebSocketGateway()
export class AccountsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly accountsService: AccountsService) {}

  @WebSocketServer() server;

  private logger: Logger = new Logger('AccountsGateway');

  afterInit() {
    this.logger.log('Initialized accounts gateway.');
    global.setInterval(() => {
      // Emit an event each 20 seconds updating the two first accounts and
      // see the changes easier on the client side
      this.server.emit('msgToClientForAccountsBalance', this.accountsService.getAccounts(2));
    }, 20000);
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
}
