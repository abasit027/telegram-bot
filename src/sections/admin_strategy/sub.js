const { Telegraf, Markup } = require('telegraf');

const button = Markup.button;

/**
 * @param { Telegraf } bot
 */
const sub = bot => {
	bot.action('stGnrl', ctx => {
		let message = ctx.update.callback_query.message;

		let keyboard = Markup.inlineKeyboard([
			button.callback('Increase first entry price', 'stgInc'),
			button.callback('Trade auto cancel', 'stgTrd'),
			button.callback('Other filters', 'stgOth'),
			button.callback('Back', 'strtg'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('stgInc', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'stgInc';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Enabel / Disable', 'end'),
			button.callback('Select Percentage', 'end'),
			button.callback('Back', 'stGnrl'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('stgTrd', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'stgTrd';

		let keyboard = Markup.inlineKeyboard([
			button.callback('First target reached before entry', 'stTTr'),
			button.callback('max time for breakout signal', 'end'),
			button.callback('Back', 'stGnrl'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('stTTr', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'stTTr';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Enabel / Disable', 'end'),
			button.callback('Back', 'stgTrd'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('stgOth', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'stgOth';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Min same coin interval', 'end'),
			button.callback('Back', 'stGnrl'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});
};

module.exports = sub;
