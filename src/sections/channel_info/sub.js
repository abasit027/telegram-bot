const { Telegraf, Markup } = require('telegraf');

const button = Markup.button;

/**
 * @param { Telegraf } bot
 */
const sub = bot => {
	bot.action('publishchanneltype', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'publishchanneltype';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Free', 'end'),
			button.callback('Paid', 'publishchanneltypepaid'), // have sub menu
			button.callback('Back', 'publishupdate'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('publishchanneltypepaid', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'publishchanneltypepaid';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Add New Plan', 'publishchannelnewplan'), // have sub menu
			button.callback('Edit Existing', 'publishchannelexistingplan'), // have sub menu
			button.callback('Back', 'publishchanneltype'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('publishchannelnewplan', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'publishchannelnewplan';

		let keyboard = Markup.inlineKeyboard([
			button.callback('1 month', 'end'),
			button.callback('3 month', 'publishchannelenterprice'), // have sub menu
			button.callback('6 month', 'end'),
			button.callback('9 month', 'publishchannelenterprice'), // have sub menu
			button.callback('1 year', 'end'),
			button.callback('3 year', 'publishchannelenterprice'), // have sub menu
			button.callback('5 year', 'end'),
			button.callback('Life Time', 'publishchannelenterprice'), // have sub menu
			button.callback('Back', 'publishchanneltypepaid'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('publishchannelenterprice', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'publishchannelenterprice';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Enter Price', 'end'), // textbox
			button.callback('Back', 'publishchannelnewplan'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('publishchannelexistingplan', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'publishchannelexistingplan';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Life Time', 'publishchannelexistinglifetime'), // have sub menu
			button.callback('Back', 'publishchanneltypepaid'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('publishchannelexistinglifetime', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'publishchannelexistinglifetime';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Change Price', 'end'),
			button.callback('Delete Plan', 'end'),
			button.callback('Back', 'publishchannelexistingplan'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});
};

module.exports = sub;
