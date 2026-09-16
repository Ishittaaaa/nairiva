from PIL import Image
from collections import deque

SRC = 'newlogo.png'          # original at repo root
OUT = 'assets/newlogo.png'   # cleaned transparent version used by the site

img = Image.open(SRC).convert('RGBA')
w, h = img.size
px = img.load()
print('source', w, 'x', h)

bg = px[0, 0][:3]
print('background rgb', bg)

tol = 45


def close(c):
    return sum((c[i] - bg[i]) ** 2 for i in range(3)) ** 0.5 < tol


# Flood-fill from all border pixels matching the background color
visited = set()
q = deque()
for x in range(w):
    for y in (0, h - 1):
        if (x, y) not in visited and close(px[x, y][:3]):
            visited.add((x, y)); q.append((x, y))
for y in range(h):
    for x in (0, w - 1):
        if (x, y) not in visited and close(px[x, y][:3]):
            visited.add((x, y)); q.append((x, y))

while q:
    cx, cy = q.popleft()
    for nx, ny in ((cx - 1, cy), (cx + 1, cy), (cx, cy - 1), (cx, cy + 1)):
        if 0 <= nx < w and 0 <= ny < h and (nx, ny) not in visited and close(px[nx, ny][:3]):
            visited.add((nx, ny)); q.append((nx, ny))

for (x, y) in visited:
    r, g, b, a = px[x, y]
    px[x, y] = (r, g, b, 0)

print('transparent pixels', len(visited), 'of', w * h)

# Tight-crop to the non-transparent content with a small margin
minx, miny, maxx, maxy = w, h, -1, -1
for y in range(h):
    for x in range(w):
        if px[x, y][3] > 0:
            minx = min(minx, x); maxx = max(maxx, x)
            miny = min(miny, y); maxy = max(maxy, y)

margin = 8
minx = max(0, minx - margin); miny = max(0, miny - margin)
maxx = min(w - 1, maxx + margin); maxy = min(h - 1, maxy + margin)
img = img.crop((minx, miny, maxx + 1, maxy + 1))
print('cropped bbox', (minx, miny, maxx, maxy), '->', img.size)

# Scale up 2x with LANCZOS for a crisper display
img = img.resize((img.size[0] * 2, img.size[1] * 2), Image.LANCZOS)
img.save(OUT)
print('saved', OUT, img.size)