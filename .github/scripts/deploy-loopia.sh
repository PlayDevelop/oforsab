#!/usr/bin/env bash

set -euo pipefail

: "${LOOPIA_SSH_HOST:?LOOPIA_SSH_HOST is required}"
: "${LOOPIA_SSH_USER:?LOOPIA_SSH_USER is required}"
: "${LOOPIA_SSH_PORT:=22}"
: "${LOOPIA_REMOTE_PATH:?LOOPIA_REMOTE_PATH is required}"

if [[ ! -f dist/client/index.html || ! -d dist/client/_next ]]; then
  echo "::error::Static build output is missing. Run npm run build first."
  exit 1
fi

remote_path="${LOOPIA_REMOTE_PATH%/}/"
if [[ "$remote_path" != */public_html/ ]]; then
  echo "::error::LOOPIA_REMOTE_PATH must point to a public_html directory."
  exit 1
fi

ssh_command="ssh -p ${LOOPIA_SSH_PORT} -o BatchMode=yes"

rsync \
  --archive \
  --compress \
  --delete-delay \
  --human-readable \
  --itemize-changes \
  --exclude='/.assetsignore' \
  --exclude='/.vite/' \
  --exclude='/_headers' \
  --exclude='/vinext-client-entry-manifest.json' \
  --rsh="$ssh_command" \
  dist/client/ \
  "${LOOPIA_SSH_USER}@${LOOPIA_SSH_HOST}:${remote_path}"
