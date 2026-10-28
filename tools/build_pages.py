"""
Hizmet sayfası üretici.

Üst bar, menü, mobil menü ve footer index.html'den alınır; böylece
anasayfada yapılan değişiklikler tüm hizmet sayfalarına taşınır.

Kullanım (proje kökünden):
    python tools/build_pages.py
"""
import json
import re
from html import escape
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = 'https://beyoglukurutemizleme.com'
PHONE = '+905323028222'
CSS_VERSION = '5.0'

from pages_content import PAGES  # noqa: E402  (aynı klasörde)


def chrome():
    """index.html'den üst kısım (body başı → mobil menü) ve alt kısım (footer → son)."""
    s = (ROOT / 'index.html').read_text(encoding='utf-8')
    top = s[s.index('<body>'):s.index('    <main>')]
    bottom = s[s.index('    <!-- Footer -->'):s.index('</html>')]

    def absolutize(part):
        part = part.replace('href="#"', 'href="/"')
        part = re.sub(r'href="#([\w-]+)"', r'href="/#\1"', part)
        part = re.sub(r'(src|href)="(gorsel|fonts)/', r'\1="/\2/', part)
        part = re.sub(r'src="script\.js', 'src="/script.js', part)
        return part

    return absolutize(top), absolutize(bottom)


def head(p):
    url = f"{SITE}/{p['slug']}/"
    image = f"{SITE}/gorsel/web/{p['images'][0]['file']}.webp"
    service_ld = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": p['service_name'],
        "serviceType": p['service_name'],
        "description": p['description'],
        "url": url,
        "image": image,
        "areaServed": [{"@type": "City", "name": "Mezitli"}, {"@type": "City", "name": "Mersin"}],
        "provider": {
            "@type": "DryCleaningOrLaundry",
            "name": "Beyoğlu Kuru Temizleme Terzi ve Ütü Evi",
            "url": f"{SITE}/",
            "telephone": PHONE,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Yeni Mahalle 33175 Sokak Fullkart 2 Apartmanı Altı No:11/B",
                "addressLocality": "Mezitli",
                "addressRegion": "Mersin",
                "postalCode": "33200",
                "addressCountry": "TR"
            }
        }
    }
    breadcrumb_ld = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": f"{SITE}/"},
            {"@type": "ListItem", "position": 2, "name": "Hizmetler", "item": f"{SITE}/#services"},
            {"@type": "ListItem", "position": 3, "name": p['breadcrumb'], "item": url},
        ]
    }
    faq_ld = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type": "Question", "name": q,
                        "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in p['faq']]
    }

    def ld(obj):
        body = json.dumps(obj, ensure_ascii=False, indent=4)
        return '    <script type="application/ld+json">\n' + '\n'.join('    ' + l for l in body.splitlines()) + '\n    </script>'

    t, d = escape(p['title']), escape(p['description'])
    return f'''<!DOCTYPE html>
<html lang="tr">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>{t}</title>
    <meta name="description" content="{d}" />
    <meta name="author" content="Beyoğlu Kuru Temizleme" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="{url}" />

    <meta name="geo.region" content="TR-33" />
    <meta name="geo.placename" content="Mezitli, Mersin" />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="{url}" />
    <meta property="og:title" content="{t}" />
    <meta property="og:description" content="{d}" />
    <meta property="og:image" content="{image}" />
    <meta property="og:locale" content="tr_TR" />
    <meta property="og:site_name" content="Beyoğlu Kuru Temizleme" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="{t}" />
    <meta name="twitter:description" content="{d}" />
    <meta name="twitter:image" content="{image}" />

{ld(service_ld)}

{ld(breadcrumb_ld)}

{ld(faq_ld)}

    <!-- Fonts: Playfair Display (Headings) & Inter (Body), self-hosted -->
    <link rel="preload" href="/fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/fonts/inter-latin-ext.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/fonts/playfair-display-latin.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/fonts/playfair-display-latin-ext.woff2" as="font" type="font/woff2" crossorigin>

    <!-- Icons (non-blocking) -->
    <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" as="style"
        onload="this.onload=null;this.rel='stylesheet'">
    <noscript>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    </noscript>

    <link rel="stylesheet" href="/styles.css?v={CSS_VERSION}">
    <link rel="icon" type="image/jpeg" href="/gorsel/logo.jpg" />
    <link rel="apple-touch-icon" href="/gorsel/logo.jpg" />
</head>

'''


