import re
import zipfile
from xml.etree import ElementTree as ET

ppt = r"d:\nairiva\NEWDESIGN Slides Asia_USA_2026.pptx"
z = zipfile.ZipFile(ppt)
slide = "ppt/slides/slide32.xml"
rels = "ppt/slides/_rels/slide32.xml.rels"
root = ET.fromstring(z.read(slide))
rels_root = ET.fromstring(z.read(rels))
relmap = {}
for rel in rels_root:
    rid = rel.attrib.get("{http://schemas.openxmlformats.org/package/2006/relationships}Id") or rel.attrib.get("Id")
    target = rel.attrib.get("Target")
    if rid:
        relmap[rid] = target

print("Image relationships:")
for k, v in relmap.items():
    if "media" in v:
        print(k, v)

xml = z.read(slide).decode("utf-8")
for m in re.finditer(r'r:embed="([^"]+)"', xml):
    rid = m.group(1)
    print("embed", rid, "->", relmap.get(rid))

for pic in root.iter("{http://schemas.openxmlformats.org/presentationml/2006/main}pic"):
    name = None
    for el in pic.iter():
        if el.tag.endswith("}cNvPr"):
            name = el.attrib.get("name")
    for blip in pic.iter("{http://schemas.openxmlformats.org/drawingml/2006/main}blip"):
        rid = blip.attrib.get("{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed")
        print("PIC", name, "->", relmap.get(rid))
