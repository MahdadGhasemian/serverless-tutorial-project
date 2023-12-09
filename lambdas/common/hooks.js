const { userHooks, logEvent, parseEvent, handleUnexpectedError } = require("lambda-hooks")

const withHooks = userHooks({
    before: [logEvent, parseEvent],
    after: [],
    onError: [handleUnexpectedError]
})

module.exports = {
    withHooks
}