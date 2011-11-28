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

//
// Build namespace
//
var net = net || {};
net.dushin = net.dushin || {};
net.dushin.test = net.dushin.test || {};

//
// Create the test suite
//
net.dushin.test.suite = new YAHOO.tool.TestSuite("net.dushin.foundation Test Suite");
net.dushin.test.Assert = YAHOO.util.Assert;
net.dushin.test.Assert.isSameList = function(l1, l2) {
    if (l1.length !== l2.length) {
        net.dushin.test.Assert.fail();
    }
    for (var i = 0;  i < l1.length;  ++i) {
        if (l1[i] !== l2[i]) {
            net.dushin.test.Assert.fail();
        }
    }
    return true;
}

//
// A function to add tests.  All the unit test modules will call this function
//
net.dushin.test.addTest = function(unit) {
    var test = new YAHOO.tool.TestCase(unit);
    net.dushin.test.suite.add(test);
}

//
// Display the results when the DOM is done
//
YAHOO.util.Event.onDOMReady(
    function () {
        var logger = new YAHOO.tool.TestLogger("testLogger");
        YAHOO.tool.TestRunner.add(net.dushin.test.suite);
        YAHOO.tool.TestRunner.run();
    }
);
