"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hello = void 0;
const react_1 = __importDefault(require("react"));
// Hello コンポーネントの定義
class Hello extends react_1.default.Component {
    render() {
        var _a;
        const name = (_a = this.props.name) !== null && _a !== void 0 ? _a : 'Mr. Unknown';
        return (react_1.default.createElement("h1", null,
            "Hello ",
            name,
            " in Electron"));
    }
}
exports.Hello = Hello;
//# sourceMappingURL=Hello.js.map