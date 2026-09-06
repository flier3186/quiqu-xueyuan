# -*- coding: utf-8 -*-
# 抠底处理：假透明棋盘格 → 真 alpha；清除右下角 AI 水印；缩放 512
from PIL import Image
import os, sys

SRC = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(SRC, 'out')
os.makedirs(OUT, exist_ok=True)

MAP = {
    '2D动画风格可爱小黑猫全身坐姿_中国经典动画画风_纯黑色圆润_2026-09-06T03-58-04.png': 'cat-idle.png',
    os.path.join('mood-celebrate', '保持这只小黑猫的角色设计完全不变_同样的大圆黄绿眼睛_白爪__2026-09-06T03-59-32.png'): 'cat-celebrate.png',
    '保持这只小黑猫的角色设计完全不变_同样的大圆黄绿眼睛_白爪__2026-09-06T03-58-45.png': 'cat-comfort.png',
    os.path.join('mood-eat', '保持这只小黑猫的角色设计完全不变_同样的大圆黄绿眼睛_白爪__2026-09-06T03-59-54.png'): 'cat-eat.png',
    '保持这只小黑猫的角色设计完全不变_同样的大圆黄绿眼睛_白爪__2026-09-06T03-58-46.png': 'cat-sleep.png',
}

def is_bg_color(px):
    """棋盘格两色：近白 与 浅灰，均低饱和高亮度"""
    r, g, b = px[0], px[1], px[2]
    mx, mn = max(r, g, b), min(r, g, b)
    sat = mx - mn
    return sat < 26 and mx > 175  # 白~浅灰棋盘格（灰格约 #cccccc-e5e5e5）

def process(path, out_name):
    img = Image.open(path).convert('RGBA')
    w, h = img.size
    px = img.load()
    # 1. 从四边泛洪：背景连通区 → 透明（BFS）
    from collections import deque
    seen = [[False]*w for _ in range(h)]
    q = deque()
    for x in range(w):
        for y in (0, h-1):
            if is_bg_color(px[x, y]) and not seen[y][x]:
                seen[y][x] = True; q.append((x, y))
    for y in range(h):
        for x in (0, w-1):
            if is_bg_color(px[x, y]) and not seen[y][x]:
                seen[y][x] = True; q.append((x, y))
    removed = 0
    while q:
        x, y = q.popleft()
        px[x, y] = (0, 0, 0, 0)
        removed += 1
        for dx, dy in ((1,0),(-1,0),(0,1),(0,-1)):
            nx, ny = x+dx, y+dy
            if 0 <= nx < w and 0 <= ny < h and not seen[ny][nx] and is_bg_color(px[nx, ny]):
                seen[ny][nx] = True; q.append((nx, ny))
    # 2. 边缘去 halo：透明邻居的浅色像素 → 透明（迭代 2 轮）
    for _ in range(2):
        to_clear = []
        for y in range(h):
            for x in range(w):
                if px[x, y][3] == 0: continue
                if not is_bg_color(px[x, y]): continue
                for dx, dy in ((1,0),(-1,0),(0,1),(0,-1)):
                    nx, ny = x+dx, y+dy
                    if 0 <= nx < w and 0 <= ny < h and px[nx, ny][3] == 0:
                        to_clear.append((x, y)); break
        for x, y in to_clear:
            px[x, y] = (0, 0, 0, 0)
    # 3. 水印清除：右下角区域残留的灰黑字直接抹掉（该区域不压猫体）
    for y in range(h-90, h):
        for x in range(w-320, w):
            p = px[x, y]
            if p[3] != 0 and max(p[0], p[1], p[2]) - min(p[0], p[1], p[2]) < 60 and max(p[0],p[1],p[2]) < 230:
                px[x, y] = (0, 0, 0, 0)
    # 4. 裁剪到内容包围盒 + 居中放到 512x512 画布
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
    img.thumbnail((500, 500), Image.LANCZOS)
    canvas = Image.new('RGBA', (512, 512), (0, 0, 0, 0))
    canvas.paste(img, ((512 - img.width)//2, (512 - img.height)//2), img)
    canvas.save(os.path.join(OUT, out_name), optimize=True)
    print(out_name, 'bg_removed_px=', removed, 'size=', canvas.size)

for src, dst in MAP.items():
    process(os.path.join(SRC, src), dst)
print('DONE')
