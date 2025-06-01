export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body;
      console.log("📦 Received item:", data);

      // You can later connect MongoDB or Airtable here
      return res.status(200).json({ message: 'Item saved successfully', data });
    } catch (error) {
      console.error("❌ Error saving item:", error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
