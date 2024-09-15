import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './repo/user.repository';

@Injectable()
export class UserService {
  // constructor(@Inject() private userRepo:UserRepository){
  // }
 
  constructor(
    private readonly userRepo: UserRepository,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    let user:User=new User();
    user.firstName=createUserDto.firstName;
    user.lastName=createUserDto.lastName;
    user.age=createUserDto.age;
   return await this.userRepo.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.userRepo.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    await this.userRepo.update(id, updateUserDto);
    return this.userRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.userRepo.delete(id);
  }

  async findByFirstName(firstName: string): Promise<User[]> {
    return this.userRepo.findByFirstName(firstName);
  }
}
