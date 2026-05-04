(function () {
    'use strict';

    let allEntries = [];
    let fuse = null;

    const FUSE_OPTIONS = {
        keys: [
            { name: 'title',    weight: 2.0 },
            { name: 'concepts', weight: 2.5 },
            { name: 'terms',    weight: 2.5 },
            { name: 'tags',     weight: 2.0 },
            { name: 'commands', weight: 1.5 },
            { name: 'problems', weight: 1.5 },
            { name: 'summary',  weight: 1.5 },
            { name: 'category', weight: 1.5 },
            { name: 'platform', weight: 1.0 }
        ],
        includeMatches: true,
        includeScore: true,
        threshold: 0.4,
        distance: 100,
        minMatchCharLength: 2,
        ignoreLocation: true
    };

    const $ = {
        searchInput:    document.getElementById('search-input'),
        resultsList:    document.getElementById('results-list'),
        resultsMeta:    document.getElementById('results-meta'),
        emptyState:     document.getElementById('empty-state'),
        filterPlatform: document.getElementById('filter-platform'),
        filterCategory: document.getElementById('filter-category'),
        sortOrder:      document.getElementById('sort-order'),
        statEntries:    document.getElementById('total-entries'),
        statPlatforms:  document.getElementById('total-platforms'),
        statTags:       document.getElementById('total-tags'),
        suggPills:      document.querySelectorAll('.sugg-pill')
    };

    async function init() {
        try {
            const res = await fetch('data/entries.json');
            if (!res.ok) throw new Error('entries.json load failed');
            allEntries = await res.json();
            allEntries.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

            fuse = new Fuse(allEntries, FUSE_OPTIONS);
            populateFilters();
            updateStats();
            bindEvents();
            render(allEntries.map(item => ({ item })));
        } catch (err) {
            $.resultsMeta.textContent = 'Failed to load entries.';
            console.error(err);
        }
    }

    function populateFilters() {
        const platforms = new Set();
        const categories = new Set();
        allEntries.forEach(e => {
            if (e.platform) platforms.add(e.platform);
            if (e.category) categories.add(e.category);
        });
        [...platforms].sort().forEach(p => {
            const o = document.createElement('option');
            o.value = p; o.textContent = p;
            $.filterPlatform.appendChild(o);
        });
        [...categories].sort().forEach(c => {
            const o = document.createElement('option');
            o.value = c; o.textContent = c;
            $.filterCategory.appendChild(o);
        });
    }

    function updateStats() {
        const platforms = new Set(allEntries.map(e => e.platform).filter(Boolean));
        const tags = new Set();
        allEntries.forEach(e => (e.tags || []).forEach(t => tags.add(t)));
        $.statEntries.textContent   = allEntries.length;
        $.statPlatforms.textContent = platforms.size;
        $.statTags.textContent      = tags.size;
    }

    function bindEvents() {
        let timer;
        $.searchInput.addEventListener('input', () => {
            clearTimeout(timer);
            timer = setTimeout(performSearch, 120);
        });
        $.filterPlatform.addEventListener('change', performSearch);
        $.filterCategory.addEventListener('change', performSearch);
        $.sortOrder.addEventListener('change', performSearch);

        $.suggPills.forEach(pill => {
            pill.addEventListener('click', () => {
                $.searchInput.value = pill.dataset.query;
                $.searchInput.focus();
                performSearch();
            });
        });

        document.addEventListener('keydown', e => {
            if (e.key === '/' && document.activeElement !== $.searchInput) {
                e.preventDefault();
                $.searchInput.focus();
                $.searchInput.select();
            }
            if (e.key === 'Escape' && document.activeElement === $.searchInput) {
                $.searchInput.blur();
                $.searchInput.value = '';
                performSearch();
            }
        });
    }

    function performSearch() {
        const query    = $.searchInput.value.trim();
        const platform = $.filterPlatform.value;
        const category = $.filterCategory.value;
        const sort     = $.sortOrder.value;

        let results = query.length === 0
            ? allEntries.map(item => ({ item, matches: [], score: 0 }))
            : fuse.search(query);

        if (platform) results = results.filter(r => r.item.platform === platform);
        if (category) results = results.filter(r => r.item.category === category);

        if (sort === 'date-desc') results.sort((a, b) => (b.item.date || '').localeCompare(a.item.date || ''));
        else if (sort === 'date-asc') results.sort((a, b) => (a.item.date || '').localeCompare(b.item.date || ''));

        render(results, query);
    }

    function render(results, query = '') {
        $.resultsList.innerHTML = '';

        if (results.length === 0) {
            $.emptyState.style.display = 'block';
            $.resultsMeta.textContent = '';
            return;
        }
        $.emptyState.style.display = 'none';

        if (query) {
            const fields = new Set();
            results.forEach(r => (r.matches || []).forEach(m => m.key && fields.add(m.key)));
            $.resultsMeta.textContent = `${results.length} ENTR${results.length !== 1 ? 'IES' : 'Y'} MATCHED — ON: ${[...fields].join(', ') || 'title'}`;
        } else {
            $.resultsMeta.textContent = `SHOWING ALL ${results.length} ENTRIES`;
        }

        results.forEach(result => $.resultsList.appendChild(buildCard(result, query)));
    }

    function buildCard(result, query) {
        const entry   = result.item;
        const matches = result.matches || [];

        const card = document.createElement('article');
        card.className = 'entry-card';
        card.setAttribute('data-id', entry.id || '');
        card.setAttribute('data-platform', entry.platform || '');
        if (entry.url) {
            card.addEventListener('click', () => window.open(entry.url, '_blank', 'noopener'));
        }

        // Meta row
        const meta = document.createElement('div');
        meta.className = 'entry-meta-row';

        if (entry.platform) {
            const t = document.createElement('span');
            t.className = 'tag tag-platform-' + slugify(entry.platform);
            t.textContent = entry.platform;
            meta.appendChild(t);
        }
        if (entry.category) {
            const t = document.createElement('span');
            t.className = 'tag tag-category';
            t.textContent = entry.category;
            meta.appendChild(t);
        }
        if (entry.date) {
            const d = document.createElement('span');
            d.className = 'entry-date';
            d.textContent = formatDate(entry.date);
            meta.appendChild(d);
        }
        card.appendChild(meta);

        // Title
        const title = document.createElement('h3');
        title.className = 'entry-title';
        title.innerHTML = highlight(entry.title || 'Untitled', matches, 'title', query);
        card.appendChild(title);

        // Summary
        if (entry.summary) {
            const sum = document.createElement('p');
            sum.className = 'entry-summary';
            sum.innerHTML = highlight(entry.summary, matches, 'summary', query);
            card.appendChild(sum);
        }

        // Matched-on chips
        if (query && matches.length > 0) {
            const chips = document.createElement('div');
            chips.className = 'matched-on';

            const groups = {};
            matches.forEach(m => {
                if (!m.key || m.key === 'title' || m.key === 'summary') return;
                if (!groups[m.key]) groups[m.key] = [];
                const v = m.value || '';
                if (v && !groups[m.key].includes(v)) groups[m.key].push(v);
            });

            Object.entries(groups).slice(0, 4).forEach(([field, vals]) => {
                const chip = document.createElement('span');
                chip.className = 'match-chip';
                chip.innerHTML = '<strong>' + field.charAt(0).toUpperCase() + field.slice(1) + ':</strong> '
                    + esc(truncate(vals.slice(0, 2).join(', '), 60));
                chips.appendChild(chip);
            });

            if (chips.children.length > 0) card.appendChild(chips);
        }

        return card;
    }

    // ── Helpers ──────────────────────────────────────────
    function slugify(str) {
        return (str || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'default';
    }
    function formatDate(iso) {
        try {
            const d = new Date(iso);
            return ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][d.getMonth()]
                + ' ' + d.getDate() + ', ' + d.getFullYear();
        } catch { return iso; }
    }
    function esc(s) {
        return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
    }
    function truncate(s, max) {
        return !s ? '' : s.length <= max ? s : s.slice(0, max - 1) + '…';
    }
    function highlight(text, matches, key, query) {
        if (!query || !text) return esc(text);
        const match = matches.find(m => m.key === key);
        if (!match || !match.indices || !match.indices.length) return esc(text);
        let out = '', last = 0;
        [...match.indices].sort((a, b) => a[0] - b[0]).forEach(([s, e]) => {
            if (s < last) return;
            out += esc(text.slice(last, s)) + '<mark>' + esc(text.slice(s, e + 1)) + '</mark>';
            last = e + 1;
        });
        return out + esc(text.slice(last));
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
