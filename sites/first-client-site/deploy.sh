#!/usr/bin/env bash

# Exit immediately on error, undefined variable, or failed pipe.
set -euo pipefail

# Change into the directory containing this script.
cd "$(dirname "$0")"

# Build the Vite app into the dist folder.
echo "Building Vite app..."
npm run build

# Sync the generated dist folder to the configured S3 bucket.
# Uses the named AWS profile 'personal' and keeps the target bucket mirror in sync.
# The AWS CLI must already be installed and configured with the 'personal' profile.
S3_BUCKET="first-client-site-568256616721"
AWS_PROFILE="personal"

echo "Syncing dist/ to s3://$S3_BUCKET using profile $AWS_PROFILE..."
aws s3 sync dist "s3://$S3_BUCKET" --profile "$AWS_PROFILE" --delete

echo "Deployment complete."
