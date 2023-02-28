import Markup from 'telegraf-develop/markup.js'

export function getMainMenu() {
    return Markup.keyboard([
        ['Мои задачи', 'Удалить задачу'],
        ['Нажми меня']
    ]).resize().extra()
}

export function yesNoKeyboard() {
    return Markup.inlineKeyboard([
        Markup.callbackButton('Да', 'yes'),
        Markup.callbackButton('Нет', 'no')
    ], {columns: 2}).extra()
}