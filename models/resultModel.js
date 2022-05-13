class Result {
    constructor(updated, created, error, offset) {
        this.updated = updated
        this.created = created
        this.error = error
        this.offset = offset
    }

    getUpdated() {
        return this.updated;
    }
    setUpdated(updated) {
        this.updated = updated
    }

    getCreated() {
        return this.created;
    }

    setCreated(created) {
        this.created = created
    }

    getError() {
        return this.error;
    }
    setError(error) {
        this.error = error
    }

    getOffset() {
        return this.offset;
    }
    setOffset(offset) {
        this.offset = offset
    }

}
export default Result;