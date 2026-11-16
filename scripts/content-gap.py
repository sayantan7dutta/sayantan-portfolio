import io, re, sys, unicodedata, json

def norm(t):
    t = unicodedata.normalize('NFKD', t)
    t = t.replace('’',"'").replace('‘',"'").replace('“','"').replace('”','"')
    t = re.sub(r'[^a-z0-9 ]',' ', t.lower())
    return ' '.join(t.split())

def old_blocks(slug):
    """Every substantive string in the old page: markup text AND frontmatter data."""
    s = io.open('src/pages/work/%s.astro'%slug, encoding='utf-8').read()
    s = re.sub(r'(?s)<style.*?</style>','',s)
    s = re.sub(r'(?s)<!--.*?-->','',s)
    fm_end = s.index('---',3)
    fm, body = s[:fm_end], s[fm_end:]
    out = []
    # frontmatter string literals (stats, pillars, personas, journey, etc.)
    for m in re.finditer(r"(?:'((?:[^'\\]|\\.){6,})'|\"((?:[^\"\\]|\\.){6,})\")", fm):
        v = m.group(1) or m.group(2)
        if '/' in v and ' ' not in v: continue      # import paths
        out.append(('data', v))
    # markup text
    for m in re.finditer(r'(?s)<(h1|h2|h3|h4|p|li|figcaption|span|td|th|dt|dd|em|strong)[^>]*>(.*?)</\1>', body):
        t = ' '.join(re.sub(r'<[^>]+>',' ', m.group(2)).split())
        if len(t) < 6 or t.startswith('{'): continue
        out.append((m.group(1), t))
    return out

def cut_text(slug):
    h = io.open('dist/v/cut/%s/index.html'%slug, encoding='utf-8').read()
    h = re.sub(r'(?s)<(script|style)\b.*?</\1>',' ', h)
    # include alt text, it carries real content now
    alts = ' '.join(re.findall(r'alt="([^"]*)"', h))
    return norm(re.sub(r'<[^>]+>',' ', h) + ' ' + alts)

slug = sys.argv[1]
hay = cut_text(slug)
missing = []
seen = set()
for kind, t in old_blocks(slug):
    n = norm(t)
    if len(n) < 12 or n in seen: continue
    seen.add(n)
    words = n.split()
    # a block counts as present if a distinctive run of it survives
    probe = ' '.join(words[:7]) if len(words) >= 7 else n
    tail  = ' '.join(words[-7:]) if len(words) >= 7 else n
    if probe in hay or tail in hay: continue
    # or if most of its longer words appear
    long = [w for w in words if len(w) > 5]
    if long and sum(1 for w in long if w in hay)/len(long) > 0.85: continue
    missing.append((kind, t))

print('### %s — %d blocks in the old page, %d not found in the Cut\n' % (slug, len(seen), len(missing)))
for k, t in missing:
    print('  [%-10s] %s' % (k, t[:150]))
