let check = function(x) {
    var store = {};
    store.type = typeof (x);
    store.value = x;
    return store;
};
let inside = function(x, y) {
    if (typeof (x) === 'object' || 'function') {
        var x = x;
    } else {
        var x = {
            $null: null
        };
    }
    var vld = false;
    for (var i = 0; i < y.length; i++) {
        var $y = y[i];
        if ($y in x) {
            var vld = true;
        }
    }
    return vld;
};
let box = [];
let $Type = function(x) {
    var type = typeof (x)
    if (type === 'object') {
        var con = x.constructor;
        if (con.name === 'Array') {
            var type = con.name.toLowerCase();
        }
    }
    return type;
}
let iscon = function(x) {
    var x = x.replace(/window\.nimo\$__\$storage\.|window\.nimo\$__\$storage\['/, '') + "";
    var x = x.replace(/'\]==nimo:|'\]:==nimo|'\]/, '');
    return x;
};

let $typeof = function(x) {
    var x = x.trim();
    try {
        var v = eval(x)
    } catch (e) {
        if (!'message'in e) {} else {
            return typeof (v);
        }
    }
};
let noLo = function(x, y) {
    var x = x;
    var $x = x;
    if (typeof (y) !== 'string') {
        try {
            if (y.constructor) {
                var x = y.constructor.name;
            }
        } catch (e) {}
    }
    var arr = ['file://'];
    for (var i = 0; i < arr.length; i++) {
        var xx = arr[i];
        if (x.includes(xx)) {
            var x = x;
        }
    }
    if (x === "") {
        var x = $x;
    }
    return x;
};
let nimo$__$storage = {};
let Oname = function(x) {
    if ($typeof(x) !== "string") {
        var x = "[" + x + " " + x + "]";
    }
    var x = "(nimo)" + x + "(nimo)"
      , x = x.trim()
      , x = x.replace(/\(nimo\)\[/g, '$&"')
      , x = x.replace(/\]\(nimo\)/g, '#nimo"$&')
      , x = x.replace(/ /g, '","')
      , x = x.replace(/\(nimo\)/g, '');
    try {
        var x = eval(x);
    } catch (e) {
        if ('message'in e) {
            var x = [x, x];
        }
    }
    var arr = x[0];
    var x = x[1].replace(/#nimo/, '')
      , x = x.trim()
      , x = x.replace(/"|,|\]|\[/g, '');
    return [x, arr];
}

let kp = function($_x, $_key, $_console) {
if ($_console) {
    try {
        var $_x = eval($_x);
    } catch (e) {
        var $_name = e.constructor.name;
        var $msg = e.message;
        var $new = new cd($msg);
        $new.ip = 'error';
        $new.error = $_name;
return
    }
}

    if ($_key !== undefined) {
        var $_g = Oname($_x + "")[0];
        var $_g = noLo($_g, $_x);

        eval(`nimo$__$storage['${$_g}'] = $_x;`);


        var $_x = 'nimo$__$storage[\'' + $_g + '\']';
    }
    var store = {
        x: $_x,
        key: $_key,
        y: $_x,
        $y: "logs",
        console: $_console,
    }
    try {
        store.x = store.x.trim();
    } catch (e) {}
    store.y = store.x;
    if (store.console === undefined) {
        store.$y = store.y;
    }

    if (store.y === "") {
        cd('%nimo', 'wait');
    } else {
        store.ky = store.key;
        if (store.key === undefined) {
            var t = event;
            store.key = t.key + "",
            store.key = store.key.toLowerCase().trim();
        }
        if (store.key === "enter") {
            try {
                store.end = eval(store.y);
                store.tp = typeof (store.end);
                if (store.tp === "string" || store.tp === "number") {
                    new cd(store.end).ip;
                } else {
                    var dd_ = store.end.constructor.prototype;
                    if (inside(dd_, ['forEach'])) {
                        var $_tt_ = '[...]';
                    } else if (inside(dd_, ['arguments'])) {
                        var $_tt_ = "(...)";
                    } else {
                        var $_tt_ = "{...}";
                    }
                    var $_cx = store.end.constructor.name;

                    var $_new = new cd(store.end);
                    $_new.ip = store.$y;
                    $_new.name = $_cx;
                    $_new.type = $_tt_;

                }
            } catch (e) {
                if ('message'in e) {
                    try {
                        eval(store.y);
                    } catch (e) {
                        var $_name = e.constructor.name;
                        var $msg = e.message;
                        var $new = new cd($msg);
                        $new.ip = 'error';
                        $new.error = $_name;
                    }
                }
            }
        }
    }
}
let isArr = function(x) {
    var y = ['forEach'];
    var vld = false;
    for (var i = 0; i < y.length; i++) {
        if (y[i]in x) {
            var vld = true;
        }
    }
    return vld;
}
let inc = function(x, y) {
    var x = x + "";
    var arr = [];
    if (typeof (y) !== "object") {
        arr.push(y)
        var y = arr;
    }
    var vld = false;
    for (var i = 0; i < y.length; i++) {
        if (y[i].substring(y[i].length - 1, y[i].length).includes('*')) {
            var y = y[i].substring(0, y[i].length - 1);
            if (x.includes(y)) {
                var vld = true;
            }
        } else {
            if (x === y[i]) {
                var vld = true;
            }
        }
    }
    return vld;
}
let btn_nimo = function() {
    var id_ = document.querySelector('nimo-console');
    id_.innerHTML = "";
}
let $pto = function(x, y) {
    var pro = {};
    if (y === 'array') {
        for (var prop in x) {
            pro[prop] = x[prop];
        }
    }
    return pro;
}
let exactElm = function(x) {
    if (x.previousElementSibling === null) {
        var pe = x.parentElement;
    } else {
        var pe = x.previousElementSibling;
    }
    if (pe === null) {
        var pe = x.lastChild;
    }
    if (pe === null) {
        var pe = x.firstChild;
    }
    if (pe.tagName === undefined) {
        var pe = x;
    }
    if (pe.tagName.toLowerCase() === "d-head") {
        return pe;
    } else {
        return exactElm(pe);
    }
}
let equal = function(x, y) {
    var vld = false;
    for (var i = 0; i < y.length; i++) {
        if (y[i] === x) {
            var vld = true;
        }
    }
    return vld;
}
let toText = function(x) {
    if (typeof (x) === 'string') {
        var x = x.replace(/</g, '&lt;')
          , x = x.replace(/>/g, '&gt;')
          , x = x.replace(/\n/g, '<br>')
          , x = x.replace(/ /g, '&nbsp;')
    } else {
        var x = x;
    }
    return x;
}
let same = function(x, y, z) {
    if (z === undefined) {
        var x = x;
    } else {
        var x = typeof (x)
    }
    var vld = false;
    for (var i = 0; i < y.length; i++) {
        if (y[i] === x) {
            var vld = true;
        }
    }
    return vld;
}
let toStr = function(y) {
    var x = "=\"" + y + "\"";
    try {
        eval(y)
    } catch (e) {
        if ('message'in e) {
            var y = y;
        } else {
            var y = eval(y)
        }
    }
    if (y === undefined || y === null || y === 'null' || y === 'undefined' || same(y, ['number', 'boolean'], true) === true) {
        var x = y + "";
    }
    if (y + " ".includes('{…}')) {
        var x = y;
    }
    return x;
}
let fd = function(x, y, z) {
    `
  nimo-console
  `;
}

let toHtml = function(x, y, z, a, b, c, d) {
    var store = {};
    var tt = {};
    try {
        var tt = y.__proto__;
    } catch (e) {}

    if (x === 'function') {
        var x = a + ":()";
    }
    var dt = document.createElement('details');
    dt.id = "details"
    dt.innerHTML = "";
    var dh = document.createElement('d-head');
    dh.out = true;
    try {
        dh.tt = tt;
    } catch (e) {}
    dh.innerHTML = "";
    dt.onclick = function(e) {
        var tn = e.target.firstChild.tagName;
        if (tn === undefined) {
            var tn = "null";
        }
        var tn = tn + "".toLowerCase();
        if (tn === 'details') {
            var t = e.target.firstChild;
        } else if (tn == 'd-head') {
            var t = e.target.firstChild;
        } else {
            try {
                var t = exactElm(e.target.firstChild);
            } catch (e) {}
        }
        if (t === undefined) {
            var t = {}
        }
        if (t.bd === undefined) {
            t.bd = "oo"
        } else {}

        t.innerHTML = '';

        store.bad = false;
        if (this.open === false) {

            if (typeof (y) === 'object') {
                for (var prop_ in y) {
                    var $y = y[prop_];
                    if ($y === "This is nimo#=") {
                        store.bad = true;

                    }
                }
            } else {}

            if (y === null || y === undefined) {

                var $_new = new cd(y + "").out = dh;
            } else {
                var $_new = new cd(y).out = dh;
            }
            var dd_ = y.constructor.prototype;
            if (dd_ === undefined) {
                var dd_ = {}
            }
            if (inside(dd_, ['length'])) {
                var $_tt_ = '[...]';
            } else if (inside(dd_, ['arguments'])) {
                var $_tt_ = "(...)";
            } else {
                var $_tt_ = "{...}";
            }
            var $_cx = y.constructor.name;
            $_new.ip = store.$y;
            $_new.name = $_cx;
            $_new.type = $_tt_;
        }
    }

    var $sm = document.createElement('summary');
    $sm.id = "not";
    var sm = document.createElement('s-wp');
    var $y = y;
    var tt = {};
    try {
        var tt = y.__proto__;
    } catch (e) {}

    var tt_ = "()";
    if (isArr(tt) === true) {
        var tt_ = "[]";
    }

    if (y === null || y === undefined) {
        var $y = y + "";
    }
    if ($y + " ".trim() === "") {
        var $y = ' '
    }
    var $z = y;
    if ($z + " ".includes('…')) {
        var $z = 404;
    }
    if (typeof (y) === 'string') {
        var $y = `"${$y}"`;
    }
    if (c === 'array') {
        var tt_ = "[]";
    }
    if (same($y, ['number', 'string', 'boolean'], true) === true) {
        sm.innerHTML = x + ":<h-up>" + $y + "</h-up>";
    } else {
        var dd_ = y.constructor.prototype;
        if (inside(dd_, ['length'])) {
            var tt_ = '[...]';
        } else if (inside(dd_, ['caller'])) {
            var tt_ = "(...)";
        } else {
            var tt_ = "{...}";
        }
        var $x = y.constructor.name;
        sm.innerHTML = `${x}:<h-ft dt='${$x}' vh="kp" ty='${tt_}'>${y}</h-ft>`;
    }
    dt.appendChild(dh);
    $sm.appendChild(sm);
    dt.appendChild($sm);

    if (store.bad === false) {
        return dt;
    } else {
        return dt;
    }
}

let cd = function(x, y) {
    var ths = this;
    var $arguments = arguments;
    var async = function() {
        var arguments = $arguments;

        var n = ths.out;
        var ip = ths.ip;
        var ipv = ths.ip;
        var err = ths.error
        var vn = "vn";
        var proto = {};
        var error = {};
        var logs = {};
        if (ipv !== undefined) {
            var vn = 'ip'
            var main = eval(ip);
            var tip = typeof (main);
            var tg_ = ip;
            var pt_ = ths.type;
            var tg_ = ths.name;
        }
        if (err !== undefined) {
            var err = 'error';
            var ipv = ths.error;
        }

        if (n !== undefined) {
            var vn = 'out';
            var pt_ = ths.type;
            var tg_ = ths.name;
        }
        if (pt_) {
            var $pt_ = pt_.replace(/\.\.\./, '<h-m>$&</h-m>');
        }
        var eip = same(tip, ['object', 'function', ]);
        if (eip == true) {
            var tip = "<h-ft ty='" + pt_ + "'>" + tg_ + $pt_ + "</h-ft></s-wp>";
        } else {
            var tip = tg_ + ":<h-up>" + tg_ + "</h-up></s-wp>";
        }

        var argument = [];
        var arr1 = [];
        if (n === undefined) {
            var wrap = document.createElement('details');
            wrap.id = "console-wp";
            wrap.innerHTML = ` <summary id="ip"><s-wp>${tip}</summary>`;
            var vld2 = true;
            var arguments_length = arguments.length;
        } else {
            var wrap = n;
            var vld2 = false
            var arguments_length = arguments.length - 1;
        }

        for (var i = 0; i < arguments.length; i++) {
            argument.push(arguments[i]);
        }
        argument.forEach(function(x, y) {
            if (x === null) {
                var x = x + ""
            }

            var type = $Type(x);
            /***
            attachment center;
            x.custom = "hey";
            this place holds what the console.log output
            ***/
            if (type === 'array') {
                x['length #nimo-space'] = x.length;
            }
            if (type === 'object' || 'array' || 'function') {
                var pr = x.constructor.prototype;
                x['__proto__ #nimo-space'] = $pto(pr, type);
            }
            var xx = x;
            try {
                var len_ = x.length;
            } catch (e) {}
            var arr = [];

            var checked = check(x);

            var looking = same(checked.type, ['object', 'function', ]);
            if (looking === true) {
                var vl = checked.value;

                var store = {};
                for (var prop in vl) {
                    if (typeof vl[prop] === "function") {
                        var $store = `${prop}() {…nimo-fc}`;
                        arr.push({
                            summary: prop,
                            details: $store,
                            _details: vl[prop],
                            type: type,
                        });

                    } else {
                        arr.push({
                            summary: prop,
                            details: vl[prop],
                            type: type,
                            length: len_,
                        });
                    }
                }
                var result = "):";
            } else {
                var result = toStr(checked.value);
                var $type = typeof (result);
                var $type = checked.type;
                if (inc(result, '…nimo-fc*') === true) {
                    var $type = "function";
                }
                if (equal(typeof (result), ['number', 'boolean']) === true) {
                    $type = typeof (result)
                }

                arr.push({
                    summary: 'just',
                    details: result,
                    type: $type,
                });
            }
            arr.forEach(function(x, y) {
                /****
            	 this section holds processed values which will appear   
            	 as a drop down
            	 ****/
                if (x.summary === 'just') {
                    $xx = x;
                    if (typeof (x.details) === "string") {
                        x.details = x.details.replace(/…nimo-fc/g, '')
                        $xx.details = $xx.details.trim();
                    }

                    var loo_ = equal($xx.details, ['undefined', 'null']);
                    if (loo_ === false) {
                        var loo_ = equal(x.type, ['number', 'boolean', 'function', 'array']);
                    }
                    if (loo_ === true) {
                        wrap.innerHTML = `<summary id="${vn}" ty="${x.type}"><${vn}-s ty="${x.type}" v="${ipv}"></${vn}-s></summary><h-sg id="nimo-enb">${toText(x.details)}</h-sg>`;
                    } else {
                        wrap.innerHTML = ` <summary id="${vn}"><${vn}-s error="${err}" v="${ipv}"></${vn}-s></summary><h-sg>\"<h-stg>${toText(x.details)}</h-stg>\"</h-sg>`;
                    }

                } else {

                    x.details = toText(x.details);
                    if (wrap.bd === undefined) {
                        var wrapHtml = toHtml(x.summary, x.details, arr, x.summary, xx, x.type, wrap.bd);
                    } else {
                        var wrapHtml = toHtml(x.summary, x.details, arr, x.summary, xx, x.type, wrap.bd);

                    }
                    wrap.append(wrapHtml);
                    if (wrap.bd === undefined) {
                        wrap.bd = wrap.innerHTML;

                    }
                }
            });
        });
        arr1.forEach(function(x) {})
        if (vld2 === true) {
            var id_ = document.querySelector('nimo-console');
            if (id_ === null) {
                document.body.append(wrap);
            } else {
                id_.append(wrap);
            }

        }
    }
    if (x === "%nimo") {
        return false;
    } else {
        setTimeout(function() {
            try {
                async();
            } catch (e) {}
        }, 10);
    }
}
customElements.define('h-up', class extends HTMLElement {
    constructor() {
        super();
        var vl = this.innerHTML;

        if (this.innerHTML.length >= 150) {
            this.innerHTML = vl.substring(0, 150) + "<h-m>...</h-m>";
        }

        if (!vl.includes("\"")) {
            var vl = vl.trim();
            if (vl === "true" || vl == "false") {
                this.type = "boolean"
                this.innerHTML = `<h-bl>${vl}</h-bl>`;
            } else if (vl === "undefined") {
                this.type = "undefined"
                this.innerHTML = `<h-ud>${vl}</h-ud>`;
            } else if (vl === "null") {
                this.type = "null"
                this.innerHTML = `<h-nl>${vl}</h-nl>`;
            }
        }
        if (vl.includes("…nimo-fc")) {
            var vl = vl.replace(/"/g, '')
              , vl = vl.replace(/nimo-fc/g, '')
            this.type = "function";
            this.innerHTML = `<h-func>${vl}</h-func>`;
        }
        var len = this.innerText.length;
        var txt = this.innerText;
        if (txt.charAt(0) === '"' && txt.charAt(len - 1) === '"') {
            var txt = "(nimo)" + txt + "(nimo)";
            var txt = txt.replace(/\(nimo\)"/, '$&<h-string>')
              , txt = txt.replace(/"\(nimo\)/, '</h-string>$&')
              , txt = txt.replace(/\(nimo\)/g, '');
            this.type = "string";
            this.innerHTML = txt;
        } else {
            var type = 'number';
            if (this.type === undefined) {
                this.type = 'number';
                this.innerHTML = `<h-nb>${this.innerHTML}</h-nb>`;
            }
        }

    }
}
);
customElements.define('h-ft', class extends HTMLElement {
    constructor() {
        super();
        try {
            this.ty = this.attributes.ty.value.replace(/\.\.\./, '<h-m>$&</h-m>');
            this.innerHTML = this.attributes.dt.value + this.ty;
        } catch (e) {}
    }
}
);
customElements.define('h-sg', class extends HTMLElement {
    constructor() {
        super();
        var vl = this.innerHTML;
        var aq = equal(this.innerHTML, ['true', 'false', 'null', 'undefined', ]);
        if (aq === false) {
            this.innerHTML = `${this.innerHTML}`
        }
    }
}
);

customElements.define('ip-s', class extends HTMLElement {
    constructor() {
        super();
        var v = this.attributes.v;
        var err = this.attributes.error;
        var ty = this.attributes.ty;
        if (ty === undefined) {
            var ty = {
                value: "-"
            }
        }
        v.value = v.value + ":";
        if (ty.value == 'boolean') {
            v.value = "";
        }
        var ov = this.parentElement.nextElementSibling.innerText;
        if (err === undefined) {
            this.innerHTML = iscon(v.value + "==nimo:").substring(0, 20).replace(/nimo-q/g, '"').replace(/==nimo::/g, '').replace(/==nimo:/g, '');
        }
        this.innerHTML = this.innerHTML + v.value + "<h-up id='hu-nimo'>" + ov + "</h-up>";

    }
}
);
customElements.define('vn-s', class extends HTMLElement {
    constructor() {
        super();
        var type = this.attributes.ty;
        if (this.innerText.trim() !== "") {
            var v = this.attributes.v;
            var ty = this.attributes.ty;
            var vl = this.innerText;
            var ov = this.parentElement.nextElementSibling.innerText;
            this.innerHTML = iscon(v.value + "==nimo:").substring(0, 20).replace(/nimo-q/g, '"').replace(/==nimo::/g, '').replace(/==nimo:/g, '') + ":" + "<h-up id='hu-nimo'>" + ov + "</h-up>";

        } else {
            var v = this.parentElement.nextElementSibling;
            var vl_ = v.innerHTML;
            this.innerHTML = vl_;
        }
        if (this.innerText.trim() === "null") {
            this.innerHTML = "<h-nl>" + this.innerText + "</h-nl>";
        }
        if (this.innerText.trim() === "undefined") {
            this.innerHTML = "<h-un>" + this.innerText + "</h-un>";
        }
        if (type !== undefined) {
            if (type.value === 'number') {
                this.innerHTML = "<h-nb>" + this.innerText + "</h-nb>";
            }
        }
    }
}
);
customElements.define('s-wp', class extends HTMLElement {
    constructor() {
        super();
        var ths = this;
        setTimeout(function() {
            ths.innerHTML = ths.innerHTML.replace(/ #nimo-space/g, '')
        }, 0);
    }
}
);
customElements.define('nimo-body', class extends HTMLElement {
    constructor() {
        super();
        var html = `
   <nimo-console></nimo-console>
    <footer-cl>
    <nimo-text id="nimo-text" contenteditable/></nimo-text>
<btn>

<nimo-btn-2 id=nimo-btn></nimo-btn-2>
<nimo-btn-1 id=nimo-btn></nimo-btn-1>

</btn>
    </footer-cl>
  `;
        this.innerHTML = html;
    }
}
);
customElements.define('h-nb', class extends HTMLElement {
    constructor() {
        super();
        var txt = this.innerHTML.trim();
        if (txt.charAt(0) === '"') {
            var txt = txt.substring(1, txt.length - 4);
            var txt = '<h-string>' + txt + '</h-string><h-m>...</h-m>';
            this.innerHTML = txt;
        }
    }
}
);
customElements.define('nimo-btn-1', class extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = "clear";
        this.onclick = function() {
            btn_nimo();
        }
    }
}
);

customElements.define('nimo-btn-2', class extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = "Run";
        this.onclick = function() {
var txt = document.getElementById('nimo-text')
var x_ = txt.innerText;
         //   btn_nimo();
         kp(x_, 'enter',true);
//console.log(eval())
        }
    }
}
);

customElements.define('h-bl', class extends HTMLElement {
    constructor() {
        super();
        this.vl = this.innerText.trim();
        this.innerHTML = "";
        var elm = document.createElement(this.vl);
        elm.innerText = this.vl;
        this.appendChild(elm);
    }
}
);
let mark = function(x) {
    document.head.innerHTML += (`
<style>
${x}
</style>
  `);
}
customElements.define('nimo-text', class extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = "\"Type Here!\"";
        this.contenteditable = true;
        this.onkeypress = function() {
            var v = this.innerText.trim();
            if (v !== '') {
                try {
                    console.log(eval(this.innerText));
                } catch (e) {
                    if (e) {
                        kp(this.innerText);
                    }
                }
            }
      //this.innerHTML = v;
        }
        this.focus();
    }
}
);
customElements.define('nimo-org', class extends HTMLElement {
    constructor() {
        super();
        var ths = this;
        var nm = this.nextElementSibling.tagName.toLowerCase();
        if (nm !== "nimo-body") {
            this.outerHTML += `
          <nimo-body></nimo-body>
       `;
        }
        var nb = this.nextElementSibling;
        var mv = function(e, ths) {
            var x = e.pageX;
            var y = e.pageY;
            ths.style.top = y + "px";
            ths.style.left = x + "px";
        }
        var cut = function(ths) {
            window.ontouchmove = null;
            window.onmousemove = null;
        }
        this.ontouchstart = function() {
            window.ontouchmove = function(e) {
                mv(e.touches[0], ths);
            }
        }
        this.onmousedown = function() {
            window.onmousemove = function(e) {
                mv(e, ths)
            }
        }

        this.onmouseup = function() {
            cut(ths);
        }
        this.ontouchend = function() {
            cut(ths);
        }
        window.onclick = function() {
            cut(ths);
        }
        this.onclick = function() {
            if (this.clicked === undefined) {
                nb.style.cssText = `
            display: block;
            animation: nimoA 0.5s 1;
          `;
                setTimeout(function() {
                    nb.focus();
                }, 655);
                this.clicked = true;
            } else {
                nb.style.cssText += `
            animation: nimoO 0.3s 1;
          `;
                setTimeout(function() {
                    nb.style.cssText = `
          display:none;
           `;
                }, 100);
                this.clicked = undefined;
            }
        }
    }
}
);
setTimeout(function() {
    box.forEach(function(x) {
        kp(x, "enter");
    });
}, 1000);
console.log = function(xx) {
    var len = box.length;
    var argument = arguments;
    var x = function() {
        for (var i = 0; i < argument.length; i++) {
            var x_ = argument[i];

            var fl = equal(x_, [null, undefined, ]);
            if (fl === true) {
                var x_ = x_ + "";
            }

            kp(x_, 'enter');
        }
    }
    if (window.kp !== undefined) {
        x();
    } else {
        setTimeout(function() {
            x();
        }, 1000);
    }
}

setInterval(function() {
    var org = document.querySelector('nimo-org');
    if (org === null) {
        window.location.href = "?nimo=reloaded";
        var org = document.createElement('nimo-org');
        document.body.appendChild(org)
    }
}, 10);
mark(``);
/***
 * 
 * 
 * 
 * ***/
