import { Types } from 'mongoose';

import { ID } from '../types';

export type DefaultOtpEntity = {
  otp: string;
  user: ID;
  createdAt: Date;
};

export interface PersistenceAdapter<
  TEntity extends DefaultOtpEntity = DefaultOtpEntity,
  TCreate extends Pick<DefaultOtpEntity, 'user' | 'createdAt'> = Pick<DefaultOtpEntity, 'user' | 'createdAt'>,
  TFind extends Partial<Pick<DefaultOtpEntity, 'user' | 'otp'>> = Partial<Pick<DefaultOtpEntity, 'user' | 'otp'>>,
> {
  createEmailOtp(input: { data: TCreate }): Promise<TEntity>;
  findOneEmailOtp(params: TFind): Promise<TEntity | null>;
  findOneUserByEmail(params: { email: string }): Promise<any>;
  deleteRelatedOtps(params: { user: Types.ObjectId | Buffer }): Promise<void>;
}