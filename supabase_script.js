document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('newRecordForm');
    
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        // További mezők értékeit is be kell olvasni

        try {
            const response = await fetch('api/addRecord.js', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name /* további mezők */ }),
            });

            if (response.ok) {
                alert('Rekord sikeresen hozzáadva.');
                form.reset();
            } else {
                alert('Hiba történt a rekord hozzáadása közben.');
            }
        } catch (error) {
            console.error('Hiba történt:', error);
        }
    });
});