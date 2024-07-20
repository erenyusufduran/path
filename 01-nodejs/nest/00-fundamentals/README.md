# NestJS Fundamentals

Nodejs makes no assumptions and includes most nothing by default, for it's purposely meant to be very bare bones. Nodejs by design has a minimalistic setup and developers are in charge of setting up **everything** they want to use for their application! This applies to everything from how you handle routing, API calls, setting up websockets, to even redumentary things like code organization, file structure and naming.

As Nodejs has been around for many years and there are plenty of frameworks that have helped make some of these common requirements simpler most notably Express.js, but they are all still require **a lot** of configuration and effort on the part of the developer.

This ultimate flexibility can be a bit of a double edged sword. Creating potential problems as applications or teams grow very large. 

NestJS tries to tackle some of these problems by creating an abstraction or overall framework *around* NodeJS. Letting you focus on the application problem at hand instead of the tiny implemantatiton details such as seting up typescript, error handling, middleware setup and so much more. NestJS provides an out of box application architecture that allows developers and teams to create highly testable, scalable, loosely coupled, and easily maintainable applications, but how is this achieved?

Think of NestJS is a layer *above* NodeJS itself, abstracting away difficult tasks, tools, and boilerplate code, while also adding a full fledged toolkit for you application development. Using NestJS does not lock you into yet another framework but instead leverages readily available and prominent options and modules in the community like those available Express applications.

The flexibility that Nest provides here gives us the ability to create modules that are platform agnostic not only HTTP frameworks such as Expressjs or Fastify but even agnostic across different types of applications. With NestJS you can build Rest API, MVC Applications, Microservices, GraphQL applications, web-sockets, and even CLI's and cron jobs.

With the help of NestJS dependency injection system. We have the ability to swap out the underlying mechanism effertlessly. 

----

```sh
nest g co - nest generate controller // --no-spec for no test file
nest g s - nest generate service
nest g module coffees
```

In NestJS each service is a provider. Main idea of a provider is inject dependencies. This means that objects can create various relationship to each other.

Providers are just a class and have a decorator called `@Injectable`. 

```sh
nest g class coffees/dto/create-coffee.dto --no-spec
npm i class-validator class-transformer # to validate dtos
npm i @nestjs/mapped-types # create object to optional partial
```

---

### TypeORM

NestJS comes with a module that helps make the TypeORM integration simple.

To get started with this module, you can add your `app.module.ts imports`.

### Database Migrations

Database migrations provide incrementally update database schema and keep in sync with application data model. To generate run and revert migrations, typeORM provides with a dedicated CLI within use.

Since this migrations outside in nest. Unfortunately unable to leverage to dependency injection and other Nest spesific features for DB migrations.

We need to create a `ormconfig.js` file at the root directory. It includes entities and migrations. TypeORM migrations need to work on compile files `/dist`.

```js
// ormconfig.js
module.exports = {
  type: 'postgres',
  host: 'localhost',
  post: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

```

```sh
npx typeorm migration:create ./src/migrations/CoffeeRefactor
```

Then lets change our models, at coffee.entity change name to title.

Every migration have up and down methods. Up is shows what need to be changed, down is undo or rollback any of those changes.

```ts
// auto created at src/migrations/
import { MigrationInterface, QueryRunner } from 'typeorm';

export class CoffeeRefactor1721203621345 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" RENAME COLUMN "name" TO "title"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" RENAME COLUMN "title" TO "name"`,
    );
  }
}
```

We need to make sure we build our source code, so TypeORM CLI can find our entities and migrations files at dist folder. So on the terminal first run:

```sh
npm run build
```

When our build finishes, everything will be compiled into dist folder. Now we can run typeorm migration command:

```sh
npx typeorm migration:run
```

### Current Way for Migrations

1. Create database module as a seperate module.
2. Import it form AppModule.
3. Give it a ConfigModule from AppModule.
4. Create typeOrm.config.ts file at root level of project.

    ```ts
    import { DataSource } from 'typeorm';
    import { config } from 'dotenv';
    import { ConfigService } from '@nestjs/config';
    import { Coffee } from './src/coffees/entities/coffee.entity';
    import { Flavor } from './src/coffees/entities/flavor.entity';
    import { Event } from './src/events/entities/event.entity';

    config();

    const configService = new ConfigService();

    export default new DataSource({
      type: 'postgres',
      host: configService.getOrThrow('DB_HOST'),
      port: configService.getOrThrow('DB_PORT'),
      database: configService.getOrThrow('DB_DATABASE'),
      username: configService.getOrThrow('DB_USERNAME'),
      password: configService.getOrThrow('DB_PASSWORD'),
      migrations: ['migrations/**'],
      entities: [Coffee, Flavor, Event],
    });
    ```
5. Create a migrations folder at the root level.
6. At package.json write typeorm migration create, run and revert commands.
    
    ```sh
      "typeorm": "ts-node ./node_modules/typeorm/cli",

      "typeorm:create-migration": "npm run typeorm -- migration:create ./migrations/$npm_config_name",

      "typeorm:run-migrations": "npm run typeorm migration:run -- -d ./typeOrm.config.ts",

      "typeorm:revert-migrations": "npm run typeorm migration:revert -- -d ./typeOrm.config.ts"
    ```
7. When create-migration executed, one file will add under to migrations folder. Do your up and down things for migration.
8. Done!

### Dependency Injection

NestJS handles all of the headlifting instead of handles dependency injection ourselfs. Essentially, when we ask for a dependency in a class constructor NestJS handles and retrieves the object back to us. 

Think about our coffees controller, using coffesService in our constructor.

1. In our Coffee Service @Injectable decorator at the class can be managed by the Nest container. This decorator marks the Coffee service class as a provider. 
2. If we jump over the our Coffees Controller we can see we are requesting our Coffee Service in our constructor. This request tells the Nest the injector provider into our controller class.

Lastly Nest is aware that this class is also a provider, because we are including it in Coffees Module.

```ts
@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}
}

@Injectable()
export class CoffeesService {}

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
```

---

When the Nest container instantiates the Coffees Controller, it first looks the see if the are any dependencies needed, in our case there is one. The Coffee Service. When the Nest container finds the Coffee Service dependency, it performs the lookup on the Coffee Service token which returns the Coffee Service class.

Assuming this provider has a singleton scope (Injectable provider default behaviour), Nest create an instance of coffee service and then return it.

---

