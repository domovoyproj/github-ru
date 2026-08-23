const DICTIONARY = {
  "Pull requests": "Пул-реквесты",
  "Issues": "Задачи",
  "Code": "Код",
  "Actions": "Действия",
  "Projects": "Проекты",
  "Wiki": "Вики",
  "Security": "Безопасность",
  "Insights": "Аналитика",
  "Settings": "Настройки",
  "Fork": "Форк",
  "Star": "Оценить",
  "Watch": "Следить",
  "Commits": "Коммиты",
  "Branches": "Ветки",
  "Releases": "Релизы",
  "Contributors": "Участники",
  "Repositories": "Репозитории",
  "Overview": "Обзор",
  "Packages": "Пакеты",
  "Stars": "Звезды",
  "Sponsoring": "Спонсорство",
  "Followers": "Подписчики",
  "Following": "Подписки",
  "Sign in": "Войти",
  "Sign up": "Регистрация",
  "Sign out": "Выйти",
  "New": "Создать",
  "Edit": "Редактировать",
  "Delete": "Удалить",
  "Cancel": "Отмена",
  "Save": "Сохранить",
  "About": "О проекте",
  "Readme": "Ридми"
};

// --- Переводчик ---

// Эффективный обход текстовых узлов без разрушения иконок (SVG)
function translateTextNode(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.nodeValue.trim();
    if (DICTIONARY[text]) {
      node.nodeValue = node.nodeValue.replace(text, DICTIONARY[text]);
    }
  } else {
    for (const child of node.childNodes) {
      if (child.nodeName !== 'SCRIPT' && child.nodeName !== 'STYLE') {
        translateTextNode(child);
      }
    }
  }
}

// Защита от спама мутациями (throttling)
let translationTimeout = null;
function requestTranslation() {
  if (translationTimeout) return;
  translationTimeout = setTimeout(() => {
    translateTextNode(document.body);
    injectCustomButtons();
    translationTimeout = null;
  }, 300);
}

// --- Полезные кнопки ---

function injectCustomButtons() {
  // Ищем панель действий в репозитории (там где Fork, Star)
  const pageheadActions = document.querySelector('ul.pagehead-actions');
  
  if (pageheadActions && !document.getElementById('ruhub-btn-vs-code')) {
    
    // 1. Кнопка "Открыть в VS Code (github.dev)"
    // Меняет домен с github.com на github.dev для открытия веб-редактора
    const vscodeLi = document.createElement('li');
    vscodeLi.id = 'ruhub-btn-vs-code';
    const vscodeUrl = window.location.href.replace('github.com', 'github.dev');
    
    vscodeLi.innerHTML = `
      <a href="${vscodeUrl}" target="_blank" class="btn btn-sm ruhub-btn" title="Открыть репозиторий в веб-версии VS Code">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" class="octicon">
          <path d="M11.28 6.78a.75.75 0 0 0-1.06-1.06L7.22 8.72a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06L8.81 9.25l2.47-2.47Z"></path>
          <path d="M2 2.75C2 1.784 2.784 1 3.75 1h8.5C13.216 1 14 1.784 14 2.75v10.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25Zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25Z"></path>
        </svg>
        <span class="d-none d-md-inline">VS Code</span>
      </a>
    `;
    pageheadActions.prepend(vscodeLi);
    
    // 2. Быстрая кнопка "Скачать ZIP"
    // Извлекает имя пользователя и репозитория из URL
    const [, user, repo] = window.location.pathname.split('/');
    if (user && repo) {
      const zipLi = document.createElement('li');
      zipLi.id = 'ruhub-btn-zip';
      // Ссылка на скачивание (default branch - обычно main или master, GitHub сам разрешает HEAD для zipball)
      const zipUrl = \`/\${user}/\${repo}/archive/HEAD.zip\`;
      
      zipLi.innerHTML = `
        <a href="${zipUrl}" class="btn btn-sm ruhub-btn" title="Скачать архив репозитория (ZIP)">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" class="octicon">
            <path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"></path>
            <path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06l1.97 1.969Z"></path>
          </svg>
          <span class="d-none d-md-inline">ZIP</span>
        </a>
      `;
      pageheadActions.prepend(zipLi);
    }
  }
}

// Запуск при загрузке страницы
requestTranslation();

// Наблюдение за изменениями DOM (GitHub работает как Single Page Application с помощью Turbo)
const observer = new MutationObserver(() => {
  requestTranslation();
});
observer.observe(document.body, { childList: true, subtree: true });
