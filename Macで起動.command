#!/bin/zsh
set -eu
cd -- "${0:A:h}"
python3 - <<'PY'
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import webbrowser

with ThreadingHTTPServer(('127.0.0.1', 8795), SimpleHTTPRequestHandler) as server:
    url = 'http://127.0.0.1:8795/'
    print(url, flush=True)
    webbrowser.open(url)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
PY
