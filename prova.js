window.onload = function() {
    document.getElementById('myButton').addEventListener('click', function() {
        const scriptUrl = this.getAttribute('popovertarget');
        
        // Esegui lo script specificato nell'attributo popovertarget
        if (scriptUrl) {
            // Creiamo un nuovo elemento script per caricare ed eseguire il JavaScript esterno
            const scriptElement = document.createElement('script');
            scriptElement.src = scriptUrl;
            document.body.appendChild(scriptElement);

            // Facoltativo: gestire il caricamento dello script esterno
            scriptElement.onload = function() {
                console.log('Script caricato ed eseguito');
            };
            scriptElement.onerror = function() {
                console.error('Errore nel caricamento dello script');
            };
        }
    });
};
