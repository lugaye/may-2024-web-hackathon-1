"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadExternalPauseInteraction = void 0;
const Pauser_1 = require("./Pauser");
async function loadExternalPauseInteraction(engine) {
    await engine.addInteractor("externalPause", (container) => new Pauser_1.Pauser(container));
}
exports.loadExternalPauseInteraction = loadExternalPauseInteraction;
