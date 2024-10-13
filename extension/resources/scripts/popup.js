(function (window, document) {
  'use strict';
  
  // Arona's functionality
  window.Arona = {
    
    // encoder/decoder lists
    cunny : {
      encoder : {
        // Letters
        // Uppercase
        'A' : '^😭💢',
        'B' : '^💢😭😭😭',
        'C' : '^💢😭💢😭',
        'D' : '^💢😭😭',
        'E' : '^😭',
        'F' : '^😭😭💢😭',
        'G' : '^💢💢😭',
        'H' : '^😭😭😭😭',
        'I' : '^😭😭',
        'J' : '^😭💢💢💢',
        'K' : '^💢😭💢',
        'L' : '^😭💢😭😭',
        'M' : '^💢💢',
        'N' : '^💢😭',
        'O' : '^💢💢💢',
        'P' : '^😭💢💢😭',
        'Q' : '^💢💢😭💢',
        'R' : '^😭💢😭',
        'S' : '^😭😭😭',
        'T' : '^💢',
        'U' : '^😭😭💢',
        'V' : '^😭😭😭💢',
        'W' : '^😭💢💢',
        'X' : '^💢😭😭💢',
        'Y' : '^💢😭💢💢',
        'Z' : '^💢💢😭😭',
        // Lowercase
        'a' : '😭💢',
        'b' : '💢😭😭😭',
        'c' : '💢😭💢😭',
        'd' : '💢😭😭',
        'e' : '😭',
        'f' : '😭😭💢😭',
        'g' : '💢💢😭',
        'h' : '😭😭😭😭',
        'i' : '😭😭',
        'j' : '😭💢💢💢',
        'k' : '💢😭💢',
        'l' : '😭💢😭😭',
        'm' : '💢💢',
        'n' : '💢😭',
        'o' : '💢💢💢',
        'p' : '😭💢💢😭',
        'q' : '💢💢😭💢',
        'r' : '😭💢😭',
        's' : '😭😭😭',
        't' : '💢',
        'u' : '😭😭💢',
        'v' : '😭😭😭💢',
        'w' : '😭💢💢',
        'x' : '💢😭😭💢',
        'y' : '💢😭💢💢',
        'z' : '💢💢😭😭',
        
        // Numbers
        '0' : '💢💢💢💢💢',
        '1' : '😭💢💢💢💢',
        '2' : '😭😭💢💢💢',
        '3' : '😭😭😭💢💢',
        '4' : '😭😭😭😭💢',
        '5' : '😭😭😭😭😭',
        '6' : '💢😭😭😭😭',
        '7' : '💢💢😭😭😭',
        '8' : '💢💢💢😭😭',
        '9' : '💢💢💢💢😭',
        
        // Punctuation
        '.' : '😭💢😭💢😭💢',
        ',' : '💢💢😭😭💢💢',
        '!' : '💢😭💢😭💢💢',
        '?' : '😭😭💢💢😭😭',
        "'" : '😭💢💢💢💢😭',
        '"' : '😭💢😭😭💢😭',
        '/' : '💢😭😭💢😭',
        '(' : '💢😭💢💢😭',
        ')' : '💢😭💢💢😭💢',
        ':' : '💢💢💢😭😭😭',
        ';' : '💢😭💢😭💢😭',
        '=' : '💢😭😭😭💢',
        '+' : '😭💢😭💢😭',
        '-' : '💢😭😭😭😭💢',
        '_' : '😭😭💢💢😭💢',
        '@' : '😭💢💢😭💢😭',
        '&' : '😭💢😭😭😭',
        // extended support (custom)
        '`' : '😭😭💢💢💢💢',
        '~' : '😭😭😭💢💢💢',
        '\\' : '💢😭😭💢💢',
        '|' : '💢💢💢😭💢',
        '#' : '😭😭😭💢😭💢',
        '$' : '😭😭😭💢😭😭💢',
        '%' : '💢😭😭💢😭💢',
        '^' : '💢💢💢😭💢💢💢',
        '*' : '😭💢😭💢💢',
        '{' : '💢💢💢😭💢😭',
        '}' : '💢💢💢😭😭💢',
        '[' : '💢😭😭💢😭😭',
        ']' : '💢😭😭💢💢😭',
        '<' : '😭😭😭😭💢💢',
        '>' : '💢💢😭😭😭😭',
        
        // Accents
        // Uppercase
        'Ä' : '^😭💢😭💢',
        'Æ' : '^😭💢😭💢',
        'Ą' : '^😭💢😭💢',
        'À' : '^😭💢💢😭💢',
        'Å' : '^😭💢💢😭💢',
        'Ç' : '^💢😭💢😭😭',
        'Ĉ' : '^💢😭💢😭😭',
        'Ć' : '^💢😭💢😭😭',
        'Š' : '^💢💢💢💢',
        'Ĥ' : '^💢💢💢💢',
        'Ð' : '^😭😭💢💢😭',
        'Ś' : '^😭😭😭💢😭😭😭',
        'È' : '^😭💢😭😭💢',
        'Ł' : '^😭💢😭😭💢',
        'É' : '^😭😭💢😭😭',
        'Đ' : '^😭😭💢😭😭',
        'Ę' : '^😭😭💢😭😭',
        'Ĝ' : '^💢💢😭💢😭',
        'Ĵ' : '^😭💢💢💢😭',
        'Ź' : '^💢💢😭😭💢😭',
        'Ñ' : '^💢💢😭💢💢',
        'Ń' : '^💢💢😭💢💢',
        'Ö' : '^💢💢💢😭',
        'Ø' : '^💢💢💢😭',
        'Ó' : '^💢💢💢😭',
        'Ŝ' : '^😭😭😭💢😭',
        'Þ' : '^😭💢💢😭😭',
        'Ü' : '^😭😭💢💢',
        'Ŭ' : '^😭😭💢💢',
        'Ż' : '^💢💢😭😭💢',
        // Lowercase
        'ä' : '😭💢😭💢',
        'æ' : '😭💢😭💢',
        'ą' : '😭💢😭💢',
        'à' : '😭💢💢😭💢',
        'å' : '😭💢💢😭💢',
        'ç' : '💢😭💢😭😭',
        'ĉ' : '💢😭💢😭😭',
        'ć' : '💢😭💢😭😭',
        'š' : '💢💢💢💢',
        'ĥ' : '💢💢💢💢',
        'ð' : '😭😭💢💢😭',
        'ś' : '😭😭😭💢😭😭😭',
        'è' : '😭💢😭😭💢',
        'ł' : '😭💢😭😭💢',
        'é' : '😭😭💢😭😭',
        'đ' : '😭😭💢😭😭',
        'ę' : '😭😭💢😭😭',
        'ĝ' : '💢💢😭💢😭',
        'ĵ' : '😭💢💢💢😭',
        'ź' : '💢💢😭😭💢😭',
        'ñ' : '💢💢😭💢💢',
        'ń' : '💢💢😭💢💢',
        'ö' : '💢💢💢😭',
        'ø' : '💢💢💢😭',
        'ó' : '💢💢💢😭',
        'ŝ' : '😭😭😭💢😭',
        'þ' : '😭💢💢😭😭',
        'ü' : '😭😭💢💢',
        'ŭ' : '😭😭💢💢',
        'ż' : '💢💢😭😭💢',
        
        // Emoji
        '\uDE2D' : '😭😭😭😭😭😭', // 😭 sob
        '\uDCA2' : '💢💢💢💢💢💢', // 💢 anger
        '\uDD80' : '😭💢😭💢😭😭', // 🦀 kani
        
        // Space
        ' ' : ' ' // replaces standard space with four-per-em space which doesn't collapse when there's two in a row for word separation
      },
      
      // decoder is fully auto-generated at end of this object
      decoder : {
        '💢😭😭😭😭💢😭' : '\n' // line break (these are encoded right before decoding)
      }
    },
    
    // HTML node cache
    node : {
      input : document.getElementById('input'),
      output : document.getElementById('output'),
      encode : document.getElementById('encode'),
      decode : document.getElementById('decode'),
      error : document.getElementById('error'),
      error_list : document.getElementById('error_list'),
      password : document.getElementById('password'),
      enable_password : document.getElementById('enable_password'),
      checkbox : document.getElementById('checkbox'),
      copy : document.getElementById('copy'),
      swap : document.getElementById('swap')
    },
    
    
    // password settings
    password : {
      key : '',
      on : false,

      // toggles password mode
      toggle : function (caller) {
        Arona.password.on = caller.checked;
        
        // update password preference state
        chrome.storage.sync.set({
          password_state : caller.checked
        });
        
        // auto encode/decode with the password, if set
        if (Arona.auto_translate) {
          Arona.determineMode(Arona.node.input.value, caller);
        }
      }
    },
    
    
    // determines whether Arona should encode or decode the passed input
    determineMode : function (input, caller) {
      // mixed encode
      if (/[A-Z0-9.,!?'"/\(\):;=+\-_@&`~\\\|#$%*\{\}\[\]<>🦀ÄÆĄÀÅÇĈĆŠĤÐŚÈŁÉĐĘĜĴŹÑŃÖØÓŜÞÜŬŻ]/i.test(input) && /😭|💢/.test(input)) {
        Arona.encode(input, caller);
      }

      // decode
      else if (/😭|💢/.test(input)) {
        Arona.decode(input, caller);
      } 

      // default encode
      else {
        Arona.encode(input, caller);
      }
    },
    
    
    // encodes as morse code
    encode : function (input, caller) {
      
      // updates password and input values if sent via an array like this: ['input', 'password']
      if (Array.isArray(input)) {
        Arona.password.key = input[1] ? input[1] : Arona.password.key ? Arona.password.key : '';
        Arona.password.on = Arona.password.key ? true : false; // enable password if set
        input = input[0] ? input[0] : '';
      } else if (!caller) {
        Arona.password.on = false; // disables password if plain string is passed without a caller
      }
      
      // prevent encoding if no input
      if (!input) {
        return false;
      }
      
      // auto-hide error log on encode
      if (Arona.node.error) Arona.node.error.style.display = 'none';
      
      // encrypts the string with a password first if set
      if (Arona.password.on && Arona.password.key) {
        input = CryptoJS.AES.encrypt(input, Arona.password.key).toString();
      }
      
      // encode the input using 💢 and 😭, and separate each encoded character by a space
      for (var val = '', str = input.replace(/[\uFF01-\uFF5E]/g, function (c) {
        return String.fromCharCode(c.charCodeAt(0) - 0xFEE0); // convert full-width chars to half-width
      }), err = '', i = 0, j = str.length; i < j; i++) {
        // standard encoding
        if (Arona.cunny.encoder[str[i]]) {
          val += Arona.cunny.encoder[str[i]] + ((str[i] == ' ' || (i + 1) == j) ? '' : ' ');
        }
        
        // linebreak encoding fallback
        else if (/\r\n|\n|\r/.test(str[i])) {
          val += '\n';
        }
        
        // whitespace encoding fallback
        else if (/\s/.test(str[i])) {
          val += ' ';
        }
        
        // characters that could not be encoded
        else if (!/55358|55357|65039/.test(str[i].charCodeAt(0))) { // list of excluded chars
          err += str[i];
          console.error('failed to encode: ' + str[i] + ' (' + str[i].charCodeAt(0) + ')');
        }
      }
      
      if (Arona.node.output) Arona.node.output.value = val;
      
      if (!caller) return val; // return value if used without caller
      
      // display error message if some characters could not be encoded
      if (Arona.node.error && err.length) {
        // display unencodable characters
        Arona.node.error_list.innerText = err;
        
        // display error window
        Arona.node.error.style.display = '';
      }
    },
    
    
    // decodes morse code
    decode : function (input, caller) {
      // updates password and input values if sent via an array like this: ['input', 'password']
      if (Array.isArray(input)) {
        Arona.password.key = input[1] ? input[1] : Arona.password.key ? Arona.password.key : '';
        Arona.password.on = Arona.password.key ? true : false; // enable password if set
        input = input[0] ? input[0] : '';
      } else if (!caller) {
        Arona.password.on = false; // disables password if plain string is passed without a caller
      }
      
      if (!input || !/💢|😭/.test(input)) {
        return false;
      }
      
      // auto-hide error log on decode
      if (Arona.node.error) Arona.node.error.style.display = 'none';
      
      // decode the input
      // each letter is separated by a space, so we use that to split the input into an array for easy decoding
      // line breaks are encoded as '💢😭😭😭😭💢😭 ' before decoding
      for (var val = '', arr = input.replace(/^\s+|\s+$/g, '').replace(/\r\n|\n|\r/g, '💢😭😭😭😭💢😭 ').replace(/\s/g, ' ').split(' '), i = 0, j = arr.length; i < j; i++) {
        if (Arona.cunny.decoder[arr[i]]) {
          val += Arona.cunny.decoder[arr[i]];
        } else if (arr[i] == '') { // double spaces == a space, and are entered into the array as an empty string
          val += ' ';
        }
      }
      
      // decrypts the string with the provided password
      if (Arona.password.on && Arona.password.key) {
        var decrypted = '';
        
        try { // will keep things going if a "Malformed UTF-8 data" error is thrown when the password is wrong
          var decrypted = CryptoJS.AES.decrypt(val, Arona.password.key).toString(CryptoJS.enc.Utf8);
        } catch (error) {
          console.error(error);
        }
        
        // updates the val with the decrypted value if there is one
        if (decrypted) {
          val = decrypted;
        }
      }
      
      if (Arona.node.output) Arona.node.output.value = val;
      
      if (!caller) return val; // return value if used without caller 
    },
    
    
    // Swaps the values of the input and output fields
    swap : function () {
      if (!Arona.node.input.value && !Arona.node.output.value) {
        return false;
      }
      
      // swap values
      var input = Arona.node.input.value;
      Arona.node.input.value = Arona.node.output.value;
      Arona.node.output.value = input;
    },
    
    
    // copies the output to the user's clipboard
    copyText : function (value) {
      if (value) {
        if (Arona.copyTimeout) {
          clearTimeout(Arona.copyTimeout);
          delete Arona.copyTimeout;
        }
        
        try {
          navigator.clipboard.writeText(value);
          Arona.node.copy.firstChild.innerText = (chrome.i18n.getMessage("btn_copy_success").replace(/</g, '&lt;') || 'Copied!');

        } catch (error) {
          console.error(error);
          Arona.node.copy.firstChild.innerText = (chrome.i18n.getMessage("btn_copy_fail").replace(/</g, '&lt;') || 'Copy Failed!');
        }
        
        Arona.copyTimeout = setTimeout(function() {
          Arona.node.copy.firstChild.innerText = (chrome.i18n.getMessage("btn_copy").replace(/</g, '&lt;') || 'Copy');
          delete Arona.copyTimeout;
        }, 1000);
      }
    }
  };
  
  // setup decoder keys/values
  for (var k in Arona.cunny.encoder) {
    Arona.cunny.decoder[Arona.cunny.encoder[k]] =
      k == '\uDE2D' ? '😭' :
      k == '\uDCA2' ? '💢' :
      k == '\uDD80' ? '🦀' : k;
  }
  
  // auto-focus the input
  Arona.node.input.focus();

  // input handler
  Arona.node.input.oninput = function () {
    // parse emoji
    if (/:(?:sob|uoh):/ig.test(this.value)) {
      this.value = this.value.replace(/:(?:sob|uoh):/ig, '😭');
    }

    if (/:(?:anger|correction):/ig.test(this.value)) {
      this.value = this.value.replace(/:(?:anger|correction):/ig, '💢');
    }

    if (/:(?:crab|kani):/ig.test(this.value)) {
      this.value = this.value.replace(/:(?:crab|kani):/ig, '🦀');
    }
    
    // auto encode/decode
    // mixed encode
    if (Arona.auto_translate) {
      Arona.determineMode(Arona.node.input.value, this); // determines whether to encode or decode
    }
  };
    
  // disables enter key's normal behavior unless SHIFT is held down
  Arona.node.input.onkeydown = function (e) {
    if (/enter/i.test(e.key) && !e.shiftKey) e.preventDefault();
  };

  // auto encode or decode when pressing the enter button on the input or password field
  for (var node = ['input', 'password'], i = 0, j = node.length; i < j; i++) {
    Arona.node[node[i]].onkeyup = function (e) {
      if (e.shiftKey) return false; // don't encode if holding shift; this indicates a line break

      if (/enter/i.test(e.key)) {
        Arona.determineMode(Arona.node.input.value, this); // determines whether to encode or decode
      }
    };
  }

  // copy output if enter is pressed on the output field
  Arona.node.output.onkeyup = function (e) {
    if (/enter/i.test(e.key)) {
      this.select();
      Arona.copyText(this.value);
    }
  }
  
  // password inputs
  // updates password and saves it if enabled
  Arona.node.password.oninput = function () {
    Arona.password.key = this.value;
    
    // auto encode/decode if preferred
    if (Arona.auto_translate) {
      Arona.determineMode(Arona.node.input.value, this);
    }
    
    // save the password
    chrome.storage.sync.get('save_password', function (data) {
      if (data.save_password && data.save_password == true) {
        chrome.storage.sync.set({
          password_key : Arona.password.key
        });
      }
    });
  };
  
  // toggle password state
  Arona.node.enable_password.onchange = function () {
    Arona.password.toggle(this);
  };
  
  Arona.node.checkbox.onclick = function () {
    this.previousSibling.click();
  };
  
  Arona.node.checkbox.onkeyup = function (e) {
    e.key == 'Enter' && this.previousSibling.click();
  };
  
  // buttons
  Arona.node.encode.onclick = function () {
    Arona.encode(Arona.node.input.value, this); // encodes input
  };
  
  Arona.node.decode.onclick = function () {
    Arona.decode(Arona.node.input.value, this); // decodes input
  };
  
  Arona.node.swap.onclick = function () {
    Arona.swap(); // swaps input/output
  };
  
  // copies and selects output
  Arona.node.copy.onclick = function () {
    Arona.node.output.select();
    Arona.copyText(Arona.node.output.value);
  };
  
  // event handlers for close button on the error window
  var close = document.getElementById('close_button');
  close.onclick = function (e) {
    this.parentNode.style.display = 'none';
    e.preventDefault();
  };

  close.onkeyup = function (e) {
    if (/enter/i.test(e.key)) {
      this.parentNode.style.display = 'none';
    }
    e.preventDefault();
  };
  
  
  // sets auto translate state
  chrome.storage.sync.get('auto_translate', function (data) {
    Arona.auto_translate = data.auto_translate !== undefined ? data.auto_translate : true;
  });
  
  // sets password state
  chrome.storage.sync.get('keep_password_state', function (data) {
    if (data.keep_password_state == true || data.keep_password_state == undefined) {
      chrome.storage.sync.get('password_state', function (data) {
        var state = data.password_state !== undefined ? data.password_state : false;
        Arona.password.on = state
        Arona.node.enable_password.checked = state;
      });
    }
  });
  
  // sets saved password
  chrome.storage.sync.get('password_key', function (data) {
    if (data.password_key && data.password_key != '') {
      Arona.node.password.value = data.password_key;
      Arona.password.key = data.password_key;
    }
  });
  
  
  // set preferred locale
  Arona.node.input.placeholder = chrome.i18n.getMessage("placeholder_input") || 'Input';
  Arona.node.output.placeholder = chrome.i18n.getMessage("placeholder_output") || 'Output';
  document.getElementById('label_password').innerText = chrome.i18n.getMessage("label_password") || 'Password';
  Arona.node.encode.firstChild.innerText = chrome.i18n.getMessage("btn_encode") || 'Encode';
  Arona.node.decode.firstChild.innerText = chrome.i18n.getMessage("btn_decode") || 'Decode';
  document.getElementById('error_title').innerText = chrome.i18n.getMessage("error_title") || 'Error';
  document.getElementById('error_body').innerText = chrome.i18n.getMessage("error_body") || 'The following could not be encoded.';
  Arona.node.swap.title = chrome.i18n.getMessage("btn_swap") || 'Swap the input and output';
  Arona.node.copy.firstChild.innerText = chrome.i18n.getMessage("btn_copy") || 'Copy';
  document.getElementById('footer_website').innerText = chrome.i18n.getMessage("footer_website") || 'Cunny Code';
  document.getElementById('footer_options').innerText = chrome.i18n.getMessage("footer_options") || 'Extension Options';
  document.getElementById('footer_donate').innerText = chrome.i18n.getMessage("footer_donate") || 'Donate';
  
  
  // copy and paste selected texts into the input field if enabled
  chrome.storage.sync.get('auto_copy', function (data) {
    if (data.auto_copy == true || data.auto_copy == undefined) {
      chrome.tabs.query({active: true, currentWindow: true}).then(function ([tab]) {
        chrome.scripting.executeScript({
          target: {tabId: tab.id},
          func : function () {
            if (window.getSelection().toString().length) {
              document.execCommand('copy'); // window.getSelection() and navigator.clipboard.writeText() don't return SVG/DOM emojis, so this is the only method that works for getting the rich document selection, especially for emojis on twitter and similar sites
              chrome.storage.sync.set({ new_selection : true });
            }
          }
        }).then(function() {
          chrome.storage.sync.get('new_selection', function (data) {
            if (data.new_selection == true) {
              // paste the copied cunny code into the input field
              Arona.node.input.focus();
              document.execCommand('paste'); 
              chrome.storage.sync.set({ new_selection : false });
            }
          });
        })
      });
    }
  });
}(window, document));