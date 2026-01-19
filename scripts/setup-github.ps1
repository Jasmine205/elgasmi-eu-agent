# Script PowerShell pour configurer GitHub avec token et secrets
# Usage: .\setup-github.ps1 -Token "ghp_votre_token"

param(
    [Parameter(Mandatory=$true)]
    [string]$Token
)

$repo = "u8173156122-maker/elgasmi-eu-agent"
$repoUrl = "https://${Token}@github.com/${repo}.git"

Write-Host "=== Configuration GitHub ===" -ForegroundColor Cyan

# 1. Mettre à jour le remote avec le token
Write-Host "`n[1/3] Mise à jour du remote Git..." -ForegroundColor Yellow
git remote set-url origin $repoUrl
Write-Host "Remote mis à jour!" -ForegroundColor Green

# 2. Pousser les workflows
Write-Host "`n[2/3] Push des workflows GitHub Actions..." -ForegroundColor Yellow
git add .github/
git commit -m "Add GitHub Actions workflows for multi-platform deployment

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
git push origin main
Write-Host "Workflows poussés!" -ForegroundColor Green

# 3. Afficher les secrets à configurer
Write-Host "`n[3/3] Secrets à configurer sur GitHub:" -ForegroundColor Yellow
Write-Host @"

Aller sur: https://github.com/$repo/settings/secrets/actions

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

"@ -ForegroundColor White

Write-Host "Configuration terminée!" -ForegroundColor Green
