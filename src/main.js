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
		button.callback('Signal', 'signal'),
		button.callback('Channel Managment', 'end'),
		button.callback('Admin Strategy', 'end'),
		button.callback('Back', 'menu'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});


//My CODE FOR START SIGNAL BUTTON
bot.action('signal', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'signal';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Publish', 'end'),
		button.callback('Open Signal', 'opensignal'),
		button.callback('History', 'history'),
		button.callback('Signal Format', 'signalformat'),
		button.callback('Result Format', 'resultformat'),
		button.callback('Back', 'chnl'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});


bot.action('resultformat', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'resultformat';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Create New', 'rcreatenew'),
		button.callback('Manage Format', 'rmanageformat'),
		button.callback('Back', 'signal'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

bot.action('rcreatenew', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'rcreatenew';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Enter Name', 'rentername'),
		button.callback('Back', 'resultformat'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});



bot.action('rentername', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'rentername';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Spot', 'end'),
		button.callback('Future', 'end'),
		button.callback('Back', 'rcreatenew'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

bot.action('rmanageformat', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'rmanageformat';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Format 1', 'rsignalmanageformat'),
		button.callback('Format 2', 'rsignalmanageformat'),		
		button.callback('Format 3', 'rsignalmanageformat'),
		button.callback('Back', 'resultformat'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

bot.action('rsignalmanageformat', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'rsignalmanageformat';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Edit', 'end'),
		button.callback('Delete', 'end'),
		button.callback('Back', 'rcreatenew'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});




bot.action('signalformat', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'signalformat';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Create New', 'screatenew'),
		button.callback('Manage Format', 'smanageformat'),
		button.callback('Back', 'signal'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

bot.action('screatenew', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'screatenew';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Enter Name', 'sentername'),
		button.callback('Back', 'signalformat'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});


bot.action('sentername', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'sentername';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Spot', 'end'),
		button.callback('Future', 'end'),
		button.callback('Back', 'screatenew'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});


bot.action('smanageformat', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'smanageformat';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Format 1', 'ssignalmanageformat'),
		button.callback('Format 2', 'ssignalmanageformat'),		
		button.callback('Format 3', 'ssignalmanageformat'),
		button.callback('Back', 'signalformat'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

bot.action('ssignalmanageformat', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'ssignalmanageformat';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Edit', 'end'),
		button.callback('Delete', 'end'),
		button.callback('Back', 'smanageformat'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});


bot.action('opensignal', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'opensignal';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Filter', 'openfilter'),
		button.callback('Back', 'signal'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

bot.action('openfilter', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'openfilter';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('By Coin', 'end'),
		button.callback('By Signal Type', 'end'),
		button.callback('Apply', 'openapply'),
		button.callback('Back', 'opensignal'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

bot.action('openapply', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'openapply';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Edit', 'end'),
		button.callback('Cancel', 'end'),
		button.callback('Back', 'opensignal'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});


bot.action('history', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'history';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Export', 'end'),		
		button.callback('Filter', 'historyfilter'),
		button.callback('Back', 'signal'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});


bot.action('historyfilter', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'historyfilter';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('By Date', 'historydate'),		
		button.callback('By Signal Type', 'historysignaltype'),
		button.callback('By Coin', 'end'),
		button.callback('Export', 'end'),
		button.callback('Back', 'history'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

bot.action('historydate', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'historydate';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Start Date', 'end'),		
		button.callback('End Date', 'end'),
		button.callback('Back', 'historyfilter'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

bot.action('historysignaltype', ctx => {
	let message = ctx.update.callback_query.message;

	backKey = 'historysignaltype';

	let keyboard = Markup.inlineKeyboard([
		button.callback('Publish Channel Info', 'end'),
		button.callback('Spot', 'end'),		
		button.callback('Future', 'end'),
		button.callback('Back', 'historyfilter'),
	]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
});

// MY CODE END FOR SIGNAL BUTTON


bot.action('end', ctx => {
	let message = ctx.update.callback_query.message;

	let keyboard = Markup.inlineKeyboard([button.callback('End', 'End'), button.callback('Back', backKey)]);
	return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'This is end', keyboard);
});


bot.action('End', ctx => {
	return ctx.reply('This is End...Please /start again');
});

bot.launch();
