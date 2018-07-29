/**
 * @class JobController - Controller for jobs
 */
class JobController {
    /**
   * @constructor Constructor of JobController
   */
    constructor() {
        this.fetcher = jobFetcher;
    }

    /**
   * List all jobs
   * @returns {Array} Job
   */
    async all() {
        const data = await this.fetcher.all();
        const objs = data.map(d => new Job(d));
        return objs;
    }

    // methods come here
}