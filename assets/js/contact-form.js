(function(){
  const form = document.getElementById('contactForm');
  if(!form) return;
  form.addEventListener('submit', async function(e){
    // If the browser doesn't support fetch/FormData, fall back to normal POST
    if(!window.fetch || !window.FormData){ return; }
    e.preventDefault();
    const status = document.getElementById('formStatus');
    status.textContent = 'Enviando...';
    try{
      const data = new FormData(form);
      const res = await fetch(form.action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } });
      if (res.ok) {
        status.textContent = '¡Gracias! Tu mensaje fue enviado.';
        form.reset();
      } else {
        const err = await res.json().catch(()=>({}));
        status.textContent = (err && err.errors && err.errors[0] && err.errors[0].message) || 'Hubo un problema al enviar. Intenta de nuevo.';
      }
    }catch(err){
      status.textContent = 'Error de red. Intenta más tarde.';
    }
  });
})();
