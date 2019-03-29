import * as fs from 'fs';

import { InjectionToken } from 'injection-js';

// For injection
export const NODE_FS_TOKEN = new InjectionToken<NodeFs>('fs.driver');


// FS is a module so we have to export interfaces
export interface NodeFs {
  existsSync(path:fs.PathLike): boolean;
  mkdirSync(path:fs.PathLike): void;
  writeFileSync(path: fs.PathLike | number, data: any, options?: fs.WriteFileOptions): void;
}

