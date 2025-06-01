export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const item = req.body;

  console.log('📦 Received item:', item);

  // For now, just send it back
  res.status(200).json({ status: 'ok', received: item });
}
