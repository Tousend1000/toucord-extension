const TOUCORD_VERSION = "0.1.0";

const debug_themes = {
    "default": {
        "id": "default",
        "name": "Default Theme",
        "description": "The good old default Starcord theme.",
        "author": "Starcord",
        "preview": "https://cdn.discordapp.com/attachments/1348361964681822258/1491192217111363685/image.png?ex=69d6cc79&is=69d57af9&hm=f6803f72114b6fc0dacf12307b430955d840def7dc6b20d60b859245802f4fb8&"
    },
    "material-white": {
        "id": "material-white",
        "name": "Material White Theme",
        "description": "An actual light mode theme for people with social anxiety. Not recommended for use in dark environments.",
        "author": "Tousend1000",
        "preview": "https://cdn.discordapp.com/attachments/1168998406769868892/1491243563672014958/image.png?ex=69d6fc4b&is=69d5aacb&hm=a2f0a88218cffb1dd5985dc90e8d66af93add685b12437159a225a8c9daa4d02&"
    },
    "material-black": {
        "id": "material-black",
        "name": "Material Black Theme",
        "description": "A simple and clean dark theme.",
        "author": "Tousend1000",
        "preview": "https://cdn.discordapp.com/attachments/1168998406769868892/1491219897714479344/image.png?ex=69d6e641&is=69d594c1&hm=30d3ae9bbd9520ffa7c43457c2fc647f170db0987cbb720de04cf3b650dde5aa&"
    },
    "material-black-plus": {
        "id": "material-black-plus",
        "name": "Material Black+ Theme",
        "description": "A darker version of the Material Black theme.",
        "author": "Tousend1000",
        "preview": "https://cdn.discordapp.com/attachments/1168998406769868892/1491220065935429844/image.png?ex=69d6e669&is=69d594e9&hm=6ef557ca77c7a11b26fd6d4f660d9c054a599c7ad385aaf26c1741f4f77f739d&"
    },
    "material-black-plus-plus": {
        "id": "material-black-plus-plus",
        "name": "Material Black++ Theme",
        "description": "The darkness itself. An even darker version of the Material Black+ theme.",
        "author": "Tousend1000",
        "preview": "https://cdn.discordapp.com/attachments/1168998406769868892/1491220229039067278/image.png?ex=69d6e690&is=69d59510&hm=4fdee348b58c5beaff1d1bc195823b2c64c565c5d3fe56432ebfd5f63b5e2ade&"
    },
    "space": {
        "id": "space",
        "name": "Space Theme",
        "description": "A theme inspired by the vast emptiness of space. Perfect for those who want to feel like they're floating in the void.",
        "author": "Tousend1000",
        "preview": "https://cdn.discordapp.com/attachments/1168998406769868892/1491236773198827571/image.png?ex=69d6f5f8&is=69d5a478&hm=89feedbbae7bfe59909902c3fb8f3f854f67fc1d0d92676fe445576743d7e1df&"
    },
    "flashbang": {
        "id": "flashbang",
        "name": "Flashbang Theme",
        "description": "The light itself. Not recommended for long-term use unless you want to blind yourself.",
        "author": "Tousend1000",
        "preview": "https://cdn.discordapp.com/attachments/1168998406769868892/1491226297127670034/image.png?ex=69d6ec36&is=69d59ab6&hm=05fb25c1a86f1d176fef6a5e292bc980b3dab0a6d0595a7fa08f74096ffe4419&"
    },
    "eyebleach": {
        "id": "eyebleach",
        "name": "Eyebleach Theme",
        "description": "A theme which is identical to bleach. For those who want to punish themselves.",
        "author": "Tousend1000",
        "preview": "https://cdn.discordapp.com/attachments/1168998406769868892/1491226155154538566/image.png?ex=69d6ec15&is=69d59a95&hm=22ed8bfd02b40077a964f1dec879b9fcb51dfc5583649fbc9030fbe62ca7301e&"
    },
    "hallucination": {
        "id": "hallucination",
        "name": "Hallucination Theme",
        "description": "Are you sure it's just the theme? Not recommended for use in public.",
        "author": "Tousend1000",
        "preview": "https://cdn.discordapp.com/attachments/1168998406769868892/1491246541887897610/image.png?ex=69d6ff11&is=69d5ad91&hm=0f5837306330601947c7caba2ca0ec270d77fc7f2e621dfdb5635ed7bb8f92e8&"
    }
}

// ============ Setup

const consoleLogOld = console.log;

console.log = function(...args) {
    consoleLogOld("[TOUCORD]", ...args);
}

