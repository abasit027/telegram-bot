const { Telegraf, Markup } = require('telegraf');

const button = Markup.button;

/**
 * @param { Telegraf } bot
 */
const sub = bot => {
	/* ~~ Signal Format ~~ */

	bot.action('signalformat', ctx => {
		let message = ctx.update.callback_query.message;

		let keyboard = Markup.inlineKeyboard([
			button.callback('Create New', 'screatenew'),
			button.callback('Manage Format', 'smanageformat'),
			button.callback('Back', 'signal'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('screatenew', ctx => {
		let message = ctx.update.callback_query.message;

		let keyboard = Markup.inlineKeyboard([
			button.callback('Enter Name', 'sentername'),
			button.callback('Back', 'signalformat'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('sentername', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'sentername';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Spot', 'end'),
			button.callback('Future', 'end'),
			button.callback('Back', 'screatenew'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('smanageformat', ctx => {
		let message = ctx.update.callback_query.message;

		let keyboard = Markup.inlineKeyboard([
			button.callback('Format 1', 'ssignalmanageformat'),
			button.callback('Format 2', 'ssignalmanageformat'),
			button.callback('Format 3', 'ssignalmanageformat'),
			button.callback('Back', 'signalformat'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('ssignalmanageformat', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'ssignalmanageformat';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Edit', 'end'),
			button.callback('Delete', 'end'),
			button.callback('Back', 'smanageformat'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('opensignal', ctx => {
		let message = ctx.update.callback_query.message;

		let keyboard = Markup.inlineKeyboard([button.callback('Filter', 'openfilter'), button.callback('Back', 'signal')]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('openfilter', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'openfilter';

		let keyboard = Markup.inlineKeyboard([
			button.callback('By Coin', 'end'),
			button.callback('By Signal Type', 'end'),
			button.callback('Apply', 'openapply'),
			button.callback('Back', 'opensignal'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('openapply', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'openapply';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Edit', 'end'),
			button.callback('Cancel', 'end'),
			button.callback('Back', 'opensignal'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	/* ~~ Result Format ~~ */

	bot.action('resultformat', ctx => {
		let message = ctx.update.callback_query.message;

		let keyboard = Markup.inlineKeyboard([
			button.callback('Create New', 'rcreatenew'),
			button.callback('Manage Format', 'rmanageformat'),
			button.callback('Back', 'signal'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('rcreatenew', ctx => {
		let message = ctx.update.callback_query.message;

		let keyboard = Markup.inlineKeyboard([
			button.callback('Enter Name', 'rentername'),
			button.callback('Back', 'resultformat'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('rentername', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'rentername';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Spot', 'end'),
			button.callback('Future', 'end'),
			button.callback('Back', 'rcreatenew'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('rmanageformat', ctx => {
		let message = ctx.update.callback_query.message;

		let keyboard = Markup.inlineKeyboard([
			button.callback('Format 1', 'rsignalmanageformat'),
			button.callback('Format 2', 'rsignalmanageformat'),
			button.callback('Format 3', 'rsignalmanageformat'),
			button.callback('Back', 'resultformat'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('rsignalmanageformat', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'rsignalmanageformat';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Edit', 'end'),
			button.callback('Delete', 'end'),
			button.callback('Back', 'rcreatenew'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});
};

module.exports = sub;
