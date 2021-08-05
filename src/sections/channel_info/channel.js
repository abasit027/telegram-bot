const { Telegraf, Markup } = require('telegraf');

const sub = require('./sub.js');

const button = Markup.button;

/**
 * @param { Telegraf } bot
 */
const channel = bot => {
	bot.action('publishinfochannel', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'publishinfochannel';

		let keyboard = Markup.inlineKeyboard([button.callback('Update', 'publishupdate'), button.callback('Back', 'chnl')]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('publishupdate', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'publishupdate';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Other Description', 'end'),
			button.callback('Contact Details', 'end'),
			button.callback('Channel Type', 'publishchanneltype'), //have sub menu
			button.callback('Signal Type', 'publishsignaltype'), // have sub menu
			button.callback('Supported Exchange', 'end'),
			button.callback('Publish Monthly Result', 'publishmonthlyresult'), // have sub menu
			button.callback('Apply', 'end'),
			button.callback('Back', 'chnl'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('publishmonthlyresult', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'publishmonthlyresult';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Enable/Disable', 'end'),
			button.callback('Back', 'publishupdate'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('publishsignaltype', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'publishsignaltype';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Spot', 'end'),
			button.callback('Future', 'end'),
			button.callback('Back', 'publishupdate'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	sub(bot);
};

module.exports = channel;
