import cors from 'cors'

// Enable CORS for all origins
const corsMiddleware = cors({
  origin: '*',
  methods: ['POST'],
  allowedHeaders: ['Content-Type', 'x-slashgpt-session-id']
});

export default async function handler(req, res) {
  corsMiddleware(req, res, async () => {
    if (!req.headers['x-slashgpt-session-id']) { 
      res.status(401).json({ message: 'Unauthorized' });
    }
    try {
      const messages = req.body;
      const url = 'https://api.openai.com/v1/chat/completions';
      const data = {
        model: 'gpt-3.5-turbo',
        messages: messages,
        max_tokens: 100,
        n: 1,
        stop: null,
        temperature: 1,
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error \${response.status}`);
      }

      const jsonResponse = await response.json();
      res.status(200).json(jsonResponse)
    } catch (error) {
      console.error('Error while calling OpenAI API:', error);
      res.status(500).json({ message: 'Error while calling OpenAI API', error });
    }
  });
}
