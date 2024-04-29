
class BaseController {
    repository;
    tables;

    constructor(repository) {
        this.repository = repository;
    }
}

module.exports = BaseController;