function sendWebsiteError(message) {
    const normalizedMessage = typeof message === 'string' ? message : String(message);
    const bridgeScript = document.createElement('script');

    bridgeScript.textContent = `(() => {
        const message = ${JSON.stringify(normalizedMessage)};
        if (typeof window.sendError === 'function') {
            window.sendError(message);
            return;
        }

        console.error('[TOUCORD] window.sendError is not available on this page.', message);
    })();`;

    (document.head || document.documentElement).appendChild(bridgeScript);
    bridgeScript.remove();
}

// ============ Init

console.log("Extension loaded!");

document.title = "Toucord - " + document.title;

// ============ Custom Theme

let currentThemeId = null;

const customThemeLinkTag = document.createElement('link');
customThemeLinkTag.rel = 'stylesheet';
customThemeLinkTag.id = 'tc_cTmeLink';
document.head.appendChild(customThemeLinkTag);

const customCssStyleTag = document.createElement('style');
customCssStyleTag.id = 'tc_cCss';
document.head.appendChild(customCssStyleTag);

// ============ Toucord Menu

let currentTab = "tc_mSbrTcInfo"; // default tab
let menuShown = false;
let is3DEffectEnabled = true;
let isCustomCSSEnabled = true;

// Toucord Button
const toucordMenuButton = document.createElement('button');
toucordMenuButton.id = 'tc_menuBtn';
toucordMenuButton.textContent = 'Toucord';

function openToucordMenu() {
    toucordMenu.style.display = 'block';
    toucordMenu.classList.remove('tc_menu_closing');

    // Restart animation each time the menu opens.
    toucordMenu.classList.remove('tc_menu_opening');
    void toucordMenu.offsetWidth;
    toucordMenu.classList.add('tc_menu_opening');
    menuShown = true;
}

function closeToucordMenu() {
    if (toucordMenu.style.display === 'none' || toucordMenu.classList.contains('tc_menu_closing')) {
        return;
    }

    toucordMenu.classList.remove('tc_menu_opening');
    toucordMenu.classList.add('tc_menu_closing');

    const finishClose = () => {
        toucordMenu.classList.remove('tc_menu_closing');
        toucordMenu.style.display = 'none';
        switchTab("tc_mSbrTcInfo");
        updateButtonStates("tc_mSbrTcInfo");
    };

    toucordMenu.addEventListener('animationend', finishClose, { once: true });
    menuShown = false;
}

toucordMenuButton.addEventListener('click', () => {
    if (!menuShown) openToucordMenu();
    else closeToucordMenu();
});

document.body.appendChild(toucordMenuButton);

// Menu Structure
const toucordMenu = document.createElement('div');
toucordMenu.id = 'tc_menu';
toucordMenu.style.display = 'none';
toucordMenu.innerHTML = `
<div class="tc_mGlr"></div>
<div class="tc_mInnr">
    <div class="tc_mHdr">
        <span>Toucord</span>
        <button id="tc_menu_close">×</button>
    </div>
    <div class="tc_mCtnt">
        <div class="tc_mSbr">
            <button id="tc_mSbrTmeBws">Theme Browser</button>
            <button id="tc_mSbrPlnBws">Plugin Browser</button>
            <button id="tc_mSbrCCSS">Custom CSS</button>
            <button id="tc_mSbrTcStgs">Toucord Settings</button>
            <button id="tc_mSbrTcInfo" class="tc_mSbrBtnActv">Toucord Info</button>
        </div>
        <div class="tc_mDsply">
        </div>
    </div>
</div>
`;
document.body.appendChild(toucordMenu);

switchTab(currentTab);

// Menu Interactions
toucordMenu.querySelector("#tc_menu_close").addEventListener('click', () => {
    closeToucordMenu();
});

function updateButtonStates(activeButtonId) {
    if (activeButtonId === 'tc_mSbrCCSS')  return;
    toucordMenu.querySelectorAll('.tc_mSbr button').forEach(btn => {
        if (btn.id === activeButtonId) {
            btn.classList.add('tc_mSbrBtnActv');
        } else {
            btn.classList.remove('tc_mSbrBtnActv');
        }
    });
}

function set3DEffectEnabled(enabled, persist = true) {
    is3DEffectEnabled = enabled;
    toucordMenu.classList.toggle('tc_menu_no3d', !enabled);

    if (persist) {
        chrome.storage.local.set({ tc_3dEffectEnabled: enabled });
    }
}

function setCustomCSSEnabled(enabled, persist = true) {
    isCustomCSSEnabled = enabled;

    // double toggle to ensure it really works
    customCssStyleTag.disabled = !enabled;
    customCssStyleTag.media = enabled ? 'all' : 'not all';

    if (persist) {
        chrome.storage.local.set({ tc_cCssEnabled: enabled });
    }
}

