// @ts-check

// @ts-expect-error error due to cjs file
/** @type {import('eslint').Linter.Config} */
const configs = {}

// eslint-disable-next-line no-undef
module.exports = configs
