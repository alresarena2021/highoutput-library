import bs58 from 'bs58';
import { generateObjectId } from './generate-object-id';

export class ObjectId<T = number> {
  private value: Buffer;

  constructor(type: number);
  constructor(value: Buffer);
  constructor(arg: number | Buffer) {
    if (arg instanceof Buffer) {
      this.value = arg;
    } else {
      this.value = Buffer.from(bs58.decode(generateObjectId(arg)));
    }
  }

  public static from(value: string | Buffer) {
    if (value instanceof Buffer) {
      return new ObjectId(value);
    }

    return new ObjectId(Buffer.from(bs58.decode(value)));
  }

  public toString() {
    return bs58.encode(this.value);
  }

  public toBuffer() {
    return this.value;
  }

  public get type(): T {
    return this.value.at(0) as never;
  }
}
