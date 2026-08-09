#!/usr/bin/env bash

set -euo pipefail

echo "Checking lint"
npm run lint

echo "Checking for generated or sensitive files"
if git ls-files | grep -Eq '(^dist/|^\.vinext/|^\.wrangler/|(^|/)\.env($|\.)|\.pem$|^release\.json$)'; then
  echo "::error::Generated output or sensitive files must not be committed."
  exit 1
fi

echo "Repository checks passed"
