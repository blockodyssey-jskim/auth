import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from '../../submodule/src/entity/user.entity';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {}
