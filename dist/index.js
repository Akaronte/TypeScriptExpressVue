"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __importDefault(require("vue"));
var Hello_vue_1 = __importDefault(require("./components/Hello.vue"));
var v = new vue_1.default({
    el: "#app",
    template: "\n    <div>\n        Name: <input v-model=\"name\" type=\"text\">\n        <hello-component :name=\"name\" :initialEnthusiasm=\"5\" />\n    </div>\n    ",
    data: { name: "World" },
    components: {
        HelloComponent: Hello_vue_1.default
    }
});
