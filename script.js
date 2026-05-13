function checkHorario() {
    const agora = new Date();
    const h = agora.getHours();
    const m = agora.getMinutes();
    const total = h * 60 + m;
    const dia = agora.getDay(); // 0=dom, 6=sab

    const manha = total >= 7 * 60 + 30 && total < 11 * 60 + 30;
    const tarde  = total >= 13 * 60      && total < 17 * 60 + 30;
    const semana = dia >= 1 && dia <= 5;
    const aberto = semana && (manha || tarde);

    const badge = document.getElementById('status-badge');
    if (aberto) {
      badge.className = 'badge aberto';
      badge.innerHTML = '<span class="pulse-dot"></span> Atendimento disponível agora';
    } else {
      badge.className = 'badge fechado';
      badge.innerHTML = '<span class="closed-dot"></span> Fora do horário de atendimento';
    }
  }

  checkHorario();
  setInterval(checkHorario, 60000);