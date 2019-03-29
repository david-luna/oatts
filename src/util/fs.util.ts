import 'reflect-metadata';
import { Injectable, Inject } from 'injection-js';
import { NODE_FS_TOKEN, NodeFs } from './types'; 

@Injectable()
export class FsUtil {

  constructor(
    @Inject(NODE_FS_TOKEN) private driver: NodeFs,
  ) {}

  mkdir ( path: string ) : void {
    
  }
}
