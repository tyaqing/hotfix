"use strict"; (function () { function a(g, h) { return new Promise(function (i, j) { var k = plus.downloader.createDownload(g, { filename: "_doc/update/" }, function (l, m) { 200 == m ? (console.log("\u4E0B\u8F7D\u6587\u4EF6\u6210\u529F\uFF1A" + l.filename), i(l.filename)) : (console.log("\u4E0B\u8F7D\u6587\u4EF6\u5931\u8D25\uFF01"), j("\u4E0B\u8F7D\u6587\u4EF6\u5931\u8D25\uFF01")) }); k.addEventListener("statechanged", function (l) { h(Number.parseInt(100 * (l.downloadedSize / l.totalSize))) }), k.start() }) } function b(g) { return console.log(g), new Promise(function (h, i) { plus.runtime.install(g, { force: !0 }, function () { h() }, function (j) { return i(j, "installWgt") }) }) } function c(g, h) { return new Promise(function (i) { var k = new XMLHttpRequest; k.open("post", g, !0), k.setRequestHeader("content-type", "application/json"), k.send(JSON.stringify(h)), k.onreadystatechange = function () { 4 == k.readyState && (200 <= k.status && 300 > k.status ? i(JSON.parse(k.responseText)) : console.log(k)) } }) } function e() { return new Promise(function (g) { plus.runtime.getProperty(plus.runtime.appid, function (h) { g(h) }) }) } window.hotfix = function f(_ref) { var g = _ref.url, h = _ref.success, i = _ref.error, j = _ref.before, k = _ref.onProgress; if (!(g && "string" == typeof g)) throw "url \u5FC5\u987B\u586B\u5199 \u7C7B\u578B\u4E3Astring"; if (!(h && "function" == typeof h)) throw "success\u5FC5\u987B\u586B\u5199 \u7C7B\u578B\u4E3Afunction"; if (!(j && "function" == typeof j)) throw "before\u5FC5\u987B\u586B\u5199 \u7C7B\u578B\u4E3Afunction"; k || (k = function onProgress() { }), i || (i = function error() { }); var l; e().then(function (m) { return console.log(m), console.log(plus.runtime.version), c(g, { version: m.version, os: plus.os, device: plus.device }) }).then(function (m) { return l = m, j(l) }).then(function () { return a(l.android_url, k) }).then(function (m) { return b(m) }).then(function () { h() }).catch(i) } })();