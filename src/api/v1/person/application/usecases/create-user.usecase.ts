import { IUserRepository } from "src/domain/interfaces/person-repository.interface";

export class CreatePersonUseCase {

    constructor(private readonly personRepository: IUserRepository) {}

    async execute(payload) {
        await this.personRepository.create(payload);
    }
}