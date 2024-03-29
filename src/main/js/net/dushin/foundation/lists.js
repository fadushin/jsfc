//
// Copyright (c) dushin.net
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of dushin.net nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY dushin.net ``AS IS'' AND ANY
// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL dushin.net BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//

net.dushin.foundation.Lists = {

    map: function(func, list) {
        var i;
        var ret = [];
        for (i = 0;  i < list.length;  ++i) {
            ret.push(func(list[i]));
        }
        return ret;
    },

    filter: function(func, list) {
        var i;
        var ret = [];
        for (i = 0;  i < list.length;  ++i) {
            if (func(list[i])) {
                ret.push(list[i]);
            }
        }
        return ret;
    },

    filterMap: function(func, list) {
        var i;
        var ret = [];
        for (i = 0;  i < list.length;  ++i) {
            var mapped = func(list[i]);
            if (mapped) {
                ret.push(mapped);
            }
        }
        return ret;
    },
    
    foldl: function(pred, list, accum) {
        var i;
        for (i = list.length - 1;  i >= 0;  --i) {
            accum = pred(accum, list[i]);
        }
        return accum;
    },
    
    foldr: function(pred, list, accum) {
        var i;
        for (i = 0;  i < list.length;  ++i) {
            accum = pred(accum, list[i]);
        }
        return accum;
    },

    apply: function(pred, list) {
        var i;
        for (i = 0;  i < list.length;  ++i) {
            pred(list[i]);
        }
    },

    applyAsync: function(pred, list, timeout) {
        var i;
        timeout = timeout || 0;
        for (i = 0;  i < list.length;  ++i) {
            net.dushin.foundation.Async.exec({f: function(x){pred(x)}, args: list[i], timeout: timeout});
        }
    },
    
    contains: function(elt, list) {
        var i;
        for (i = 0;  i < list.length;  ++i) {
            if (elt === list[i]) {
                return true;
            }
        }
        return false;
    },
    
    /**
     * @return      the first element in list such that pred(elt) is truthy
     */
    find: function(pred, list) {
        var i;
        for (i = 0;  i < list.length;  ++i) {
            if (pred(list[i])) {
                return list[i];
            }
        }
        return null;
    },
    
    /**
     * @return      the value of func(elt), such that elt is the first element 
     *              in list such that func(elt) is truthy
     */
    mapFirst: function(func, list) {
        var i;
        for (i = 0;  i < list.length;  ++i) {
            var val = func(list[i]);
            if (val) {
                return val;
            }
        }
        return null;
    },
    
    indexOf: function(func, list) {
        var i;
        for (i = 0;  i < list.length;  ++i) {
            if (func(list[i])) {
                return i;
            }
        }
        return -1;
    },
    
    any: function(func, list) {
        return this.indexOf(func, list) != -1;
    },
    
    all: function(func, list) {
        var i;
        for (i = 0;  i < list.length;  ++i) {
            if (!func(list[i])) {
                return false;
            }
        }
        return true;
    },
    
    createMap: function(func, list) {
        return this.foldr(
            function(accum, elt) {
                accum[func(elt)] = elt;
                return accum;
            },
            list, {}
        );
    }

};
