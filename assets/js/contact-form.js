(function(){
  const form = document.getElementById('contactForm');
  if(!form) return;

  // Validación en tiempo real
  const inputs = form.querySelectorAll('input[required], textarea[required]');
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      validateField(this);
    });
    input.addEventListener('input', function() {
      if(this.classList.contains('invalid')) {
        validateField(this);
      }
    });
  });

  function validateField(field) {
    const isValid = field.checkValidity();
    if(isValid) {
      field.classList.remove('invalid');
      field.classList.add('valid');
    } else {
      field.classList.remove('valid');
      field.classList.add('invalid');
    }
  }

  // Envío del formulario
  form.addEventListener('submit', async function(e){
    // If the browser doesn't support fetch/FormData, fall back to normal POST
    if(!window.fetch || !window.FormData){ return; }
    e.preventDefault();

    const status = document.getElementById('formStatus');
    const submitBtn = form.querySelector('button[type="submit"]');

    // Validar todos los campos antes de enviar
    let allValid = true;
    inputs.forEach(input => {
      validateField(input);
      if(!input.checkValidity()) {
        allValid = false;
      }
    });

    if(!allValid) {
      status.textContent = 'Por favor, completa todos los campos correctamente.';
      status.className = 'form-status error';
      return;
    }

    // Deshabilitar botón y mostrar loading
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';
    status.textContent = 'Enviando tu mensaje...';
    status.className = 'form-status loading';

    try{
      const data = new FormData(form);
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        status.textContent = '✓ ¡Gracias! Tu mensaje fue enviado correctamente.';
        status.className = 'form-status success';
        form.reset();
        inputs.forEach(input => {
          input.classList.remove('valid', 'invalid');
        });
      } else {
        const err = await res.json().catch(()=>({}));
        status.textContent = '✗ ' + ((err && err.errors && err.errors[0] && err.errors[0].message) || 'Hubo un problema al enviar. Intenta de nuevo.');
        status.className = 'form-status error';
      }
    }catch(err){
      status.textContent = '✗ Error de red. Por favor, intenta más tarde.';
      status.className = 'form-status error';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Enviar';
    }
  });
})();
