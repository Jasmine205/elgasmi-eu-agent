# Deployment Guide - Elgasmi.e.U

## Quick Deploy Buttons

### Render
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

### Railway
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template)

### Heroku
[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

---

## Platform Instructions

### 1. Railway (Recommended)
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize and deploy
railway init
railway up
```

### 2. Render
1. Connect your GitHub repository
2. Create a new Web Service
3. Select your repo
4. Render will auto-detect the configuration from `render.yaml`

### 3. Fly.io
```bash
# Install Fly CLI
curl -L https://fly.io/install.sh | sh

# Login
fly auth login

# Launch (first time)
fly launch

# Deploy (subsequent)
fly deploy
```

### 4. Heroku
```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create elgasmi-eu

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set JWT_SECRET=your-secret-here
heroku config:set ENCRYPTION_KEY=your-key-here

# Deploy
git push heroku main
```

### 5. Cloudflare Pages (Frontend Only)
```bash
# Install Wrangler
npm install -g wrangler

# Login
wrangler login

# Deploy
wrangler pages publish dist
```

### 6. Netlify (Frontend Only)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### 7. Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### 8. Surge (Static Frontend)
```bash
# Install Surge
npm install -g surge

# Build and deploy
npm run build
cd dist
surge
```

### 9. Tiiny.host (Quick Static)
1. Build: `npm run build`
2. Go to https://tiiny.host
3. Drag and drop your `dist` folder

### 10. Stormkit
1. Connect GitHub repo at https://stormkit.io
2. Configure build command: `npm run build`
3. Set publish directory: `dist`

### 11. Fleek (Web3/IPFS)
```bash
# Install Fleek CLI
npm install -g @fleek/cli

# Login
fleek login

# Initialize
fleek sites init

# Deploy
fleek sites deploy
```

---

## Environment Variables

Required for all platforms:

| Variable | Description | Required |
|----------|-------------|----------|
| `NODE_ENV` | Set to `production` | Yes |
| `JWT_SECRET` | Min 32 chars | Yes |
| `ENCRYPTION_KEY` | Min 32 chars | Yes |
| `DATABASE_URL` | MySQL connection | Optional |
| `BUILT_IN_FORGE_API_URL` | LLM API URL | For AI features |
| `BUILT_IN_FORGE_API_KEY` | LLM API Key | For AI features |
| `ALLOWED_ORIGINS` | CORS origins | Recommended |

---

## Docker Deployment

```bash
# Build
docker build -t elgasmi-eu .

# Run
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  -e JWT_SECRET=your-secret \
  -e ENCRYPTION_KEY=your-key \
  elgasmi-eu
```

### Docker Compose
```bash
docker-compose up -d
```

---

## SSL/HTTPS

All platforms above provide automatic HTTPS:
- Railway, Render, Fly.io: Auto SSL
- Heroku: Auto SSL on paid plans
- Cloudflare: Free SSL
- Netlify, Vercel: Auto SSL

For self-hosted servers, use Let's Encrypt:
```bash
sudo certbot --nginx -d elgasmi.eu
```