def main_content(p):
    sections = '\n\n'.join(
        f'''                    <h2>{h}</h2>
''' + '\n'.join(
            f'                    <p>{para}</p>' if not isinstance(para, list)
            else '                    <ul class="check-list">\n' + '\n'.join(
                f'                        <li><i class="fas fa-check"></i> {li}</li>' for li in para) + '\n                    </ul>'
            for para in paras)
        for h, paras in p['sections'])

    images = '\n'.join(
        f'''                    <figure class="page-figure">
                        <img src="/gorsel/web/{img['file']}.webp" alt="{escape(img['alt'])}" width="{img['w']}"
                            height="{img['h']}"{' loading="lazy"' if i else ' fetchpriority="high"'}>
                        <figcaption>{img['caption']}</figcaption>
                    </figure>''' for i, img in enumerate(p['images']))

    faq = '\n'.join(f'''                <details class="faq-item">
                    <summary>{q}</summary>
                    <p>{a}</p>
                </details>''' for q, a in p['faq'])

    related = '\n'.join(
        f'''                <a href="/{o['slug']}/" class="related-card">
                    <i class="fas {o['icon']}"></i>
                    <span>{o['breadcrumb']}</span>
                </a>''' for o in PAGES if o['slug'] != p['slug'])

    return f'''    <main>

    <!-- Page Hero -->
    <section class="page-hero">
        <div class="container">
            <nav class="breadcrumb" aria-label="Sayfa yolu">
                <a href="/">Ana Sayfa</a>
                <span aria-hidden="true">›</span>
                <a href="/#services">Hizmetler</a>
                <span aria-hidden="true">›</span>
                <span aria-current="page">{p['breadcrumb']}</span>
            </nav>
            <h1 class="page-title">{p['h1']}</h1>
            <p class="page-intro">{p['intro']}</p>
            <div class="page-actions">
                <a href="tel:{PHONE}" class="btn btn-primary"><i class="fas fa-phone"></i> Hemen Arayın</a>
                <a href="https://wa.me/905323028222" class="btn btn-outline" target="_blank" rel="noopener"><i
                        class="fab fa-whatsapp"></i> WhatsApp'tan Sorun</a>
            </div>
        </div>
    </section>

    <!-- Content -->
    <section class="section page-content">
        <div class="container">
            <div class="page-grid">
                <article class="page-text">
{sections}
                </article>

                <aside class="page-aside">
{images}
                    <div class="info-card">
                        <h2>Bize Ulaşın</h2>
                        <p><i class="fas fa-map-marker-alt"></i> Yeni Mahalle 33175 Sokak Fullkart 2 Apartmanı Altı
                            No:11/B, 33200 Mezitli/Mersin</p>
                        <p><i class="fas fa-phone"></i> <a href="tel:{PHONE}">+90 532 302 82 22</a></p>
                        <p><i class="fas fa-clock"></i> Pazartesi - Cumartesi: 08:00 - 18:30</p>
                        <a href="https://maps.google.com/?cid=15920901219793351780" class="btn btn-primary" target="_blank"
                            rel="noopener"><i class="fas fa-directions"></i> Yol Tarifi Al</a>
                    </div>
                </aside>
            </div>
        </div>
    </section>

    <!-- FAQ -->
    <section class="section faq-section bg-light">
        <div class="container">
            <div class="section-header text-center">
                <h2 class="section-title">Sık Sorulan Sorular</h2>
                <p class="section-subtitle">{p['breadcrumb']} hakkında</p>
            </div>

            <div class="faq-list">
{faq}
            </div>
        </div>
    </section>

    <!-- Related Services -->
    <section class="section related-section">
        <div class="container">
            <div class="section-header text-center">
                <h2 class="section-title">Diğer Hizmetlerimiz</h2>
                <p class="section-subtitle">Mezitli'de tek adreste</p>
            </div>
            <div class="related-grid">
{related}
            </div>
        </div>
    </section>

    </main>

'''


def build():
    top, bottom = chrome()
    for p in PAGES:
        out = ROOT / p['slug'] / 'index.html'
        out.parent.mkdir(exist_ok=True)
        out.write_text(head(p) + top + main_content(p) + bottom + '</html>\n', encoding='utf-8', newline='\n')
        print('yazıldı:', out.relative_to(ROOT))


if __name__ == '__main__':
    build()
