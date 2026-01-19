#!/bin/bash
# Script Bash pour configurer GitHub avec token et secrets
# Usage: ./setup-github.sh "ghp_votre_token"

TOKEN=$1
REPO="u8173156122-maker/elgasmi-eu-agent"

if [ -z "$TOKEN" ]; then
    echo "Usage: ./setup-github.sh <github_token>"
    exit 1
fi

echo "=== Configuration GitHub ==="

# 1. Mettre à jour le remote avec le token
echo -e "\n[1/3] Mise à jour du remote Git..."
git remote set-url origin "https://${TOKEN}@github.com/${REPO}.git"
echo "✓ Remote mis à jour!"

# 2. Pousser les workflows
echo -e "\n[2/3] Push des workflows GitHub Actions..."
git add .github/
git commit -m "Add GitHub Actions workflows for multi-platform deployment

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
git push origin main
echo "✓ Workflows poussés!"

# 3. Afficher les secrets à configurer
echo -e "\n[3/3] Secrets à configurer sur GitHub:"
cat << 'EOF'

Aller sur: https://github.com/u8173156122-maker/elgasmi-eu-agent/settings/secrets/actions

Ajouter ces secrets:

┌─────────────────────┬────────────────────────────────────┐
│ Secret Name         │ Description                        │
├─────────────────────┼────────────────────────────────────┤
│ SURGE_LOGIN         │ Email Surge.sh                     │
│ SURGE_TOKEN         │ surge token (run: surge token)     │
│ FLEEK_API_KEY       │ API key from fleek.xyz             │
│ DATABASE_URL        │ mysql://user:pass@host/db          │
│ JWT_SECRET          │ Random secret for JWT              │
│ ENCRYPTION_KEY      │ Random key for encryption          │
│ FORGE_API_KEY       │ OpenAI/LLM API key                 │
└─────────────────────┴────────────────────────────────────┘

EOF

echo "✓ Configuration terminée!"
