// ==UserScript==
// @name         Page to M4B
// @namespace    https://page-to-m4b.viettr.work/
// @version      0.1.0
// @author       Viet Trinh
// @description  Convert audiobook pages to chaptered .m4b files, entirely in your browser.
// @license      MIT
// @icon         https://page-to-m4b.viettr.work/favicon.ico
// @homepageURL  https://github.com/trinhquocviet/page-to-m4b-userscript
// @supportURL   https://github.com/trinhquocviet/page-to-m4b-userscript/issues
// @downloadURL  https://github.com/trinhquocviet/page-to-m4b-userscript/releases/latest/download/page-to-m4b.user.js
// @updateURL    https://github.com/trinhquocviet/page-to-m4b-userscript/releases/latest/download/page-to-m4b.user.js
// @match        https://radiosach.com/sach/*
// @match        https://radiongontinh.com/sach/*
// @match        https://audioaz.com/audiobook/*
// @match        https://audioaz.com/*/audiobook/*
// @match        https://audioaz.com/archive/*
// @match        https://audioaz.com/*/archive/*
// @match        https://www.audioaz.com/audiobook/*
// @match        https://www.audioaz.com/*/audiobook/*
// @match        https://www.audioaz.com/archive/*
// @match        https://www.audioaz.com/*/archive/*
// @match        https://dilib.vn/*
// @match        https://thuviensachnoi.vn/*
// @match        https://page-to-m4b.viettr.work/*
// @match        https://*.workers.dev/*
// @connect      self
// @connect      archive.org
// @connect      *.archive.org
// @connect      audioaz.com
// @connect      *.audioaz.com
// @connect      radiosach.com
// @connect      radiongontinh.com
// @connect      audio.radiongontinh.com
// @connect      truyenfullaudio.com
// @connect      dilib.vn
// @connect      thuviensachnoi.vn
// @connect      cdn.jsdelivr.net
// @connect      unpkg.com
// @connect      page-to-m4b.viettr.work
// @connect      *.workers.dev
// @grant        GM_addStyle
// @grant        GM_addValueChangeListener
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_openInTab
// @grant        GM_registerMenuCommand
// @grant        GM_removeValueChangeListener
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @grant        window.onurlchange
// @run-at       document-idle
// @noframes
// ==/UserScript==

