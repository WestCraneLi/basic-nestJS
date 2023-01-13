import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CounterMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('进入中间件');

    //发现非法路径，停止访问
    // res.send('禁止访问，你被拦截了');

    next();
  }
}
