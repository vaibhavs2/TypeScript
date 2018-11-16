//// [strictModeInConstructor.ts]
class A {
}

 

class B extends A {
    public s: number = 9;

    constructor () {
        "use strict";   // No error
        super();
    }
}

class C extends A {
    public s: number = 9;

    constructor () {
        super();            // No error
        "use strict";
    }
}

class D extends A {
    public s: number = 9;

    constructor () {
        var x = 1; // Error
        super();
        "use strict";
    }
}

class Bs extends A {
    public static s: number = 9;

    constructor () {
        "use strict";   // No error
        super();
    }
}

class Cs extends A {
    public static s: number = 9;

    constructor () {
        super();            // No error
        "use strict";
    }
}

class Ds extends A {
    public static s: number = 9;

    constructor () {
        var x = 1; // no Error
        super();
        "use strict";
    }
}

//// [strictModeInConstructor.js]
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        "use strict"; // No error
        var _this = _super.call(this) || this;
        _this.s = 9;
        return _this;
    }
    return B;
}(A));
var C = /** @class */ (function (_super) {
    __extends(C, _super);
    function C() {
        var _this = _super.call(this) || this;
        _this.s = 9;
        "use strict";
        return _this;
    }
    return C;
}(A));
var D = /** @class */ (function (_super) {
    __extends(D, _super);
    function D() {
        var _this = this;
        _this.s = 9;
        var x = 1; // Error
        _this = _super.call(this) || this;
        "use strict";
        return _this;
    }
    return D;
}(A));
var Bs = /** @class */ (function (_super) {
    __extends(Bs, _super);
    function Bs() {
        "use strict"; // No error
        return _super.call(this) || this;
    }
    Bs.s = 9;
    return Bs;
}(A));
var Cs = /** @class */ (function (_super) {
    __extends(Cs, _super);
    function Cs() {
        var _this = _super.call(this) || this;
        "use strict";
        return _this;
    }
    Cs.s = 9;
    return Cs;
}(A));
var Ds = /** @class */ (function (_super) {
    __extends(Ds, _super);
    function Ds() {
        var _this = this;
        var x = 1; // no Error
        _this = _super.call(this) || this;
        "use strict";
        return _this;
    }
    Ds.s = 9;
    return Ds;
}(A));
