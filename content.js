const DICTIONARY = {
  // --- Навигация репозитория ---
  "pull requests": "Пул-реквесты",
  "issues": "Задачи",
  "code": "Код",
  "actions": "Действия",
  "projects": "Проекты",
  "wiki": "Вики",
  "security": "Безопасность",
  "security and quality": "Безопасность",
  "insights": "Аналитика",
  "settings": "Настройки",
  "discussions": "Обсуждения",
  "fork": "Форк",
  "star": "Оценить",
  "unstar": "Не оценивать",
  "starred": "Оценено",
  "watch": "Следить",
  "unwatch": "Не следить",
  "pin": "Закрепить",
  "commits": "коммиты",
  "commit": "коммит",
  "branches": "ветки",
  "branch": "ветка",
  "tags": "Теги",
  "releases": "Релизы",
  "release": "Релиз",
  "release list": "Список релизов",
  "draft a new release": "Черновик нового релиза",
  "find a release": "Найти релиз",
  "create a new release": "Создать новый релиз",
  "compare": "Сравнить",
  "latest": "Последний",
  "contributors": "участники",
  "contributor": "участник",
  "repositories": "Репозитории",
  "repository": "Репозиторий",
  "overview": "Обзор",
  "packages": "Пакеты",
  "environments": "Окружения",
  "deployments": "Развертывания",
  "stars": "Звезды",
  "sponsoring": "Спонсорство",
  "followers": "Подписчики",
  "following": "Подписки",

  // --- Меню профиля ---
  "set status": "Задать статус",
  "profile": "Профиль",
  "your profile": "Ваш профиль",
  "your repositories": "Ваши репозитории",
  "your organizations": "Ваши организации",
  "your projects": "Ваши проекты",
  "your stars": "Ваши звезды",
  "your gists": "Ваши gist-ы",
  "your sponsors": "Ваши спонсоры",
  "gists": "Gist-ы",
  "organizations": "Организации",
  "enterprises": "Предприятия",
  "sponsors": "Спонсоры",
  "copilot settings": "Настройки Copilot",
  "feature preview": "Предпросмотр функций",
  "appearance": "Внешний вид",
  "accessibility": "Доступность",
  "try enterprise": "Попробовать Enterprise",
  "upgrade": "Улучшить",
  "help": "Помощь",
  "documentation": "Документация",
  "support": "Поддержка",

  // --- Общие действия и кнопки ---
  "new": "Создать",
  "edit": "Редактировать",
  "delete": "Удалить",
  "cancel": "Отмена",
  "save": "Сохранить",
  "save changes": "Сохранить изменения",
  "submit": "Отправить",
  "close": "Закрыть",
  "open": "Открыть",
  "create": "Создать",
  "add file": "Добавить файл",
  "upload files": "Загрузить файлы",
  "create new file": "Создать новый файл",
  "go to file": "Перейти к файлу",
  "download zip": "Скачать ZIP",
  "copy": "Копировать",
  "clone": "Клонировать",
  "search": "Поиск",
  "filter": "Фильтр",
  "sort": "Сортировка",
  "add": "Добавить",
  "remove": "Удалить",
  "update": "Обновить",
  "rename": "Переименовать",
  "confirm": "Подтвердить",
  "back": "Назад",
  "next": "Далее",
  "previous": "Назад",
  "loading": "Загрузка",
  "more": "Ещё",
  "less": "Свернуть",
  "show more": "Показать больше",
  "view all": "Показать все",

  // --- Аутентификация ---
  "sign in": "Войти",
  "sign up": "Регистрация",
  "sign out": "Выйти",

  // --- Прочее ---
  "about": "О проекте",
  "readme": "Ридми",
  "public": "Публичный",
  "private": "Приватный",
  "activity": "Активность",
  "watching": "отслеживают",
  "forks": "форки",
  "language": "Язык",
  "languages": "Языки",
  "topics": "Темы",
  "license": "Лицензия",
  "notifications": "Уведомления",
  "dashboard": "Панель управления",
  "explore": "Обзор",
  "marketplace": "Магазин",
  "pricing": "Цены"
};

// --- Переводчик ---

// Используем TreeWalker — это самый быстрый и надежный способ обхода текстовых узлов в браузере
function translateDOM() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let node;
  
  while ((node = walker.nextNode())) {
    const parent = node.parentElement;
    // Пропускаем скрипты, стили и поля ввода
    if (parent && (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE' || parent.tagName === 'TEXTAREA' || parent.isContentEditable)) {
      continue;
    }
    
    const originalText = node.nodeValue;
    const trimmedText = originalText.trim().toLowerCase(); // Ищем без учета регистра
    
    if (DICTIONARY[trimmedText]) {
      // Сохраняем пробелы по краям, заменяя только сам текст
      node.nodeValue = originalText.replace(originalText.trim(), DICTIONARY[trimmedText]);
    }
  }
  
  // Переводим важные атрибуты (подсказки и плейсхолдеры)
  const elementsWithAttributes = document.querySelectorAll('[aria-label], [placeholder], [title], [data-content]');
  elementsWithAttributes.forEach(el => {
    ['aria-label', 'placeholder', 'title', 'data-content'].forEach(attr => {
      if (el.hasAttribute(attr)) {
        const val = el.getAttribute(attr).trim().toLowerCase();
        if (DICTIONARY[val]) {
          el.setAttribute(attr, DICTIONARY[val]);
        }
      }
    });
  });
}

// Защита от спама мутациями (throttling)
let translationTimeout = null;
function requestTranslation() {
  if (translationTimeout) return;
  translationTimeout = setTimeout(() => {
    translateDOM();
    injectCustomButtons();
    translationTimeout = null;
  }, 100); // Уменьшил задержку для большей отзывчивости
}

// --- Полезные кнопки ---

function injectCustomButtons() {
  // Ищем панель действий в репозитории (там где Fork, Star)
  const pageheadActions = document.querySelector('ul.pagehead-actions');
  
  if (pageheadActions && !document.getElementById('ruhub-btn-vs-code')) {
    
    // 1. Кнопка "Открыть в VS Code (github.dev)"
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
    const [, user, repo] = window.location.pathname.split('/');
    if (user && repo) {
      const zipLi = document.createElement('li');
      zipLi.id = 'ruhub-btn-zip';
      const zipUrl = "/" + user + "/" + repo + "/archive/HEAD.zip";
      
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

// Наблюдение за изменениями DOM
const observer = new MutationObserver(() => {
  requestTranslation();
});
observer.observe(document.body, { childList: true, subtree: true, characterData: true });
