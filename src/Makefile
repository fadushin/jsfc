#!/bin/sh
# 
# Copyright (c) dushin.net
# All rights reserved.
# 
# Redistribution and use in source and binary forms, with or without
# modification, are permitted provided that the following conditions are met:
#     * Redistributions of source code must retain the above copyright
#       notice, this list of conditions and the following disclaimer.
#     * Redistributions in binary form must reproduce the above copyright
#       notice, this list of conditions and the following disclaimer in the
#       documentation and/or other materials provided with the distribution.
#     * Neither the name of dushin.net nor the
#       names of its contributors may be used to endorse or promote products
#       derived from this software without specific prior written permission.
# 
# THIS SOFTWARE IS PROVIDED BY dushin.net ``AS IS'' AND ANY
# EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
# WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
# DISCLAIMED. IN NO EVENT SHALL dushin.net BE LIABLE FOR ANY
# DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
# (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
# LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
# ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
# (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
# SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
# 

MAJOR=1
MINOR=0
PATCH=0
RELEASE=

VERSION=${MAJOR}.${MINOR}.${PATCH}${RELEASE}

all: minify

minify: catenate
	/opt/yuicompressor/bin/yuicompressor -o target/net.dushin.foundation-${VERSION}.js target/tmp.js

catenate: clean target
	cat main/js/net/dushin/foundation/namespace.js \
        | sed 's/MAJOR_VERSION/${MAJOR}/g' \
        | sed 's/MINOR_VERSION/${MINOR}/g' \
        | sed 's/PATCH_VERSION/${PATCH}/g' \
        | sed 's/RELEASE_VERSION/\"${RELEASE}\"/g' \
        >> target/tmp.js
	cat main/js/net/dushin/foundation/exception.js >> target/tmp.js
	cat main/js/net/dushin/foundation/async.js >> target/tmp.js
	cat main/js/net/dushin/foundation/lists.js >> target/tmp.js

target:
	mkdir target

clean:
	rm -rf target/*
