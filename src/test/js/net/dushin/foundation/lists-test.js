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


net.dushin.test.addTest(
    {
        name: "lists-test",
        
        testMap : function () {
            net.dushin.test.Assert.isSameList(
                net.dushin.foundation.Lists.map(
                    function(e) {
                        return 2*e;
                    },
                    []
                ),
                []
            );
            net.dushin.test.Assert.isSameList(
                net.dushin.foundation.Lists.map(
                    function(e) {
                        return 2*e;
                    },
                    [1, 2, 3]
                ),
                [2, 4, 6]
            );
        },
        
        testFilter : function () {
            net.dushin.test.Assert.isSameList(
                net.dushin.foundation.Lists.filter(
                    function(e) {
                        return (2 % e) === 0;
                    },
                    []
                ),
                []
            );
            net.dushin.test.Assert.isSameList(
                net.dushin.foundation.Lists.filter(
                    function(e) {
                        return (2 % e) === 0;
                    },
                    [2, 3]
                ),
                [2]
            );
        },
        
        testFilterMap : function () {
            net.dushin.test.Assert.isSameList(
                net.dushin.foundation.Lists.filterMap(
                    function(e) {
                        if ((2 % e) === 0) {
                            return e
                        }
                        return null;
                    },
                    []
                ),
                []
            );
            net.dushin.test.Assert.isSameList(
                net.dushin.foundation.Lists.filterMap(
                    function(e) {
                        if ((2 % e) === 0) {
                            return e
                        }
                        return null;
                    },
                    [2, 3]
                ),
                [2]
            );
        },
        
        testFoldL : function () {
            net.dushin.test.Assert.areSame(
                net.dushin.foundation.Lists.foldl(
                    function(accum, e) {
                        return accum + e;
                    },
                    [], ""
                ),
                ""
            );
            net.dushin.test.Assert.isSameList(
                net.dushin.foundation.Lists.foldl(
                    function(accum, e) {
                        return accum + e;
                    },
                    [1, 2, 3], ""
                ),
                "321"
            );
        },
        
        testFoldR : function () {
            net.dushin.test.Assert.areSame(
                net.dushin.foundation.Lists.foldl(
                    function(accum, e) {
                        return accum + e;
                    },
                    [], ""
                ),
                ""
            );
            net.dushin.test.Assert.areSame(
                net.dushin.foundation.Lists.foldr(
                    function(accum, e) {
                        return accum + e;
                    },
                    [1, 2, 3], ""
                ),
                "123"
            );
        },
        
        testApply : function () {
            var accum = 0;
            net.dushin.foundation.Lists.apply(
                function(e) {
                    return accum += e;
                },
                []
            );
            net.dushin.test.Assert.areSame(accum, 0);
            
            net.dushin.foundation.Lists.apply(
                function(e) {
                    return accum += e;
                },
                [1, 2, 3]
            );
            net.dushin.test.Assert.areSame(accum, 6);
        },
        
        testApplyAsync : function () {
            var accum = 0;
            net.dushin.foundation.Lists.apply(
                function(e) {
                    return accum += e;
                },
                []
            );
            this.wait(
                function() {
                    net.dushin.test.Assert.areSame(accum, 0);
                },
                100
            );
            
            var accum = 0;
            net.dushin.foundation.Lists.applyAsync(
                function(e) {
                    return accum += e;
                },
                [1, 2, 3]
            );
            this.wait(
                function() {
                    net.dushin.test.Assert.areSame(accum, 6);
                },
                100
            );
        },
        
        testContains : function () {
            net.dushin.test.Assert.isFalse(
                net.dushin.foundation.Lists.contains(5, [])
            );
            net.dushin.test.Assert.isFalse(
                net.dushin.foundation.Lists.contains(5, [1, 2, 3])
            );
            net.dushin.test.Assert.isTrue(
                net.dushin.foundation.Lists.contains(1, [1, 2, 3])
            );
            net.dushin.test.Assert.isTrue(
                net.dushin.foundation.Lists.contains(2, [1, 2, 3])
            );
            net.dushin.test.Assert.isTrue(
                net.dushin.foundation.Lists.contains(3, [1, 2, 3])
            );
            net.dushin.test.Assert.isFalse(
                net.dushin.foundation.Lists.contains("3", [1, 2, 3])
            );
        },
        
        testFind: function() {
            net.dushin.test.Assert.areSame(
                net.dushin.foundation.Lists.find(
                    function(e) {
                        if (e === 2) {
                            return true;
                        }
                    },
                    [1, 2, 3]
                ),
                2
            );
            net.dushin.test.Assert.isNull(
                net.dushin.foundation.Lists.find(
                    function(e) {
                        if (e === 5) {
                            return true;
                        }
                    },
                    [1, 2, 3]
                ),
                2
            );
        },
        
        testMapFirst: function() {
            net.dushin.test.Assert.areSame(
                net.dushin.foundation.Lists.mapFirst(
                    function(e) {
                        if (e === 2) {
                            return -1;
                        }
                    },
                    [1, 2, 3]
                ),
                -1
            );
            net.dushin.test.Assert.isNull(
                net.dushin.foundation.Lists.mapFirst(
                    function(e) {
                        if (e === 5) {
                            return -1;
                        }
                    },
                    [1, 2, 3]
                ),
                2
            );
        },
        
        testIndexOf: function() {
            net.dushin.test.Assert.areSame(
                net.dushin.foundation.Lists.indexOf(
                    function(e) {
                        if (e === 2) {
                            return true;
                        }
                    },
                    [1, 2, 3]
                ),
                1
            );
            net.dushin.test.Assert.areSame(
                net.dushin.foundation.Lists.indexOf(
                    function(e) {
                        if (e === 5) {
                            return true;
                        }
                    },
                    [1, 2, 3]
                ),
                -1
            );
        },
        
        testAny: function() {
            net.dushin.test.Assert.isTrue(
                net.dushin.foundation.Lists.any(
                    function(e) {
                        if (e === 2) {
                            return true;
                        }
                    },
                    [1, 2, 3]
                )
            );
            net.dushin.test.Assert.isFalse(
                net.dushin.foundation.Lists.any(
                    function(e) {
                        if (e === 5) {
                            return true;
                        }
                    },
                    [1, 2, 3]
                )
            );
        },
        
        testAll: function() {
            net.dushin.test.Assert.isTrue(
                net.dushin.foundation.Lists.all(
                    function(e) {
                        return true;
                    },
                    [1, 2, 3]
                )
            );
            net.dushin.test.Assert.isFalse(
                net.dushin.foundation.Lists.all(
                    function(e) {
                        return e === 2;
                    },
                    [1, 2, 3]
                )
            );
        },
        
        testCreateMap: function() {
            var map = net.dushin.foundation.Lists.createMap(
                function(e) {
                    return '_' + e;
                },
                [1, 2, 3]
            );
            net.dushin.test.Assert.areSame(map._1, 1);
            net.dushin.test.Assert.areSame(map._2, 2);
            net.dushin.test.Assert.areSame(map._3, 3);
        }
    }
);
