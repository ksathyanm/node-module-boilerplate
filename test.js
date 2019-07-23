/* eslint-env mocha */
const { expect } = require("chai")
const unicornFun = require("./index.js")

describe("module-name", () => {
  it("works", () => {
    expect(unicornFun("unicorns")).to.equal("unicorns & rainbows")
  })
})
