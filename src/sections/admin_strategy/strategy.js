const { Telegraf, Markup } = require('telegraf');

const sub = require('./sub.js');

const button = Markup.button;

/**
 * @param { Telegraf } bot
 */
const strategy = bot => {
	bot.action('strtg', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'strtg';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Create New', 'strCrt'),
			button.callback('Manage', 'strMng'),
			button.callback('Back', 'chnl'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('strCrt', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'strCrt';

		let keyboard = Markup.inlineKeyboard(
			[
				button.callback('Import', 'end'),
				button.callback('General', 'stGnrl'),
				button.callback('Buy Strategy', 'strBS'),
				button.callback('Sell Strategy', 'strBS'),
				button.callback('Stop Strategy', 'strStp'),
				button.callback('Trailing Strategy', 'strTr'),
				button.callback('Leverage', 'strLv'),
				button.callback('Save', 'end'),
				button.callback('Back', 'strtg'),
			],
			{
				columns: 2,
			},
		);

		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('strMng', ctx => {
		let message = ctx.update.callback_query.message;

		let keyboard = Markup.inlineKeyboard([
			button.callback('Export', 'strMEx'),
			button.callback('Select', 'strMSl'),
			button.callback('Default', 'strMDe'),
			button.callback('Back', 'strtg'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('strMEx', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'strMEx';

		let keyboard = Markup.inlineKeyboard([button.callback('Select', 'end'), button.callback('Back', 'strMng')]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('strMSl', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'strMSl';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Delete', 'end'),
			button.callback('Edit', 'strMSEd'),
			button.callback('Back', 'strMng'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('strMSEd', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'strMSEd';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Edit Name', 'end'),
			button.callback('Edit Strategy', 'end'),
			button.callback('Back', 'strMSl'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('strMDe', ctx => {
		let message = ctx.update.callback_query.message;

		let keyboard = Markup.inlineKeyboard([
			button.callback('Spot', 'strMD2'),
			button.callback('Future', 'strMD2'),
			button.callback('Back', 'strMng'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('strMD2', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'strMD2';

		let keyboard = Markup.inlineKeyboard([
			button.callback('View', 'end'),
			button.callback('Change', 'end'),
			button.callback('Back', 'strMDe'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	sub(bot);
};

module.exports = strategy;
