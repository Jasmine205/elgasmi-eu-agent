# Elgasmi.e.U - Guide de Deploiement Multi-Plateformes

## Prerequis
- Node.js 20+
- Git
- Compte sur chaque plateforme

---

## 1. RAILWAY (Recommande - Simple et rapide)

### Creer un compte
1. Aller sur https://railway.app
2. Cliquer "Login" -> "Login with GitHub"
3. Autoriser Railway

### Deployer
```bash
# Installer Railway CLI
npm install -g @railway/cli

# Se connecter
railway login

# Initialiser le projet
cd C:/Users/Asmae/elgasmi-eu
railway init

# Deployer
railway up

# Ajouter les variables d'environnement
railway variables set DATABASE_URL="votre_url"
railway variables set JWT_SECRET="votre_secret"
railway variables set BUILT_IN_FORGE_API_KEY="votre_cle_openai"
```

**URL**: https://elgasmi-eu.up.railway.app

---

## 2. RENDER (Gratuit avec limitations)

### Creer un compte
1. Aller sur https://render.com
2. Cliquer "Get Started for Free"
3. S'inscrire avec GitHub

### Deployer
1. Dashboard -> "New" -> "Web Service"
2. Connecter votre repo GitHub
3. Configurer:
   - **Name**: elgasmi-eu
   - **Region**: Frankfurt
   - **Branch**: main
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
4. Ajouter les variables d'environnement
5. Cliquer "Create Web Service"

**URL**: https://elgasmi-eu.onrender.com

---

## 3. VERCEL (Ideal pour frontend)

### Creer un compte
1. Aller sur https://vercel.com
2. Cliquer "Sign Up" -> "Continue with GitHub"

### Deployer
```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter
vercel login

# Deployer
cd C:/Users/Asmae/elgasmi-eu
vercel

# Pour la production
vercel --prod
```

Ou via le dashboard:
1. "Add New" -> "Project"
2. Importer votre repo GitHub
3. Configurer les variables d'environnement
4. Deploy

**URL**: https://elgasmi-eu.vercel.app

---

## 4. NETLIFY (Ideal pour JAMstack)

### Creer un compte
1. Aller sur https://netlify.com
2. Cliquer "Sign up" -> "GitHub"

### Deployer
```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Se connecter
netlify login

# Initialiser
cd C:/Users/Asmae/elgasmi-eu
netlify init

# Deployer
netlify deploy --prod
```

Ou via le dashboard:
1. "Add new site" -> "Import an existing project"
2. Connecter GitHub
3. Selectionner le repo
4. Build settings sont automatiques (netlify.toml)

**URL**: https://elgasmi-eu.netlify.app

---

## 5. AWS (Enterprise - Plus complexe)

### Creer un compte
1. Aller sur https://aws.amazon.com
2. Cliquer "Create an AWS Account"
3. Suivre les etapes (carte bancaire requise)

### Option A: Elastic Beanstalk (Simple)
```bash
# Installer AWS CLI et EB CLI
pip install awscli awsebcli

# Configurer AWS
aws configure
# Entrer Access Key, Secret Key, Region (eu-central-1)

# Initialiser EB
cd C:/Users/Asmae/elgasmi-eu
eb init elgasmi-eu --platform node.js --region eu-central-1

# Creer l'environnement
eb create elgasmi-eu-prod

# Deployer
eb deploy
```

### Option B: ECS avec Fargate (Production)
```bash
# Creer le repository ECR
aws ecr create-repository --repository-name elgasmi-eu --region eu-central-1

# Login ECR
aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin YOUR_ACCOUNT_ID.dkr.ecr.eu-central-1.amazonaws.com

# Build et push
docker build -t elgasmi-eu .
docker tag elgasmi-eu:latest YOUR_ACCOUNT_ID.dkr.ecr.eu-central-1.amazonaws.com/elgasmi-eu:latest
docker push YOUR_ACCOUNT_ID.dkr.ecr.eu-central-1.amazonaws.com/elgasmi-eu:latest

# Creer le cluster ECS
aws ecs create-cluster --cluster-name elgasmi-cluster

# Creer le service (utiliser aws-ecs-task-definition.json)
aws ecs register-task-definition --cli-input-json file://aws-ecs-task-definition.json
aws ecs create-service --cluster elgasmi-cluster --service-name elgasmi-service --task-definition elgasmi-eu --desired-count 1 --launch-type FARGATE
```

---

## 6. VPS (DigitalOcean, Hetzner, OVH)

### Creer un compte
- DigitalOcean: https://digitalocean.com
- Hetzner: https://hetzner.com
- OVH: https://ovh.com

### Deployer sur VPS
```bash
# Se connecter au VPS
ssh root@votre_ip

# Installer Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Installer Docker
curl -fsSL https://get.docker.com | sh

# Cloner le projet
git clone https://github.com/votre-username/elgasmi-eu.git
cd elgasmi-eu

# Configurer les variables
cp .env.example .env
nano .env  # Editer les valeurs

# Deployer avec Docker
docker-compose up -d --build

# Configurer Nginx (optionnel)
sudo apt install nginx
sudo nano /etc/nginx/sites-available/elgasmi-eu
```

