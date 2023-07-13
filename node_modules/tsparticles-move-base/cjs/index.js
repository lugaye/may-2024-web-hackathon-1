"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadBaseMover = void 0;
const BaseMover_1 = require("./BaseMover");
async function loadBaseMover(engine) {
    engine.addMover("base", () => new BaseMover_1.BaseMover());
}
exports.loadBaseMover = loadBaseMover;
