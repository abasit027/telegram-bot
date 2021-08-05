const { Telegraf, Markup } = require('telegraf');

const { sub } = require('./sub.js');

const button = Markup.button;

/**
 * @param { Telegraf } bot
 */
const strategy = bot => {
	bot.action('strtg', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'strtg';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Import', 'end'),
			button.callback('General', 'gnrl'),
			button.callback('Buy Strategy', 'end'),
			button.callback('Sell Strategy', 'end'),
			button.callback('Stop Strategy', 'end'),
			button.callback('Trailing Strategy', 'end'),
			button.callback('Leverage', 'end'),
			button.callback('Save', 'end'),
			button.callback('Back', 'chnl'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	// sub(bot);
};

module.exports = strategy;
