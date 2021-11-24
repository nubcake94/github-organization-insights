import { Module } from '@nestjs/common';
import { ProfileService } from '../profile/profile.service';
import { RepositoryController } from './repository.controller';
import { RepositoryService } from './repository.service';

@Module({
	providers: [RepositoryService, ProfileService],
	controllers: [RepositoryController],
})
export class RepositoryModule {}
