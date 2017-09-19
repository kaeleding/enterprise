(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module
    define('cultures/uk-UA', ['jquery'], factory);
    factory();
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function () {

  if (!Locale) {
    return;
  }

  //Get Latest from http://www.unicode.org/Public/cldr/25/
  Locale.addCulture('uk-UA', {
    //layout/language
    language: 'uk',
    englishName: 'Ukrainian (Ukraine)',
    nativeName: 'україньска (Україна)',
    //layout/orientation/@characters
    direction: 'left-to-right',
    //ca-gregorian
    calendars: [{
      //ca-gregorian/main/dates/calendars/gregorian/dateFormats/
      dateFormat: {'separator': '.', //Infered
                   'timeSeparator': ':',
                   'short': 'dd.MM.yyyy', //use four digit year
                   'medium': 'd MMM yyyy',
                   'long': 'd MMMM yyyy р.',
                   'full': 'EEEE, d MMMM yyyy р.',
                   'month': 'd MMMM',
                   'year': 'MMMM yyyy',
                   'timestamp': 'HH:mm:ss',
                   'datetime': 'dd.MM.yyyy HH:mm'}, //Infered short + short gregorian/dateTimeFormats
      //ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
      days: {
         wide: ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'пʼятниця', 'субота'],
         abbreviated: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
         narrow: ['H', 'П', 'B', 'С', 'Ч', 'П', 'C']
      },
      //ca-gregorian/main/dates/calendars/gregorian/months/format/wide
      months: {
        wide: ['січня', 'лютого', 'березня', 'квітня',  'травня',  'червня', 'липня',  'серпня', 'вересня', 'жовтня', 'листопада',  'грудня'],
        abbreviated: ['Січ', 'Лют', 'Бер', 'Кві', 'Тра', 'Чер', 'Лип', 'Сер', 'Вер', 'Жов', 'Лис','Гру']
    },
      //ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
      timeFormat: 'HH:mm',
      //ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
      dayPeriods: ['дп', 'пп']
    }],
    //numbers/currencyFormats-numberSystem-latn/standard (Replace Sign http://www.currencysymbols.in ?)
    currencySign: '₴', //(Replace Sign http://www.currencysymbols.in ?)
    currencyFormat: '#,##0.00 ¤',
    //numbers/symbols-numberSystem-latn
    numbers: {
      percentSign: '%',
      percentFormat: '#,##0%',
      minusSign: '-',
      decimal: ',',
      group: ' '
    },
    //Resx - Approved By Translation Team
    messages: {
      'AboutText': {id: 'AboutText', value: 'Авторські права &copy; Infor, {0}. Усі права збережено. Усі зазначені у цьому документі назви та дизайн елементів є товарними знаками або захищеними товарними знаками Infor та/або афілійованих організацій і філіалів Infor. Усі права збережено. Усі інші товарні знаки, перелічені тут, є власністю відповідних власників. www.infor.com.'},
      'Actions': {id: 'Actions', value: 'Дії', comment: 'Tooltip text for the action button with additional in context actions'},
      'Add': {id: 'Add', value: 'Додати', comment: 'Add'},
      'AddNewTab': {id: 'AddNewTab', value: 'Додати нову вкладку', comment: 'Attached to a button that adds new tabs'},
      'AdvancedFilter': {id: 'AdvancedFilter', value: 'Створити розширений фільтр', comment: 'In a data grid active an advanced filtering feature'},
      'Alert': {id: 'Alert', value: 'Оповіщення', comment: 'Alert'},
      'All': {id: 'All', value: 'Усі', comment: 'All items in the context of a filter'},
      'AllResults': {id: 'AllResults', value: 'Усі результати для', comment: 'Search Results Text'},
      'AligntoBottom': {id: 'AligntoBottom', value: 'Вирівняти за нижнім краєм', comment: 'Align to Bottom tooltip'},
      'AlignCenterHorizontally': {id: 'AlignCenterHorizontally', value: 'Горизонтальне вирівнювання по центру', comment: 'Align Center Horizontally tooltip'},
      'Amber': {id: 'Amber', value: 'Темно-жовтий', comment: 'Color in our color pallette'},
      'Amethyst': {id: 'Amethyst', value: 'Фіолетовий', comment: 'Color in our color pallette'},
      'Apply': {id: 'Apply', value: 'Застосувати', comment: 'Text in a button to apply an action'},
      'Attach': {id: 'Attach', value: 'Вкласти', comment: 'Attach'},
      'Azure': {id: 'Azure', value: 'Блакитний', comment: 'Color in our color pallette'},
      'BackgroundColor': {id: 'BackgroundColor', value: 'Колір тла', comment: 'add or edit text background color in the editor'},
      'Between': {id: 'Between', value: 'Між', comment: 'Between in icons for filtering'},
      'Blockquote': {id: 'Blockquote', value: 'Цитата', comment: 'insert a block quote in the editor'},
      'Bold': {id: 'Bold', value: 'Жирний', comment: 'Make text Bold'},
      'Bookmarked': {id: 'Bookmarked', value: 'Додано до закладок', comment: 'Bookmark filled - Element is already bookmarked'},
      'BookmarkThis': {id: 'BookmarkThis', value: 'Додати до закладок', comment: 'Bookmark an element'},
      'Breadcrumb': {id: 'Breadcrumb', value: 'Відображення шляху', comment: 'Text describing the Breadcrumb'},
      'BulletedList': {id: 'BulletedList', value: 'Маркований список', comment: 'Bulleted List tooltip'},
      'Calendar': {id: 'Calendar', value: 'Календар', comment: 'Inline Text for the title of the Calendar control'},
      'Camera': {id: 'Camera', value: 'Камера', comment: 'Camera tooltip'},
      'Cancel': {id: 'Cancel', value: 'Скасувати', comment: 'Cancel tooltip'},
      'CapsLockOn': {id: 'CapsLockOn', value: 'Увімкнуто клавішу Caps Lock', comment: 'Caps Lock On message'},
      'Cart': {id: 'Cart', value: 'Кошик', comment: 'Cart tooltip'},
      'CenterText': {id: 'CenterText', value: 'По центру', comment: 'An Icon Tooltip'},
      'CharactersLeft': {id: 'CharactersLeft', value: 'Залишкова кількість символів: {0}', comment: 'indicator showing how many more characters you can type.'},
      'CharactersMax': {id: 'CharactersMax', value: 'Максимальна кількість символів: ', comment: 'indicator showing how many max characters you can type.'},
      'ChangeSelection': {id: 'ChangeSelection', value: '. Щоб змінити вибір, використовуйте клавіші зі стрілками.', comment: 'Audible Text for drop down list help'},
      'Checkbox': {id: 'Checkbox', value: 'Прапорець', comment: 'Checkbox tooltip'},
      'Checked': {id: 'Checked', value: 'Установлено', comment: 'Checked tooltip'},
      'Clear': {id: 'Clear', value: 'Очистити', comment: 'Tooltip for a Clear Action'},
      'ClearFilter': {id: 'ClearFilter', value: 'Очистить фільтр', comment: 'Clear the current filter criteria'},
      'Clock': {id: 'Clock', value: 'Годинник', comment: 'Clock tooltip'},
      'Close': {id: 'Close', value: 'Закрити', comment: 'Tooltip for a Close Button Action'},
      'Copy': {id: 'Copy', value: 'Копіювати', comment: 'Copy tooltip'},
      'Collapse': {id: 'Collapse', value: 'Згорнути', comment: 'Collapse / close a tree/submenu'},
      'CollapseAppTray': {id: 'CollapseAppTray', value: 'Згорнути панель застосунку', comment: 'Collapse App Tray tooltip'},
      'Columns': {id: 'Columns', value: 'Стовпці', comment: 'Columns tooltip'},
      'Component': {id: 'Component', value: 'Компонент', comment: 'As in a UI component - building block.'},
      'Compose': {id: 'Compose', value: 'Створити', comment: 'Compose tooltip'},
      'Completed': {id: 'Completed', value: 'Завершено', comment: 'Text For a Completed Status'},
      'Confirm': {id: 'Confirm', value: 'Підтвердити', comment: 'Confirm tooltip'},
      'Contains': {id: 'Contains', value: 'Містить', comment: 'Contains in icons for filtering'},
      'CssClass': {id: 'CssClass', value: 'Клас CSS', comment: 'Label for entering a Css Class name'},
      'Cut': {id: 'Cut', value: 'Вирізати', comment: 'Cut tooltip'},
      'Date': {id: 'Date', value: 'Дата', comment: 'Describes filtering by a date data type'},
      'Delete': {id: 'Delete', value: 'Видалити', comment: 'Delete Toolbar Action Tooltip'},
      'DistributeHoriz': {id: 'DistributeHoriz', value: 'Розподілити горизонтально', comment: 'Icon button tooltip for action that distributes elements across Horizontally'},
      'Document': {id: 'Document', value: 'Документ', comment: 'Document tooltip'},
      'Dirty': {id: 'Dirty', value: 'Рядок змінено', comment: 'Record is dirty / modified'},
      'Drilldown': {id: 'Drilldown', value: 'Деталізувати', comment: 'Drill by moving page flow into a record'},
      'Drillup': {id: 'Drillup', value: 'Узагальнити', comment: 'Opposite of Drilldown, move back up to a larger set of records'},
      'Dropdown': {id: 'Dropdown', value: 'Розкривний список', comment: 'Dropdown'},
      'DoesNotContain': {id: 'DoesNotContain', value: 'Не містить', comment: 'Does Not Contain in icons for filtering'},
      'DoesNotEndWith': {id: 'DoesNotEndWith', value: 'Не закінчується на', comment: 'For condition filtering'},
      'DoesNotEqual': {id: 'DoesNotEqual', value: 'Не дорівнює', comment: 'Does Not Equal in icons for filtering'},
      'DoesNotStartWith': {id: 'DoesNotStartWith', value: 'Не починається з', comment: 'For condition filtering'},
      'Down': {id: 'Down', value: 'Вниз', comment: 'Down tooltip'},
      'Download': {id: 'Download', value: 'Завантажити', comment: 'Download tooltip'},
      'Duplicate': {id: 'Duplicate', value: 'Дублювати', comment: 'Duplicate tooltip'},
      'EitherSelectedOrNotSelected': {id: 'EitherSelectedOrNotSelected', value: 'Вибрані або не вибрані', comment: 'Either Selected Or NotSelected in icons for filtering'},
      'EndsWith': {id: 'EndsWith', value: 'Закінчується на', comment: 'for condition filtering'},
      'EnterComments': {id: 'EnterComments', value: 'Введіть коментарі тут...', comment: 'Placeholder text for a text input (comments)'},
      'Error': {id: 'Error', value: 'Помилка', comment: 'Title, Spoken Text describing fact an error has occured'},
      'ErrorAllowedTypes': {id: 'ErrorAllowedTypes', value: 'Тип файлу заборонено', comment: 'Error string for file-upload'},
      'ErrorMaxFileSize': {id: 'ErrorMaxFileSize', value: 'Перевищено максимальний розмір файлу', comment: 'Error string for file-upload'},
      'ErrorMaxFilesInProcess': {id: 'ErrorMaxFilesInProcess', value: 'Перевищено максимально припустиму кількість файлів', comment: 'Error string for file-upload'},
      'EmailValidation': {id: 'EmailValidation', value: 'Адреса електронної пошти неприпустима', comment: 'This the rule for email validation'},
      'Emerald': {id: 'Emerald', value: 'Зелений', comment: 'Color in our color pallette'},
      'Expand': {id: 'Expand', value: 'Розгорнути', comment: 'Expand open a tree/submenu'},
      'ExpandAppTray': {id: 'ExpandAppTray', value: 'Розгорнути панель застосунку', comment: 'ExpandAppTray tooltip'},
      'ExpandCollapse': {id: 'ExpandCollapse', value: 'Розгорнути / згорнути', comment: 'Text to toggle a button in a container.'},
      'ExportAsSpreadsheet': {id: 'ExportAsSpreadsheet', value: 'Експортувати як електронну таблицю', comment: 'Export as Spreadsheet tooltip'},
      'Edit': {id: 'Edit', value: 'Редагувати', comment: 'Edit tooltip'},
      'Equals': {id: 'Equals', value: 'Дорівнює', comment: 'Equals in icons for filtering'},
      'ExitFullView': {id: 'ExitFullView', value: 'Вийти з повного подання', comment: 'Exit Full View tooltip'},
      'Export': {id: 'Export', value: 'Експортувати', comment: 'Export tooltip'},
      'ExportToExcel': {id: 'ExportToExcel', value: 'Експортувати в Excel', comment: 'Export To Excel menu option in datagrid'},
      'Favorite': {id: 'Favorite', value: 'Уподобання', comment: 'A favorite item'},
      'FileUpload': {id: 'FileUpload', value: 'Передавання файлів. Натисніть клавішу ENTER для вибору файлу.', comment: 'Screen Reader instructions'},
      'Filter': {id: 'Filter', value: 'Фільтр', comment: 'Filter tooltip'},
      'FirstPage': {id: 'FirstPage', value: 'Перша сторінка', comment: 'First Page tooltip'},
      'Folder': {id: 'Folder', value: 'Папка', comment: 'Folder tooltip'},
      'FullView': {id: 'FullView', value: 'Повне подання', comment: 'Full View tooltip'},
      'GoForward': {id: 'GoForward', value: 'Вперед', comment: 'Move Page / object this direction'},
      'GoBack': {id: 'GoBack', value: 'Назад', comment: 'Move Page / object this directionp'},
      'GoDown': {id: 'GoDown', value: 'Вниз', comment: 'Move Page / object this directionp'},
      'GoUp': {id: 'GoUp', value: 'Вверх', comment: 'Move Page / object this direction'},
      'Graphite': {id: 'Graphite', value: 'Сірий', comment: 'Color in our color pallette'},
      'GreaterOrEquals': {id: 'GreaterOrEquals', value: 'Більше або дорівнює', comment: 'Greater Than Or Equals in icons for filtering'},
      'GreaterThan': {id: 'GreaterThan', value: 'Більше', comment: 'Greater Than in icons for filtering'},
      'Grid': {id: 'Grid', value: 'Сітка', comment: 'Grid tooltip'},
      'Hours': {id: 'Hours', value: 'год.', comment: 'the hour portion of a time'},
      'HeadingThree': {id: 'HeadingThree', value: 'Заголовок 3', comment: 'Heading Three tooltip'},
      'HeadingFour': {id: 'HeadingFour', value: 'Заголовок 4', comment: 'Heading Four tooltip'},
      'Highest': {id: 'Highest', value: 'Максимальне значення', comment: 'Highest Four tooltip'},
      'Home': {id: 'Home', value: 'Домашня сторінка', comment: 'Home tooltip'},
      'HtmlView': {id: 'HtmlView', value: 'Подання HTML', comment: 'Html View tooltip'},
      'Image': {id: 'Image', value: 'Зображення', comment: 'Image of something'},
      'Import': {id: 'Import', value: 'Імпортувати', comment: 'Import tooltip'},
      'Info': {id: 'Info', value: 'Інформація', comment: 'Info tooltip'},
      'InProgress': {id: 'In Progress', value: 'Виконується', comment: 'Info tooltip that an action is in progress'},
      'Insert': {id: 'Insert', value: 'Вставити', comment: 'Insert Modal Dialog Button'},
      'InsertAnchor': {id: 'InsertAnchor', value: 'Вставити прив\'язку', comment: 'Insert Acnhor (link) in an editor'},
      'InsertImage': {id: 'InsertImage', value: 'Вставити зображення', comment: 'Insert Image in an editor'},
      'InsertLink': {id: 'InsertLink', value: 'Вставити посилання', comment: 'Insert Link in an editor'},
      'InsertUrl': {id: 'InsertUrl', value: 'Вставити URL-адресу', comment: 'Insert a Url in an editor'},
      'Italic': {id: 'Italic', value: 'Курсив', comment: 'Make Text Italic'},
      'InvalidDate': {id: 'InvalidDate', value: 'Неприпустима дата', comment: 'validation message for wrong date format (short)'},
      'InvalidTime': {id: 'InvalidTime', value: 'Неприпустимий час', comment: 'validation message for wrong time format'},
      'Inventory': {id: 'Inventory', value: 'Запаси', comment: 'Icon button tooltop for Inventory Action'},
      'IsEmpty': {id: 'IsEmpty', value: 'Пусто', comment: 'Is Empty in icons for filtering'},
      'IsNotEmpty': {id: 'IsNotEmpty', value: 'Не пусто', comment: 'Is Not Empty in icons for filtering'},
      'ItemsSelected': {id: 'ItemsSelected', value: 'Вибрані елементи', comment: 'Num of Items selected for swaplist'},
      'JustifyCenter': {id: 'JustifyCenter', value: 'По центру', comment: 'justify text to center in the editor'},
      'JustifyLeft': {id: 'JustifyLeft', value: 'Вирівняти за лівим краєм', comment: 'justify text to left in the editor'},
      'JustifyRight': {id: 'JustifyRight', value: 'Вирівняти за правим краєм', comment: 'justify text to right in the editor'},
      'Keyword': {id: 'Keyword', value: 'Ключове слово', comment: 'Describes filtering by a keyword search'},
      'Launch': {id: 'Launch', value: 'Запуск', comment: 'Launch'},
      'LastPage': {id: 'LastPage', value: 'Остання сторінка', comment: 'Last Page tooltip'},
      'Left': {id: 'Left', value: 'Вліво', comment: 'Left tooltip'},
      'LessOrEquals': {id: 'LessOrEquals', value: 'Менше або дорівнює', comment: 'Less Than Or Equals in icons for filtering'},
      'LessThan': {id: 'LessThan', value: 'Менше', comment: 'Less Than in icons for filtering'},
      'Link': {id: 'Link', value: 'Посилання', comment: 'Link - as in hyperlink - icon tooltop'},
      'Load': {id: 'Load', value: 'Завантажити', comment: 'Load icon tooltip'},
      'Loading': {id: 'Loading', value: 'Завантаження', comment: 'Text below spinning indicator to indicate loading'},
      'Locked': {id: 'Locked', value: 'Заблоковано', comment: 'Locked tooltip'},
      'Logout': {id: 'Logout', value: 'Вийти з системи', comment: 'Log out of the application'},
      'Lookup': {id: 'Lookup', value: 'Пошук', comment: 'Lookup - As in looking up a record or value'},
      'Lowest': {id: 'Lowest', value: 'Мінімальне значення', comment: 'Lowest - As in Lowest value'},
      'Mail': {id: 'Mail', value: 'Електронна пошта', comment: 'Mail tooltip'},
      'MapPin': {id: 'MapPin', value: 'Закріпити', comment: 'Map Pin tooltip'},
      'Maximize': {id: 'Maximize', value: 'Розгорнути', comment: 'Maximize a screen or dialog in the UI'},
      'Median': {id: 'Median', value: 'Медіана', comment: 'Median in Mathematics'},
      'Medium': {id: 'Medium', value: 'Середній', comment: 'Describes a Medium sized Row Height in a grid/list'},
      'Menu': {id: 'Menu', value: 'Меню', comment: 'Menu tooltip'},
      'MingleShare': {id: 'MingleShare', value: 'Надавати спільний доступ в Ming.le', comment: 'Share the contextual object/action in the mingle system'},
      'Minutes': {id: 'Minutes', value: 'хв.', comment: 'the minutes portion of a time'},
      'Minimize': {id: 'Minimize', value: 'Згорнути', comment: 'Minimize tooltip'},
      'Minus': {id: 'Minus', value: 'Мінус', comment: 'Minus tooltip'},
      'Mobile': {id: 'Mobile', value: 'Мобільний', comment: 'Indicates a mobile device (phone tablet ect)'},
      'More': {id: 'More', value: 'Додатково...', comment: 'Text Indicating More Buttons or form content'},
      'MoreActions': {id: 'MoreActions', value: 'Додаткові дії', comment: 'Text on the More Actions button indictating hidden functions'},
      'MsgDirty': {id: 'MsgDirty', value: 'змінено', comment: 'for modified form fields'},
      'NewDocument': {id: 'NewDocument', value: 'Створити документ', comment: 'New Document tooltip'},
      'NewItem': {id: 'NewItem', value: 'Новий елемент', comment: 'New item in listbuilder'},
      'Next': {id: 'Next', value: 'Далі', comment: 'Next in icons tooltip'},
      'NextPage': {id: 'NextPage', value: 'Наступна сторінка', comment: 'Next on Pager'},
      'NextMonth': {id: 'NextMonth', value: 'Наступний місяць', comment: 'the label for the button that moves calendar to next/prev'},
      'No': {id: 'No', value: 'Ні', comment: 'On a dialog button'},
      'NoResults': {id: 'NoResults', value: 'Результатів не знайдено.', comment: 'Search Results Text'},
      'Normal': {id: 'Normal', value: 'Звичайна', comment: 'Normal row height'},
      'Notes': {id: 'Notes', value: 'Примітки', comment: 'Notes icon tooltip'},
      'NotSelected': {id: 'NotSelected', value: 'Не вибрано', comment: 'Not Selected in icons for filtering'},
      'NumberList': {id: 'NumberList', value: 'Нумерований список', comment: 'Number List tooltip'},
      'OpenBackClose': {id: 'OpenBackClose', value: 'Відкрити / назад / закрити', comment: 'Open / Back / Close tooltip'},
      'OpenClose': {id: 'OpenClose', value: 'Відкрити / закрити', comment: 'Open / Close tooltip'},
      'OrderedList': {id: 'OrderedList', value: 'Вставити/видалити нумерований список', comment: 'Insert an Ordered list in the editor'},
      'Page': {id: 'Page', value: 'сторінка ', comment: 'Text on the pager links'},
      'PageOf': {id: 'PageOf', value: 'Сторінка {0} з {1}', comment: 'Pager Text Showing current and number of pages'},
      'PageOn': {id: 'PageOn', value: 'Поточна сторінка: ', comment: 'Text on the pager links'},
      'Paste': {id: 'Paste', value: 'Вставити', comment: 'Paste icon tooltip'},
      'PasswordValidation': {id: 'PasswordValidation', value: '<strong>Пароль має відповідати наступним вимогам:</strong><br>Містити не менше 10 символів<br>Містити принаймні одну велику букву<br>Містити принаймні одну маленьку букву<br>Містити один спеціальний символ<br>Не містити ім\'я користувача<br>Не збігатися з попереднім паролем<br>', comment: 'Password validation requirements'},
      'PasswordConfirmValidation': {id: 'PasswordConfirmValidation', value: 'Паролі мають збігатися', comment: 'Password Confirm validation'},
      'Peak': {id: 'Peak', value: 'Максимальне значення', comment: 'the max or peak value in a chart'},
      'PersonalizeColumns': {id: 'PersonalizeColumns', value: 'Персоналізувати стовпці', comment: 'Customize Columns in a Grid'},
      'Period': {id: 'Period', value: 'Період', comment: 'the am/pm portion of a time'},
      'PressDown': {id: 'PressDown', value: 'Натисніть клавішу зі стрілкою вниз, щоб вибрати дату', comment: 'the audible label for Tooltip about how to operate the date picker'},
      'PressShiftF10': {id: 'PressShiftF10', value: 'Натисніть клавіші Shift+F10, щоб відкрити контекстне меню.', comment: 'the audible infor for screen readers on how to use a field with a popup menu'},
      'Previous': {id: 'Previous', value: 'Назад', comment: 'Previous icon tooltip - moved to previous record'},
      'PreviousMonth': {id: 'PreviousMonth', value: 'Попередній місяць', comment: 'the label for the button that moves calendar to next/prev'},
      'PreviousPage': {id: 'PreviousPage', value: 'Попередня сторінка', comment: 'Previous Page tooltip'},
      'Print': {id: 'Print', value: 'Друк', comment: 'Print tooltip'},
      'Range': {id: 'Range', value: 'Діапазон', comment: 'Range for tooltip'},
      'RecordsPerPage': {id: 'RecordsPerPage', value: 'Кількість записів на сторінці: {0}', comment: 'Dropd own allows the user to select how many visible records {} shows select value.'},
      'Redo': {id: 'Redo', value: 'Повернути', comment: 'Redo tooltip'},
      'Refresh': {id: 'Refresh', value: 'Оновити', comment: 'Refresh tooltip'},
      'Required': {id: 'Required', value: 'Є обов\'язковим', comment: 'indicates a form field is manditory'},
      'Reset': {id: 'Reset', value: 'Скинути', comment: 'Reset tooltip'},
      'ResetDefault': {id: 'ResetDefault', value: 'Відновити параметри за промовчанням', comment: 'Reset Datagrid Columns, Filter and other Layout'},
      'Results': {id: 'Results', value: 'Результати', comment: 'As in showing N Results in a List'},
      'RightAlign': {id: 'RightAlign', value: 'Вирівняти за правим краєм', comment: 'Right Align tooltip'},
      'RightAlignText': {id: 'RightAlignText', value: 'Вирівняти за правим краєм', comment: 'Right Align Text tooltip'},
      'Right': {id: 'Right', value: 'За правим краєм', comment: 'Right'},
      'Roles': {id: 'Roles', value: 'Ролі', comment: 'Roles tooltip'},
      'RowHeight': {id: 'RowHeight', value: 'Висота рядка', comment: 'Describes the Height for Rows in a Data Grid'},
      'Ruby': {id: 'Ruby', value: 'Рубіновий', comment: 'Color in our color pallette'},
      'RunFilter': {id: 'RunFilter', value: 'Виконати фільтр', comment: 'Execute the current filter criteria'},
      'Save': {id: 'Save', value: 'Зберегти', comment: 'Save tooltip'},
      'SaveCurrentView': {id: 'SaveCurrentView', value: 'Зберегти поточне подання', comment: 'Datagrids contain view sets. This menu option saves them'},
      'SavedViews': {id: 'SavedViews', value: 'Збережені подання', comment: 'Label for a list of Views'},
      'Seconds': {id: 'Seconds', value: 'с', comment: 'the seconds portion of a time'},
      'Search': {id: 'Search', value: 'Пошук', comment: 'Search tooltip'},
      'SearchColumnName': {id: 'SearchColumnName', value: 'Пошук імені стовпця', comment: 'Search for a datagrid column by name'},
      'SearchFolder': {id: 'SearchFolder', value: 'Пошук у папці', comment: 'Search Folder tooltip'},
      'SearchList': {id: 'SearchList', value: 'Список пошуку', comment: 'Search List tooltip'},
      'Select': {id: 'Select', value: 'Вибрати', comment: 'text describing a select action'},
      'Selected': {id: 'Selected', value: 'Вибрано', comment: 'text describing a selected object'},
      'Send': {id: 'Send', value: 'Надіслати', comment: 'Send tooltip'},
      'SetTime': {id: 'SetTime', value: 'Визначити час', comment: 'button text that inserts time when clicked'},
      'Settings': {id: 'Settings', value: 'Настройки', comment: 'Settings tooltip'},
      'Short': {id: 'Short', value: 'Короткий', comment: 'Describes a Shorted Row Height in a grid/list'},
      'ShowFilterRow': {id: 'ShowFilterRow', value: 'Відобразити фільтри рядка', comment: 'Toggle a row with filer info above a list'},
      'ShowLess': {id: 'ShowLess', value: 'Відобразити менше', comment: 'Show less form content'},
      'ShowMore': {id: 'ShowMore', value: 'Відобразити більше', comment: 'Show more form content'},
      'Slate': {id: 'Slate', value: 'Сіро-блакитний', comment: 'Color in our color pallette'},
      'SliderHandle': {id: 'SliderHandle', value: 'Маркер для', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control'},
      'SliderMaximumHandle': {id: 'SliderMaximumHandle', value: 'Маркер максимального діапазону для', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control'},
      'SliderMinimumHandle': {id: 'SliderMinimumHandle', value: 'Маркер мінімального діапазону для', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control'},
      'SkipToMain': {id: 'SkipToMain', value: 'Перейти до основного вмісту', comment: 'Skip link in header, jumps when clicked on to main area'},
      'StartsWith': {id: 'StartsWith', value: 'Починається з', comment: 'for condition filtering'},
      'StrikeThrough': {id: 'StrikeThrough', value: 'Закреслення', comment: 'turn on and off strike through text in text editor (like word)'},
      'SortAtoZ': {id: 'SortAtoZ', value: 'Сортувати за зростанням', comment: 'Sort A to Z in icons for filtering'},
      'SortZtoA': {id: 'SortZtoA', value: 'Сортувати за спаданням', comment: 'Sort Z to A in icons for filtering'},
      'SortDown': {id: 'SortDown', value: 'Сортувати за спаданням', comment: 'Sort Down tooltip'},
      'SortUp': {id: 'SortUp', value: 'Сортувати за зростанням', comment: 'Sort Up tooltip'},
      'Subscript': {id: 'Subscript', value: 'Підрядковий символ', comment: 'Turn on and off Subscript text in text editor (like word)'},
      'Superscript': {id: 'Superscript', value: 'Надрядковий символ', comment: 'Turn on and off Superscript text in text editor (like word)'},
      'Tabs': {id: 'Tabs', value: 'Вкладки...', comment: 'Used in the Tabs Control\'s more menu, preceeded by a number that describes how many tabs are in the spillover menu'},
      'Tack': {id: 'Tack', value: 'Закріпити', comment: 'Pin an object'},
      'Tall': {id: 'Tall', value: 'Довгий', comment: 'Describes a Taller Row Height in a grid/list'},
      'Target': {id: 'Target', value: 'Ціль', comment: 'Label for an input to enter a Target (Url Attribute)'},
      'TextColor': {id: 'TextColor', value: 'Колір тексту', comment: 'add or edit text color in the editor'},

      'Timer': {id: 'Timer', value: 'Таймер', comment: 'Timer tooltip'},
      'Today': {id: 'Today', value: 'Сьогодні', comment: 'refering to today on a calendar'},
      'ToggleBold': {id: 'ToggleBold', value: 'Увімкнути/вимкнути жирний текст', comment: 'turn on and off bold in text editor (like word)'},
      'ToggleH3': {id: 'ToggleH3', value: 'Увімкнути/вимкнути заголовок 3', comment: 'turn on and off heading 3 text'},
      'ToggleH4': {id: 'ToggleH4', value: 'Увімкнути/вимкнути заголовок 4', comment: 'turn on and off heading 4 text'},
      'ToggleItalic': {id: 'ToggleItalic', value: 'Увімкнути/вимкнути курсив', comment: 'turn on and off Italic in text editor (like word)'},
      'ToggleUnderline': {id: 'ToggleUnderline', value: 'Увімкнути/вимкнути підкреслений текст', comment: 'turn on and off Underline in text editor (like word)'},
      'Toolbar': {id: 'Toolbar', value: 'Панель інструментів', comment: 'describing the toolbar component'},
      'TopAlign': {id: 'TopAlign', value: 'Вирівняти за верхнім краєм', comment: 'Top Align tooltip'},
      'Total': {id: 'Total', value: 'Підсумок', comment: 'Mathematic total of a calculation'},
      'Totals': {id: 'Totals', value: 'Підсумки', comment: 'Mathematic total of a calculation (plural)'},
      'TreeCollapse': {id: 'TreeCollapse', value: 'Згорнути дерево', comment: 'Tree Collapse tooltip'},
      'TreeExpand': {id: 'TreeExpand', value: 'Розгорнути дерево', comment: 'Tree Expand tooltip'},
      'Turquoise': {id: 'Turquoise', value: 'Бірюзовий', comment: 'Color in our color pallette'},
      'Up': {id: 'Up', value: 'Вверх', comment: 'Up tooltip'},
      'Upload': {id: 'Upload', value: 'Передати', comment: 'Upload tooltip'},
      'UnavailableDate': {id: 'UnavailableDate', value: 'Неприпустима дата', comment: 'Unavailable Date Text'},
      'Underline': {id: 'Underline', value: 'Підкреслений', comment: 'Make text Underlined'},
      'Undo': {id: 'Undo', value: 'Скасувати', comment: 'Undo tooltip'},
      'Unlocked': {id: 'Unlocked', value: 'Разблоковано', comment: 'Unlocked tooltip'},
      'UnorderedList': {id: 'UnorderedList', value: 'Вставити/видалити маркований список', comment: 'Insert an Unordered list in the editor'},
      'Unsupported': {id: 'Unsupported', value: 'Цей вміст недоступний, оскільки використовуються компоненти, які не підтримуються в поточній версії браузера.', comment: 'Suggesting browser upgrade for missing features.'},
      'Url': {id: 'Url', value: 'URL-адреса', comment: 'Url tooltip'},
      'UseArrow': {id: 'UseArrow', value: '. Щоб вибрати, використовуйте клавіші зі стрілками.', comment: 'Instructional comments for screen readers'},
      'UseEnter': {id: 'UseEnter', value: '. Використовуйте клавіші зі стрілками або клавішу ENTER для пошуку.', comment: 'Instructional comments for screen readers'},
      'User': {id: 'User', value: 'Користувач', comment: 'User tooltip'},
      'UserProfile': {id: 'UserProfile', value: 'Профіль користувача', comment: 'User Profile tooltip'},
      'VerticalMiddleAlign': {id: 'VerticalMiddleAlign', value: 'Вертикальне вирівнювання по центру', comment: 'Vertical Align tooltip'},
      'ViewSource': {id: 'ViewSource', value: 'Вихідне подання', comment: 'Toggle the source view in the editor'},
      'ViewVisual': {id: 'ViewVisual', value: 'Візуальне подання', comment: 'Toggle the visual view in the editor'},
      'Yes': {id: 'Yes', value: 'Так', comment: 'On a dialog button'}
    }
  });
}));