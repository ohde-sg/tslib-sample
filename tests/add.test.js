"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var add_1 = require("../src/add");
var chai_1 = require("chai");
describe("add-demo-npm unit tests", function () {
    it("adding two positive numbers", function () {
        var actual = add_1.add(1, 2);
        chai_1.expect(actual).is.equal(3);
    });
    it("adding two negative numbers", function () {
        var actual = add_1.add(-5, -2);
        chai_1.expect(actual).is.equal(-7);
    });
    it("adding one positive and one negative number", function () {
        var actual = add_1.add(7, -2);
        chai_1.expect(actual).is.equal(5);
    });
});