(function(){"use strict";var e=new Set;(async t=>{e.has(t)||(e.add(t),(e=>{if(typeof window<`u`){window.__PTM_USERSCRIPT_STYLES__=(window.__PTM_USERSCRIPT_STYLES__||``)+e;let t=document.getElementById(`ptm-root`)?.shadowRoot;if(t){let n=document.createElement(`style`);n.textContent=e,t.appendChild(n)}}})(t))})(` :root, :host, .x1kcy8kv {
  --x13qitw9: ptmPopIn .25s cubic-bezier(.16,1,.3,1);
  --xvzgayk: ptmPulse 2s cubic-bezier(.4, 0, .6, 1) infinite;
  --x12tr9s5: ptmSpin 1.5s linear infinite;
  --x1c1y6s8: ptmBounce 1.2s ease-in-out infinite;
}

:root, :host, .xjgaeny {
  --x16f6zum: 6px;
  --x1s9uc6g: 8px;
  --x1l9jsdh: 12px;
  --xrbb3qp: 16px;
  --x1ouc3yc: 9999px;
}

:root, :host, .x1hbibtq {
  --x1ggfh54: 0 8px 32px #0000002e, 0 2px 8px #00000014;
  --x5e3ph: 0 4px 16px #0000001f, 0 1px 4px #0000000f;
  --x11o1thc: 0 6px 20px #00000029, 0 2px 6px #00000014;
  --x1fspya5: 0 1px 2px #0000000d;
}

:root, :host, .xrykvr1 {
  --xlxsxi9: #0095f6;
  --xxvtzw7: #1877f2;
  --x17oqmi2: #fff;
  --x1f5jwoa: #f0f2f5;
  --xjaiu94: #fafafa;
  --x94sx00: #efefef;
  --xh5toc9: #262626;
  --xj31vit: #737373;
  --x1ahu1n0: #dbdbdb;
  --xo6tw4y: #0000001a;
  --x1oc0tke: #ed4956;
}

.x1iwkndl:not(#\\#) {
  padding: 12px 16px;
}

.x1tamke2:not(#\\#) {
  padding: 16px;
}

.x1rbdj2j:not(#\\#) {
  padding: 2px 10px;
}

.xztvwtv:not(#\\#) {
  padding: 4px 0;
}

.xfawy5m:not(#\\#) {
  padding: 4px;
}

.x1ib1h6n:not(#\\#) {
  padding: 8px 0;
}

.xe8ttls:not(#\\#) {
  padding: 8px;
}

.x17kgx2u:not(#\\#):not(#\\#) {
  border-color: #ed49564d;
}

.xt9qghg:not(#\\#):not(#\\#) {
  border-color: var(--x1ahu1n0);
}

.x1je4h4x:not(#\\#):not(#\\#) {
  border-color: var(--xo6tw4y);
}

.x16s7zt2:not(#\\#):not(#\\#) {
  border-radius: var(--x1ouc3yc);
}

.xx4f8i8:not(#\\#):not(#\\#) {
  border-radius: var(--x1s9uc6g);
}

.xd1tfsb:not(#\\#):not(#\\#) {
  border-radius: var(--xrbb3qp);
}

.xng3xce:not(#\\#):not(#\\#) {
  border-style: none;
}

.x1y0btm7:not(#\\#):not(#\\#) {
  border-style: solid;
}

.xc342km:not(#\\#):not(#\\#) {
  border-width: 0;
}

.xvndefy:not(#\\#):not(#\\#) {
  border-width: 1.5px;
}

.xmkeg23:not(#\\#):not(#\\#) {
  border-width: 1px;
}

.x98rzlu:not(#\\#):not(#\\#) {
  flex: 1;
}

.x883omv:not(#\\#):not(#\\#) {
  gap: 10px;
}

.x1v2ro7d:not(#\\#):not(#\\#) {
  gap: 12px;
}

.x1af02g3:not(#\\#):not(#\\#) {
  gap: 14px;
}

.xou54vl:not(#\\#):not(#\\#) {
  gap: 16px;
}

.x195vfkc:not(#\\#):not(#\\#) {
  gap: 2px;
}

.x1jnr06f:not(#\\#):not(#\\#) {
  gap: 4px;
}

.x17d4w8g:not(#\\#):not(#\\#) {
  gap: 6px;
}

.x167g77z:not(#\\#):not(#\\#) {
  gap: 8px;
}

.x1a2a7pz:not(#\\#):not(#\\#) {
  outline: none;
}

.xb3r6kr:not(#\\#):not(#\\#) {
  overflow: hidden;
}

.x19eei9o:not(#\\#):not(#\\#) {
  transition: all .15s;
}

.x169l3ba:not(#\\#):not(#\\#) {
  transition: all .2s;
}

.x1aq93mo:not(#\\#):not(#\\#) {
  transition: border-color .15s;
}

.xqwt36l:not(#\\#):not(#\\#) {
  transition: width .2s ease-out;
}

.x1r3je1n:focus:not(#\\#):not(#\\#) {
  border-color: var(--xlxsxi9);
}

.x6s0dn4:not(#\\#):not(#\\#):not(#\\#) {
  align-items: center;
}

.x1844x9g:not(#\\#):not(#\\#):not(#\\#) {
  animation-name: var(--x12tr9s5);
}

.x1qypyxg:not(#\\#):not(#\\#):not(#\\#) {
  animation-name: var(--x13qitw9);
}

.xl10e8r:not(#\\#):not(#\\#):not(#\\#) {
  animation-name: var(--xvzgayk);
}

.x8pteex:not(#\\#):not(#\\#):not(#\\#) {
  background-color: #2ecc71;
}

.xoutha2:not(#\\#):not(#\\#):not(#\\#) {
  background-color: #ed49561a;
}

.xfe0fsp:not(#\\#):not(#\\#):not(#\\#) {
  background-color: #2ecc711f;
}

.xjbqb8w:not(#\\#):not(#\\#):not(#\\#) {
  background-color: #0000;
}

.xlmwth5:not(#\\#):not(#\\#):not(#\\#) {
  background-color: var(--x17oqmi2);
}

.xfh87tc:not(#\\#):not(#\\#):not(#\\#) {
  background-color: var(--x1ahu1n0);
}

.x7enzk4:not(#\\#):not(#\\#):not(#\\#) {
  background-color: var(--x1f5jwoa);
}

.x1717ss6:not(#\\#):not(#\\#):not(#\\#) {
  background-color: var(--x94sx00);
}

.x7oc22b:not(#\\#):not(#\\#):not(#\\#) {
  background-color: var(--xjaiu94);
}

.x16b7qwg:not(#\\#):not(#\\#):not(#\\#) {
  background-color: var(--xlxsxi9);
}

.xskilf4:not(#\\#):not(#\\#):not(#\\#) {
  box-shadow: var(--x1fspya5);
}

.x1u68hoc:not(#\\#):not(#\\#):not(#\\#) {
  box-shadow: var(--x1ggfh54);
}

.x1jhl81p:not(#\\#):not(#\\#):not(#\\#) {
  box-shadow: var(--x5e3ph);
}

.x9f619:not(#\\#):not(#\\#):not(#\\#) {
  box-sizing: border-box;
}

.xiolwv5:not(#\\#):not(#\\#):not(#\\#) {
  color: #2ecc71;
}

.x1svgk49:not(#\\#):not(#\\#):not(#\\#) {
  color: #8e8e8e;
}

.x1f7m26b:not(#\\#):not(#\\#):not(#\\#) {
  color: #fff;
}

.x6q7mgy:not(#\\#):not(#\\#):not(#\\#) {
  color: var(--x1oc0tke);
}

.xapedy8:not(#\\#):not(#\\#):not(#\\#) {
  color: var(--xh5toc9);
}

.x137kbjm:not(#\\#):not(#\\#):not(#\\#) {
  color: var(--xj31vit);
}

.xiruocy:not(#\\#):not(#\\#):not(#\\#) {
  color: var(--xlxsxi9);
}

.x1ypdohk:not(#\\#):not(#\\#):not(#\\#) {
  cursor: pointer;
}

.x78zum5:not(#\\#):not(#\\#):not(#\\#) {
  display: flex;
}

.x1rg5ohu:not(#\\#):not(#\\#):not(#\\#) {
  display: inline-block;
}

.x3nfvp2:not(#\\#):not(#\\#):not(#\\#) {
  display: inline-flex;
}

.xdt5ytf:not(#\\#):not(#\\#):not(#\\#) {
  flex-direction: column;
}

.x2lah0s:not(#\\#):not(#\\#):not(#\\#) {
  flex-shrink: 0;
}

.x1j6dyjg:not(#\\#):not(#\\#):not(#\\#) {
  font-size: 11px;
}

.xfifm61:not(#\\#):not(#\\#):not(#\\#) {
  font-size: 12px;
}

.x4z9k3i:not(#\\#):not(#\\#):not(#\\#) {
  font-size: 13px;
}

.xif65rj:not(#\\#):not(#\\#):not(#\\#) {
  font-size: 14px;
}

.x1jvydc1:not(#\\#):not(#\\#):not(#\\#) {
  font-size: 15px;
}

.x1j61zf2:not(#\\#):not(#\\#):not(#\\#) {
  font-size: 16px;
}

.xqozcyj:not(#\\#):not(#\\#):not(#\\#) {
  font-size: 36px;
}

.xk50ysn:not(#\\#):not(#\\#):not(#\\#) {
  font-weight: 500;
}

.x1s688f:not(#\\#):not(#\\#):not(#\\#) {
  font-weight: 600;
}

.x1xlr1w8:not(#\\#):not(#\\#):not(#\\#) {
  font-weight: 700;
}

.xl56j7k:not(#\\#):not(#\\#):not(#\\#) {
  justify-content: center;
}

.x1qughib:not(#\\#):not(#\\#):not(#\\#) {
  justify-content: space-between;
}

.x72az59:not(#\\#):not(#\\#):not(#\\#) {
  letter-spacing: -.02em;
}

.x132q4wb:not(#\\#):not(#\\#):not(#\\#) {
  line-height: 1.25;
}

.x37zpob:not(#\\#):not(#\\#):not(#\\#) {
  line-height: 1.4;
}

.x1evy7pa:not(#\\#):not(#\\#):not(#\\#) {
  line-height: 1.5;
}

.xo5v014:not(#\\#):not(#\\#):not(#\\#) {
  line-height: 1;
}

.xl1xv1r:not(#\\#):not(#\\#):not(#\\#) {
  object-fit: cover;
}

.x18km98s:not(#\\#):not(#\\#):not(#\\#) {
  opacity: .75;
}

.x10l6tqk:not(#\\#):not(#\\#):not(#\\#) {
  position: absolute;
}

.xixxii4:not(#\\#):not(#\\#):not(#\\#) {
  position: fixed;
}

.x1n2onr6:not(#\\#):not(#\\#):not(#\\#) {
  position: relative;
}

.xuwekrw:not(#\\#):not(#\\#):not(#\\#) {
  stroke: var(--x1ahu1n0);
}

.xb6vt1d:not(#\\#):not(#\\#):not(#\\#) {
  stroke: var(--xlxsxi9);
}

.x2b8uid:not(#\\#):not(#\\#):not(#\\#) {
  text-align: center;
}

.xlyipyv:not(#\\#):not(#\\#):not(#\\#) {
  text-overflow: ellipsis;
}

.x3oybdh:not(#\\#):not(#\\#):not(#\\#) {
  transform: scale(1);
}

.x87ps6o:not(#\\#):not(#\\#):not(#\\#) {
  -webkit-user-select: none;
  user-select: none;
}

.xuxw1ft:not(#\\#):not(#\\#):not(#\\#) {
  white-space: nowrap;
}

.x13faqbe:not(#\\#):not(#\\#):not(#\\#) {
  word-break: break-word;
}

.x10ju6z4:not(#\\#):not(#\\#):not(#\\#) {
  z-index: 2147483647;
}

.x1tscgq8:hover:not(#\\#):not(#\\#):not(#\\#) {
  background-color: #ed495626;
}

.xb8enhk:hover:not(#\\#):not(#\\#):not(#\\#) {
  background-color: var(--x1ahu1n0);
}

.xezg9lt:hover:not(#\\#):not(#\\#):not(#\\#) {
  background-color: var(--x1f5jwoa);
}

.xvwpaob:hover:not(#\\#):not(#\\#):not(#\\#) {
  background-color: var(--xxvtzw7);
}

.xi2c8kh:hover:not(#\\#):not(#\\#):not(#\\#) {
  box-shadow: var(--x11o1thc);
}

.xltycfy:hover:not(#\\#):not(#\\#):not(#\\#) {
  color: var(--xh5toc9);
}

.xp695gr:hover:not(#\\#):not(#\\#):not(#\\#) {
  transform: scale(1.03);
}

.x1wvfbt0:active:not(#\\#):not(#\\#):not(#\\#) {
  background-color: #0081d6;
}

.x1519m0n:active:not(#\\#):not(#\\#):not(#\\#) {
  background-color: #d0d0d0;
}

.xd3so5o:active:not(#\\#):not(#\\#):not(#\\#) {
  transform: scale(.97);
}

.xk4oym4:active:not(#\\#):not(#\\#):not(#\\#) {
  transform: scale(.98);
}

.x1n3tmrz:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  border-bottom-color: var(--xo6tw4y);
}

.x1q0q8m5:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  border-bottom-style: solid;
}

.xso031l:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  border-bottom-width: 1px;
}

.xktcqqr:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  border-top-color: var(--x1ahu1n0);
}

.x13fuv20:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  border-top-style: solid;
}

.x178xt8z:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  border-top-width: 1px;
}

.xjnlgov:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  bottom: 20px;
}

.x5yr21d:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  height: 100%;
}

.x170jfvy:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  height: 10px;
}

.x1b51vyi:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  height: 180px;
}

.x1qx5ct2:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  height: 20px;
}

.xd7y6wv:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  height: 26px;
}

.x10w6t97:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  height: 32px;
}

.xc9qbxq:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  height: 36px;
}

.x5kalc8:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  height: 42px;
}

.xn3w4p2:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  height: 44px;
}

.xsdox4t:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  height: 48px;
}

.xnnlda6:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  height: 56px;
}

.xdk7pt:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  height: 8px;
}

.xt7dq6l:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  height: auto;
}

.x1e56ztr:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  margin-bottom: 8px;
}

.xr9ek0c:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  margin-top: 2px;
}

.x1gslohp:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  margin-top: 4px;
}

.x1xmf6yo:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  margin-top: 8px;
}

.xctk3hg:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  max-height: 160px;
}

.xb88tzc:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  max-height: calc(100vh - 40px);
}

.x1jkqq1h:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  max-width: 280px;
}

.xw7nakj:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  max-width: calc(100vw - 32px);
}

.x2lwn1j:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  min-height: 0;
}

.xeuugli:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  min-width: 0;
}

.x1odjw0f:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  overflow-y: auto;
}

.xq1608w:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  padding-bottom: 36px;
}

.xwib8y2:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  padding-bottom: 8px;
}

.xf18ygs:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  padding-left: 12px;
}

.xnm25rq:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  padding-left: 16px;
}

.x1k8dnhd:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  padding-left: 18px;
}

.x5tiur9:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  padding-left: 20px;
}

.x163pfp:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  padding-left: 8px;
}

.xcicffo:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  padding-right: 10px;
}

.xnuq7ks:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  padding-right: 12px;
}

.xyfqnmn:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  padding-right: 16px;
}

.x1s7jvk7:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  padding-right: 20px;
}

.xy13l1i:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  padding-right: 8px;
}

.x1nn3v0j:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  padding-top: 2px;
}

.xijc0j3:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  padding-top: 36px;
}

.x1y1aw1k:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  padding-top: 8px;
}

.xk6ci0l:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  right: 20px;
}

.xh8yej3:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  width: 100%;
}

.x1fsd2vl:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  width: 10px;
}

.xzjbwwf:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  width: 180px;
}

.xw4jnvo:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  width: 20px;
}

.x23j0i4:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  width: 26px;
}

.x1td3qas:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  width: 32px;
}

.xxsgkw5:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  width: 350px;
}

.x14qfxbe:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  width: 36px;
}

.x1useyqa:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  width: 48px;
}

.x15yg21f:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  width: 56px;
}

.x1xc55vz:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  width: 8px;
}

.xeq5yr9:not(#\\#):not(#\\#):not(#\\#):not(#\\#) {
  width: fit-content;
} `);var t=Object.create,n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,a=Object.getPrototypeOf,o=Object.prototype.hasOwnProperty,s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,t,a,s)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var c=i(t),l=0,u=c.length,d;l<u;l++)d=c[l],!o.call(e,d)&&d!==a&&n(e,d,{get:(e=>t[e]).bind(null,d),enumerable:!(s=r(t,d))||s.enumerable});return e},l=(e,r,i)=>(i=e==null?{}:t(a(e)),c(r||!e||!e.__esModule||!o.call(e,`default`)?n(i,`default`,{value:e,enumerable:!0}):i,e)),u=[{name:`radiosach`,domains:[`radiosach.com`,`radiongontinh.com`],referer:`https://radiosach.com/`},{name:`dilib`,domains:[`dilib.vn`,`thuviensachnoi.vn`],referer:e=>{try{let t=new URL(e);return`${t.protocol}//${t.host}/`}catch{return`https://dilib.vn/`}}},{name:`audioaz`,domains:[`audioaz.com`],referer:`https://audioaz.com/`}];function d(e,t){let n=e.replace(/^www\./,``).toLowerCase(),r=t.toLowerCase();return n===r||n.endsWith(`.`+r)}var f=e=>e/2**32|0,p=e=>e>>>0;function m(e,t,n,r){let i=f(n),a=p(n);e.setUint32(t,r?a:i,r),e.setUint32(t+4,r?i:a,r)}function h(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name===`Uint8Array`&&`BYTES_PER_ELEMENT`in e&&e.BYTES_PER_ELEMENT===1}var g=e=>e?`"${e}" `:``;function _(e,t=``){if(typeof e!=`number`)throw TypeError(g(t)+`expected number, got `+typeof e);if(!Number.isSafeInteger(e)||e<0)throw RangeError(g(t)+`expected integer >= 0, got `+e);return e}function v(e,t,n=``){if(h(e)&&(t===void 0||e.length===t))return e;t!==void 0&&_(t,`length`);let r=h(e),i=t===void 0?``:` of length ${t}`,a=r?`length=${e.length}`:`type=${typeof e}`,o=g(n)+`expected Uint8Array`+i+`, got `+a;throw r?RangeError(o):TypeError(o)}var y=(e,t)=>{if(typeof e!=`object`||!e||Array.isArray(e))throw TypeError((t===`object`?``:`"${t}" `)+`expected object, got type=`+typeof e)},b=(e,t)=>{y(e,t);let n=Object.getPrototypeOf(e);if(n!==Object.prototype&&n!==null)throw TypeError(`"${t}" expected plain object`);if(Object.hasOwn(e,`__proto__`))throw TypeError(`"${t}.__proto__" is not allowed`)};function x(e,t=!0){if(e.destroyed)throw Error(`hash was destroyed`);if(t&&e.finished)throw Error(`digest() was already called`)}function S(e,t){v(e,void 0,`output`);let n=t.outputLen;if(!(e.length>=n))throw RangeError(`"output" expected length >= `+n)}function C(...e){for(let t=0;t<e.length;t++)e[t].fill(0)}function w(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}function ee(e,t){return e<<t|e>>>32-t>>>0}function te(e,t,n=`opts`){return b(e,`defaults`),t!==void 0&&b(t,n),Object.assign(Object.create(null),e,t)}function T(e,t={}){if(typeof e!=`function`)throw TypeError(`"hashCons" expected function, got type=`+typeof e);t=te({},t,`info`);let n=(t,n)=>e(n).update(t).digest(),r=e(void 0);return n.outputLen=r.outputLen,n.blockLen=r.blockLen,n.canXOF=r.canXOF,n.create=t=>e(t),Object.assign(n,t),Object.freeze(n)}function E(e,t,n){return e&t^~e&n}var D=class{blockLen;outputLen;canXOF=!1;padOffset;isLE;buffer;view;finished=!1;length=0;pos=0;destroyed=!1;constructor(e,t,n,r){this.blockLen=e,this.outputLen=t,this.padOffset=n,this.isLE=r,this.buffer=new Uint8Array(e),this.view=w(this.buffer)}update(e){x(this),v(e);let{view:t,buffer:n,blockLen:r}=this,i=e.length,a=!1;for(let o=0;o<i;){let s=Math.min(r-this.pos,i-o);if(s===r){let t=w(e);for(;r<=i-o;o+=r)this.process(t,o);a=!0;continue}n.set(o===0&&s===i?e:e.subarray(o,o+s),this.pos),this.pos+=s,o+=s,this.pos===r&&(this.process(t,0),this.pos=0,a=!0)}return this.length+=e.length,a&&this.roundClean(),this}digestInto(e){x(this),S(e,this),this.finished=!0;let{buffer:t,view:n,blockLen:r,isLE:i}=this,{pos:a}=this;t[a++]=128,t.fill(0,a),this.padOffset>r-a&&(this.process(n,0),t.fill(0)),m(n,r-8,this.length*8,i),this.process(n,0),this.roundClean();let o=e===t?n:w(e),s=this.outputLen,c=s/4,l=this.get();if(s%4||c>l.length)throw Error(`invalid outputLen`);for(let e=0;e<c;e++)o.setUint32(4*e,l[e],i)}digest(){let{buffer:e,outputLen:t}=this;this.digestInto(e);let n=e.slice(0,t);return this.destroy(),n}_cloneIntoMeta(e){let{buffer:t,length:n,finished:r,destroyed:i,pos:a}=this;return e.destroyed=i,e.finished=r,e.length=n,e.pos=a,a&&e.buffer.set(t),e}clone(){return this._cloneInto()}},O=Uint32Array.from([1732584193,4023233417,2562383102,271733878,3285377520]),ne=2**32,re=Array.from({length:64},(e,t)=>Math.floor(ne*Math.abs(Math.sin(t+1)))),ie=O.slice(0,4),ae=new Uint32Array(16),oe=(()=>{let e=[[7,12,17,22],[5,9,14,20],[4,11,16,23],[6,10,15,21]];return Uint8Array.from({length:64},(t,n)=>e[Math.floor(n/16)][n%4])})(),se=class extends D{A=ie[0]|0;B=ie[1]|0;C=ie[2]|0;D=ie[3]|0;constructor(){super(64,16,8,!0)}get(){let{A:e,B:t,C:n,D:r}=this;return[e,t,n,r]}set(e,t,n,r){this.A=e|0,this.B=t|0,this.C=n|0,this.D=r|0}_cloneInto(e){return(e||=new this.constructor).set(...this.get()),this._cloneIntoMeta(e)}process(e,t){for(let n=0;n<16;n++,t+=4)ae[n]=e.getUint32(t,!0);let{A:n,B:r,C:i,D:a}=this;for(let e=0;e<64;e++){let t,o;e<16?(t=E(r,i,a),o=e):e<32?(t=E(a,r,i),o=(5*e+1)%16):e<48?(t=r^i^a,o=(3*e+5)%16):(t=i^(r|~a),o=7*e%16),t=t+n+re[e]+ae[o],n=a,a=i,i=r,r+=ee(t,oe[e])}n=n+this.A|0,r=r+this.B|0,i=i+this.C|0,a=a+this.D|0,this.set(n,r,i,a)}roundClean(){C(ae)}destroy(){this.destroyed=!0,this.set(0,0,0,0),C(this.buffer)}},ce=T(()=>new se);function le(e,t,n=32,r=16){let i=new Uint8Array,a=new Uint8Array;for(;i.length<n+r;){let n=ce.create();a.length>0&&n.update(a),n.update(e),n.update(t),a=n.digest();let r=new Uint8Array(i.length+a.length);r.set(i,0),r.set(a,i.length),i=r}return{key:i.subarray(0,n),iv:i.subarray(n,n+r)}}async function ue(e,t){let n=atob(e),r=JSON.parse(n);if(!r.ct||!r.s)throw Error(`Invalid encrypted payload format: missing ct or s`);let i=atob(r.ct),a=new Uint8Array(i.length);for(let e=0;e<i.length;e++)a[e]=i.charCodeAt(e);let o=r.s,s=new Uint8Array(o.length/2);for(let e=0;e<o.length;e+=2)s[e/2]=parseInt(o.substring(e,e+2),16);let{key:c,iv:l}=le(new TextEncoder().encode(t),s,32,16),u=l;if(r.iv){u=new Uint8Array(r.iv.length/2);for(let e=0;e<r.iv.length;e+=2)u[e/2]=parseInt(r.iv.substring(e,e+2),16)}let d=await crypto.subtle.importKey(`raw`,c,{name:`AES-CBC`},!1,[`decrypt`]),f=await crypto.subtle.decrypt({name:`AES-CBC`,iv:u},d,a);return new TextDecoder().decode(f)}var de=u.find(e=>e.name===`radiosach`);function fe(e){let t=e.match(/<meta\s+property="og:title"\s+content="([^"]+)"/i);return(t?t[1]:`Unknown`).replace(/ - Kho Sách Nói Miễn Phí/gi,``).trim()}function pe(e){let t=e.match(/Tác Giả:\s*<a[^>]+>([^<]+)<\/a>/i);return t?t[1].trim():`radiosach.com`}function me(e){let t=e.match(/data-src="(eyJ[^"]+)"/);if(!t)throw Error(`Audio data not found on the page.`);return t[1]}function he(e,t){return e.match(/phần|tập|part/i)?e:`Phần ${t+1} - ${e}`}function ge(e){let t=e.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i);if(!t)return;let n=t[1].trim();try{return new URL(n,`https://radiosach.com/`).href}catch{return n}}async function _e(e){let t=fe(e),n=pe(e),r=me(e),i=ge(e),a=await ue(r,`https://radiosach.com/`);if(!a)throw Error(`Failed to decrypt audio data.`);return{bookTitle:t,bookAuthor:n,audioFiles:JSON.parse(a).map((e,t)=>({title:he(e.title,t),url:e.source})),...i?{coverUrl:i}:{}}}var ve={name:`radiosach`,canHandle(e){try{let t=new URL(e);return!!(de?.domains.some(e=>d(t.hostname,e))&&t.pathname.startsWith(`/sach/`))}catch{return!1}},parse(e){return _e(e)}},ye=u.find(e=>e.name===`dilib`),be=class extends Error{constructor(e){super(`No audiobook found on ${e} (page appears to be ebook-only)`),this.name=`NoAudiobookError`}},xe=e=>e.replace(/&nbsp;/g,` `).replace(/&amp;/g,`&`).replace(/&lt;/g,`<`).replace(/&gt;/g,`>`).replace(/&quot;/g,`"`).replace(/&#0?39;|&apos;/g,`'`).replace(/&#(\d+);/g,(e,t)=>String.fromCodePoint(Number(t))).replace(/&#x([0-9a-f]+);/gi,(e,t)=>String.fromCodePoint(parseInt(t,16))),k=e=>xe(e.replace(/<[^>]*>/g,` `)).replace(/\s+/g,` `).trim();function Se(e,t){let n=xe(e).trim().split(/\s+/)[0];return new URL(n,t).href}function Ce(e){let t=e.match(/<h1[^>]*class="[^"]*fs18[^"]*"[^>]*>([\s\S]*?)<\/h1>/i);if(t)return k(t[1]);let n=e.match(/<meta[^>]+property="og:title"[^>]+content="([^"]*)"/i);if(n)return k(n[1]).replace(/^Sách\s+/i,``).replace(/,\s*Thư Viện Số$/i,``);let r=e.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);return r?k(r[1]):`Unknown`}function we(e){let t=e.match(/<h2[^>]*>\s*Tác giả:\s*([\s\S]*?)<\/h2>/i);if(t)return k(t[1]);let n=e.match(/content="Tác giả:\s*([^.\"]+(?:\.\s?[A-Z]\.)*[^.\"]*)/i);return n?k(n[1]):`Unknown`}function Te(e,t){let n=[],r=e=>{try{let r=Se(e,t);n.includes(r)||n.push(r)}catch{}};for(let t of e.matchAll(/<(?:audio|source)\b[^>]*?\bsrc\s*=\s*"([^"]+)"/gi))r(t[1]);if(n.length===0)for(let t of e.matchAll(/["'(]([^"'()\s<>]+\.(?:mp3|m4a|m4b|aac|ogg|wav)(?:\?[^"'()\s<>]*)?)/gi))r(t[1]);return n}function Ee(e){let t=[];for(let n of e.matchAll(/<div[^>]*id="mucluc\d+"[^>]*onclick="jumptime\('([\d.]+)'\)[^"]*"[^>]*>\s*<div[^>]*>[\s\S]*?<\/div>([\s\S]*?)<\/div>/gi)){let e=k(n[2]),r=Number(n[1]);e&&Number.isFinite(r)&&t.push({title:e,start:r})}return t.sort((e,t)=>e.start-t.start)}function De(e,t){let n=e.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i)||e.match(/<meta\s+itemprop=["']image["']\s+content=["']([^"']+)["']/i);if(!n)return;let r=n[1].trim();try{return new URL(r,t).href}catch{return r}}function Oe(e,t){let n=Te(e,t);if(n.length===0)throw new be(t);let r=Ce(e),i=we(e),a=Ee(e),o=De(e,t);return{bookTitle:r,bookAuthor:i,audioFiles:[{title:r,url:n[0],...a.length>0?{chapters:a}:{}}],...o?{coverUrl:o}:{}}}var ke={name:`dilib`,canHandle(e){try{let t=new URL(e);return!!(ye?.domains.some(e=>d(t.hostname,e))&&/-\d+\.html$/.test(t.pathname))}catch{return!1}},parse(e,t){return Oe(e,t)}},Ae=u.find(e=>e.name===`audioaz`);function je(e){return e.replace(/\\+[nr]/g,` `).replace(/\\+/g,``).replace(/\s+/g,` `).trim()}function Me(e,t){let n=`Unknown`,r=`Unknown`,i=[],a=e.match(/[\\"]item[\\"]:\s*{[^}]*?[\\"]title[\\"]:\s*[\\"]([\s\S]*?)[\\"]/)||e.match(/\\"item\\":{[^}]*?\\"title\\":\\"([\s\S]*?)\\"/)||e.match(/<meta\s+property=["']og:title["']\s+content=["'](?:Nghe\s+)?([^"'-]+?)(?:\s*-\s*Âm thanh|\s*audio)?["']/i);a&&je(a[1])&&(n=je(a[1]));let o=e.match(/\\"author_display\\":\\"([\s\S]*?)\\"/)||e.match(/"author_display":"([\s\S]*?)"/);if(o&&je(o[1]))r=je(o[1]);else{let n=e.match(/https?:\/\/tiki\.vn\/([a-z0-9-]+)/i);if(n){let e=n[1].replace(/-p\d+$/,``);try{let n=new URL(t).pathname.split(`/`).filter(Boolean).pop()?.replace(/^archive-/,``)||``,i=e;n&&e.startsWith(n)&&(i=e.slice(n.length).replace(/^-+/,``)),i&&(r=i.split(`-`).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(` `))}catch{}}}(!r||!r.trim())&&(r=`Unknown`);let s=e.indexOf(`\\"tracks\\":[`);if(s===-1&&(s=e.indexOf(`"tracks":[`)),s!==-1){let t=[...e.slice(s).matchAll(/\{([^{}]*?\\?"audio_url\\?":\s*\\?"[^"\\]+\\?"[^{}]*?)\}/g)];for(let e of t){let t=e[1],r=t.match(/\\?"title\\?":\s*\\?"([\s\S]*?)\\?"/),a=t.match(/\\?"audio_url\\?":\s*\\?"([^"\\]+?)\\?"/);if(a){let e=r?je(r[1]):``,t=a[1].replace(/\\\//g,`/`).replace(/[\r\n]+/g,``).trim();i.push({title:e||`${n} - Track ${i.length+1}`,url:t})}}}if(i.length===0&&[...new Set([...e.matchAll(/(https?:\/\/[^"'<>\\]+?\.(?:mp3|m4a|m4b|aac|ogg|wav)(?:\?[^"'<>\\]*)?)/gi)].map(e=>e[1]))].forEach((e,t)=>{i.push({title:`${n} - Track ${t+1}`,url:e.replace(/\\\//g,`/`).replace(/[\r\n]+/g,``).trim()})}),i.length===0)throw new be(t);let c=i.map(e=>{let t=e.url.match(/(?:^|\/|[^\d])(\d+)\.(?:mp3|m4a|m4b|aac|ogg|wav)(?:\?.*)?$/i);return t?parseInt(t[1],10):null});c.length>1&&c.every(e=>e!==null)?c.some((e,t)=>t>0&&e<c[t-1])&&i.sort((e,t)=>parseInt(e.url.match(/(?:^|\/|[^\d])(\d+)\.[^/]+$/)?.[1]||`0`,10)-parseInt(t.url.match(/(?:^|\/|[^\d])(\d+)\.[^/]+$/)?.[1]||`0`,10)):i.length>1&&i.every(e=>/^\d+$/.test(e.title.trim()))&&i.some((e,t)=>t>0&&parseInt(e.title,10)<parseInt(i[t-1].title,10))&&i.sort((e,t)=>parseInt(e.title,10)-parseInt(t.title,10));let l,u=e.match(/\\"image_url\\":\\"([^"\\]+)\\"/)||e.match(/"image":\s*"([^"]+)"/)||e.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i);return u&&(l=u[1].replace(/\\\//g,`/`).trim()),{bookTitle:n,bookAuthor:r,audioFiles:i,...l?{coverUrl:l}:{}}}var Ne=[ve,ke,{name:`audioaz`,canHandle(e){try{let t=new URL(e);return!!(Ae?.domains.some(e=>d(t.hostname,e))&&/\/(?:audiobook|archive)\//.test(t.pathname))}catch{return!1}},parse(e,t){return Me(e,t)}}];function Pe(e){return Ne.find(t=>t.canHandle(e))}async function Fe(e,t){let n=e||(typeof location<`u`?location.href:``),r=Pe(n);if(!r)throw Error(`Unsupported website URL: ${n}`);let i=t;if(!i){if(typeof document<`u`&&document.documentElement)i=document.documentElement.outerHTML;else if(typeof fetch<`u`&&n)i=await(await fetch(n)).text();else throw Error(`Unable to obtain HTML for extraction`)}return r.parse(i,n)}var A,Ie,j,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke={},qe=[],Je=/^m(i|n|o|s|text|space)$/,Ye=Array.isArray,Xe=qe.slice,M=Object.assign;function Ze(e){e&&e.parentNode&&e.remove()}function Qe(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i||++Ie,__i:-1,__u:0};return!i&&A.vnode&&A.vnode(a),a}function N(e){return e.children}function $e(e,t){this.props=e,this.context=t,this.__g=0}function P(e,t){if(t==null)return e.__?P(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])&&n.__e)return n.__e;return typeof e.type!=`function`||e.props.__P?null:P(e)}function et(e){if((e=e.__)&&e.__c&&!e.props.__P)return e.__e=null,e.__k.some(function(t){return t&&(e.__e=t.__e)}),et(e)}function tt(e){(8&e.__g||!(e.__g|=8)||!j.push(e)||Re++)&&Le==A.debounceRendering||((Le=A.debounceRendering)||queueMicrotask)(nt)}function nt(){var e,t,n,r,i,a,o,s,c;try{for(t=1;j.length;)j.length>t&&j.sort(ze),e=j.shift(),t=j.length,8&e.__g&&(r=void 0,i=void 0,a=(i=(n=e).__v).__e,o=[],s=[],(c=n.__P)&&((r=M({constructor:void 0},i)).__v=i.__v+1,A.vnode&&A.vnode(r),ut(c,r,i,n.__n,c.namespaceURI,32&i.__u?[a]:null,o,a||P(i),32&i.__u,s),r.__v=i.__v,r.__.__k[r.__i]=r,ft(o,r,s),i.__=i.__e=null,r.__e!=a&&et(r)))}finally{j.length=Re=0}}function rt(e,t,n,r,i,a,o,s,c,l,u){var d,f,p,m,h,g,_=r.__k||qe,v=t.length;for(c=it(n,t,_,c,v),d=0;d<v;d++)(p=n.__k[d])!=null&&(f=~p.__i&&_[p.__i]||Ke,p.__i=d,g=ut(e,p,f,i,a,o,s,c,l,u),m=p.__e,p.ref&&(f.ref!=p.ref||8&f.__u)&&(f.ref!=p.ref&&f.ref&&mt(f.ref,null,p),u.push(p.ref,p.__c||m,p)),h||=m,4&p.__u?(c=at(p,c,e,!f.__v),f.__e&&(f.__e=null)):typeof p.type==`function`&&g!==void 0?c=g:m&&(c=m.nextSibling),p.__u&=-7);return n.__e=h,c}function it(e,t,n,r,i){var a,o,s,c,l,u,d,f,p,m,h=n.length,g=h,_=0,v=!1,y=e.__k=Array(i);for(a=0;a<i;a++)(o=t[a])!=null&&typeof o!=`boolean`&&typeof o!=`function`?(typeof o!=`object`||o.constructor==String?o=y[a]=Qe(null,o):Ye(o)?o=y[a]=Qe(N,{children:o}):o.constructor===void 0&&o.__b?o=y[a]=Qe(o.type,o.props,o.key,o.ref,o.__v):y[a]=o,c=a+_,o.__=e,o.__b=e.__b+1,s=null,~(l=o.__i=ot(o,n,c,g))&&(g--,(s=n[l])&&(s.__u|=2)),s&&s.__v?(o.__u|=2,l==c-1?_--:l==c+1?_++:l!=c&&(l>c?_--:_++,v=!0)):(~l||(i>h?_--:i<h&&_++),typeof o.type!=`function`&&(o.__u|=4))):y[a]=null;if(v){for(u=[],d=[],a=0;a<i;a++)if((o=y[a])&&2&o.__u){for(f=0,p=u.length;f<p;)u[m=f+p>>1]<o.__i?f=m+1:p=m;u[f]=o.__i,d[a]=f+1}for(_=u.length;a--;)d[a]&&(d[a]==_?_--:y[a].__u|=4)}if(g)for(a=0;a<h;a++)!(s=n[a])||2&s.__u||(s.__e==r&&(r=P(s)),ht(s,s));return r}function at(e,t,n,r){var i,a;if(typeof e.type==`function`){if(e.props.__P)return t;if(i=e.__k)for(a=0;a<i.length;a++)i[a]&&(i[a].__=e,t=at(i[a],t,n,!1));return t}for(t&&!t.parentNode&&(t=P(e))&&!t.parentNode&&(t=null),e.__e!=t&&(!r&&n.moveBefore&&e.__e.parentNode?n.moveBefore(e.__e,t):n.insertBefore(e.__e,t||null)),t=e.__e;(t&&=t.nextSibling)&&t.nodeType==8;);return t}function ot(e,t,n,r){var i,a,o,s=e.key,c=e.type,l=t[n],u=l&&!(2&l.__u);if(l===null&&s==null||u&&s==l.key&&c==l.type)return n;if(r>+!!u){for(i=n-1,a=n+1;i>=0||a<t.length;)if((l=t[o=i>=0?i--:a++])&&!(2&l.__u)&&s==l.key&&c==l.type)return o}return-1}function st(e,t,n){n??=``,t[0]==`-`?e.setProperty(t,n):e[t]=n}function ct(e,t,n,r,i){var a;n:if(t==`style`){if(typeof n==`string`)e.style.cssText=n;else{if(typeof r==`string`&&(e.style.cssText=r=``),r)for(t in r)n&&t in n||st(e.style,t,``);if(n)for(t in n)r&&n[t]==r[t]||st(e.style,t,n[t])}}else if(t[0]==`o`&&t[1]==`n`)a=t!=(t=t.replace(He,`$1`)),(t=t.slice(2))[0]<`a`&&(t=t.toLowerCase()),(e.__e||={})[t+a]=n,n?r?n[Ve]=r[Ve]:(n[Ve]=Ue,e.addEventListener(t,a?Ge:We,a)):e.removeEventListener(t,a?Ge:We,a);else{if(i==`http://www.w3.org/2000/svg`)t=t.replace(/xlink(H|:h)/,`h`).replace(/sName$/,`s`);else if(t!=`width`&&t!=`height`&&t!=`href`&&t!=`list`&&t!=`form`&&t!=`tabIndex`&&t!=`download`&&t!=`rowSpan`&&t!=`colSpan`&&t!=`role`&&t!=`popover`&&t in e)try{e[t]=n??``;break n}catch{}typeof n==`function`||(n==null||!1===n&&t[4]!=`-`?e.removeAttribute(t):e.setAttribute(t,t==`popover`&&n==1?``:n))}}function lt(e){return function(t){if(this.__e){var n=this.__e[t.type+e];if(t[Be]==null)t[Be]=Ue++;else if(t[Be]<n[Ve])return;return n(A.event?A.event(t):t)}}}function ut(e,t,n,r,i,a,o,s,c,l){var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,ee,te,T,E,D,O=t.type;if(t.constructor!==void 0)return null;if(128&n.__u&&(c=32&n.__u,u=n.__c.__z)){if(t.__u|=c,d=a=[],u.nodeType==8)for(f=1,p=u.nextSibling;p;p=p.nextSibling){if(p.nodeType==8){if(p.data.startsWith(`$s`))f++;else if(p.data.startsWith(`/$s`)&&!--f)break}a.push(p)}else a.push(u);s=a[0]}(u=A.__b)&&u(t);n:if(typeof O==`function`){m=o.length;try{if(y=t.props,b=(u=O.prototype)&&u.render,x=(u=O.contextType)&&r[u.__c],S=u?x?x.props.value:u.__:r,n.__c?2&(h=t.__c=n.__c).__g&&(h.__g|=1):(b?t.__c=h=new O(y,S):(t.__c=h=new $e(y,S),h.constructor=O,h.render=gt),x&&x.sub(h),h.state||(h.state={}),h.__n=r,h.__g|=8,h.__h=[],h.__k=[]),b&&(h.__s||(h.__s=h.state),O.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=M({},h.__s)),M(h.__s,O.getDerivedStateFromProps(y,h.__s)))),g=h.props,_=h.state,h.__v=t,n.__c){if(b&&!O.getDerivedStateFromProps&&y!==g&&h.componentWillReceiveProps&&h.componentWillReceiveProps(y,S),t.__v==n.__v&&!(8&h.__g)||!(4&h.__g)&&h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(y,h.__s,S)){t.__v!=n.__v&&(h.props=y,h.state=h.__s,h.__g&=-9),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(e){e&&(e.__=t)}),qe.push.apply(h.__h,h.__k),h.__k=[],h.__h.length&&o.push(h),s=P(n);break n}h.componentWillUpdate&&h.componentWillUpdate(y,h.__s,S),b&&h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(g,_,v)})}else b&&!O.getDerivedStateFromProps&&h.componentWillMount&&h.componentWillMount(),b&&h.componentDidMount&&h.__h.push(h.componentDidMount);if(h.context=S,h.props=y,h.__P=e,h.__g&=-5,C=A.__r,w=0,b)h.state=h.__s,h.__g&=-9,C&&C(t),u=h.render(h.props,h.state,h.context),qe.push.apply(h.__h,h.__k),h.__k=[];else do h.__g&=-9,C&&C(t),u=h.render(h.props,h.state,h.context),h.state=h.__s;while(8&h.__g&&++w<25);h.state=h.__s,h.getChildContext&&(r=M({},r,h.getChildContext())),b&&n.__c&&h.getSnapshotBeforeUpdate&&(v=h.getSnapshotBeforeUpdate(g,_)),ee=u&&u.type===N&&u.key==null?u.props.children:u,y.__P&&(u=s,i=(e=y.__P).namespaceURI,c=a=null,n.props&&n.props.__P!=e&&(n.__k.some(function(e){e&&ht(e,e)}),n.__k=null),s=n.__k?P(n,0):null),s=rt(e,Ye(ee)?ee:[ee],t,n,r,i,a,o,s,c,l),y.__P&&(t.__e=null,s=u),t.__u&=-161,128&n.__u&&(h.__z=null),d&&d.some(Ze),h.__h.length&&o.push(h),1&h.__g&&(h.__g&=-4)}catch(e){if(o.length=m,t.__v=null,c||a){if(e.then){if(te=0,t.__u|=c?160:128,a){for(E=0;E<a.length;E++)if(D=a[E]){if(D.nodeType==8){if(a[E]=null,D.data.startsWith(`$s`))te++||(T=D);else if(D.data.startsWith(`/$s`)&&!--te){s=D;break}}else te&&(a[E]=null)}}if(!T){for(;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;a&&(a[a.indexOf(s)]=null),T=s}t.__c.__z||(t.__c.__z=T),t.__e=s}else a&&a.some(Ze)}else t.__e=n.__e;t.__k||=n.__k||[],e.then||dt(t),A.__e(e,t,n)}}else s=t.__e=pt(n.__e,t,n,r,i,a,o,c,l,e);return(u=A.diffed)&&u(t),128&t.__u?void 0:s}function dt(e){e&&(e.__c&&(e.__c.__g|=4),e.__k&&e.__k.some(dt))}function ft(e,t,n){for(var r=0;r<n.length;)mt(n[r++],n[r++],n[r++]);A.__c&&A.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){A.__e(e,t.__v)}})}function pt(e,t,n,r,i,a,o,s,c,l){var u,d,f,p,m,h,g,_,v,y=n.props||Ke,b=t.props,x=t.type;if(x==`svg`?i=`http://www.w3.org/2000/svg`:x==`math`?i=`http://www.w3.org/1998/Math/MathML`:i||=`http://www.w3.org/1999/xhtml`,a){for(u=0;u<a.length;u++)if((m=a[u])&&(x?m.localName==x:m.nodeType==3)){e=m,a[u]=null;break}}if(!e){if(_=l.ownerDocument||document,!x)return _.createTextNode(b);e=_.createElementNS(i,x,b.is&&b),s&&=(A.__m&&A.__m(t,a),!1),a=null}if(x){if(l=x==`template`?e.content:e,a=x==`textarea`&&b.defaultValue!=null?null:a&&Xe.call(l.childNodes),!s&&a)for(y={},u=0;u<e.attributes.length;u++)y[(m=e.attributes[u]).name]=m.value;for(u in y)m=y[u],u==`dangerouslySetInnerHTML`?f=m:u==`children`||u in b||u==`value`&&`defaultValue`in b||u==`checked`&&`defaultChecked`in b||ct(e,u,null,m,i);for(u in v=1&n.__u,b)m=b[u],u==`children`?p=m:u==`dangerouslySetInnerHTML`?d=m:u==`value`?h=m:u==`checked`?g=m:s&&typeof m!=`function`||!(y[u]!==m||v&&m!=null)||ct(e,u,m,y[u],i);d?(s||f&&(d.__html==f.__html||d.__html==e.innerHTML)||(e.innerHTML=d.__html),t.__k=[]):(f&&(e.textContent=``),(x==`foreignObject`||i==`http://www.w3.org/1998/Math/MathML`&&Je.test(x))&&(i=`http://www.w3.org/1999/xhtml`),rt(l,Ye(p)?p:[p],t,n,r,i,a,o,a?a[0]:n.__k&&P(n,0),s,c),a&&a.some(Ze)),s&&x!=`textarea`||(u=`value`,x==`progress`&&h==null?e.removeAttribute(u):h==null||h===e[u]&&(x!=`progress`||h)||ct(e,u,h,y[u],i),u=`checked`,g!=null&&g!=e[u]&&ct(e,u,g,y[u],i))}else y===b||s&&e.data==b||(e.data=b);return e}function mt(e,t,n){try{typeof e==`function`?(typeof e.__u==`function`&&e.__u(),(typeof e.__u!=`function`||t)&&(e.__u=e(t))):e.current=t}catch(e){A.__e(e,n)}}function ht(e,t,n){var r,i;if(A.unmount&&A.unmount(e),!(r=e.ref)||r.current&&r.current!=e.__e||mt(r,null,t),r=e.__c){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){A.__e(e,t)}r.__P=r.__n=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&ht(r[i],t,typeof e.type!=`function`||n&&!e.props.__P);(r=e.__e)&&(n||Ze(r),r.__e&&(r.__e=null)),e.__e=e.__c=e.__=null}function gt(e,t,n){return this.constructor(e,n)}function _t(e,t){var n,r,i,a;A.__&&A.__(e,t),t.nodeType==9&&(t=t.documentElement),r=(n=e&&32&e.__u)?null:t.__k,t.__k=Qe(N,{children:[e]}),i=[],a=[],ut(t,t.__k,r||Ke,Ke,t.namespaceURI,r?null:t.firstChild?Xe.call(t.childNodes):null,i,r?r.__e:t.firstChild,n,a),ft(i,t.__k,a),t.__k.props.children=null}A={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!(1&i.__g)){i.__g|=4;try{if((a=i.constructor)&&a.getDerivedStateFromError&&(i.setState(a.getDerivedStateFromError(e)),o=8&i.__g),i.componentDidCatch&&(i.componentDidCatch(e,r||{}),o=8&i.__g),o)return void(i.__g|=2)}catch(t){e=t,o=0}}throw Re=0,e}},Ie=0,$e.prototype.setState=function(e,t){var n=this.__s;n&&n!=this.state||(n=this.__s=M({},this.state)),typeof e==`function`&&(e=e(M({},n),this.props)),e&&(M(n,e),this.__v&&(t&&this.__k.push(t),tt(this)))},$e.prototype.forceUpdate=function(e){this.__v&&(this.__g|=4,e&&this.__h.push(e),tt(this))},$e.prototype.render=N,j=[],Re=0,ze=function(e,t){return e.__v.__b-t.__v.__b},Be=Symbol(),Ve=Symbol(),He=/(PointerCapture)$|Capture$/i,Ue=0,We=lt(!1),Ge=lt(!0);var F,I,vt,yt,bt=Object.is,xt=0,St=[],Ct=[],L=A,wt=L.__b,Tt=L.__r,Et=L.diffed,Dt=L.__c,Ot=L.unmount,kt=L.__;function At(e,t){L.__h&&L.__h(I,e,xt||t),xt=0;var n=I.__H||(I.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function jt(e){return xt=1,Mt(Ut,e)}function Mt(e,t,n){var r=At(F++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Ut(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);bt(t,n)||(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=I,!I.__f)){I.__f=!0;var i=I.shouldComponentUpdate;I.shouldComponentUpdate=function(e,t,n){var r=this.__H;if(!r)return!0;var a=!1,o=this.props!=e;if(r.__.some(function(e){e.__N&&(a=!0,bt(e.__[0],e.__N[0])||(o=!0))}),i){var s=i.call(this,e,t,n);return a?s||o:s}return!a||o}}return r.__}function Nt(e,t){var n=At(F++,3);!L.__s&&Ht(n.__H,t)&&(n.__P=!0,n.__=e,n.u=t,I.__H.__h.push(n))}function Pt(e){return xt=5,Ft(function(){return{current:e}},[])}function Ft(e,t){var n=At(F++,7);return Ht(n.__H,t)&&(n.__=e(),n.__H=t),n.__}function It(){var e;do{for(;e=Ct.shift();)try{Bt(e)}catch(t){L.__e(t,{__:(e=e.__P)&&e.__v})}for(;e=St.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(Bt),t.__h.some(Vt),t.__h=[]}catch(n){t.__h=[],L.__e(n,e.__v)}}}while(Ct.length)}L.__b=function(e){I=null,wt&&wt(e)},L.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),kt&&kt(e,t)},L.__r=function(e){Tt&&Tt(e),F=0;var t=(I=e.__c).__H;t&&(vt==I?I.__h=[]:(t.__h.some(Bt),t.__h.some(Vt),F=0),t.__h=[],t.__.some(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})),vt=I},L.diffed=function(e){Et&&Et(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&zt(St.push(t)),t.__H.__.some(function(e){e.u&&(e.__H=e.u)})),vt=I=null},L.__c=function(e,t){t.some(function(e){try{e.__h.some(Bt),e.__h=e.__h.filter(function(e){return!e.__||Vt(e)})}catch(n){t.some(function(e){e.__h&&=[]}),t=[],L.__e(n,e.__v)}}),Dt&&Dt(e,t)},L.unmount=function(e){Ot&&Ot(e);var t,n,r=e.__c;r&&r.__H&&(r.__H.__.some(function(r){try{if(r.__P&&r.__c){if(n===void 0){for(n=e.__;n&&(!n.__c||!n.__c.__P);)n=n.__;n&&=n.__c}r.__P=n,zt(Ct.push(r))}else Bt(r)}catch(e){t=e}}),r.__H=void 0,t&&L.__e(t,r.__v))};var Lt=typeof requestAnimationFrame==`function`;function Rt(e){var t,n=function(){clearTimeout(r),Lt&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);Lt&&(t=requestAnimationFrame(n))}function zt(e){e!=1&&yt==L.requestAnimationFrame||((yt=L.requestAnimationFrame)||Rt)(It)}function Bt(e){var t=I,n=e.__c;typeof n==`function`&&(e.__c=void 0,n()),I=t}function Vt(e){var t=I;e.__c=e.__(),I=t}function Ht(e,t){return!e||e.length!=t.length||t.some(function(t,n){return!bt(t,e[n])})}function Ut(e,t){return typeof t==`function`?t(e):t}function R(){if(typeof GM_info<`u`&&GM_info?.script?.name)return GM_info.script.name;let e=globalThis;return e.GM_info?.script?.name||e.GM?.info?.script?.name||e.unsafeWindow?.GM_info?.script?.name||`Page to M4B`}var z=new class{state={isDialogOpen:!1,buttonVisible:!1,buttonLabel:R(),view:`idle`,headerTitle:R(),headerStatus:`Audiobook Converter`};listeners=new Set;getState(){return this.state}subscribe(e){return this.listeners.add(e),e(this.state),()=>{this.listeners.delete(e)}}update(e){this.state={...this.state,...e};for(let e of this.listeners)e(this.state)}setFloatingButton(e,t,n,r){this.update({buttonVisible:e,buttonLabel:t??this.state.buttonLabel,coverUrl:n===void 0?this.state.coverUrl:n,onButtonClick:r===void 0?this.state.onButtonClick:r})}reset(){let e=R();this.update({isDialogOpen:!1,buttonVisible:!1,view:`idle`,buttonLabel:e,headerTitle:e,headerStatus:`Audiobook Converter`,headerAvatar:void 0,loadingMessage:void 0,confirmData:void 0,progressData:void 0,completeData:void 0,sendData:void 0,errorData:void 0,bridgeData:void 0})}openDialog(){this.update({isDialogOpen:!0,buttonVisible:!1})}collapseDialog(){this.update({isDialogOpen:!1,buttonVisible:!0})}toggleDialog(){this.state.isDialogOpen?this.collapseDialog():this.openDialog()}showLoading(e){this.update({isDialogOpen:!0,buttonVisible:!1,view:`loading`,headerTitle:R(),headerStatus:`Extracting...`,loadingMessage:e})}showConfirm(e,t){let n=R();this.update({isDialogOpen:!0,buttonVisible:!1,view:`confirm`,headerTitle:n,headerStatus:`Ready to Convert`,headerAvatar:e.coverUrl,coverUrl:e.coverUrl,buttonLabel:n,confirmData:{result:e,onConfirm:t}})}showProgress(e){this.update({isDialogOpen:!0,buttonVisible:!1,view:`progress`,headerTitle:R(),headerStatus:`Converting...`,progressData:{percent:0,message:`Preparing engine...`,onCancel:e.onCancel}})}updateProgress(e,t,n){let r=Math.round(Math.min(100,Math.max(0,e)));this.update({buttonLabel:`Converting (${r}%)`,progressData:this.state.progressData?{...this.state.progressData,percent:r,message:t,detail:n}:{percent:r,message:t,detail:n,onCancel:()=>{}}})}showComplete(e,t,n){let r=`${e.replace(/(\.m4b)+$/i,``)}.m4b`;this.update({isDialogOpen:!0,buttonVisible:!1,buttonLabel:`M4B Ready! 🎉`,view:`complete`,headerTitle:R(),headerStatus:`Ready to Listen`,completeData:{filename:r,blob:t,onSendToPhone:n}})}showSend(e){let t=`${e.filename.replace(/(\.m4b)+$/i,``)}.m4b`;this.update({isDialogOpen:!0,buttonVisible:!1,view:`send`,headerTitle:`Send to Phone`,headerStatus:`P2P Transfer`,sendData:{...e,filename:t}})}updateSendProgress(e){this.state.sendData&&this.update({sendData:{...this.state.sendData,progress:e}})}showError(e,t){this.update({isDialogOpen:!0,buttonVisible:!1,view:`error`,headerTitle:R(),headerStatus:`Error`,errorData:{message:e,onRetry:t}})}showBridgeSelect(e,t,n){let r=`${e.replace(/(\.m4b)+$/i,``)}.m4b`;this.update({isDialogOpen:!0,buttonVisible:!1,view:`bridge-select`,headerTitle:`Send to Phone`,headerStatus:`WebRTC Mobile Bridge`,bridgeData:{filename:r,onSelectFile:t,onCancel:n}})}},Wt=0;Array.isArray;function B(e,t,n,r,i,a){t||={};var o,s,c=t;if(`ref`in c&&typeof e!=`function`)for(s in c={},t)s==`ref`?o=t[s]:c[s]=t[s];var l={type:e,props:c,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Wt,__i:-1,__u:0};return(i||a)&&(l.__source=i,l.__self=a),A.vnode&&A.vnode(l),l}function Gt({label:e,coverUrl:t,onClick:n}){return B(`button`,{className:`xixxii4 xjnlgov xk6ci0l x10ju6z4 x78zum5 x6s0dn4 x883omv x1k8dnhd xcicffo xn3w4p2 xlmwth5 xapedy8 xmkeg23 x1y0btm7 x1je4h4x x16s7zt2 x1jhl81p xi2c8kh x3oybdh xp695gr xd3so5o x169l3ba x1ypdohk x87ps6o`,onClick:e=>{e.preventDefault(),e.stopPropagation(),n()},"aria-label":`Open audiobook converter`,children:[B(`span`,{className:`xif65rj x1s688f x72az59`,children:e}),B(`span`,{className:`x23j0i4 xd7y6wv x16s7zt2 xvndefy x1y0btm7 xt9qghg x78zum5 x6s0dn4 xl56j7k x4z9k3i x7enzk4 xapedy8 xb3r6kr xskilf4 x2lah0s`,children:t?B(`img`,{className:`xh8yej3 x5yr21d xl1xv1r`,src:t,alt:`Cover`}):B(`span`,{children:`🎧`})})]})}var Kt={},qt;function Jt(){if(qt)return Kt;qt=1,Object.defineProperty(Kt,"__esModule",{value:!0}),Kt.styleq=void 0;var e=new WeakMap,t=`$$css`;function n(n){var r,i,a;return n!=null&&(r=n.disableCache===!0,i=n.disableMix===!0,a=n.transform),function(){for(var n=[],o=``,s=null,c=``,l=r?null:e,u=Array(arguments.length),d=0;d<arguments.length;d++)u[d]=arguments[d];for(;u.length>0;){var f=u.pop();if(f!=null&&f!==!1){if(Array.isArray(f)){for(var p=0;p<f.length;p++)u.push(f[p]);continue}var m=a==null?f:a(f);if(m.$$css!=null){var h=``;if(l!=null&&l.has(m)){var g=l.get(m);g!=null&&(h=g[0],c=g[2],n.push.apply(n,g[1]),l=g[3])}else{var _=[];for(var v in m){var y=m[v];if(v===t){var b=m[v];b!==!0&&(c=c?b+`; `+c:b);continue}typeof y==`string`||y===null?n.includes(v)||(n.push(v),l!=null&&_.push(v),typeof y==`string`&&(h+=h?` `+y:y)):console.error(`styleq: ${v} typeof ${String(y)} is not "string" or "null".`)}if(l!=null){var x=new WeakMap;l.set(m,[h,_,c,x]),l=x}}h&&(o=o?h+` `+o:h)}else if(i)s??={},s=Object.assign({},m,s);else{var S=null;for(var C in m){var w=m[C];w!==void 0&&(n.includes(C)||(w!=null&&(s??={},S??={},S[C]=w),n.push(C),l=null))}S!=null&&(s=Object.assign(S,s))}}}return[o,s,c]}}var r=Kt.styleq=n();return r.factory=n,Kt}var Yt=Jt();function V(...e){let[t,n,r]=Yt.styleq(e),i={};return t!=null&&t!==``&&(i.className=t),n!=null&&Object.keys(n).length>0&&(i.style=n),r!=null&&r!==``&&(i[`data-style-src`]=r),i}Object.freeze({});var Xt={layout:{k1xSpc:`x78zum5`,kXwgrk:`xdt5ytf`,kUk6DE:`x98rzlu`,kAzted:`x2lwn1j`,$$css:!0},body:{kUk6DE:`x98rzlu`,kORKVm:`x1odjw0f`,kmVPX3:`x1tamke2`,k1xSpc:`x78zum5`,kXwgrk:`xdt5ytf`,kOIVth:`xou54vl`,$$css:!0},footer:{kmVPX3:`x1iwkndl`,kEafiO:`x178xt8z`,kPef9Z:`x13fuv20`,kLZC3w:`xktcqqr`,kWkggS:`xlmwth5`,k1xSpc:`x78zum5`,kXwgrk:`xdt5ytf`,kOIVth:`x167g77z`,kmuXW:`x2lah0s`,$$css:!0}};function H({children:e,footer:t,as:n=`div`,onSubmit:r,class:i,stylex:a}){return B(n,{onSubmit:r,class:i,...V(Xt.layout,a),children:[e,t&&B(W,{children:t})]})}function U({children:e,class:t,stylex:n}){return B(`div`,{class:t,...V(Xt.body,n),children:e})}function W({children:e,class:t,stylex:n}){return B(`footer`,{class:t,...V(Xt.footer,n),children:e})}var Zt={container:{kGNEyG:`x6s0dn4`,kjj79g:`xl56j7k`,k9WMMc:`x2b8uid`,kLKAdn:`xijc0j3`,kGO01o:`xq1608w`,k1xSpc:`x78zum5`,kXwgrk:`xdt5ytf`,kOIVth:`x167g77z`,$$css:!0}};function Qt({message:e}){return B(H,{children:B(U,{stylex:Zt.container,children:[B(`svg`,{viewBox:`0 0 24 24`,fill:`none`,className:`x1td3qas x10w6t97 x1844x9g x1e56ztr`,children:[B(`circle`,{cx:`12`,cy:`12`,r:`9`,strokeWidth:`2.5`,className:`xuwekrw`}),B(`path`,{d:`M12 3a9 9 0 0 1 9 9`,strokeWidth:`2.5`,strokeLinecap:`round`,className:`xb6vt1d`})]}),B(`div`,{className:`x1xlr1w8 x1jvydc1 xapedy8`,children:`Scanning page for audiobooks`}),B(`div`,{className:`x4z9k3i x137kbjm`,children:e})]})})}var $t={card:{kWkggS:`x7oc22b`,kMzoRj:`xmkeg23`,ksu8eU:`x1y0btm7`,kVAM5u:`xt9qghg`,kaIpWk:`xd1tfsb`,kmVPX3:`x1tamke2`,k1xSpc:`x78zum5`,kXwgrk:`xdt5ytf`,kOIVth:`x1v2ro7d`,kB7OPa:`x9f619`,$$css:!0}};function G({children:e,stylex:t}){return B(`div`,{...V($t.card,t),children:e})}function en({id:e,label:t,value:n,onInput:r,type:i=`text`,placeholder:a}){return B(`div`,{className:`x78zum5 xdt5ytf x17d4w8g xh8yej3`,children:[t&&B(`label`,{for:e,className:`x4z9k3i x1xlr1w8 x137kbjm`,children:t}),B(`input`,{id:e,type:i,value:n,onInput:r,placeholder:a,className:`xh8yej3 x5kalc8 xf18ygs xnuq7ks xif65rj xapedy8 xlmwth5 xmkeg23 x1y0btm7 xt9qghg xx4f8i8 x1a2a7pz x9f619 x1aq93mo x1r3je1n`})]})}var tn={badge:{k1xSpc:`x3nfvp2`,kGNEyG:`x6s0dn4`,kOIVth:`x1jnr06f`,kmVPX3:`x1rbdj2j`,kaIpWk:`x16s7zt2`,kGuDYH:`x1j6dyjg`,k63SB2:`x1s688f`,kWkggS:`x1717ss6`,kMwMTN:`xapedy8`,kzqmXN:`xeq5yr9`,kmuXW:`x2lah0s`,kfSwDN:`x87ps6o`,$$css:!0}};function nn({children:e,id:t,stylex:n}){return B(`span`,{id:t,...V(tn.badge,n),children:e})}var rn={base:{kzqmXN:`xh8yej3`,kZKoxP:`x5kalc8`,kE3dHu:`x5tiur9`,kpe85a:`x1s7jvk7`,k1xSpc:`x78zum5`,kGNEyG:`x6s0dn4`,kjj79g:`xl56j7k`,kOIVth:`x167g77z`,k63SB2:`x1xlr1w8`,kGuDYH:`xif65rj`,kaIpWk:`x16s7zt2`,kmkexE:`x19eei9o`,kkrTdU:`x1ypdohk`,kMzoRj:`xc342km`,ksu8eU:`xng3xce`,kfSwDN:`x87ps6o`,kI3sdo:`x1a2a7pz`,kGVxlE:`xskilf4`,kOGhaW:`xk4oym4`,$$css:!0},primary:{kWkggS:`x16b7qwg`,kMwMTN:`x1f7m26b`,kGzVvX:`xvwpaob`,kSReZ0:`x1wvfbt0`,$$css:!0},secondary:{kWkggS:`x1717ss6`,kMwMTN:`xapedy8`,kGzVvX:`xb8enhk`,kSReZ0:`x1519m0n`,$$css:!0},danger:{kWkggS:`xoutha2`,kMwMTN:`x6q7mgy`,kMzoRj:`xmkeg23`,ksu8eU:`x1y0btm7`,kVAM5u:`x17kgx2u`,kGzVvX:`x1tscgq8`,$$css:!0},sm:{kZKoxP:`x10w6t97`,kGuDYH:`xfifm61`,kE3dHu:`xf18ygs`,kpe85a:`xnuq7ks`,$$css:!0}};function K({children:e,variant:t=`primary`,size:n=`default`,type:r=`button`,onClick:i,id:a,disabled:o=!1,stylex:s}){return B(`button`,{id:a,type:r,onClick:i,disabled:o,...V(rn.base,t===`primary`&&rn.primary,t===`secondary`&&rn.secondary,t===`danger`&&rn.danger,n===`sm`&&rn.sm,s),children:e})}var an={body:{kOIVth:`x1af02g3`,$$css:!0}};function on({result:e,onConfirm:t}){let[n,r]=jt(e.bookTitle),[i,a]=jt(e.bookAuthor),o=e.audioFiles.length;return B(H,{as:`form`,onSubmit:r=>{r.preventDefault(),t({bookTitle:n.trim()||e.bookTitle,bookAuthor:i.trim()||e.bookAuthor})},children:[B(U,{stylex:an.body,children:[B(G,{children:B(`div`,{className:`x78zum5 x6s0dn4 x1af02g3`,children:[e.coverUrl?B(`img`,{className:`x15yg21f xnnlda6 xx4f8i8 xl1xv1r xmkeg23 x1y0btm7 xt9qghg x2lah0s`,src:e.coverUrl,alt:`Cover artwork`}):B(`div`,{className:`x15yg21f xnnlda6 xx4f8i8 x1717ss6 xmkeg23 x1y0btm7 xt9qghg x78zum5 x6s0dn4 xl56j7k x1svgk49 xfifm61 x2lah0s`,children:`No Cover`}),B(`div`,{className:`x78zum5 xdt5ytf xb3r6kr xeuugli x195vfkc`,children:[B(`div`,{className:`x1xlr1w8 x1jvydc1 xapedy8 xuxw1ft xb3r6kr xlyipyv x132q4wb`,title:e.bookTitle,children:e.bookTitle}),B(`div`,{className:`x4z9k3i x137kbjm xuxw1ft xb3r6kr xlyipyv x132q4wb`,children:[`by `,e.bookAuthor]}),B(`div`,{className:`x1gslohp`,children:B(nn,{children:[`📚 `,o,` chapter`,o>1?`s`:``]})})]})]})}),B(`div`,{className:`x78zum5 xdt5ytf x1v2ro7d`,children:[B(en,{id:`ptm-input-title`,label:`Book Title`,value:n,onInput:e=>r(e.target.value)}),B(en,{id:`ptm-input-author`,label:`Author`,value:i,onInput:e=>a(e.target.value)})]}),o>0&&B(`details`,{className:`xfifm61 x137kbjm x1ypdohk xr9ek0c`,children:[B(`summary`,{className:`x1s688f x87ps6o x1a2a7pz xztvwtv`,children:[`Preview chapters (`,o,`)`]}),B(`div`,{className:`x78zum5 xdt5ytf x167g77z x1xmf6yo xctk3hg x1odjw0f`,children:e.audioFiles.map((e,t)=>B(`div`,{className:`x78zum5 xdt5ytf x17d4w8g xe8ttls xmkeg23 x1y0btm7 xt9qghg xx4f8i8 x7oc22b`,children:[B(`div`,{className:`xfifm61 xk50ysn xapedy8 xuxw1ft xb3r6kr xlyipyv`,title:e.title,children:[t+1,`. `,e.title]}),B(`audio`,{controls:!0,src:e.url,preload:`none`,className:`xh8yej3 x10w6t97`})]},t))})]})]}),B(W,{children:B(K,{type:`submit`,id:`ptm-btn-convert`,variant:`primary`,children:[B(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:B(`polygon`,{points:`5 3 19 12 5 21 5 3`,fill:`none`})}),B(`span`,{children:`Convert to M4B`})]})})]})}var sn=[`size=`,`FFmpeg`,`Encoded`,`encoder`,`process`,`xử lý`,`Muxing`,`Finalizing`];function cn(e,t){return e?e.includes(`FFmpeg`)||e.includes(`audiobook`)||e.includes(`Muxing`)||e.includes(`Finalizing`)?!0:t?sn.some(e=>t.includes(e)):!1:!1}function ln(e,t){if(!e)return{type:`default`,text:``};let n=e.match(/^(?:⬇️\s*|📥\s*|Downloading\s+(?:track\s+)?|Downloading:\s*|Đang tải\s+)(\d+\/\d+.*)$/i);if(n)return{type:`download`,text:n[1]};let r=e.match(/^(?:Downloaded\s+(?:track\s+)?|Đã tải\s+)(\d+\/\d+.*)$/i);return r?{type:`downloaded`,text:r[1]}:t?{type:`ffmpeg`,text:e}:{type:`default`,text:e}}function un({percent:e,message:t,detail:n,onCancel:r}){let i=Math.min(100,Math.max(0,e)),a=Math.round(i),o=cn(t,n),{type:s,text:c}=ln(t,o);return B(H,{children:[B(U,{children:[B(G,{children:[B(`div`,{className:`x78zum5 x6s0dn4 x1qughib x167g77z`,children:[B(`div`,{className:`x78zum5 x6s0dn4 x167g77z xb3r6kr xeuugli`,children:[B(`span`,{id:`ptm-prog-icon`,className:`xw4jnvo x1qx5ct2 x78zum5 x6s0dn4 xl56j7k x2lah0s`,"data-status-type":s,children:[s===`download`&&B(`span`,{className:`xiruocy x3nfvp2`,title:`Downloading`,children:B(`svg`,{width:`20`,height:`20`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:`2.5`,children:B(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4`})})}),s===`downloaded`&&B(`span`,{className:`xiolwv5 x3nfvp2`,title:`Downloaded`,children:B(`svg`,{width:`20`,height:`20`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:`2.5`,children:B(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M5 13l4 4L19 7`})})}),s===`ffmpeg`&&B(`span`,{className:`xiruocy x3nfvp2 x1844x9g`,title:`Processing`,children:B(`svg`,{width:`20`,height:`20`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:`2.5`,children:B(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15`})})}),s==="default"&&B(`span`,{className:`x1n2onr6 x78zum5 x170jfvy x1fsd2vl`,children:[B(`span`,{className:`x10l6tqk x3nfvp2 x5yr21d xh8yej3 x16s7zt2 x16b7qwg x18km98s`}),B(`span`,{className:`x1n2onr6 x3nfvp2 x16s7zt2 x170jfvy x1fsd2vl x16b7qwg`})]})]}),B(`span`,{id:`ptm-prog-phase`,className:`x1xlr1w8 xif65rj xapedy8 xuxw1ft xb3r6kr xlyipyv`,title:c,children:c})]}),B(`span`,{id:`ptm-prog-percent`,className:`xif65rj x1xlr1w8 xiruocy x2lah0s`,children:[a,`%`]})]}),B(`div`,{className:`xh8yej3 xdk7pt xfh87tc x16s7zt2 xb3r6kr`,children:B(`div`,{id:`ptm-prog-fill`,className:`x5yr21d x16b7qwg xqwt36l x16s7zt2`,style:{width:`${i}%`}})}),n?B(`div`,{id:`ptm-prog-detail-row`,className:`x78zum5 x6s0dn4 x1qughib xfifm61 x137kbjm x1nn3v0j`,children:[B(`span`,{id:`ptm-prog-detail-text`,className:`xuxw1ft xb3r6kr xlyipyv xeuugli xy13l1i`,title:n,children:n}),B(nn,{id:`ptm-prog-badge`,children:o?`FFmpeg`:`Download`})]}):B(`div`,{id:`ptm-prog-note`,className:`x1j6dyjg x137kbjm x2b8uid x1nn3v0j`,children:`Processing in your browser using local WebAssembly engine`})]}),B(`div`,{className:`xfifm61 x137kbjm x2b8uid x1evy7pa x163pfp xy13l1i`,children:`You can collapse this dialog anytime. The conversion will continue in the background.`})]}),B(W,{children:B(K,{type:`button`,variant:`secondary`,onClick:r,children:`Cancel`})})]})}function dn(e){if(!e||e<=0||isNaN(e))return`0 B`;let t=[`B`,`KB`,`MB`,`GB`],n=Math.min(t.length-1,Math.floor(Math.log(e)/Math.log(1024)));return`${(e/1024**n).toFixed(n===0?0:1)} ${t[n]}`}var fn=[{description:`M4B Audiobook`,accept:{"audio/x-m4b":[`.m4b`],"audio/mp4":[`.m4b`]}}];async function pn(e,t){try{let n=await(await window.showSaveFilePicker({suggestedName:t,types:fn})).createWritable();return await n.write(e),await n.close(),!0}catch(e){return e.name===`AbortError`}}function mn(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,document.body.appendChild(r),r.click(),setTimeout(()=>{document.body.removeChild(r),URL.revokeObjectURL(n)},6e4)}async function hn(e,t){if(!e||e.size===0){console.error(`saveFile: blob is empty (0 bytes)`),alert(`Error: Audiobook file is empty (0 bytes). Please try processing again.`);return}`showSaveFilePicker`in window&&await pn(e,t)||mn(e,t)}var gn={footer:{kOIVth:`x167g77z`,$$css:!0}};function _n({filename:e,blob:t,onSendToPhone:n}){let r=dn(t.size),i=e.endsWith(`.m4b`)?e:`${e}.m4b`;return B(H,{children:[B(U,{children:B(G,{children:B(`div`,{className:`x78zum5 xdt5ytf x6s0dn4 xl56j7k x2b8uid x1v2ro7d x1y1aw1k xwib8y2`,children:[B(`div`,{className:`x1useyqa xsdox4t x16s7zt2 xfe0fsp xiolwv5 x78zum5 x6s0dn4 xl56j7k`,children:B(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:B(`polyline`,{points:`20 6 9 17 4 12`})})}),B(`div`,{className:`x1xlr1w8 x1j61zf2 xapedy8`,children:`Audiobook Ready!`}),B(`div`,{className:`x4z9k3i x137kbjm x1jkqq1h xuxw1ft xb3r6kr xlyipyv x37zpob`,children:[B(`strong`,{className:`xapedy8 x1s688f`,children:i}),` (`,r,`)`]})]})})}),B(W,{stylex:gn.footer,children:[B(K,{type:`button`,variant:`primary`,onClick:async()=>{await hn(t,i)},children:[B(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[B(`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`}),B(`polyline`,{points:`7 10 12 15 17 10`}),B(`line`,{x1:`12`,y1:`15`,x2:`12`,y2:`3`})]}),B(`span`,{children:`Save to Computer`})]}),B(K,{type:`button`,variant:`secondary`,onClick:()=>n?.(i,t),children:[B(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[B(`rect`,{x:`5`,y:`2`,width:`14`,height:`20`,rx:`2`,ry:`2`}),B(`line`,{x1:`12`,y1:`18`,x2:`12.01`,y2:`18`})]}),B(`span`,{children:`Send to Phone (P2P)`})]})]})]})}var vn=s(((e,t)=>{t.exports=function(){return typeof Promise==`function`&&Promise.prototype&&Promise.prototype.then}})),q=s((e=>{var t,n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(e){if(!e)throw Error(`"version" cannot be null or undefined`);if(e<1||e>40)throw Error(`"version" should be in range from 1 to 40`);return e*4+17},e.getSymbolTotalCodewords=function(e){return n[e]},e.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t},e.setToSJISFunction=function(e){if(typeof e!=`function`)throw Error(`"toSJISFunc" is not a valid function.`);t=e},e.isKanjiModeEnabled=function(){return t!==void 0},e.toSJIS=function(e){return t(e)}})),yn=s((e=>{e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(t){if(typeof t!=`string`)throw Error(`Param is not a string`);switch(t.toLowerCase()){case`l`:case`low`:return e.L;case`m`:case`medium`:return e.M;case`q`:case`quartile`:return e.Q;case`h`:case`high`:return e.H;default:throw Error(`Unknown EC Level: `+t)}}e.isValid=function(e){return e&&e.bit!==void 0&&e.bit>=0&&e.bit<4},e.from=function(n,r){if(e.isValid(n))return n;try{return t(n)}catch{return r}}})),bn=s(((e,t)=>{function n(){this.buffer=[],this.length=0}n.prototype={get:function(e){let t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)==1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},t.exports=n})),xn=s(((e,t)=>{function n(e){if(!e||e<1)throw Error(`BitMatrix size must be defined and greater than 0`);this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}n.prototype.set=function(e,t,n,r){let i=e*this.size+t;this.data[i]=n,r&&(this.reservedBit[i]=!0)},n.prototype.get=function(e,t){return this.data[e*this.size+t]},n.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},n.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},t.exports=n})),Sn=s((e=>{var t=q().getSymbolSize;e.getRowColCoords=function(e){if(e===1)return[];let n=Math.floor(e/7)+2,r=t(e),i=r===145?26:Math.ceil((r-13)/(2*n-2))*2,a=[r-7];for(let e=1;e<n-1;e++)a[e]=a[e-1]-i;return a.push(6),a.reverse()},e.getPositions=function(t){let n=[],r=e.getRowColCoords(t),i=r.length;for(let e=0;e<i;e++)for(let t=0;t<i;t++)e===0&&t===0||e===0&&t===i-1||e===i-1&&t===0||n.push([r[e],r[t]]);return n}})),Cn=s((e=>{var t=q().getSymbolSize,n=7;e.getPositions=function(e){let r=t(e);return[[0,0],[r-n,0],[0,r-n]]}})),wn=s((e=>{e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(e){return e!=null&&e!==``&&!isNaN(e)&&e>=0&&e<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(e){let n=e.size,r=0,i=0,a=0,o=null,s=null;for(let c=0;c<n;c++){i=a=0,o=s=null;for(let l=0;l<n;l++){let n=e.get(c,l);n===o?i++:(i>=5&&(r+=t.N1+(i-5)),o=n,i=1),n=e.get(l,c),n===s?a++:(a>=5&&(r+=t.N1+(a-5)),s=n,a=1)}i>=5&&(r+=t.N1+(i-5)),a>=5&&(r+=t.N1+(a-5))}return r},e.getPenaltyN2=function(e){let n=e.size,r=0;for(let t=0;t<n-1;t++)for(let i=0;i<n-1;i++){let n=e.get(t,i)+e.get(t,i+1)+e.get(t+1,i)+e.get(t+1,i+1);(n===4||n===0)&&r++}return r*t.N2},e.getPenaltyN3=function(e){let n=e.size,r=0,i=0,a=0;for(let t=0;t<n;t++){i=a=0;for(let o=0;o<n;o++)i=i<<1&2047|e.get(t,o),o>=10&&(i===1488||i===93)&&r++,a=a<<1&2047|e.get(o,t),o>=10&&(a===1488||a===93)&&r++}return r*t.N3},e.getPenaltyN4=function(e){let n=0,r=e.data.length;for(let t=0;t<r;t++)n+=e.data[t];return Math.abs(Math.ceil(n*100/r/5)-10)*t.N4};function n(t,n,r){switch(t){case e.Patterns.PATTERN000:return(n+r)%2==0;case e.Patterns.PATTERN001:return n%2==0;case e.Patterns.PATTERN010:return r%3==0;case e.Patterns.PATTERN011:return(n+r)%3==0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2==0;case e.Patterns.PATTERN101:return n*r%2+n*r%3==0;case e.Patterns.PATTERN110:return(n*r%2+n*r%3)%2==0;case e.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2==0;default:throw Error(`bad maskPattern:`+t)}}e.applyMask=function(e,t){let r=t.size;for(let i=0;i<r;i++)for(let a=0;a<r;a++)t.isReserved(a,i)||t.xor(a,i,n(e,a,i))},e.getBestMask=function(t,n){let r=Object.keys(e.Patterns).length,i=0,a=1/0;for(let o=0;o<r;o++){n(o),e.applyMask(o,t);let r=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(o,t),r<a&&(a=r,i=o)}return i}})),Tn=s((e=>{var t=yn(),n=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],r=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(e,r){switch(r){case t.L:return n[(e-1)*4+0];case t.M:return n[(e-1)*4+1];case t.Q:return n[(e-1)*4+2];case t.H:return n[(e-1)*4+3];default:return}},e.getTotalCodewordsCount=function(e,n){switch(n){case t.L:return r[(e-1)*4+0];case t.M:return r[(e-1)*4+1];case t.Q:return r[(e-1)*4+2];case t.H:return r[(e-1)*4+3];default:return}}})),En=s((e=>{var t=new Uint8Array(512),n=new Uint8Array(256);(function(){let e=1;for(let r=0;r<255;r++)t[r]=e,n[e]=r,e<<=1,e&256&&(e^=285);for(let e=255;e<512;e++)t[e]=t[e-255]})(),e.log=function(e){if(e<1)throw Error(`log(`+e+`)`);return n[e]},e.exp=function(e){return t[e]},e.mul=function(e,r){return e===0||r===0?0:t[n[e]+n[r]]}})),Dn=s((e=>{var t=En();e.mul=function(e,n){let r=new Uint8Array(e.length+n.length-1);for(let i=0;i<e.length;i++)for(let a=0;a<n.length;a++)r[i+a]^=t.mul(e[i],n[a]);return r},e.mod=function(e,n){let r=new Uint8Array(e);for(;r.length-n.length>=0;){let e=r[0];for(let i=0;i<n.length;i++)r[i]^=t.mul(n[i],e);let i=0;for(;i<r.length&&r[i]===0;)i++;r=r.slice(i)}return r},e.generateECPolynomial=function(n){let r=new Uint8Array([1]);for(let i=0;i<n;i++)r=e.mul(r,new Uint8Array([1,t.exp(i)]));return r}})),On=s(((e,t)=>{var n=Dn();function r(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}r.prototype.initialize=function(e){this.degree=e,this.genPoly=n.generateECPolynomial(this.degree)},r.prototype.encode=function(e){if(!this.genPoly)throw Error(`Encoder not initialized`);let t=new Uint8Array(e.length+this.degree);t.set(e);let r=n.mod(t,this.genPoly),i=this.degree-r.length;if(i>0){let e=new Uint8Array(this.degree);return e.set(r,i),e}return r},t.exports=r})),kn=s((e=>{e.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}})),An=s((e=>{var t=`[0-9]+`,n=`[A-Z $%*+\\-./:]+`,r=`(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+`;r=r.replace(/u/g,`\\u`);var i=`(?:(?![A-Z0-9 $%*+\\-./:]|`+r+`)(?:.|[\r
]))+`;e.KANJI=new RegExp(r,`g`),e.BYTE_KANJI=RegExp(`[^A-Z0-9 $%*+\\-./:]+`,`g`),e.BYTE=new RegExp(i,`g`),e.NUMERIC=new RegExp(t,`g`),e.ALPHANUMERIC=new RegExp(n,`g`);var a=RegExp(`^`+r+`$`),o=RegExp(`^[0-9]+$`),s=RegExp(`^[A-Z0-9 $%*+\\-./:]+$`);e.testKanji=function(e){return a.test(e)},e.testNumeric=function(e){return o.test(e)},e.testAlphanumeric=function(e){return s.test(e)}})),J=s((e=>{var t=kn(),n=An();e.NUMERIC={id:`Numeric`,bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:`Alphanumeric`,bit:2,ccBits:[9,11,13]},e.BYTE={id:`Byte`,bit:4,ccBits:[8,16,16]},e.KANJI={id:`Kanji`,bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(e,n){if(!e.ccBits)throw Error(`Invalid mode: `+e);if(!t.isValid(n))throw Error(`Invalid version: `+n);return n>=1&&n<10?e.ccBits[0]:n<27?e.ccBits[1]:e.ccBits[2]},e.getBestModeForData=function(t){return n.testNumeric(t)?e.NUMERIC:n.testAlphanumeric(t)?e.ALPHANUMERIC:n.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(e){if(e&&e.id)return e.id;throw Error(`Invalid mode`)},e.isValid=function(e){return e&&e.bit&&e.ccBits};function r(t){if(typeof t!=`string`)throw Error(`Param is not a string`);switch(t.toLowerCase()){case`numeric`:return e.NUMERIC;case`alphanumeric`:return e.ALPHANUMERIC;case`kanji`:return e.KANJI;case`byte`:return e.BYTE;default:throw Error(`Unknown mode: `+t)}}e.from=function(t,n){if(e.isValid(t))return t;try{return r(t)}catch{return n}}})),jn=s((e=>{var t=q(),n=Tn(),r=yn(),i=J(),a=kn(),o=7973,s=t.getBCHDigit(o);function c(t,n,r){for(let i=1;i<=40;i++)if(n<=e.getCapacity(i,r,t))return i}function l(e,t){return i.getCharCountIndicator(e,t)+4}function u(e,t){let n=0;return e.forEach(function(e){let r=l(e.mode,t);n+=r+e.getBitsLength()}),n}function d(t,n){for(let r=1;r<=40;r++)if(u(t,r)<=e.getCapacity(r,n,i.MIXED))return r}e.from=function(e,t){return a.isValid(e)?parseInt(e,10):t},e.getCapacity=function(e,r,o){if(!a.isValid(e))throw Error(`Invalid QR Code version`);o===void 0&&(o=i.BYTE);let s=(t.getSymbolTotalCodewords(e)-n.getTotalCodewordsCount(e,r))*8;if(o===i.MIXED)return s;let c=s-l(o,e);switch(o){case i.NUMERIC:return Math.floor(c/10*3);case i.ALPHANUMERIC:return Math.floor(c/11*2);case i.KANJI:return Math.floor(c/13);case i.BYTE:default:return Math.floor(c/8)}},e.getBestVersionForData=function(e,t){let n,i=r.from(t,r.M);if(Array.isArray(e)){if(e.length>1)return d(e,i);if(e.length===0)return 1;n=e[0]}else n=e;return c(n.mode,n.getLength(),i)},e.getEncodedBits=function(e){if(!a.isValid(e)||e<7)throw Error(`Invalid QR Code version`);let n=e<<12;for(;t.getBCHDigit(n)-s>=0;)n^=o<<t.getBCHDigit(n)-s;return e<<12|n}})),Mn=s((e=>{var t=q(),n=1335,r=21522,i=t.getBCHDigit(n);e.getEncodedBits=function(e,a){let o=e.bit<<3|a,s=o<<10;for(;t.getBCHDigit(s)-i>=0;)s^=n<<t.getBCHDigit(s)-i;return(o<<10|s)^r}})),Nn=s(((e,t)=>{var n=J();function r(e){this.mode=n.NUMERIC,this.data=e.toString()}r.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){let t,n,r;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),r=parseInt(n,10),e.put(r,10);let i=this.data.length-t;i>0&&(n=this.data.substr(t),r=parseInt(n,10),e.put(r,i*3+1))},t.exports=r})),Pn=s(((e,t)=>{var n=J(),r=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`.split(``);function i(e){this.mode=n.ALPHANUMERIC,this.data=e}i.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t=0;for(;t+2<=this.data.length;t+=2){let n=r.indexOf(this.data[t])*45;n+=r.indexOf(this.data[t+1]),e.put(n,11)}this.data.length%2&&e.put(r.indexOf(this.data[t]),6)},t.exports=i})),Fn=s(((e,t)=>{var n=J();function r(e){this.mode=n.BYTE,this.data=typeof e==`string`?new TextEncoder().encode(e):new Uint8Array(e)}r.getBitsLength=function(e){return e*8},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){for(let t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)},t.exports=r})),In=s(((e,t)=>{var n=J(),r=q();function i(e){this.mode=n.KANJI,this.data=e}i.getBitsLength=function(e){return e*13},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t=0;for(;t<this.data.length;t++){let n=r.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw Error(`Invalid SJIS character: `+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}},t.exports=i})),Ln=s(((e,t)=>{var n={single_source_shortest_paths:function(e,t,r){var i={},a={};a[t]=0;var o=n.PriorityQueue.make();o.push(t,0);for(var s,c,l,u,d,f,p,m,h;!o.empty();)for(l in s=o.pop(),c=s.value,u=s.cost,d=e[c]||{},d)d.hasOwnProperty(l)&&(f=d[l],p=u+f,m=a[l],h=a[l]===void 0,(h||m>p)&&(a[l]=p,o.push(l,p),i[l]=c));if(r!==void 0&&a[r]===void 0){var g=[`Could not find a path from `,t,` to `,r,`.`].join(``);throw Error(g)}return i},extract_shortest_path_from_predecessor_list:function(e,t){for(var n=[],r=t;r;)n.push(r),e[r],r=e[r];return n.reverse(),n},find_path:function(e,t,r){var i=n.single_source_shortest_paths(e,t,r);return n.extract_shortest_path_from_predecessor_list(i,r)},PriorityQueue:{make:function(e){var t=n.PriorityQueue,r={},i;for(i in e||={},t)t.hasOwnProperty(i)&&(r[i]=t[i]);return r.queue=[],r.sorter=e.sorter||t.default_sorter,r},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){var n={value:e,cost:t};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t!==void 0&&(t.exports=n)})),Rn=s((e=>{var t=J(),n=Nn(),r=Pn(),i=Fn(),a=In(),o=An(),s=q(),c=Ln();function l(e){return unescape(encodeURIComponent(e)).length}function u(e,t,n){let r=[],i;for(;(i=e.exec(n))!==null;)r.push({data:i[0],index:i.index,mode:t,length:i[0].length});return r}function d(e){let n=u(o.NUMERIC,t.NUMERIC,e),r=u(o.ALPHANUMERIC,t.ALPHANUMERIC,e),i,a;return s.isKanjiModeEnabled()?(i=u(o.BYTE,t.BYTE,e),a=u(o.KANJI,t.KANJI,e)):(i=u(o.BYTE_KANJI,t.BYTE,e),a=[]),n.concat(r,i,a).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function f(e,o){switch(o){case t.NUMERIC:return n.getBitsLength(e);case t.ALPHANUMERIC:return r.getBitsLength(e);case t.KANJI:return a.getBitsLength(e);case t.BYTE:return i.getBitsLength(e)}}function p(e){return e.reduce(function(e,t){let n=e.length-1>=0?e[e.length-1]:null;return n&&n.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)},[])}function m(e){let n=[];for(let r=0;r<e.length;r++){let i=e[r];switch(i.mode){case t.NUMERIC:n.push([i,{data:i.data,mode:t.ALPHANUMERIC,length:i.length},{data:i.data,mode:t.BYTE,length:i.length}]);break;case t.ALPHANUMERIC:n.push([i,{data:i.data,mode:t.BYTE,length:i.length}]);break;case t.KANJI:n.push([i,{data:i.data,mode:t.BYTE,length:l(i.data)}]);break;case t.BYTE:n.push([{data:i.data,mode:t.BYTE,length:l(i.data)}])}}return n}function h(e,n){let r={},i={start:{}},a=[`start`];for(let o=0;o<e.length;o++){let s=e[o],c=[];for(let e=0;e<s.length;e++){let l=s[e],u=``+o+e;c.push(u),r[u]={node:l,lastCount:0},i[u]={};for(let e=0;e<a.length;e++){let o=a[e];r[o]&&r[o].node.mode===l.mode?(i[o][u]=f(r[o].lastCount+l.length,l.mode)-f(r[o].lastCount,l.mode),r[o].lastCount+=l.length):(r[o]&&(r[o].lastCount=l.length),i[o][u]=f(l.length,l.mode)+4+t.getCharCountIndicator(l.mode,n))}}a=c}for(let e=0;e<a.length;e++)i[a[e]].end=0;return{map:i,table:r}}function g(e,o){let c,l=t.getBestModeForData(e);if(c=t.from(o,l),c!==t.BYTE&&c.bit<l.bit)throw Error(`"`+e+`" cannot be encoded with mode `+t.toString(c)+`.
 Suggested mode is: `+t.toString(l));switch(c===t.KANJI&&!s.isKanjiModeEnabled()&&(c=t.BYTE),c){case t.NUMERIC:return new n(e);case t.ALPHANUMERIC:return new r(e);case t.KANJI:return new a(e);case t.BYTE:return new i(e)}}e.fromArray=function(e){return e.reduce(function(e,t){return typeof t==`string`?e.push(g(t,null)):t.data&&e.push(g(t.data,t.mode)),e},[])},e.fromString=function(t,n){let r=h(m(d(t,s.isKanjiModeEnabled())),n),i=c.find_path(r.map,`start`,`end`),a=[];for(let e=1;e<i.length-1;e++)a.push(r.table[i[e]].node);return e.fromArray(p(a))},e.rawSplit=function(t){return e.fromArray(d(t,s.isKanjiModeEnabled()))}})),zn=s((e=>{var t=q(),n=yn(),r=bn(),i=xn(),a=Sn(),o=Cn(),s=wn(),c=Tn(),l=On(),u=jn(),d=Mn(),f=J(),p=Rn();function m(e,t){let n=e.size,r=o.getPositions(t);for(let t=0;t<r.length;t++){let i=r[t][0],a=r[t][1];for(let t=-1;t<=7;t++)if(!(i+t<=-1||n<=i+t))for(let r=-1;r<=7;r++)a+r<=-1||n<=a+r||(t>=0&&t<=6&&(r===0||r===6)||r>=0&&r<=6&&(t===0||t===6)||t>=2&&t<=4&&r>=2&&r<=4?e.set(i+t,a+r,!0,!0):e.set(i+t,a+r,!1,!0))}}function h(e){let t=e.size;for(let n=8;n<t-8;n++){let t=n%2==0;e.set(n,6,t,!0),e.set(6,n,t,!0)}}function g(e,t){let n=a.getPositions(t);for(let t=0;t<n.length;t++){let r=n[t][0],i=n[t][1];for(let t=-2;t<=2;t++)for(let n=-2;n<=2;n++)t===-2||t===2||n===-2||n===2||t===0&&n===0?e.set(r+t,i+n,!0,!0):e.set(r+t,i+n,!1,!0)}}function _(e,t){let n=e.size,r=u.getEncodedBits(t),i,a,o;for(let t=0;t<18;t++)i=Math.floor(t/3),a=t%3+n-8-3,o=(r>>t&1)==1,e.set(i,a,o,!0),e.set(a,i,o,!0)}function v(e,t,n){let r=e.size,i=d.getEncodedBits(t,n),a,o;for(a=0;a<15;a++)o=(i>>a&1)==1,a<6?e.set(a,8,o,!0):a<8?e.set(a+1,8,o,!0):e.set(r-15+a,8,o,!0),a<8?e.set(8,r-a-1,o,!0):a<9?e.set(8,15-a-1+1,o,!0):e.set(8,15-a-1,o,!0);e.set(r-8,8,1,!0)}function y(e,t){let n=e.size,r=-1,i=n-1,a=7,o=0;for(let s=n-1;s>0;s-=2)for(s===6&&s--;;){for(let n=0;n<2;n++)if(!e.isReserved(i,s-n)){let r=!1;o<t.length&&(r=(t[o]>>>a&1)==1),e.set(i,s-n,r),a--,a===-1&&(o++,a=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}function b(e,n,i){let a=new r;i.forEach(function(t){a.put(t.mode.bit,4),a.put(t.getLength(),f.getCharCountIndicator(t.mode,e)),t.write(a)});let o=(t.getSymbolTotalCodewords(e)-c.getTotalCodewordsCount(e,n))*8;for(a.getLengthInBits()+4<=o&&a.put(0,4);a.getLengthInBits()%8!=0;)a.putBit(0);let s=(o-a.getLengthInBits())/8;for(let e=0;e<s;e++)a.put(e%2?17:236,8);return x(a,e,n)}function x(e,n,r){let i=t.getSymbolTotalCodewords(n),a=i-c.getTotalCodewordsCount(n,r),o=c.getBlocksCount(n,r),s=o-i%o,u=Math.floor(i/o),d=Math.floor(a/o),f=d+1,p=u-d,m=new l(p),h=0,g=Array(o),_=Array(o),v=0,y=new Uint8Array(e.buffer);for(let e=0;e<o;e++){let t=e<s?d:f;g[e]=y.slice(h,h+t),_[e]=m.encode(g[e]),h+=t,v=Math.max(v,t)}let b=new Uint8Array(i),x=0,S,C;for(S=0;S<v;S++)for(C=0;C<o;C++)S<g[C].length&&(b[x++]=g[C][S]);for(S=0;S<p;S++)for(C=0;C<o;C++)b[x++]=_[C][S];return b}function S(e,n,r,a){let o;if(Array.isArray(e))o=p.fromArray(e);else if(typeof e==`string`){let t=n;if(!t){let n=p.rawSplit(e);t=u.getBestVersionForData(n,r)}o=p.fromString(e,t||40)}else throw Error(`Invalid data`);let c=u.getBestVersionForData(o,r);if(!c)throw Error(`The amount of data is too big to be stored in a QR Code`);if(!n)n=c;else if(n<c)throw Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+c+`.
`);let l=b(n,r,o),d=new i(t.getSymbolSize(n));return m(d,n),h(d),g(d,n),v(d,r,0),n>=7&&_(d,n),y(d,l),isNaN(a)&&(a=s.getBestMask(d,v.bind(null,d,r))),s.applyMask(a,d),v(d,r,a),{modules:d,version:n,errorCorrectionLevel:r,maskPattern:a,segments:o}}e.create=function(e,r){if(e===void 0||e===``)throw Error(`No input text`);let i=n.M,a,o;return r!==void 0&&(i=n.from(r.errorCorrectionLevel,n.M),a=u.from(r.version),o=s.from(r.maskPattern),r.toSJISFunc&&t.setToSJISFunction(r.toSJISFunc)),S(e,a,i,o)}})),Bn=s((e=>{function t(e){if(typeof e==`number`&&(e=e.toString()),typeof e!=`string`)throw Error(`Color should be defined as hex string`);let t=e.slice().replace(`#`,``).split(``);if(t.length<3||t.length===5||t.length>8)throw Error(`Invalid hex color: `+e);(t.length===3||t.length===4)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),t.length===6&&t.push(`F`,`F`);let n=parseInt(t.join(``),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:n&255,hex:`#`+t.slice(0,6).join(``)}}e.getOptions=function(e){e||={},e.color||(e.color={});let n=e.margin===void 0||e.margin===null||e.margin<0?4:e.margin,r=e.width&&e.width>=21?e.width:void 0,i=e.scale||4;return{width:r,scale:r?4:i,margin:n,color:{dark:t(e.color.dark||`#000000ff`),light:t(e.color.light||`#ffffffff`)},type:e.type,rendererOpts:e.rendererOpts||{}}},e.getScale=function(e,t){return t.width&&t.width>=e+t.margin*2?t.width/(e+t.margin*2):t.scale},e.getImageWidth=function(t,n){let r=e.getScale(t,n);return Math.floor((t+n.margin*2)*r)},e.qrToImageData=function(t,n,r){let i=n.modules.size,a=n.modules.data,o=e.getScale(i,r),s=Math.floor((i+r.margin*2)*o),c=r.margin*o,l=[r.color.light,r.color.dark];for(let e=0;e<s;e++)for(let n=0;n<s;n++){let u=(e*s+n)*4,d=r.color.light;if(e>=c&&n>=c&&e<s-c&&n<s-c){let t=Math.floor((e-c)/o),r=Math.floor((n-c)/o);d=l[+!!a[t*i+r]]}t[u++]=d.r,t[u++]=d.g,t[u++]=d.b,t[u]=d.a}}})),Vn=s((e=>{var t=Bn();function n(e,t,n){e.clearRect(0,0,t.width,t.height),t.style||={},t.height=n,t.width=n,t.style.height=n+`px`,t.style.width=n+`px`}function r(){try{return document.createElement(`canvas`)}catch{throw Error(`You need to specify a canvas element`)}}e.render=function(e,i,a){let o=a,s=i;o===void 0&&(!i||!i.getContext)&&(o=i,i=void 0),i||(s=r()),o=t.getOptions(o);let c=t.getImageWidth(e.modules.size,o),l=s.getContext(`2d`),u=l.createImageData(c,c);return t.qrToImageData(u.data,e,o),n(l,s,c),l.putImageData(u,0,0),s},e.renderToDataURL=function(t,n,r){let i=r;i===void 0&&(!n||!n.getContext)&&(i=n,n=void 0),i||={};let a=e.render(t,n,i),o=i.type||`image/png`,s=i.rendererOpts||{};return a.toDataURL(o,s.quality)}})),Hn=s((e=>{var t=Bn();function n(e,t){let n=e.a/255,r=t+`="`+e.hex+`"`;return n<1?r+` `+t+`-opacity="`+n.toFixed(2).slice(1)+`"`:r}function r(e,t,n){let r=e+t;return n!==void 0&&(r+=` `+n),r}function i(e,t,n){let i=``,a=0,o=!1,s=0;for(let c=0;c<e.length;c++){let l=Math.floor(c%t),u=Math.floor(c/t);!l&&!o&&(o=!0),e[c]?(s++,c>0&&l>0&&e[c-1]||(i+=o?r(`M`,l+n,.5+u+n):r(`m`,a,0),a=0,o=!1),l+1<t&&e[c+1]||(i+=r(`h`,s),s=0)):a++}return i}e.render=function(e,r,a){let o=t.getOptions(r),s=e.modules.size,c=e.modules.data,l=s+o.margin*2,u=o.color.light.a?`<path `+n(o.color.light,`fill`)+` d="M0 0h`+l+`v`+l+`H0z"/>`:``,d=`<path `+n(o.color.dark,`stroke`)+` d="`+i(c,s,o.margin)+`"/>`,f=`viewBox="0 0 `+l+` `+l+`"`,p=`<svg xmlns="http://www.w3.org/2000/svg" `+(o.width?`width="`+o.width+`" height="`+o.width+`" `:``)+f+` shape-rendering="crispEdges">`+u+d+`</svg>
`;return typeof a==`function`&&a(null,p),p}})),Un=l(s((e=>{var t=vn(),n=zn(),r=Vn(),i=Hn();function a(e,r,i,a,o){let s=[].slice.call(arguments,1),c=s.length,l=typeof s[c-1]==`function`;if(!l&&!t())throw Error(`Callback required as last argument`);if(l){if(c<2)throw Error(`Too few arguments provided`);c===2?(o=i,i=r,r=a=void 0):c===3&&(r.getContext&&o===void 0?(o=a,a=void 0):(o=a,a=i,i=r,r=void 0))}else{if(c<1)throw Error(`Too few arguments provided`);return c===1?(i=r,r=a=void 0):c===2&&!r.getContext&&(a=i,i=r,r=void 0),new Promise(function(t,o){try{t(e(n.create(i,a),r,a))}catch(e){o(e)}})}try{let t=n.create(i,a);o(null,e(t,r,a))}catch(e){o(e)}}e.create=n.create,e.toCanvas=a.bind(null,r.render),e.toDataURL=a.bind(null,r.renderToDataURL),e.toString=a.bind(null,function(e,t,n){return i.render(e,n)})}))(),1);async function Wn(e){return Un.toDataURL(e,{width:240,margin:2,color:{dark:`#000000`,light:`#ffffff`},errorCorrectionLevel:`M`})}var Gn={statusBadgeSuccess:{kWkggS:`xfe0fsp`,kMwMTN:`xiolwv5`,$$css:!0},statusBadgeDefault:{kWkggS:`x1717ss6`,kMwMTN:`xapedy8`,$$css:!0},dialogBody:{kOIVth:`x1v2ro7d`,$$css:!0}};function Kn({filename:e,receiveUrl:t,progress:n,onCancel:r}){let[i,a]=jt(``);Nt(()=>{let e=!0;return Wn(t).then(t=>{e&&a(t)}),()=>{e=!1}},[t]);let o=n?.status||`waiting`,s=`Waiting for phone to scan...`;o===`connecting`?s=`Connecting via WebRTC...`:o===`sending`?s=`Streaming (${n?.routeType===`direct`?`Direct Wi-Fi`:`Relayed`})...`:o===`done`?s=`Transfer complete! Enjoy.`:o===`error`&&(s=`Error: ${n?.error||`Connection dropped`}`);let c=o===`done`,l=o===`sending`,u=n?.percent??0,d=n?dn(n.bytesSent):``,f=n?dn(n.totalBytes):``,p=n?.speedBps?`${dn(n.speedBps)}/s`:``;return B(H,{children:[B(U,{stylex:Gn.dialogBody,children:[B(`div`,{className:`x4z9k3i x137kbjm x2b8uid x37zpob`,children:`Scan this QR code with your phone camera to download directly via Wi-Fi:`}),B(G,{children:B(`div`,{className:`x78zum5 xdt5ytf x6s0dn4 xl56j7k x1v2ro7d`,children:[i?B(`img`,{className:`xx4f8i8 xskilf4 xmkeg23 x1y0btm7 xt9qghg xlmwth5 xfawy5m`,src:i,alt:`Scan QR code to receive M4B`,width:180,height:180}):B(`div`,{className:`xzjbwwf x1b51vyi xlmwth5 xmkeg23 x1y0btm7 xt9qghg xx4f8i8 x78zum5 x6s0dn4 xl56j7k xfifm61 x1svgk49`,children:`Generating QR...`}),B(nn,{stylex:c?Gn.statusBadgeSuccess:Gn.statusBadgeDefault,children:[B(`span`,{...{0:{className:`x1xc55vz xdk7pt x16s7zt2 x1rg5ohu x16b7qwg xl10e8r`},1:{className:`x1xc55vz xdk7pt x16s7zt2 x1rg5ohu x8pteex`}}[!!c<<0]}),B(`span`,{children:s})]})]})}),l&&B(G,{children:[B(`div`,{className:`x78zum5 x6s0dn4 x1qughib xfifm61 x137kbjm`,children:[B(`span`,{children:[d,` / `,f,` `,p?`(${p})`:``]}),B(`span`,{className:`x1xlr1w8 xiruocy`,children:[Math.round(u),`%`]})]}),B(`div`,{className:`xh8yej3 xdk7pt xfh87tc x16s7zt2 xb3r6kr`,children:B(`div`,{className:`x5yr21d x16b7qwg xqwt36l x16s7zt2`,style:{width:`${Math.min(100,Math.max(0,u))}%`}})})]}),B(`div`,{className:`xfifm61 x137kbjm x2b8uid xuxw1ft xb3r6kr xlyipyv x163pfp xy13l1i`,title:e,children:[`File: `,e]})]}),B(W,{children:B(K,{type:`button`,variant:`secondary`,onClick:r,children:`Done / Cancel`})})]})}var qn={footer:{kOIVth:`x167g77z`,$$css:!0}};function Jn({message:e,onRetry:t,onClose:n}){return B(H,{children:[B(U,{children:B(G,{children:B(`div`,{className:`x78zum5 xdt5ytf x6s0dn4 x1ib1h6n x2b8uid x1v2ro7d`,children:[B(`div`,{className:`xqozcyj xo5v014`,children:`⚠️`}),B(`div`,{className:`x1jvydc1 x1xlr1w8 xapedy8`,children:`Unable to process audiobook`}),B(`div`,{className:`x4z9k3i x137kbjm x1evy7pa x13faqbe x1jkqq1h`,children:e})]})})}),B(W,{stylex:qn.footer,children:[t&&B(K,{type:`button`,variant:`primary`,onClick:t,children:`Retry`}),B(K,{type:`button`,variant:`secondary`,onClick:n,children:`Collapse`})]})]})}var Yn={footer:{kOIVth:`x167g77z`,$$css:!0}};function Xn({filename:e,onSelectFile:t,onCancel:n}){let r=Pt(null);return B(H,{children:[B(U,{children:B(G,{children:B(`div`,{className:`x78zum5 xdt5ytf x167g77z`,children:[B(`div`,{className:`xif65rj xapedy8 x1xlr1w8`,children:[`Send `,B(`span`,{className:`xiruocy`,children:e}),` to your phone`]}),B(`div`,{className:`x4z9k3i x137kbjm x37zpob`,children:`Select the downloaded M4B file to begin streaming directly over local Wi-Fi:`})]})})}),B(`input`,{ref:r,type:`file`,accept:`.m4b,audio/*`,style:{display:`none`},onChange:e=>{let n=e.target.files?.[0];n&&t(n)}}),B(W,{stylex:Yn.footer,children:[B(K,{type:`button`,variant:`primary`,onClick:()=>r.current?.click(),children:[B(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[B(`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`}),B(`polyline`,{points:`17 8 12 3 7 8`}),B(`line`,{x1:`12`,y1:`3`,x2:`12`,y2:`15`})]}),B(`span`,{children:`Select M4B File`})]}),B(K,{type:`button`,variant:`secondary`,onClick:n,children:`Cancel`})]})]})}function Zn({state:e}){return Nt(()=>{e.view===`idle`&&e.onButtonClick&&e.onButtonClick()},[e.view,e.onButtonClick]),B(`div`,{className:`xixxii4 xjnlgov xk6ci0l x10ju6z4 xxsgkw5 xw7nakj xt7dq6l xb88tzc xlmwth5 xapedy8 xmkeg23 x1y0btm7 xt9qghg xd1tfsb x1u68hoc x78zum5 xdt5ytf xb3r6kr x1qypyxg x9f619`,role:`dialog`,"aria-modal":`true`,"aria-label":e.headerTitle,children:[B(`header`,{className:`xnnlda6 xnm25rq xyfqnmn xso031l x1q0q8m5 x1n3tmrz x78zum5 x6s0dn4 x1qughib xlmwth5 x87ps6o x2lah0s`,children:[B(`div`,{className:`x78zum5 x6s0dn4 x1v2ro7d xb3r6kr xeuugli`,children:[B(`div`,{className:`x14qfxbe xc9qbxq x16s7zt2 xmkeg23 x1y0btm7 xt9qghg xb3r6kr x78zum5 x6s0dn4 xl56j7k x7enzk4 x2lah0s`,children:e.headerAvatar?B(`img`,{src:e.headerAvatar,alt:`Cover`,className:`xh8yej3 x5yr21d xl1xv1r x16s7zt2`}):B(`span`,{className:`x1j61zf2`,children:`🎧`})}),B(`div`,{className:`x78zum5 xdt5ytf xb3r6kr xeuugli`,children:[B(`span`,{className:`x1xlr1w8 x1jvydc1 x132q4wb xapedy8 xuxw1ft xb3r6kr xlyipyv`,children:e.headerTitle}),B(`span`,{className:`x4z9k3i x137kbjm x132q4wb xuxw1ft xb3r6kr xlyipyv`,children:e.headerStatus})]})]}),B(`button`,{type:`button`,onClick:()=>z.collapseDialog(),className:`x1td3qas x10w6t97 x16s7zt2 x78zum5 x6s0dn4 xl56j7k x137kbjm xltycfy xjbqb8w xezg9lt x19eei9o x1ypdohk xc342km xng3xce x1a2a7pz x2lah0s`,"aria-label":`Collapse dialog`,title:`Collapse`,children:B(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2.5`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:B(`polyline`,{points:`6 9 12 15 18 9`})})})]}),B(`main`,{className:`x98rzlu x78zum5 xdt5ytf x2lwn1j xb3r6kr`,children:[(e.view===`loading`||e.view===`idle`)&&B(Qt,{message:e.loadingMessage||`Checking browser capabilities...`}),e.view===`confirm`&&e.confirmData&&B(on,{result:e.confirmData.result,onConfirm:e.confirmData.onConfirm}),e.view===`progress`&&e.progressData&&B(un,{...e.progressData}),e.view===`complete`&&e.completeData&&B(_n,{...e.completeData}),e.view===`send`&&e.sendData&&B(Kn,{...e.sendData}),e.view===`bridge-select`&&e.bridgeData&&B(Xn,{filename:e.bridgeData.filename,onSelectFile:e.bridgeData.onSelectFile,onCancel:e.bridgeData.onCancel}),e.view===`error`&&e.errorData&&B(Jn,{message:e.errorData.message,onRetry:e.errorData.onRetry,onClose:()=>z.collapseDialog()})]})]})}function Qn(){let[e,t]=jt(z.getState());return Nt(()=>z.subscribe(e=>{t(e)}),[]),B(N,{children:[e.buttonVisible&&B(Gt,{label:e.buttonLabel,coverUrl:e.coverUrl,onClick:()=>{e.onButtonClick?e.onButtonClick():z.toggleDialog()}}),e.isDialogOpen&&B(Zn,{state:e})]})}var $n=`:host{all:initial;color:#262626;box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-size:14px;line-height:1.4}*,:before,:after{box-sizing:inherit;font-family:inherit}button,input,select,textarea{-webkit-appearance:none;appearance:none;font:inherit;color:inherit;background:0 0;border:none;outline:none;margin:0;padding:0}@keyframes ptmPopIn{0%{opacity:0;transform:scale(.92)translateY(12px)}to{opacity:1;transform:scale(1)translateY(0)}}@keyframes ptmBounce{0%,to{transform:translateY(0)}50%{transform:translateY(-3px)}}@keyframes ptmSpin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes ptmPing{75%,to{opacity:0;transform:scale(2)}}@keyframes ptmPulse{0%,to{opacity:1}50%{opacity:.4}}`,Y=null,X=null,er=null;function Z(){if(Y)return Y;X=document.getElementById(`ptm-root`),X||(X=document.createElement(`div`),X.id=`ptm-root`,document.body.appendChild(X)),Y=X.shadowRoot||X.attachShadow({mode:`open`}),er=document.createElement(`style`);let e=typeof window<`u`&&window.__PTM_USERSCRIPT_STYLES__||``;return er.textContent=$n+`
`+e,Y.appendChild(er),_t(B(Qn,{}),Y),Y}function tr(e,t){let n=Z();return z.setFloatingButton(!0,R(),t,e),n.querySelector(`button`)||n.firstElementChild||n}function nr(e,t){z.setFloatingButton(!0,e,t)}function rr(){z.setFloatingButton(!1)}function ir(){return z.getState().isDialogOpen}function ar(){z.collapseDialog()}function or(e){Z(),z.showLoading(e)}function sr(e){Z(),z.showConfirm(e.result,e.onConfirm)}async function cr(e){Z(),z.showSend(e)}function lr(e){z.updateSendProgress(e)}function ur(e,t){Z(),z.showError(e,t)}function dr(e){sr({result:e.result,onConfirm:e.onConfirm})}async function fr(e){await cr({filename:e.filename,receiveUrl:e.receiveUrl,onCancel:e.onCancel})}function pr(e){lr(e)}function mr(){ar()}function Q(e,t){typeof GM_setValue==`function`?GM_setValue(e,t):typeof globalThis.GM_setValue==`function`&&globalThis.GM_setValue(e,t)}function hr(e,t){return typeof GM_getValue==`function`?GM_getValue(e,t):typeof globalThis.GM_getValue==`function`?globalThis.GM_getValue(e,t):t}function gr(e){typeof GM_openInTab==`function`?GM_openInTab(e,{active:!0}):typeof globalThis.GM_openInTab==`function`?globalThis.GM_openInTab(e,{active:!0}):window.open(e,`_blank`)}function _r(e,t){if(typeof GM_addValueChangeListener==`function`)return GM_addValueChangeListener(e,t)}function vr(e){typeof GM_removeValueChangeListener==`function`&&GM_removeValueChangeListener(e)}var yr=`ptm:send-request`;function br(e){let t=hr(yr,null);t&&Date.now()-t.ts<6e4&&(Q(yr,null),e(t));let n=_r(yr,(t,n,r,i)=>{if(r&&typeof r==`object`){let t=r;t.ts&&Date.now()-t.ts<6e4&&(Q(yr,null),e(t))}});return()=>{n!==void 0&&vr(n)}}var xr=`ptm:convert-request`,Sr=`https://page-to-m4b.viettr.work`;function Cr(){let e=Sr;return hr(`ptm:website-url`,e.endsWith(`/`)?e:`${e}/`)}function wr(e){Q(`ptm:website-url`,e)}var $=0;function Tr(e){let t=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,n={data:e,ts:Date.now()};Q(`ptm:convert:${t}`,n),Q(xr,n),gr(`${Cr().replace(/#.*$/,``)}#convert=${t}`)}function Er(e){let t=typeof location<`u`&&location.hash.match(/#convert=([a-zA-Z0-9_-]+)/);if(t){let n=`ptm:convert:${t[1]}`,r=hr(n,null);if(r&&Date.now()-r.ts<12e4)return $=r.ts,Q(n,null),typeof history<`u`&&history.replaceState&&history.replaceState(null,``,location.pathname+location.search),e(r.data),()=>{}}let n=hr(xr,null);n&&Date.now()-n.ts<6e4&&n.ts>$&&($=n.ts,e(n.data));let r=_r(xr,(t,n,r)=>{if(r&&typeof r==`object`){let t=r;t.ts&&Date.now()-t.ts<6e4&&t.ts>$&&($=t.ts,e(t.data))}});return()=>{r&&vr(r)}}function Dr(e,t,n,r){let i=new WebSocket(`${r||`wss://page-to-m4b.viettr.work/ws`}/${e}?role=${t}`),a=Promise.resolve();return i.onmessage=e=>{try{let t=JSON.parse(e.data);a=a.then(async()=>{await n(t)}).catch(e=>{console.error(`[Signaling] Error processing message:`,e)})}catch(e){console.error(`[Signaling] Failed to parse message JSON:`,e)}},{ready:new Promise((e,t)=>{i.onopen=()=>e(),i.onerror=()=>t(Error(`Could not connect to signaling service`))}),send:e=>{i.readyState===WebSocket.OPEN&&i.send(JSON.stringify(e))},close:()=>{try{i.close(1e3,`closed`)}catch{}},onClose:e=>{i.onclose=e}}}var Or=[{urls:[`stun:stun.cloudflare.com:3478`]},{urls:[`stun:stun.l.google.com:19302`]}];async function kr(){return Or}async function Ar(e){try{let t=await e.getStats(),n=null;if(t.forEach(e=>{e.type===`transport`&&e.selectedCandidatePairId&&(n=t.get(e.selectedCandidatePairId))}),n||t.forEach(e=>{e.type===`candidate-pair`&&(e.state===`succeeded`||e.nominated||e.selected)&&(n=e)}),!n)return`unknown`;let r=t.get(n.localCandidateId),i=t.get(n.remoteCandidateId);return r?.candidateType===`relay`||i?.candidateType===`relay`?`relay`:r?.candidateType?`direct`:`unknown`}catch{return`unknown`}}var jr=65536,Mr=8388608,Nr=1048576,Pr=3e4;async function Fr(e,t,n,r){let i=!1,a=!1,o,s=await kr(),c=new RTCPeerConnection({iceServers:s}),l=c.createDataChannel(`file`,{ordered:!0});l.bufferedAmountLowThreshold=Nr,l.binaryType=`arraybuffer`;let u=Dr(n,`host`,m),d=()=>{if(!i){i=!0,o&&clearTimeout(o);try{l.readyState===`open`&&l.close()}catch{}try{c.close()}catch{}try{u.close()}catch{}}},f=(e,t=!1)=>{a||i||(a=!0,d(),r.onError(e,t))};c.onicecandidate=e=>{u.send({type:`ice`,candidate:e.candidate?e.candidate.toJSON():null})},c.oniceconnectionstatechange=()=>{c.iceConnectionState===`failed`&&f(`Devices could not establish a direct peer connection. Client isolation or firewall may be active.`,!0)};let p=!1;async function m(e){if(!(i||a)){if(e.type===`peer-joined`||e.type===`peer-present`){if(p)return;p=!0,r.onStatus(`connecting`),o=setTimeout(()=>{f(`Connection timed out while negotiating with mobile device.`,!0)},Pr);try{let e=await c.createOffer();await c.setLocalDescription(e),u.send({type:`offer`,sdp:c.localDescription.sdp})}catch(e){f(e instanceof Error?e.message:`Failed to create WebRTC offer`)}}else if(e.type===`answer`)try{await c.setRemoteDescription({type:`answer`,sdp:e.sdp})}catch(e){f(e instanceof Error?e.message:`Failed to apply WebRTC answer`)}else if(e.type===`ice`&&e.candidate)try{await c.addIceCandidate(e.candidate)}catch(e){console.warn(`[Sender] Non-fatal ICE candidate error:`,e)}else e.type===`peer-left`&&!a&&f(`Mobile device disconnected before transfer completed.`)}}l.onopen=async()=>{o&&clearTimeout(o),r.onRoute(await Ar(c)),r.onStatus(`sending`);try{await h()}catch(e){f(e instanceof Error?e.message:`File transfer failed`)}},l.onmessage=t=>{if(typeof t.data==`string`)try{let n=JSON.parse(t.data);n.type===`received`&&n.bytes===e.size&&!a&&(a=!0,r.onStatus(`done`),setTimeout(d,1e3))}catch(e){console.warn(`[Sender] Received non-JSON acknowledgment:`,e)}};async function h(){let n=c.sctp?.maxMessageSize||jr,i=Math.min(jr,n);l.send(JSON.stringify({type:`meta`,name:t,size:e.size,mime:`audio/x-m4b`}));let a=0,o=performance.now();for(;a<e.size;){if(l.readyState!==`open`)throw Error(`Connection closed prematurely during transfer`);l.bufferedAmount>Mr&&await new Promise(e=>{let t=()=>{l.removeEventListener(`bufferedamountlow`,t),e()};l.addEventListener(`bufferedamountlow`,t)});let t=await e.slice(a,a+i).arrayBuffer();l.send(t),a+=t.byteLength;let n=(performance.now()-o)/1e3,s=n>0?a/n:0;r.onProgress({fraction:a/e.size,transferredBytes:a,totalBytes:e.size,speedBytesPerSec:s})}l.send(JSON.stringify({type:`end`}))}return u.ready.catch(e=>{f(e.message||`Could not connect to signaling service`)}),r.onStatus(`waiting`),d}function Ir(){let e=crypto.getRandomValues(new Uint8Array(16));return btoa(String.fromCharCode(...e)).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)}function Lr(){if(typeof document>`u`)return;let e=document.querySelector(`meta[property="og:image"], meta[property="twitter:image"], meta[name="og:image"], meta[itemprop="image"]`)?.content?.trim();if(e&&(e.startsWith(`http://`)||e.startsWith(`https://`)||e.startsWith(`/`)))try{return new URL(e,location.href).href}catch{return e}}function Rr(){let e=null,t=!1,n=({bookTitle:t,bookAuthor:r})=>{e&&(Tr({...e,bookTitle:t,bookAuthor:r}),or(`Transferring to Web App. Please continue in the new tab.`),setTimeout(()=>{ar(),e&&dr({result:e,onConfirm:n})},1500))},r=async()=>{if(ir()&&(e||t)){ar();return}if(e){dr({result:e,onConfirm:n});return}if(!t){t=!0,or(`Extracting audiobook chapters from page...`);try{let r=await Fe();e=r,t=!1,nr(R(),r.coverUrl),dr({result:r,onConfirm:n})}catch(n){t=!1,ur(n instanceof Error?n.message:String(n),()=>{e=null,r()})}}},i=()=>{if(Pe(location.href)){let t=e?.coverUrl||Lr();tr(r,t)}else rr(),ar()};if(i(),typeof window<`u`&&(window.addEventListener(`popstate`,()=>{e=null,z.reset(),i()}),window.addEventListener(`urlchange`,()=>{e=null,z.reset(),i()})),typeof GM_registerMenuCommand==`function`)try{GM_registerMenuCommand(`Convert Audiobook on Page`,r),GM_registerMenuCommand(`Open Page-to-M4B Web App`,()=>{window.open(Cr(),`_blank`)}),GM_registerMenuCommand(`Set Web App URL`,()=>{let e=Cr(),t=prompt(`Enter Page-to-M4B Web App URL:`,e);t&&t.trim()&&(wr(t.trim()),alert(`Web App URL set to: ${t.trim()}`))})}catch{}}function zr(){let e=typeof unsafeWindow<`u`?unsafeWindow:window,t=null,n=t=>{try{e.__PTM_CONVERT_REQUEST__=t,e.dispatchEvent(new CustomEvent(`ptm:convert-request`,{detail:t}))}catch{}};Er(e=>{t=e,n(e)}),e.addEventListener(`ptm:web-ready`,()=>{t&&=(n(t),null)}),br(e=>{Z(),z.showBridgeSelect(e.filename,async t=>{let n=Ir(),r=`${location.origin}/receive#${n}`,i;await fr({filename:t.name||e.filename,receiveUrl:r,onCancel:()=>{i?.(),mr()}}),i=await Fr(t,t.name||e.filename,n,{onStatus:e=>{pr({status:e,percent:e===`done`?100:0,bytesSent:0,totalBytes:t.size})},onProgress:e=>{pr({status:`sending`,percent:Math.round(e.fraction*100),bytesSent:e.transferredBytes,totalBytes:e.totalBytes,speedBps:e.speedBytesPerSec})},onRoute:e=>{pr({status:`sending`,percent:0,bytesSent:0,totalBytes:t.size,routeType:e})},onError:e=>{pr({status:`error`,percent:0,bytesSent:0,totalBytes:t.size,error:e})}})},()=>{ar()})})}function Br(){typeof location<`u`&&(location.hostname===`page-to-m4b.viettr.work`||location.hostname.endsWith(`.workers.dev`))?zr():Rr()}typeof document<`u`&&(document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,Br):Br())})();
