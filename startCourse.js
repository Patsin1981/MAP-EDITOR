(function(){
  'use strict';
  // Bind bottom-sheet menu and settings/about modals on mobile.
  document.addEventListener('DOMContentLoaded', function(){
    const id = (s)=>document.getElementById(s);
    const tabMenu = id('tab-menu');
    const bottomSheet = id('bottom-sheet');
    const closeBottom = id('close-bottom-sheet');
    const menuSettings = id('menu-settings');
    const menuAbout = id('menu-about');
    const menuReset = id('menu-reset');
    const settingsModal = id('settings-modal');
    const aboutModal = id('about-modal');
    const closeSettings = id('close-settings');
    const closeAbout = id('close-about');

    // Inject defensive CSS only on small screens to avoid breaking desktop layout.
    try {
      const existing = document.getElementById('map-editor-menu-fix');
      // Only inject when viewport is mobile-sized and no existing style element
      if (!existing && window.matchMedia && window.matchMedia('(max-width: 760px)').matches) {
        const style = document.createElement('style');
        style.id = 'map-editor-menu-fix';
        style.textContent = `\n/* Scoped fixes for mobile bottom-sheet/menu only */\n@media (max-width: 760px) {\n  .bottom-sheet{z-index:2000!important;pointer-events:auto!important;}\n  .tabs{z-index:10000!important;}\n}\n/* Ensure modals are above map on all sizes but keep value modest */\n.modal{z-index:3000!important;pointer-events:auto!important;}\n`;
        document.head.appendChild(style);
      }
    } catch (e) {
      console.warn('startCourse.js: failed to inject styles', e);
    }

    function safeLog(msg, obj){ try { console.log(msg, obj); } catch(e){} }
    function toggleBottom(open){ if(!bottomSheet) return; bottomSheet.classList.toggle('open', !!open); }

    if (tabMenu) {
      tabMenu.addEventListener('click', function(e){
        toggleBottom(!bottomSheet?.classList.contains('open'));
        e.stopPropagation();
      });
    }
    if (closeBottom) closeBottom.addEventListener('click', ()=> toggleBottom(false));

    if (menuSettings) menuSettings.addEventListener('click', ()=>{
      settingsModal?.classList.add('open');
      toggleBottom(false);
    });
    if (menuAbout) menuAbout.addEventListener('click', ()=>{
      aboutModal?.classList.add('open');
      toggleBottom(false);
    });

    if (menuReset) menuReset.addEventListener('click', ()=>{
      // Prefer existing reset UI if present
      const resetConfirm = id('reset-edges-confirm');
      if (resetConfirm) {
        resetConfirm.hidden = false;
        toggleBottom(false);
        return;
      }
      if (confirm('ล้างข้อมูลทั้งหมดจาก Local Storage และรีโหลดหน้า?')){
        try { localStorage.clear(); } catch(e){}
        location.reload();
      }
    });

    if (closeSettings) closeSettings.addEventListener('click', ()=> settingsModal?.classList.remove('open'));
    if (closeAbout) closeAbout.addEventListener('click', ()=> aboutModal?.classList.remove('open'));

    // Close modals / bottom sheet when clicking outside
    document.addEventListener('click', function(e){
      try {
        if (settingsModal?.classList.contains('open')){
          const c = settingsModal.querySelector('.modal-content');
          if (c && !c.contains(e.target) && !e.target.closest('#menu-settings')) settingsModal.classList.remove('open');
        }
        if (aboutModal?.classList.contains('open')){
          const c = aboutModal.querySelector('.modal-content');
          if (c && !c.contains(e.target) && !e.target.closest('#menu-about')) aboutModal.classList.remove('open');
        }
        if (bottomSheet?.classList.contains('open')){
          if (!bottomSheet.contains(e.target) && !e.target.closest('#tab-menu')) bottomSheet.classList.remove('open');
        }
      } catch (err) { /* ignore */ }
    }, true);

    // Keyboard: Esc closes modals/sheet
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape'){ settingsModal?.classList.remove('open'); aboutModal?.classList.remove('open'); toggleBottom(false); } });

    safeLog('startCourse.js: menu bindings installed', { tabMenu: !!tabMenu, bottomSheet: !!bottomSheet, settingsModal: !!settingsModal, aboutModal: !!aboutModal });
  });
})();
