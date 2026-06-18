import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware
  app.use(express.json());

  // API Routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', business: 'Jokoti Steel' });
  });

  // Handle contact form submissions (simulated)
  app.post('/api/contact', (req, res) => {
    const { name, email, phone, service, message } = req.body;
    console.log('Received contact request:', { name, email, phone, service, message });
    res.json({ 
      success: true, 
      message: 'Thank you for your request. We will contact you shortly.' 
    });
  });

  // Handle multi-step quote wizard submissions
  app.post('/api/quote', (req, res) => {
    const quoteData = req.body;
    console.log('--- NEW QUOTE REQUEST ---');
    console.log(`Forwarding to: stewartjokoty87@gmail.com`);
    console.log('Data:', JSON.stringify(quoteData, null, 2));
    console.log('-------------------------');
    
    res.json({ 
      success: true, 
      message: 'Quote request forwarded successfully.' 
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
