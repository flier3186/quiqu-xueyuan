# -*- coding: utf-8 -*-
"""批量 matting pet3d 全部 PNG -> 真透明底（Python 版，规避 bash 路径问题）"""
import subprocess, shutil, os, re, sys, glob

TOKEN = sys.argv[1]
SKILL = r"E:/workspace/WorkBuddy/resources/app.asar.unpacked/resources/plugins/workbuddy-builtin/skills/buddy-image-processing/scripts/buddy-image-processing.py"
PY = r"C:/Users/LEO/.workbuddy/binaries/python/versions/3.13.12/python.exe"
SRC_DIR = r"E:\workspace\project03-奇趣学园\src\quiqu-xueyuan\assets\pet3d"
OUT_DIR = r"E:\workspace\pet3d-matted"
os.makedirs(OUT_DIR, exist_ok=True)

# 已完成的 dragon-idle 结果先收进来
done_flag = os.path.join(OUT_DIR, 'dragon-idle.png')

files = sorted(glob.glob(os.path.join(SRC_DIR, '*.png')))
ok, fail = 0, []
for f in files:
    name = os.path.basename(f)
    dst = os.path.join(OUT_DIR, name)
    if os.path.exists(dst) and os.path.getsize(dst) > 0:
        print('SKIP', name, flush=True); ok += 1; continue
    print('== matting', name, flush=True)
    for attempt in range(2):
        try:
            r = subprocess.run([PY, SKILL, 'image-edit', '--operation', 'matting',
                                '--image-file', f, '--token', TOKEN],
                               capture_output=True, text=True, timeout=240)
            m = re.search(r'"path":\s*"([^"]+)"', r.stdout)
            if m and os.path.exists(m.group(1)) and os.path.getsize(m.group(1)) > 0:
                shutil.copyfile(m.group(1), dst)
                print('   OK', name, flush=True); ok += 1; break
            else:
                print('   attempt', attempt, 'no result:', r.stdout[-200:], r.stderr[-200:], flush=True)
                if attempt == 1: fail.append(name)
        except Exception as e:
            print('   EXC', attempt, name, e, flush=True)
            if attempt == 1: fail.append(name)

print('DONE ok=%d fail=%d %s' % (ok, len(fail), fail), flush=True)
