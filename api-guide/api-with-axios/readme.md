<h3 align="center">
Learning Axios
   <br>
</h3>     

Below you can find the axios documentation and how to use it in your projects and make sure you have the right information on the subject.
 
 ---
<br><br>
<div align="center">
   <a href="https://axios-http.com"><img src="https://axios-http.com/assets/logo.svg" /></a><br>
</div>

<p align="center">Promise based HTTP client for the browser and node.js</p>

<p align="center">
    <a href="https://axios-http.com/"><b>Website</b></a> •
    <a href="https://axios-http.com/docs/intro"><b>Documentation</b></a>
</p>

<div align="center">

[![npm version](https://img.shields.io/npm/v/axios.svg?style=flat-square)](https://www.npmjs.org/package/axios)
[![CDNJS](https://img.shields.io/cdnjs/v/axios.svg?style=flat-square)](https://cdnjs.com/libraries/axios)
[![Build status](https://img.shields.io/github/actions/workflow/status/axios/axios/ci.yml?branch=v1.x&label=CI&logo=github&style=flat-square)](https://github.com/axios/axios/actions/workflows/ci.yml)
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod&style=flat-square)](https://gitpod.io/#https://github.com/axios/axios)
[![code coverage](https://img.shields.io/coveralls/mzabriskie/axios.svg?style=flat-square)](https://coveralls.io/r/mzabriskie/axios)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=axios&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=axios)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/axios?style=flat-square)](https://bundlephobia.com/package/axios@latest)
[![npm downloads](https://img.shields.io/npm/dm/axios.svg?style=flat-square)](https://npm-stat.com/charts.html?package=axios)
[![gitter chat](https://img.shields.io/gitter/room/mzabriskie/axios.svg?style=flat-square)](https://gitter.im/mzabriskie/axios)
[![code helpers](https://www.codetriage.com/axios/axios/badges/users.svg)](https://www.codetriage.com/axios/axios)
[![Known Vulnerabilities](https://snyk.io/test/npm/axios/badge.svg)](https://snyk.io/test/npm/axios)




</div>

## Table of Contents

<details>
<summary>Click to toggle of <strong>`Table of Contents`</strong></summary>
  </br>

  - [Features](#features)
  - [Browser Support](#browser-support)
  - [Installing](#installing)
    - [Package manager](#package-manager)
    - [CDN](#cdn)
  - [Example](#example)
  - [Axios API](#axios-api)
  - [Request method aliases](#request-method-aliases)
  - [Concurrency 👎](#concurrency-deprecated)
  - [Creating an instance](#creating-an-instance)
  - [Instance methods](#instance-methods)
  - [Request Config](#request-config)
  - [Response Schema](#response-schema)
  - [Config Defaults](#config-defaults)
    - [Global axios defaults](#global-axios-defaults)
    - [Custom instance defaults](#custom-instance-defaults)
    - [Config order of precedence](#config-order-of-precedence)
  - [Interceptors](#interceptors)
    - [Multiple Interceptors](#multiple-interceptors)
  - [Handling Errors](#handling-errors)
  - [Cancellation](#cancellation)
    - [AbortController](#abortcontroller)
    - [CancelToken 👎](#canceltoken-deprecated)
  - [Using application/x-www-form-urlencoded format](#using-applicationx-www-form-urlencoded-format)
    - [URLSearchParams](#urlsearchparams)
    - [Query string](#query-string-older-browsers)
    - [🆕 Automatic serialization](#-automatic-serialization-to-urlsearchparams)
  - [Using multipart/form-data format](#using-multipartform-data-format)
    - [FormData](#formdata)
    - [🆕 Automatic serialization](#-automatic-serialization-to-formdata)
  - [Files Posting](#files-posting)
  - [HTML Form Posting](#-html-form-posting-browser)
  - [🆕 Progress capturing](#-progress-capturing)
  - [🆕 Rate limiting](#-progress-capturing)
  - [🆕 AxiosHeaders](#-axiosheaders)
  - [Semver](#semver)
  - [Promises](#promises)
  - [TypeScript](#typescript)
  - [Resources](#resources)
  - [Credits](#credits)
  - [License](#license)

</details>

## Features

- Make [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) from the browser

- Make [http](https://nodejs.org/api/http.html) requests from node.js

- Supports the [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API

- Intercept request and response
- Transform request and response data
- Cancel requests
- Automatic transforms for [JSON](https://www.json.org/json-en.html) data

- 🆕 Automatic data object serialization to `multipart/form-data` and `x-www-form-urlencoded` body encodings
- Client side support for protecting against [XSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery)

## Browser Support

![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |

[![Browser Matrix](https://saucelabs.com/open_sauce/build_matrix/axios.svg)](https://saucelabs.com/u/axios)

---

### Some words of what a learning with AXIOS

Axios is a library of JavaScript how to make it easy to use, based on API FETCH. but also provides a few features interisting, like the ability to cancel a request and return a response. also provides a error handling function that makes it easy to use.


## 🙋Contact

<p align="center">
<a href="https://linkedin.com/in/https://www.linkedin.com/in/franklinmacedodias/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="Perfil de Franklin no Linkedin" height="30" width="40" /></a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="https://medium.com/@frankmcdias" target="blank"><img align="center" src="../src/Medium-logo.svg" alt="Perfil de Franklin Macedo no site da Medium" height="30" width="140" /></a>
</p>