import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb_url_connection',
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
