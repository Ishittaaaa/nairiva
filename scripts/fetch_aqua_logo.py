import re
import urllib.request

url = "https://aquaforall.org/"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
html = urllib.request.urlopen(req, timeout=20).read().decode("utf-8", "replace")
for pattern in (r'src="([^"]+)"', r"href='(https://[^']+\.(?:png|svg|jpg|jpeg))"):
    for m in re.findall(pattern, html, re.I):
        if any(x in m.lower() for x in ("logo", "aqua", "brand", "site-icon")):
            print(m)
