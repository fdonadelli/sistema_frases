import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import swStats = require('swagger-stats');
import { swaggerRegisterModules } from './swaggerRegisterModules';

export const createSwaggerDoc = async (app: INestApplication) => {
  const document = createDocument(app);

  SwaggerModule.setup('/docs', app, document);
  app.use(
    swStats.getMiddleware({
      swaggerSpec: JSON.stringify(document),
    }),
  );
};

export const createDocument = function (app) {
  const config = new DocumentBuilder()
    .setTitle('Sistema de Frases')
    .setDescription('Documentação dos endpoints')
    .setVersion(process.env.SWAGGER_VERSION || '1.0')
    .addTag(
      'Sistema de Frases',
      'Api responsável por controlar o sistema de frases',
    )
    .addBearerAuth(
      {
        type: 'http',
      },
      'bearer',
    )
    .build();

  return SwaggerModule.createDocument(app, config, {
    include: swaggerRegisterModules,
  });
};
