const TOUCORD_VERSION = '0.1.0';

let themes = {};
let lastThemeFetch = 0;

// ============ Setup

const consoleLogOld = console.log;

console.log = function (...args) {
    consoleLogOld('[TOUCORD]', ...args);
};

// ============ Init

console.log('Extension loaded!');

document.title = 'Toucord - ' + document.title;

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

let currentTab = 'tc_mSbrTcInfo'; // default tab
let menuShown = false;
let is3DEffectEnabled = true;
let isCustomCSSEnabled = true;

// Toucord Button
const toucordMenuButton = document.createElement('button');
toucordMenuButton.id = 'tc_menuBtn';
toucordMenuButton.textContent = 'Toucord';

async function openToucordMenu() {
    toucordMenu.style.display = 'block';
    toucordMenu.classList.remove('tc_menu_closing');

    // Restart animation each time the menu opens.
    toucordMenu.classList.remove('tc_menu_opening');
    void toucordMenu.offsetWidth;
    toucordMenu.classList.add('tc_menu_opening');
    menuShown = true;
}

async function closeToucordMenu() {
    if (
        toucordMenu.style.display === 'none' ||
        toucordMenu.classList.contains('tc_menu_closing')
    ) {
        return;
    }

    toucordMenu.classList.remove('tc_menu_opening');
    toucordMenu.classList.add('tc_menu_closing');

    const finishClose = async () => {
        toucordMenu.classList.remove('tc_menu_closing');
        toucordMenu.style.display = 'none';
        await switchTab('tc_mSbrTcInfo');
        updateButtonStates('tc_mSbrTcInfo');
    };

    toucordMenu.addEventListener('animationend', finishClose, { once: true });
    menuShown = false;
}