function switchTab(tabId) {
    if (tabId === 'tc_mSbrCCSS') {
        // open custom css editor popup
        chrome.runtime.sendMessage({
            type: "OPEN_CSS_POPUP"
        });
        return;
    }

    currentTab = tabId;

    // remove current tab
    const displayArea = toucordMenu.querySelector('.tc_mDsply');
    displayArea.innerHTML = '';

    // add new tab content
    switch (tabId) {
        case "tc_mSbrTmeBws":
            displayArea.innerHTML = `
            <h2>Theme Browser</h2>
            <p>Browse and apply custom themes for your Toucord experience.</p>
            <div class="tc_cardContainer">
                ${Array.from(Object.values(debug_themes)).map(theme => `
                <div class="tc_card${theme.id === currentThemeId ? ' tc_cardActive' : ''}" data-theme-id="${theme.id}">
                    <div class="tc_cardL">
                        <h3>${theme.name}</h3>
                        <p>${theme.description}</p>
                        <p>Author: ${theme.author}</p>
                        <button>Apply</button>
                    </div>
                    <div class="tc_cardR" style="background: url('${theme.preview}') no-repeat center/cover;"></div>
                </div>
                `).join('')}
            </div>
            `;
            break;
        case "tc_mSbrPlnBws":
            displayArea.innerHTML = `
            <h2>Plugin Browser</h2>
            <p>Discover and manage plugins to enhance your Toucord functionality.</p>
            <div class="tc_cardContainer">
                ${""}
            </div>
            `;
            break;
        case "tc_mSbrTcStgs":
            displayArea.innerHTML = `
            <h2>Toucord Settings</h2>
            <p>Configure your Toucord preferences and settings.</p>
            <hr>
            <div class="tc_setting">
                <h3>3D Menu Effect</h3>
                <label class="tc_toggle">
                    <input type="checkbox" id="tc_setting_3dEffect" ${is3DEffectEnabled ? 'checked' : ''}>
                    <span class="tc_slider"></span>
                </label>
            </div>
            <div class="tc_setting">
                <h3>Enable Custom CSS</h3>
                <label class="tc_toggle">
                    <input type="checkbox" id="tc_setting_customCSS" ${isCustomCSSEnabled ? 'checked' : ''}>
                    <span class="tc_slider"></span>
                </label>
            </div>
            `;
            break;
        default:  // tc_mSbrTcInfo
            displayArea.innerHTML = `
            <h2>Toucord <span>(Version ${TOUCORD_VERSION})</span></h2>
            <p>Use the sidebar to navigate through Toucord's features.</p>
            <p class="tc_mInfoDisclaimer"><strong>Disclaimer:</strong> This is an unofficial, open-source project. All product names, logos, brands, and images are property of their respective owners. All company, product, and service names used in this extension are for identification and aesthetic purposes only. Use of these names, logos, and brands does not imply endorsement or affiliation.</p>
            `;
    }
}

toucordMenu.querySelectorAll('.tc_mSbr button').forEach(btn => {
    btn.addEventListener('click', () => {
        switchTab(btn.id);
        updateButtonStates(btn.id);
    });
});

toucordMenu.addEventListener('change', (event) => {
    const target = event.target;

    if (!(target instanceof HTMLInputElement)) {
        return;
    }

    if (target.id === 'tc_setting_3dEffect') set3DEffectEnabled(target.checked);
    if (target.id === 'tc_setting_customCSS') setCustomCSSEnabled(target.checked);
});

// Toucord Menu 3D Effect
const menu = document.getElementById('tc_menu');

