(function (window, document) {
  'use strict';
  
  // apply checkbox event handlers
  for (var a = document.querySelectorAll('.pseudo_checkbox'), i = 0, j = a.length; i < j; i++) {
    a[i].onclick = function () {
      this.previousSibling.click();
    };

    a[i].onkeyup = function (e) {
      e.key == 'Enter' && this.previousSibling.click();
    };
    
    // generic boolean option handler
    a[i].previousSibling.onchange = function () {
      var opt = {};
      opt[this.id] = this.checked;
      chrome.storage.sync.set(opt);
    };
  }
  
  // password setting handler
  document.getElementById('save_password').onchange = function () {
    chrome.storage.sync.set({
      save_password : this.checked
    });
    
    // delete password if disabled
    if (!this.checked) {
      chrome.storage.sync.set({
        password_key : ''
      });
    }
  };
  
  // context menu setting handler
  document.getElementById('context_menu').onchange = function (e) {
    chrome.storage.sync.set({
      context_menu : this.checked,
      reloaded : true
    });
    
    // reload extension to apply this change
    chrome.runtime.reload();
  };
  
  
  // update auto-translate setting
  chrome.storage.sync.get('auto_translate', function (data) {
    document.getElementById('auto_translate').checked = data.auto_translate !== undefined ? data.auto_translate : true;
  });
  
  // update auto-copy setting
  chrome.storage.sync.get('auto_copy', function (data) {
    document.getElementById('auto_copy').checked = data.auto_copy !== undefined ? data.auto_copy : true;
  });
  
  // update password setting
  chrome.storage.sync.get('keep_password_state', function (data) {
    document.getElementById('keep_password_state').checked = data.keep_password_state !== undefined ? data.keep_password_state : true;
  });
  
  // update password setting
  chrome.storage.sync.get('save_password', function (data) {
    document.getElementById('save_password').checked = data.save_password !== undefined ? data.save_password : false;
  });
  
  // update context menu setting
  chrome.storage.sync.get('context_menu', function (data) {
    document.getElementById('context_menu').checked = data.context_menu !== undefined ? data.context_menu : true;
  });
  
  
  // reset settings
  document.getElementById('reset-settings').onclick = function () {
    if (!confirm(chrome.i18n.getMessage("reset_prompt") || "This will reset the options to their defaults and reload the extension. Do you want to continue?")) return false;
    
    // reset checkbox states
    document.getElementById('auto_translate').checked = true;
    document.getElementById('auto_copy').checked = true;
    document.getElementById('keep_password_state').checked = true;
    document.getElementById('save_password').checked = false;
    document.getElementById('context_menu').checked = true;
    
    // update settings internally
    chrome.storage.sync.set({
      auto_translate : true,
      
      auto_copy : true,
      
      keep_password_state : true,
      password_state : false,
      
      save_password : false,
      password_key : '',
      
      context_menu : true,
      reloaded : true
    });
    
    chrome.runtime.reload();
  };
  
  
  // sets preferred locale
  document.getElementsByTagName('TITLE')[0].innerText = chrome.i18n.getMessage("title_options") || 'Cunny Translate Options';
  document.getElementById('options_title').innerText = chrome.i18n.getMessage("title_options") || 'Cunny Translate Options';

  document.getElementById('label_auto_translate').innerText = chrome.i18n.getMessage("label_auto_translate") || 'Auto translate:';
  document.getElementById('desc_auto_translate').innerText = chrome.i18n.getMessage("desc_auto_translate") || 'Automatically encodes or decodes Cunny Code when text is entered into the input field.';

  document.getElementById('label_auto_copy').innerText = chrome.i18n.getMessage("label_auto_copy") || 'Auto copy:';
  document.getElementById('desc_auto_copy').innerText = chrome.i18n.getMessage("desc_auto_copy") || 'Automatically copy and paste selected text into the input field when you open the popup.';

  document.getElementById('label_keep_password_state').innerText = chrome.i18n.getMessage("label_keep_password_state") || 'Remember password state:';
  document.getElementById('desc_keep_password_state').innerText = chrome.i18n.getMessage("desc_keep_password_state") || 'Keeps the password checkbox ticked or unticked depending on your preference.';
  document.getElementById('desc_keep_password_state_subtext').innerText = chrome.i18n.getMessage("desc_keep_password_state_subtext") || '(If disabled, the password checkbox defaults to off every time you open the popup.)';

  document.getElementById('label_save_password').innerText = chrome.i18n.getMessage("label_save_password") || 'Save password:';
  document.getElementById('desc_save_password').innerText = chrome.i18n.getMessage("desc_save_password") || "Saves your most recent password so you don't have to type it again when encrypting or decrypting.";
  document.getElementById('desc_save_password_subtext').innerText = chrome.i18n.getMessage("desc_save_password_subtext") || '(The saved password is deleted upon disabling this option.)';

  document.getElementById('label_context_menu').innerText = chrome.i18n.getMessage("label_context_menu") || 'Show in context menu:';
  document.getElementById('desc_context_menu').innerText = chrome.i18n.getMessage("desc_context_menu") || "Shows Cunny Translate in the context menu whenever you right click while text is selected.";
  document.getElementById('desc_context_menu_subtext').innerText = chrome.i18n.getMessage("desc_context_menu_subtext") || '(Changing this option will reload the extension and close this page temporarily.)';

  document.getElementById('reset-settings').firstChild.innerText = chrome.i18n.getMessage("btn_reset") || 'Reset';

  document.getElementById('homepage_link').innerText = chrome.i18n.getMessage("link_homepage") || 'Cunny Code Homepage';

  document.getElementById('arona_dialogue_1').innerText = chrome.i18n.getMessage("arona_dialogue_1") || 'Hello, Sensei!';
  document.getElementById('arona_dialogue_2').innerText = chrome.i18n.getMessage("arona_dialogue_2") || 'You can change the options for Cunny Translate on this page.';
}(window, document));
