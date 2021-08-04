const { Telegraf, Markup } = require('telegraf');

const button = Markup.button;

const bot = new Telegraf('1943511815:AAFegkUd01zVBIU4HlHmNyWoRF-qOA-4xWo');

bot.start(ctx => {
	let keyboard = Markup.inlineKeyboard([button.callback('Main Menu', 'menu')]);
	return ctx.reply('Click for Main Menu', keyboard);
});

let backKey = '';

bot.action('menu', ctx => {
	let message = ctx.update.callback_query.message;

	let keyboard = Markup.inlineKeyboard([button.callback('Profile', 'prf'), button.callback('Channel', 'chnl')]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

bot.action('prf', ctx => {
	let message = ctx.update.callback_query.message;

	let keyboard = Markup.inlineKeyboard([
		button.callback('Wallet', 'wlt'),
		button.callback('Refferal', 'rfl'),
		button.callback('Back', 'menu'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

bot.action('wlt', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'wlt';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Withdraw', 'end'),
		button.callback('Transfer', 'end'),
		button.callback('History', 'end'),
		button.callback('Back', 'prf'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

bot.action('rfl', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'rfl';

	let keyboard = Markup.inlineKeyboard([button.callback('Refferal History', 'end'), button.callback('Back', 'prf')]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

bot.action('chnl', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'chnl';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Signal', 'end'),
		button.callback('Channel Managment', 'end'),
		button.callback('Admin Strategy', 'end'),
		button.callback('Back', 'menu'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

bot.action('end', ctx => {
	let message = ctx.update.callback_query.message;

	let keyboard = Markup.inlineKeyboard([button.callback('End', 'End'), button.callback('Back', backKey)]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'This is end', keyboard);
});

bot.action('End', ctx => {
	return ctx.reply('This is End...Please /start again');
});

bot.launch();
