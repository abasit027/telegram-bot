const { Telegraf, Markup } = require('telegraf');

const sub = require('./sub.js');

const button = Markup.button;

/**
 * @param { Telegraf } bot
 */
const signal = bot => {
	bot.action('signal', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'signal';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Publish', 'end'),
			button.callback('Open Signal', 'opensignal'),
			button.callback('History', 'history'),
			button.callback('Signal Format', 'signalformat'),
			button.callback('Result Format', 'resultformat'),
			button.callback('Back', 'chnl'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('history', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'history';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Export', 'end'),
			button.callback('Filter', 'historyfilter'),
			button.callback('Back', 'signal'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('historyfilter', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'historyfilter';

		let keyboard = Markup.inlineKeyboard([
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

		process.env.BACK_KEY = 'historydate';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Start Date', 'end'),
			button.callback('End Date', 'end'),
			button.callback('Back', 'historyfilter'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('historysignaltype', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'historysignaltype';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Spot', 'end'),
			button.callback('Future', 'end'),
			button.callback('Back', 'historyfilter'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	sub(bot);
};

module.exports = signal;
