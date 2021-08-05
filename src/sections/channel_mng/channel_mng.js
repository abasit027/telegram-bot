const { Telegraf, Markup } = require('telegraf');

const button = Markup.button;

/**
 * @param { Telegraf } bot
 */
const channelMng = bot => {
	bot.action('chnlMng', ctx => {
		let message = ctx.update.callback_query.message;

		let keyboard = Markup.inlineKeyboard([button.callback('User Details', 'usrDtl'), button.callback('Back', 'chnl')]);

		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('usrDtl', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'usrDtl';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Export', 'end'),
			button.callback('Manage User', 'mngUsr'),
			button.callback('Subscription alert', 'subAl'),
			button.callback('Back', 'chnlMng'),
		]);

		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('mngUsr', ctx => {
		let message = ctx.update.callback_query.message;

		let keyboard = Markup.inlineKeyboard([
			button.callback('Username / Tl Id', 'mngUsr2'),
			button.callback('Back', 'usrDtl'),
		]);

		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('mngUsr2', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'mngUsr2';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Remove', 'end'),
			button.callback('Add/edit subscription end date', 'end'),
			button.callback('Back', 'mngUsr'),
		]);

		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('subAl', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'subAl';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Disable', 'end'),
			button.callback('Enable', 'subAl2'),
			button.callback('Back', 'usrDtl'),
		]);

		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('subAl2', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'subAl2';

		let keyboard = Markup.inlineKeyboard([button.callback('Select Days', 'end'), button.callback('Back', 'subAl')]);

		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});
};

module.exports = channelMng;
