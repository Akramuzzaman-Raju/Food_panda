import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { multerStorage } from './Restaurant-profile/config';
import { ProfileController } from './Restaurant-profile/profile.controller';
import { ProfileService } from './Restaurant-profile/profile.service';
import { Profile } from './Restaurant-profile/profile.entity';
import { FoodService } from './Food/food.service';
import { FoodController } from './Food/food.controller';
import { Food } from './Food/food.entity';
import { Order } from './Order/order.entity';
import { OrderController } from './Order/order.controller';
import { OrderService } from './Order/order.service';
import { Review } from './Reviews/review.entity';
import { ReviewController } from './Reviews/review.controller';
import { ReviewService } from './Reviews/review.service';
import { Issue } from './Issue/issue.entity';
import { IssueController } from './Issue/issue.controller';
import { IssueService } from './Issue/issue.service';
import { Addons } from './Addondata/addon.entity';
import { AddonController } from './Addondata/addon.controller';
import { AddonService } from './Addondata/addon.service';
import { RequiredItems } from './Required/required.entity';
import { RequiredController } from './Required/required.controller';
import { RequiredService } from './Required/required.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([ Profile, Food, Order, Review, Issue, Addons, RequiredItems]),
    MulterModule,
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'Foodapp',
    autoLoadEntities: true,
    //entities: [User],
    synchronize: true,
  }),
  MulterModule.register({
    storage: multerStorage,
  }),
],
  controllers: [AppController, ProfileController,FoodController, OrderController, ReviewController, IssueController, AddonController, RequiredController],
  providers: [AppService, ProfileService, FoodService, OrderService, ReviewService, IssueService, AddonService, RequiredService],
})
export class AppModule {}
