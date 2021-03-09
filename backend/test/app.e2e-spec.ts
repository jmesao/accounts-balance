import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/accounts (GET)', () => {
    return request(app.getHttpServer()).get('/accounts').expect(200);
  });

  it('/accounts/:accountId (GET)', () => {
    return request(app.getHttpServer()).get('/accounts/1').expect(200);
  });

  it('/rate (GET)', () => {
    return request(app.getHttpServer()).get('/rate').expect(200);
  });
});
