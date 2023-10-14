// api/addRecord.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://abbftdocmrsdnwxingyn.supabase.co';
const supabaseKey = 'API_KEY';

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { name /* további mezők */ } = req.body;

            // Új rekord hozzáadása a Supabase adatbázisba
            const { data, error } = await supabase
                .from('sarkanylovas-teszt')
                .insert([{ name /* további mezők */ }]);

            if (error) {
                res.status(500).json({ error: 'Hiba történt a rekord hozzáadása közben.' });
            } else {
                res.status(200).json({ message: 'Rekord sikeresen hozzáadva.' });
            }
        } catch (error) {
            console.error('Hiba történt:', error);
            res.status(500).json({ error: 'Hiba történt a rekord hozzáadása közben.' });
        }
    } else {
        res.status(405).json({ error: 'Az HTTP metódus nem támogatott.' });
    }
}