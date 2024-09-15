// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule.forRoot(
            {
                isGlobal:true,
                envFilePath:".local.env" ,
            }
        )],
        useFactory: (configService: ConfigService) => ({
          type: 'postgres',
          host: configService.get('DB_HOST'),
          port: +configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
          synchronize: configService.get<boolean>('DB_SYNC'),
          entities:[__dirname + '/**/*.entity{.ts,.js}'],
          logging:true,
        }),   
        inject: [ConfigService],
      }),
    UserModule 
  ],
})
export class AppModule {}    
