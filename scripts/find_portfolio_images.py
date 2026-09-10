import re
import zipfile
from xml.etree import ElementTree as ET

ppt = r"d:\nairiva\NEWDESIGN Slides Asia_USA_2026.pptx"
z = zipfile.ZipFile(ppt)

keywords = (
    "Infrastructure",
    "Nature",
    "Financial Institutions",
    "New Business",
    "water infrastructure",
    "Nature based",
)

for slide_path in sorted(n for n in z.namelist() if n.startswith("ppt/slides/slide") and n.endswith(".xml")):
    data = z.read(slide_path).decode("utf-8", errors="ignore")
    if not any(k.lower() in data.lower() for k in keywords):
        continue
    texts = re.findall(r"<a:t>([^<]{3,120})</a:t>", data)
    interesting = [t for t in texts if any(k.lower() in t.lower() for k in keywords)]
    if interesting:
        print("\n===", slide_path, "===")
        for t in interesting[:8]:
            print(" ", t[:100])
