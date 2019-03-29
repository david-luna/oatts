import { ReflectiveInjector, Injector } from 'injection-js';
import { NODE_FS_TOKEN, NodeFs } from './types'; 
import { FsUtil } from './fs.util'

describe('FsUtil', () => {
  const injector = ReflectiveInjector.resolveAndCreate([
    { provide: NODE_FS_TOKEN, useValue: { mkdir: jest.fn()} },
    FsUtil,
  ]);

  let util: FsUtil;

  beforeEach(() => {
    util = injector.get(FsUtil);
  })

  test('should exists', () => {
    expect(util).toBeDefined();
  })
});