toucordMenuButton.addEventListener('click', async () => {
    if (!menuShown) await openToucordMenu();
    else await closeToucordMenu();
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

() =>
    (async function () {
        await switchTab('tc_mSbrTcInfo');
    })();

// Menu Interactions
toucordMenu
    .querySelector('#tc_menu_close')
    .addEventListener('click', async () => {
        await closeToucordMenu();
    });

async function updateButtonStates(activeButtonId) {
    if (activeButtonId === 'tc_mSbrCCSS') return;
    toucordMenu.querySelectorAll('.tc_mSbr button').forEach((btn) => {
        if (btn.id === activeButtonId) {
            btn.classList.add('tc_mSbrBtnActv');
        } else {
            btn.classList.remove('tc_mSbrBtnActv');
        }
    });
}

async function set3DEffectEnabled(enabled, persist = true) {
    is3DEffectEnabled = enabled;
    toucordMenu.classList.toggle('tc_menu_no3d', !enabled);

    if (persist) {
        chrome.storage.local.set({ tc_3dEffectEnabled: enabled });
    }
}

async function setCustomCSSEnabled(enabled, persist = true) {
    isCustomCSSEnabled = enabled;

    // double toggle to ensure it really works
    customCssStyleTag.disabled = !enabled;
    customCssStyleTag.media = enabled ? 'all' : 'not all';

    if (persist) {
        chrome.storage.local.set({ tc_cCssEnabled: enabled });
    }
}

async function switchTab(tabId) {
    if (tabId === 'tc_mSbrCCSS') {
        // open custom css editor popup
        chrome.runtime.sendMessage({
            type: 'OPEN_CSS_POPUP',
        });
        return;
    }

    currentTab = tabId;

    // remove current tab
    const displayArea = toucordMenu.querySelector('.tc_mDsply');
    displayArea.innerHTML = '';

    // add new tab content
    switch (tabId) {
        case 'tc_mSbrTmeBws':
            if (lastThemeFetch < Date.now() - 2 * 60 * 60 * 1000) {
                // Fetch new themes every 2 hours
                const result = await fetch(
                    'https://raw.githubusercontent.com/Tousend1000/toucord-extension/refs/heads/main/themes/themes.json',
                );
                const data = await result.json();
                console.log(data);
                themes = data || {};
            }
            displayArea.innerHTML = `
            <h2>Theme Browser</h2>
            <p>Browse and apply custom themes for your Toucord experience.</p>
            <div class="tc_cardContainer">
                ${Array.from(Object.values(themes))
                    .map(
                        (theme) => `
                <div class="tc_card${theme.id === currentThemeId ? ' tc_cardActive' : ''}" data-theme-id="${theme.id}">
                    <div class="tc_cardL">
                        <h3>${theme.name}</h3>
                        <p>${theme.description}</p>
                        <p>Author: ${theme.author}</p>
                        <button>Apply</button>
                    </div>
                    <div class="tc_cardR" style="background: url('${theme.preview}') no-repeat center/cover;"></div>
                </div>
                `,
                    )
                    .join('')}
            </div>
            `;
            break;
        case 'tc_mSbrPlnBws':
            displayArea.innerHTML = `
            <h2>Plugin Browser</h2>
            <p>Discover and manage plugins to enhance your Toucord functionality.</p>
            <div class="tc_cardContainer">
                ${''}
            </div>
            `;
            break;
        case 'tc_mSbrTcStgs':
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
        default: // tc_mSbrTcInfo
            displayArea.innerHTML = `
            <h2>Toucord <span>(Version ${TOUCORD_VERSION})</span></h2>
            <p>Use the sidebar to navigate through Toucord"s features.</p>
            <p class="tc_mInfoDisclaimer"><strong>Disclaimer:</strong> This is an unofficial, open-source project. All product names, logos, brands, and images are property of their respective owners. All company, product, and service names used in this extension are for identification and aesthetic purposes only. Use of these names, logos, and brands does not imply endorsement or affiliation.</p>
            `;
    }
}

toucordMenu.querySelectorAll('.tc_mSbr button').forEach((btn) => {
    btn.addEventListener('click', async () => {
        await switchTab(btn.id);
        await updateButtonStates(btn.id);
    });
});

toucordMenu.addEventListener('change', async (event) => {
    const target = event.target;

    if (!(target instanceof HTMLInputElement)) {
        return;
    }

    if (target.id === 'tc_setting_3dEffect')
        await set3DEffectEnabled(target.checked);

    if (target.id === 'tc_setting_customCSS')
        await setCustomCSSEnabled(target.checked);
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
        rafId: null,
    };

    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
    const lerp = (current, target, factor) =>
        current + (target - current) * factor;

    const renderMenuEffect = () => {
        const easing = state.hovering ? 0.18 : 0.14;

        state.currentTiltX = lerp(
            state.currentTiltX,
            state.targetTiltX,
            easing,
        );
        state.currentTiltY = lerp(
            state.currentTiltY,
            state.targetTiltY,
            easing,
        );
        state.currentShadowX = lerp(
            state.currentShadowX,
            state.targetShadowX,
            easing,
        );
        state.currentShadowY = lerp(
            state.currentShadowY,
            state.targetShadowY,
            easing,
        );
        state.currentGlareOpacity = lerp(
            state.currentGlareOpacity,
            state.targetGlareOpacity,
            easing,
        );
        state.currentMouseX = lerp(
            state.currentMouseX,
            state.targetMouseX,
            easing,
        );
        state.currentMouseY = lerp(
            state.currentMouseY,
            state.targetMouseY,
            easing,
        );

        menu.style.setProperty(
            '--tilt-x',
            `${state.currentTiltX.toFixed(2)}deg`,
        );
        menu.style.setProperty(
            '--tilt-y',
            `${state.currentTiltY.toFixed(2)}deg`,
        );
        menu.style.setProperty(
            '--shadow-x',
            `${state.currentShadowX.toFixed(1)}px`,
        );
        menu.style.setProperty(
            '--shadow-y',
            `${state.currentShadowY.toFixed(1)}px`,
        );
        menu.style.setProperty(
            '--glare-opacity',
            state.currentGlareOpacity.toFixed(3),
        );
        menu.style.setProperty(
            '--mouse-x',
            `${state.currentMouseX.toFixed(2)}%`,
        );
        menu.style.setProperty(
            '--mouse-y',
            `${state.currentMouseY.toFixed(2)}%`,
        );

        const settled =
            Math.abs(state.currentTiltX - state.targetTiltX) < 0.01 &&
            Math.abs(state.currentTiltY - state.targetTiltY) < 0.01 &&
            Math.abs(state.currentShadowX - state.targetShadowX) < 0.05 &&
            Math.abs(state.currentShadowY - state.targetShadowY) < 0.05 &&
            Math.abs(state.currentGlareOpacity - state.targetGlareOpacity) <
                0.003 &&
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
chrome.storage.local.get(
    ['tc_cCss', 'tc_3dEffectEnabled', 'tc_cCssEnabled', 'tc_cTmeId'],
    (result) => {
        // custom css
        customCssStyleTag.textContent = result.tc_cCss || '/* Custom CSS */'; // default comment

        // custom theme
        let themeId = result.tc_cTmeId;
        if (!themeId) themeId = 'default';
        currentThemeId = themeId;
        customThemeLinkTag.setAttribute('data-theme-id', themeId); // data-theme-id is the id of the currently active theme.
        customThemeLinkTag.href = '';
        // TODO: fetch theme url from github

        // custom css enabled
        const loadedCustomCssEnabled =
            typeof result.tc_cCssEnabled === 'boolean'
                ? result.tc_cCssEnabled
                : true; // default true
        setCustomCSSEnabled(loadedCustomCssEnabled, false);

        const customCssToggle = document.getElementById('tc_setting_customCSS');
        if (customCssToggle instanceof HTMLInputElement) {
            customCssToggle.checked = loadedCustomCssEnabled;
        }

        // 3D effect enabled
        const loaded3DEffectEnabled =
            typeof result.tc_3dEffectEnabled === 'boolean'
                ? result.tc_3dEffectEnabled
                : true; // default true
        set3DEffectEnabled(loaded3DEffectEnabled, false);

        const menu3DEffectToggle = document.getElementById(
            'tc_setting_3dEffect',
        );
        if (menu3DEffectToggle instanceof HTMLInputElement) {
            menu3DEffectToggle.checked = loaded3DEffectEnabled;
        }

        console.log('Successfully loaded settings from storage.');
        console.log('Selected Theme:', currentThemeId);
    },
);

// ============ Custom CSS
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'GET_CURRENT_CSS') {
        sendResponse({
            css: customCssStyleTag ? customCssStyleTag.textContent : '',
        });
    }

    if (request.type === 'UPDATE_CSS') {
        customCssStyleTag.textContent = request.css;

        chrome.storage.local.set({ tc_cCss: request.css });
    }
});
