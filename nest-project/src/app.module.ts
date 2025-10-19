import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsService } from './post/post.service';
import { UsersService } from './user/user.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PostsService, UsersService, PrismaService],
})
export class AppModule {}
