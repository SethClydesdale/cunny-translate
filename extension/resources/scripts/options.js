(function (window, document) {
  'use strict';
  
  // functions for interacting with Arona on the options page
  window.Arona = {
    // HTML node cache
    node : {
      arona : document.getElementById('arona'),
      holo : document.getElementById('holo'),
      body : document.getElementById('arona_body'),
      
      dialogue_container : document.getElementById('dialogue_container'),
      dialogue : document.getElementById('dialogue')
    },
    
    // make Arona say something
    // text: STRING of any dialogue you want
    // holo: NUMBER used to display her holo image (see resources/images) [optional]
    // duration: NUMBER of how long you want your message to stay on screen. [optional] (pass Infinity to remove duration)
    // example Arona.say('I love strawberry milk...', 23, 5000); // 5000 = 5 seconds
    messageTimeout : null,
    messageDuration : 10000,
    say : function (text, holo, duration, callback) {
      if (!Arona.node.dialogue) return 'dialogue not found';
      
      // assigns passed array values to their corresponding argument
      if (Array.isArray(text)) {
        callback = text[3] ? text[3] : null;
        duration = text[2] ? text[2] : Arona.messageDuration;
            holo = text[1] ? text[1] : 1;
            text = text[0] ? text[0] : '';
      }
      
      // default values
      else {
        holo = holo ? holo : 1;
        duration = duration ? duration : Arona.messageDuration;
      }
      
      // standard image and dialogue change
      Arona.expression(holo);
      Arona.node.dialogue.innerText = text;
      
      // remove classes on arona from interactions
      if (Arona.node.body.className) {
        Arona.node.body.className = '';
      }
      
      // delete duration timeout if present
      if (Arona.messageTimeout) {
        clearTimeout(Arona.messageTimeout);
        delete Arona.messageTimeout;
      }
      
      // show the dialogue by fading it in
      Arona.node.dialogue_container.className = 'fade-in';
      
      if (duration != Infinity) {
        // hide the dialogue after the specified duration
        Arona.messageTimeout = setTimeout(function () {
          Arona.expression(1);
          Arona.node.dialogue_container.className = 'fade-out';
          delete Arona.timeout;
          
          if (callback) {
            callback();
          }
        }, duration);
      } else if (callback) {
        callback();
      }
    },
    
    // changes Arona's expression
    // id can be 1, 13, or 31 for this extension
    expression : function (id) {
      if (Arona.node.holo) {
        Arona.node.holo.src = 'resources/images/' + (id > 35 ? 1 : id <= 0 ? 1 : id) + '.png';
      }
    },
    
    // audio files for arona's voice module
    voice : {
      heeheehee : new Audio('resources/audio/heeheehee.ogg')
    },
    
    // make arona speak (audibly)
    // uses voice files above, so file == the object key for voice (Arona.speak('heeeheehee'))
    speak : function (file) {
      // stop any audio currently playing
      for (var k in Arona.voice) {
        if (!Arona.voice[k].paused) {
          Arona.voice[k].pause();
        }
      }
      
      // play the specified audio file
      Arona.voice[file].load();
      Arona.voice[file].play();
    },
    
    // headpats Arona
    headpat : function () {
      Arona.say("Heeheehee...", 13);
      
      setTimeout(function () {
        Arona.node.body.className = 'jump';
        Arona.speak('heeheehee');
      }, 100); // slight delay required in case applying the same class that was removed in Arona.say
    }
  };
  
  // set and normalize audio volume
  for (var k in Arona.voice) {
    Arona.voice[k].volume = 0.4;
  }
  
  // headpat handler for Arona's head
  document.getElementById('arona_head').onclick = Arona.headpat;
  
  
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
  
  // password state handler
  document.getElementById('keep_password_state').onchange = function () {
    chrome.storage.sync.set({
      keep_password_state : this.checked
    });
    
    // returns password state to default if disabled
    if (!this.checked) {
      chrome.storage.sync.set({
        password_state : false
      });
    }
  };
  
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
      context_menu : this.checked
    });
    
    // either add or remove the context menu
    if (this.checked == true) {
      chrome.contextMenus.create({
        id : "cunny_translate",
        title : chrome.i18n.getMessage("ext_name"),
        contexts : ["selection"]
      });
    } else {
      try {
        chrome.contextMenus.remove("cunny_translate");
      } catch (err) {
        console.log(err);
      }
    }
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
    if (!confirm(chrome.i18n.getMessage("reset_prompt") || "This will reset all of the options to their defaults. Do you want to continue?")) return false;
    
    // save context state for later
    var context = document.getElementById('context_menu'),
        context_was_checked = context.checked;
    
    // reset checkbox states
    document.getElementById('auto_translate').checked = true;
    document.getElementById('auto_copy').checked = true;
    document.getElementById('keep_password_state').checked = true;
    document.getElementById('save_password').checked = false;
    context.checked = true;
    
    // update settings internally
    chrome.storage.sync.set({
      auto_translate : true,
      
      auto_copy : true,
      
      keep_password_state : true,
      password_state : false,
      
      save_password : false,
      password_key : '',
      
      context_menu : true
    });
    
    // create context menu item, but only if it was disabled
    if (!context_was_checked) {
      chrome.contextMenus.create({
        id : "cunny_translate",
        title : chrome.i18n.getMessage("ext_name"),
        contexts : ["selection"]
      });
    }
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

  document.getElementById('reset-settings').firstChild.innerText = chrome.i18n.getMessage("btn_reset") || 'Reset';

  document.getElementById('homepage_link').innerText = chrome.i18n.getMessage("link_homepage") || 'Cunny Code Homepage';

  document.getElementById('arona_dialogue_1').innerText = chrome.i18n.getMessage("arona_dialogue_1") || 'Hello, Sensei!';
  document.getElementById('arona_dialogue_2').innerText = chrome.i18n.getMessage("arona_dialogue_2") || 'You can change the options for Cunny Translate on this page.';
  
  
  // change Arona to default state after 30 seconds
  Arona.messageTimeout = setTimeout(function () {
    Arona.node.dialogue_container.className = 'fade-out';
    Arona.expression(1);
  }, 30000);
}(window, document));
