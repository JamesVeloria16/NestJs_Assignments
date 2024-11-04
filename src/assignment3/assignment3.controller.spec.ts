import { Test, TestingModule } from '@nestjs/testing';
import { Assignment3Controller } from './assignment3.controller';

describe('Assignment3Controller', () => {
  let controller: Assignment3Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Assignment3Controller],
    }).compile();

    controller = module.get<Assignment3Controller>(Assignment3Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
