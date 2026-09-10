import os
import shutil
import zipfile
from xml.etree import ElementTree as ET

ppt = r"d:\nairiva\NEWDESIGN Slides Asia_USA_2026.pptx"
out_dir = r"d:\nairiva\assets\slide-extract"
os.makedirs(out_dir, exist_ok=True)

z = zipfile.ZipFile(ppt)
EMBED = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed"
A_NS = "{http://schemas.openxmlformats.org/drawingml/2006/main}"
P_NS = "{http://schemas.openxmlformats.org/presentationml/2006/main}"


def relmap_for(slide_num: int):
    rels = f"ppt/slides/_rels/slide{slide_num}.xml.rels"
    rels_root = ET.fromstring(z.read(rels))
    relmap = {}
    for rel in rels_root:
        rid = rel.attrib.get("{http://schemas.openxmlformats.org/package/2006/relationships}Id") or rel.attrib.get("Id")
        target = rel.attrib.get("Target")
        if rid and target:
            relmap[rid] = target.replace("../", "ppt/")
    return relmap


def area(cx, cy):
    return int(cx or 0) * int(cy or 0)


for slide_num in range(1, 60):
    slide = f"ppt/slides/slide{slide_num}.xml"
    if slide not in z.namelist():
        continue
    root = ET.fromstring(z.read(slide))
    relmap = relmap_for(slide_num)
    pics = []
    for pic in root.iter(f"{P_NS}pic"):
        cx = cy = None
        for el in pic.iter():
            if el.tag.endswith("}ext"):
                cx = el.attrib.get("cx")
                cy = el.attrib.get("cy")
        for blip in pic.iter(f"{A_NS}blip"):
            rid = blip.attrib.get(EMBED)
            target = relmap.get(rid)
            if not target:
                continue
            low = target.lower()
            if low.endswith((".jpeg", ".jpg", ".png")) and area(cx, cy) > 50_000_000_000:
                pics.append((area(cx, cy), slide_num, target))
    if pics:
        pics.sort(reverse=True)
        a, sn, target = pics[0]
        base = os.path.basename(target)
        dest = os.path.join(out_dir, f"slide{sn}_{base}")
        if not os.path.exists(dest):
            with z.open(target) as src, open(dest, "wb") as dst:
                shutil.copyfileobj(src, dst)
        print(f"slide{sn}: {base} area={a}")
