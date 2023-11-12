import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Issue } from './issue.entity';
@Injectable()
export class IssueService {
  constructor(
    @InjectRepository(Issue) private repo: Repository<Issue>,
  ) {}

  create(issue: string) {
    const issues = this.repo.create({
        issue,
    });

    return this.repo.save(issues);
  }
  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOneBy({ id });
  }
  find(issue: string) {
    return this.repo.findBy({ issue });
  }

  async update(id: number, attrs: Partial<Issue>) {
    const issues = await this.findOne(id);
    if (!issues) {
      throw new NotFoundException('error');
    }
    Object.assign(issues, attrs);
    return this.repo.save(issues);
  }
}
