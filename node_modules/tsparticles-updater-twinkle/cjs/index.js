"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadTwinkleUpdater = void 0;
const TwinkleUpdater_1 = require("./TwinkleUpdater");
async function loadTwinkleUpdater(engine) {
    await engine.addParticleUpdater("twinkle", () => new TwinkleUpdater_1.TwinkleUpdater());
}
exports.loadTwinkleUpdater = loadTwinkleUpdater;
