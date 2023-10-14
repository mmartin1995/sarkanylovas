// Fájlnév: /api/sendToAirtable.js
const Airtable = require('airtable'); // Biztosítsd, hogy telepítetted az 'airtable' csomagot a `npm install airtable` paranccsal

const base = new Airtable({apiKey: 'patCcPqnjOwbSsd1U.071ec3035b5dcec2f6fc9eb4d7873c13e4c5722374d89c2992b1395e46edc63a'}).base('appUqQ5Q5LtR0q4F8');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { input, calculated } = req.body;

      // Új rekord létrehozása az Airtable-ben
      await base('Table_Name').create([
        {
          "fields": {
            "input": input,
            "calculated_value": calculated
          }
        }
      ]);

      res.status(200).json({ status: 'success' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
