
// api/uploadText.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;
    console.log('Received text:', text);
    res.status(200).json({ success: true, message: 'Text received successfully' });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
