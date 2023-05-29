import { NestFactory } from '@nestjs/core';
import * as morgan from 'morgan';
import { AppModule } from './app.module';
import { UnauthorizedHttpExceptionFilter } from './utils/unauthorized.filter';
import { ResponseInterceptor } from './utils/response.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const PORT = Number(process.env.PORT) || 3000;

async function boot() {
   const app = await NestFactory.create(AppModule);

   const config = new DocumentBuilder()
      .setTitle('User/users docs')
      .setDescription('The user/users API documentation')
      .addBasicAuth({
         type: 'http',
         scheme: 'basic',
         name: 'basic',
      })
      .build();
   const document = SwaggerModule.createDocument(app, config);
   SwaggerModule.setup('docs', app, document);

   app.useGlobalInterceptors(new ResponseInterceptor());
   app.useGlobalFilters(new UnauthorizedHttpExceptionFilter());

   app.use(morgan('tiny'));

   await app.listen(PORT);
}

boot();