Configuration Nginx:
```nginx
server {
    listen 80;
    server_name elgasmi.eu www.elgasmi.eu;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Activer le site
sudo ln -s /etc/nginx/sites-available/elgasmi-eu /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# SSL avec Certbot
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d elgasmi.eu -d www.elgasmi.eu
```

---

## Variables d'Environnement Requises

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | URL de connexion MySQL |
| `JWT_SECRET` | Cle secrete pour JWT |
| `ENCRYPTION_KEY` | Cle de chiffrement |
| `BUILT_IN_FORGE_API_URL` | https://api.openai.com |
| `BUILT_IN_FORGE_API_KEY` | Cle API OpenAI |
| `ALLOWED_ORIGINS` | https://elgasmi.eu |

---

## Domaine Personnalise

Pour chaque plateforme, ajouter un enregistrement DNS:
- **Type A**: `@` -> IP du serveur
- **Type CNAME**: `www` -> votre-app.platform.app

---

## 7. FLY.IO (Edge Computing)

### Creer un compte
1. Aller sur https://fly.io
2. Cliquer "Sign Up"

### Deployer
```bash
# Installer Fly CLI
curl -L https://fly.io/install.sh | sh

# Se connecter
fly auth login

# Deployer
cd C:/Users/Asmae/elgasmi-eu
fly deploy

# Ajouter les secrets
fly secrets set DATABASE_URL="votre_url"
fly secrets set JWT_SECRET="votre_secret"
```

**URL**: https://elgasmi-eu.fly.dev

---

## 8. DENO DEPLOY (Edge Runtime)

### Creer un compte
1. Aller sur https://deno.com/deploy
2. Cliquer "Sign In" avec GitHub

### Deployer
```bash
# Installer deployctl
deno install -A jsr:@deno/deployctl

# Deployer
deployctl deploy --project=elgasmi-eu server/deno-entry.ts
```

Ou via dashboard:
1. "New Project" -> "Deploy from GitHub"
2. Selectionner le repo
3. Entrypoint: `server/deno-entry.ts`

**URL**: https://elgasmi-eu.deno.dev

---

## 9. CLOUDFLARE PAGES (CDN Global)

### Creer un compte
1. Aller sur https://cloudflare.com
2. Creer un compte gratuit

### Deployer
```bash
# Installer Wrangler
npm install -g wrangler

# Se connecter
wrangler login

# Build
pnpm build

# Deployer
wrangler pages deploy dist/public --project-name=elgasmi-eu
```

**URL**: https://elgasmi-eu.pages.dev

---

## 10. FLEEK (IPFS/Web3)

### Creer un compte
1. Aller sur https://fleek.xyz
2. S'inscrire

### Deployer
1. "Add new site"
2. Connecter GitHub
3. Configuration auto via `fleek.json`

**URL**: https://elgasmi-eu.on.fleek.co + IPFS hash

---

## 11. SURGE.SH (Simple et rapide)

### Deployer
```bash
# Installer Surge
npm install -g surge

# Build
pnpm build

# Copier index pour SPA
cp dist/public/index.html dist/public/200.html

# Deployer
surge dist/public elgasmi-eu.surge.sh
```

**URL**: https://elgasmi-eu.surge.sh

---

## 12. GITHUB PAGES (Gratuit)

### Activer
1. Repo Settings -> Pages
2. Source: GitHub Actions
3. Le workflow `.github/workflows/deploy-pages.yml` deploie automatiquement

**URL**: https://username.github.io/elgasmi-eu

---

## 13. FIREBASE HOSTING

### Deployer
```bash
# Installer Firebase CLI
npm install -g firebase-tools

# Se connecter
firebase login

# Initialiser
firebase init hosting

# Build
pnpm build

# Deployer
firebase deploy
```

**URL**: https://elgasmi-eu.web.app

---

## 14. AWS AMPLIFY

### Deployer
1. Aller sur AWS Amplify Console
2. "New app" -> "Host web app"
3. Connecter GitHub
4. Configuration auto via `amplify.yml`

**URL**: https://main.xxx.amplifyapp.com

---

## Tableau Recapitulatif

| Plateforme | Type | Config | URL |
|------------|------|--------|-----|
| Render | Full-stack | `render.yaml` | .onrender.com |
| Railway | Full-stack | `railway.json` | .up.railway.app |
| Fly.io | Full-stack | `fly.toml` | .fly.dev |
| Heroku | Full-stack | `Procfile` | .herokuapp.com |
| DigitalOcean | Full-stack | `.do/app.yaml` | .ondigitalocean.app |
| Netlify | Frontend+Functions | `netlify.toml` | .netlify.app |
| Vercel | Frontend | `vercel.json` | .vercel.app |
| Cloudflare | Frontend+Workers | `wrangler.toml` | .pages.dev |
| Deno Deploy | Edge | `deno.json` | .deno.dev |
| Fleek | IPFS | `fleek.json` | .on.fleek.co |
| Surge | Frontend | - | .surge.sh |
| GitHub Pages | Frontend | workflow | .github.io |
| Firebase | Frontend+Functions | `firebase.json` | .web.app |
| AWS Amplify | Frontend | `amplify.yml` | .amplifyapp.com |

---

## Support

- Email: asmaewarter5@gmail.com
- WhatsApp: +43 681 2046 0618