if (menu) {
    const state = {
        targetTiltX: 0,
        targetTiltY: 0,
        currentTiltX: 0,
        currentTiltY: 0,
        targetShadowX: 0,
        targetShadowY: 20,
        currentShadowX: 0,
        currentShadowY: 20,
        targetGlareOpacity: 0,
        currentGlareOpacity: 0,
        targetMouseX: 50,
        targetMouseY: 50,
        currentMouseX: 50,
        currentMouseY: 50,
        hovering: false,
        rafId: null
    };

    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
    const lerp = (current, target, factor) => current + (target - current) * factor;

    const renderMenuEffect = () => {
        const easing = state.hovering ? 0.18 : 0.14;

        state.currentTiltX = lerp(state.currentTiltX, state.targetTiltX, easing);
        state.currentTiltY = lerp(state.currentTiltY, state.targetTiltY, easing);
        state.currentShadowX = lerp(state.currentShadowX, state.targetShadowX, easing);
        state.currentShadowY = lerp(state.currentShadowY, state.targetShadowY, easing);
        state.currentGlareOpacity = lerp(state.currentGlareOpacity, state.targetGlareOpacity, easing);
        state.currentMouseX = lerp(state.currentMouseX, state.targetMouseX, easing);
        state.currentMouseY = lerp(state.currentMouseY, state.targetMouseY, easing);

        menu.style.setProperty('--tilt-x', `${state.currentTiltX.toFixed(2)}deg`);
        menu.style.setProperty('--tilt-y', `${state.currentTiltY.toFixed(2)}deg`);
        menu.style.setProperty('--shadow-x', `${state.currentShadowX.toFixed(1)}px`);
        menu.style.setProperty('--shadow-y', `${state.currentShadowY.toFixed(1)}px`);
        menu.style.setProperty('--glare-opacity', state.currentGlareOpacity.toFixed(3));
        menu.style.setProperty('--mouse-x', `${state.currentMouseX.toFixed(2)}%`);
        menu.style.setProperty('--mouse-y', `${state.currentMouseY.toFixed(2)}%`);

        const settled =
            Math.abs(state.currentTiltX - state.targetTiltX) < 0.01 &&
            Math.abs(state.currentTiltY - state.targetTiltY) < 0.01 &&
            Math.abs(state.currentShadowX - state.targetShadowX) < 0.05 &&
            Math.abs(state.currentShadowY - state.targetShadowY) < 0.05 &&
            Math.abs(state.currentGlareOpacity - state.targetGlareOpacity) < 0.003 &&
            Math.abs(state.currentMouseX - state.targetMouseX) < 0.05 &&
            Math.abs(state.currentMouseY - state.targetMouseY) < 0.05;

        if (!settled) {
            state.rafId = requestAnimationFrame(renderMenuEffect);
            return;
        }

        state.rafId = null;
    };

    const queueRender = () => {
        if (!state.rafId) {
            state.rafId = requestAnimationFrame(renderMenuEffect);
        }
    };

    menu.addEventListener('mousemove', (e) => {
        const rect = menu.getBoundingClientRect();
        const x = clamp((e.clientX - rect.left) / rect.width - 0.5, -0.5, 0.5);
        const y = clamp((e.clientY - rect.top) / rect.height - 0.5, -0.5, 0.5);

        const tiltAmount = 10;
        state.targetTiltX = -y * tiltAmount;
        state.targetTiltY = x * tiltAmount;

        state.targetShadowX = -x * 36;
        state.targetShadowY = 20 + y * 26;

        const centerDistance = Math.min(1, Math.hypot(x * 1.25, y * 1.25));
        state.targetGlareOpacity = 0.08 + (1 - centerDistance) * 0.2;
        state.targetMouseX = (x + 0.5) * 100;
        state.targetMouseY = (y + 0.5) * 100;
        state.hovering = true;

        queueRender();
    });

    menu.addEventListener('mouseleave', () => {
        state.targetTiltX = 0;
        state.targetTiltY = 0;
        state.targetShadowX = 0;
        state.targetShadowY = 20;
        state.targetGlareOpacity = 0;
        state.targetMouseX = 50;
        state.targetMouseY = 50;
        state.hovering = false;

        queueRender();
    });
}

// ============ Load Settings and Data
chrome.storage.local.get(["tc_cCss", "tc_3dEffectEnabled", "tc_cCssEnabled", "tc_cTmeId"], (result) => {
    // custom css
    customCssStyleTag.textContent = result.tc_cCss || "/* Custom CSS */";  // default comment

    // custom theme
    let themeId = result.tc_cTmeId;
    if (!themeId) themeId = 'default';
    currentThemeId = themeId;
    customThemeLinkTag.setAttribute('data-theme-id', themeId);  // data-theme-id is the id of the currently active theme.
    customThemeLinkTag.href = '';
    // TODO: fetch theme url from github

    // custom css enabled
    const loadedCustomCssEnabled = typeof result.tc_cCssEnabled === 'boolean' ? result.tc_cCssEnabled : true;  // default true
    setCustomCSSEnabled(loadedCustomCssEnabled, false);

    const customCssToggle = document.getElementById('tc_setting_customCSS');
    if (customCssToggle instanceof HTMLInputElement) {
        customCssToggle.checked = loadedCustomCssEnabled;
    }

    // 3D effect enabled
    const loaded3DEffectEnabled = typeof result.tc_3dEffectEnabled === 'boolean' ? result.tc_3dEffectEnabled : true;  // default true
    set3DEffectEnabled(loaded3DEffectEnabled, false);

    const menu3DEffectToggle = document.getElementById('tc_setting_3dEffect');
    if (menu3DEffectToggle instanceof HTMLInputElement) {
        menu3DEffectToggle.checked = loaded3DEffectEnabled;
    }

    console.log("Successfully loaded settings from storage.");
    console.log("Selected Theme:", currentThemeId)
});


// ============ Custom CSS
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "GET_CURRENT_CSS") {
        sendResponse({ css: customCssStyleTag ? customCssStyleTag.textContent : "" });
    }

    if (request.type === "UPDATE_CSS") {
        customCssStyleTag.textContent = request.css;

        chrome.storage.local.set({ "tc_cCss": request.css });
    }
});
