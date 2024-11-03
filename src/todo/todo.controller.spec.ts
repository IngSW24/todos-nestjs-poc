import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from './todo.controller';

/**
 * Here the controller can be unit tested
 */

describe('TodoController', () => {
  let controller: TodoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
    }).compile();

    controller = module.get<TodoController>(TodoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});