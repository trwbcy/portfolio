#!/usr/bin/env bash
# log-learn.sh — append a new learning entry to study/data/entries.json
# Single source of truth for both the heatmap and the study library.

set -euo pipefail

ENTRIES_FILE="study/data/entries.json"

# ── Resolve repo root (script can be called from anywhere) ────────────
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENTRIES_PATH="$SCRIPT_DIR/$ENTRIES_FILE"

if [[ ! -f "$ENTRIES_PATH" ]]; then
    echo "❌ Error: $ENTRIES_PATH not found. Are you in the repo root?" >&2
    exit 1
fi

# ── Check for jq ──────────────────────────────────────────────────────
HAS_JQ=false
if command -v jq &>/dev/null; then
    HAS_JQ=true
fi

# ── Helper: generate kebab-case id from title ─────────────────────────
make_id() {
    echo "$1" \
        | tr '[:upper:]' '[:lower:]' \
        | sed 's/[^a-z0-9 ]/ /g' \
        | sed 's/  */ /g' \
        | sed 's/^ //;s/ $//' \
        | tr ' ' '-'
}

# ── Helper: escape string for JSON ───────────────────────────────────
json_escape() {
    # Escape backslashes, double quotes, then control chars
    printf '%s' "$1" \
        | sed 's/\\/\\\\/g' \
        | sed 's/"/\\"/g'
}

# ── Interactive prompts ───────────────────────────────────────────────
echo ""
echo "┌─────────────────────────────────────────┐"
echo "│          log-learn — new entry          │"
echo "└─────────────────────────────────────────┘"
echo ""

read -r -p "  Title       : " TITLE
if [[ -z "$TITLE" ]]; then
    echo "❌ Title cannot be empty." >&2
    exit 1
fi

read -r -p "  Platform    : " PLATFORM
if [[ -z "$PLATFORM" ]]; then
    echo "❌ Platform cannot be empty." >&2
    exit 1
fi

read -r -p "  Category    : " CATEGORY
if [[ -z "$CATEGORY" ]]; then
    echo "❌ Category cannot be empty." >&2
    exit 1
fi

read -r -p "  URL (optional, press Enter to skip): " URL

# ── Auto-derive fields ────────────────────────────────────────────────
DATE_TODAY=$(date +%Y-%m-%d)
ID=$(make_id "$TITLE")

echo ""
echo "  Date         : $DATE_TODAY  (auto)"
echo "  ID           : $ID  (auto)"
echo ""
read -r -p "  Confirm and append? [Y/n]: " CONFIRM
CONFIRM="${CONFIRM:-Y}"
if [[ ! "$CONFIRM" =~ ^[Yy]$ ]]; then
    echo "Aborted."
    exit 0
fi

# ── Append entry ──────────────────────────────────────────────────────

if $HAS_JQ; then
    # Safe JSON manipulation via jq
    UPDATED=$(jq \
        --arg id       "$ID" \
        --arg date     "$DATE_TODAY" \
        --arg title    "$TITLE" \
        --arg platform "$PLATFORM" \
        --arg category "$CATEGORY" \
        --arg url      "$URL" \
        '. + [{
            id:       $id,
            date:     $date,
            title:    $title,
            platform: $platform,
            category: $category,
            tags:     [],
            concepts: [],
            terms:    [],
            commands: [],
            problems: [],
            summary:  "",
            url:      $url
        }]' "$ENTRIES_PATH")
    echo "$UPDATED" > "$ENTRIES_PATH"
else
    # Pure bash fallback — strip the closing ] and append a new object
    TITLE_ESC=$(json_escape "$TITLE")
    PLATFORM_ESC=$(json_escape "$PLATFORM")
    CATEGORY_ESC=$(json_escape "$CATEGORY")
    URL_ESC=$(json_escape "$URL")

    # Remove trailing newline + closing bracket, inject new entry, close array
    CONTENT=$(cat "$ENTRIES_PATH")
    # Strip last ] (and any whitespace before it)
    BASE="${CONTENT%]}"
    # Check if array is non-empty (has at least one } before the closing ])
    if echo "$BASE" | grep -q '}'; then
        SEPARATOR=","
    else
        SEPARATOR=""
    fi

    cat > "$ENTRIES_PATH" <<EOF
${BASE}${SEPARATOR}
  {
    "id":       "${ID}",
    "date":     "${DATE_TODAY}",
    "title":    "${TITLE_ESC}",
    "platform": "${PLATFORM_ESC}",
    "category": "${CATEGORY_ESC}",
    "tags":     [],
    "concepts": [],
    "terms":    [],
    "commands": [],
    "problems": [],
    "summary":  "",
    "url":      "${URL_ESC}"
  }
]
EOF
fi

# ── Validate JSON ─────────────────────────────────────────────────────
VALIDATE_OK=false
if command -v python3 &>/dev/null; then
    if python3 -m json.tool "$ENTRIES_PATH" > /dev/null 2>&1; then
        VALIDATE_OK=true
    fi
elif $HAS_JQ; then
    if jq empty "$ENTRIES_PATH" 2>/dev/null; then
        VALIDATE_OK=true
    fi
fi

if ! $VALIDATE_OK; then
    echo ""
    echo "❌ JSON validation failed! The file may be corrupted." >&2
    echo "   Check: $ENTRIES_PATH" >&2
    exit 1
fi

# ── Success message ───────────────────────────────────────────────────
echo ""
echo "✅ Entry added to $ENTRIES_FILE"
echo ""
echo "   📝 Don't forget to fill in:"
echo "      - concepts  (apa yang lo pelajari)"
echo "      - terms     (kosakata teknis yang muncul)"
echo "      - commands  (command yang dipake)"
echo "      - problems  (masalah yang diselesaikan)"
echo "      - summary   (1-3 kalimat ringkasan)"
echo ""
echo "   Open: code $ENTRIES_FILE"
echo ""
