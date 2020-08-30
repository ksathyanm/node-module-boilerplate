/* eslint-env mocha */
const { expect } = require("chai")
const unicornFun = require("./index.js")

describe("node-module-boilerplate", () => {
  it("works", () => {
    const result = unicornFun("unicorns")
    expect(result).to.equal("unicorns & rainbows")
  })
})
