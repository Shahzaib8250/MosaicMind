# Netlify Deployment Guide for AutismAlly

## Prerequisites
- Node.js 18+ installed
- Git repository (GitHub, GitLab, or Bitbucket)
- Neon PostgreSQL database account
- Netlify account

## Environment Variables Setup

Before deploying, you need to set up these environment variables in Netlify:

### Required Environment Variables:
1. **DATABASE_URL** - Your Neon PostgreSQL connection string
   - Format: `postgresql://username:password@host:port/database`
   - Get this from your Neon dashboard

2. **NODE_ENV** - Set to `production`

### How to Add Environment Variables in Netlify:
1. Go to your Netlify dashboard
2. Select your site
3. Go to Site settings > Environment variables
4. Click "Add variable"
5. Add each variable with its value

## Database Setup

1. **Create Neon Database:**
   - Go to [neon.tech](https://neon.tech)
   - Create a new project
   - Copy the connection string

2. **Run Database Migrations:**
   ```bash
   npm run db:push
   ```

## Deployment Methods

### Method 1: Deploy via Git (Recommended)

1. **Push your code to Git:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit for Netlify deployment"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login
   - Click "New site from Git"
   - Choose your Git provider
   - Select your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist/public`
   - Add environment variables
   - Click "Deploy site"

### Method 2: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Build and deploy:**
   ```bash
   npm run build
   netlify deploy --prod --dir=dist/public
   ```

## Project Structure for Netlify

```
AutismAlly/
├── netlify.toml              # Netlify configuration
├── netlify/
│   └── functions/
│       └── server.ts         # Serverless function
├── client/                   # React frontend
├── server/                   # Express backend (adapted for Netlify)
├── shared/                   # Shared schemas
└── package.json              # Updated with Netlify dependencies
```

## How It Works

1. **Frontend**: React app is built and served as static files
2. **Backend**: Express server is converted to Netlify Functions
3. **API Routes**: All `/api/*` requests are redirected to the serverless function
4. **Database**: Connected via Neon PostgreSQL using environment variables

## Troubleshooting

### Common Issues:

1. **Build Failures:**
   - Check Netlify build logs
   - Ensure all dependencies are in `dependencies` not `devDependencies`
   - Verify Node.js version is 18+

2. **Database Connection Issues:**
   - Verify DATABASE_URL is correct
   - Check if Neon database allows external connections
   - Ensure database migrations are run

3. **API Routes Not Working:**
   - Check if serverless function is deployed
   - Verify redirect rules in netlify.toml
   - Check function logs in Netlify dashboard

### Useful Commands:

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build

# Check TypeScript
npm run check

# Push database schema
npm run db:push
```

## Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to Site settings > Domain management
2. Click "Add custom domain"
3. Follow the DNS configuration instructions
4. Netlify will provide SSL certificate automatically

## Monitoring

- **Build Logs**: Available in Netlify dashboard under Deploys
- **Function Logs**: Available under Functions tab
- **Analytics**: Available in Netlify dashboard (paid feature)

Your site will be available at: `https://your-site-name.netlify.app`
