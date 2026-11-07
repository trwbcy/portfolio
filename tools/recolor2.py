"""Recolor any artwork into the TRWBCY portfolio purple, matched to the dark card set.

v2 of recolor_purple.py, built for mixed source art (light paper, large color fields):
  - light-paper art is inverted automatically, so every card sits on a dark ground
  - overall tone is pulled down to the same darkness as the other cards
  - color areas become a richer violet instead of a white glow, so big blue/red
    fields no longer blow out; small accents still get a soft glow

Usage:
    python recolor2.py input.png [output.jpg] [--invert | --no-invert]
Writes an 800x450 JPG (default: <input>-card-800x450.jpg).
Needs: pip install pillow numpy
"""
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter, ImageOps


def hx(h):
    return np.array([int(h[i:i + 2], 16) for i in (1, 3, 5)], dtype=float)


STOPS = [(0.0, hx('#0E0D12')), (0.22, hx('#1C1630')), (0.58, hx('#5B2FC9')),
         (0.88, hx('#B4A0EE')), (1.0, hx('#EAE4FA'))]
VIOLET = hx('#9B6BFF')   # tint for colored areas
GLOW = hx('#B48CFF')     # soft glow around small accents
TARGET_MEAN = 0.27       # average brightness of the finished card


def gradient(t):
    out = np.zeros(t.shape + (3,))
    for (t0, c0), (t1, c1) in zip(STOPS, STOPS[1:]):
        m = (t >= t0) & (t <= t1)
        k = ((t - t0) / (t1 - t0))[m][:, None]
        out[m] = c0 + (c1 - c0) * k
    return out


def recolor(src, size=(800, 450), invert=None, centering=(0.5, 0.45)):
    im = ImageOps.fit(src.convert('RGB'), size, Image.LANCZOS, centering=centering)
    rgb = np.asarray(im).astype(float) / 255
    g = np.asarray(ImageOps.grayscale(im)).astype(float) / 255

    # light paper -> invert, judged from the border
    b = max(4, size[1] // 25)
    border = np.concatenate([g[:b].ravel(), g[-b:].ravel(), g[:, :b].ravel(), g[:, -b:].ravel()])
    if invert is None:
        invert = border.mean() > 0.55
    if invert:
        g = 1 - g

    # stretch, then pull the overall tone to the card set's darkness
    lo, hi = np.percentile(g, 1), np.percentile(g, 99.5)
    g = np.clip((g - lo) / max(1e-3, hi - lo), 0, 1)
    m = max(1e-3, min(0.999, g.mean()))
    gamma = float(np.clip(np.log(TARGET_MEAN) / np.log(m), 0.7, 2.6))
    g = g ** gamma

    base = gradient(g)

    # colored areas: saturation from the source
    mx, mn = rgb.max(2), rgb.min(2)
    sat = np.where(mx > 0, (mx - mn) / np.maximum(mx, 1e-3), 0)
    acc = np.clip((sat - 0.30) / 0.30, 0, 1) * (mx > 0.2)
    acc_img = Image.fromarray((acc * 255).astype('uint8')).filter(ImageFilter.GaussianBlur(1))
    acc = np.asarray(acc_img).astype(float) / 255
    area = acc.mean()

    # tint colored areas violet, keeping their light and shade
    lum = np.clip(0.25 + 0.85 * g, 0, 1)[..., None]
    tinted = VIOLET * lum
    out = base * (1 - acc[..., None] * 0.75) + tinted * (acc[..., None] * 0.75)

    # small accents (under ~7% of the frame) also get a soft glow
    if area < 0.07:
        glow = np.asarray(acc_img.filter(ImageFilter.GaussianBlur(size[0] / 140))).astype(float) / 255
        glow = np.clip(glow * 1.8, 0, 1)[..., None] * 0.45
        out = out * (1 - glow) + GLOW * glow

    return Image.fromarray(np.clip(out, 0, 255).astype('uint8')), invert, area


if __name__ == '__main__':
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    inv = True if '--invert' in sys.argv else False if '--no-invert' in sys.argv else None
    src = Path(args[0])
    dst = Path(args[1]) if len(args) > 1 else src.with_name(src.stem + '-card-800x450.jpg')
    img, used_inv, area = recolor(Image.open(src), invert=inv)
    img.save(dst, quality=88)
    print(f'{dst}  invert={used_inv}  color-area={area:.1%}')
