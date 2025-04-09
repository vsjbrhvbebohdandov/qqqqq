document.getElementById('scanner').addEventListener('mousedown', function () {
    const scanner = document.getElementById('scanner');
    const scanText = document.getElementById('scan-text');
    const result = document.getElementById('result');
    const powerToggle = document.getElementById('power-toggle');

    // Початок сканування
    scanner.classList.add('scanning');
    scanText.textContent = 'Сканування...';

    // Затримка для імітації процесу сканування
    setTimeout(() => {
        scanner.classList.remove('scanning');
        scanText.textContent = 'Поставте палець...';

        // Генерація результату залежно від перемикача
        let power;
        if (powerToggle.checked) {
            power = Math.floor(Math.random() * 35); // Менше 35%
            document.getElementById('toggle-description').textContent = 'Менше 35%';
        } else {
            power = Math.floor(Math.random() * 51) + 50; // Більше 50%
            document.getElementById('toggle-description').textContent = 'Більше 50%';
        }

        result.textContent = `Ваша потужність: ${power}%`;
    }, 3000);
});
