// Validación del formulario principal
const leadForm = document.querySelector('.lead-form');

leadForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita el envío por defecto para controlarlo con JS

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();

  if (!firstName || !lastName || !email || !phone) {
    alert('Por favor, completa todos los campos requeridos.');
    return;
  }

  // Enviar datos o mostrar confirmación
  alert(`Gracias por registrarte, ${firstName}!`);
  leadForm.reset(); // Limpia el formulario
});

// Validación del Sticky CTA
const stickyForm = document.querySelector('.sticky-cta form');

stickyForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const stickyName = stickyForm.querySelector('input[type="text"]').value.trim();
  const stickyEmail = stickyForm.querySelector('input[type="email"]').value.trim();

  if (!stickyName || !stickyEmail) {
    alert('Por favor, completa los campos del Sticky CTA.');
    return;
  }

  // Enviar datos o mostrar confirmación
  alert(`Gracias por tu interés, ${stickyName}!`);
  stickyForm.reset();
});
