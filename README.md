# server-timing-header bug minimal example

## Setup

```
node index.js
curl localhost:8880 -D -
```

## Expected output

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 8
ETag: W/"8-bmF+T8naPelpPqxZkGE1Q7hsY/k"
server-timing: response;dur=1
Date: Thu, 25 Nov 2021 08:44:28 GMT
Connection: keep-alive
Keep-Alive: timeout=5

Response
```

## Actual output

```
HTTP/1.1 500 Internal Server Error
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 1285
ETag: W/"8-bmF+T8naPelpPqxZkGE1Q7hsY/k"
Content-Security-Policy: default-src 'none'
X-Content-Type-Options: nosniff
Date: Thu, 25 Nov 2021 08:42:11 GMT
Connection: keep-alive
Keep-Alive: timeout=5

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>TypeError: Cannot read property &#39;server-timing&#39; of undefined<br> &nbsp; &nbsp;at ServerTiming.addHeaders (/home/phz/workspace/server-timing-header-bug/node_modules/server-timing-header/index.js:283:37)<br> &nbsp; &nbsp;at ServerResponse.&lt;anonymous&gt; (/home/phz/workspace/server-timing-header-bug/node_modules/server-timing-header/index.js:426:30)<br> &nbsp; &nbsp;at ServerResponse.writeHead (/home/phz/workspace/server-timing-header-bug/node_modules/on-headers/index.js:35:16)<br> &nbsp; &nbsp;at ServerResponse._implicitHeader (_http_server.js:239:8)<br> &nbsp; &nbsp;at write_ (_http_outgoing.js:654:9)<br> &nbsp; &nbsp;at ServerResponse.end (_http_outgoing.js:766:5)<br> &nbsp; &nbsp;at ServerResponse.send (/home/phz/workspace/server-timing-header-bug/node_modules/express/lib/response.js:221:10)<br> &nbsp; &nbsp;at /home/phz/workspace/server-timing-header-bug/index.js:9:7<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/home/phz/workspace/server-timing-header-bug/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at next (/home/phz/workspace/server-timing-header-bug/node_modules/express/lib/router/route.js:137:13)</pre>
</body>
</html>

```

## Error produced by express

```
TypeError: Cannot read property 'server-timing' of undefined
    at ServerTiming.addHeaders (/home/phz/workspace/server-timing-header-bug/node_modules/server-timing-header/index.js:283:37)
    at ServerResponse.<anonymous> (/home/phz/workspace/server-timing-header-bug/node_modules/server-timing-header/index.js:426:30)
    at ServerResponse.writeHead (/home/phz/workspace/server-timing-header-bug/node_modules/on-headers/index.js:35:16)
    at ServerResponse._implicitHeader (_http_server.js:239:8)
    at write_ (_http_outgoing.js:654:9)
    at ServerResponse.end (_http_outgoing.js:766:5)
    at ServerResponse.send (/home/phz/workspace/server-timing-header-bug/node_modules/express/lib/response.js:221:10)
    at /home/phz/workspace/server-timing-header-bug/index.js:9:7
    at Layer.handle [as handle_request] (/home/phz/workspace/server-timing-header-bug/node_modules/express/lib/router/layer.js:95:5)
    at next (/home/phz/workspace/server-timing-header-bug/node_modules/express/lib/router/route.js:137:13)
```
