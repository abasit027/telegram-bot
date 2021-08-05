const { Telegraf, Markup } = require('telegraf');

const button = Markup.button;

/**
 * @param { Telegraf } bot
 */
const sub = bot => {
	/*~~ Admin Strategy Create General ~~*/

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

	/*~~ Admin Strategy Create Buy & Sell ~~*/

	bot.action('strBS', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'strBS';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Single buy/sell zone', 'end'),
			button.callback('Multiple buy/sell zone', 'end'),
			button.callback('Equal split', 'end'),
			button.callback('Skip First', 'end'),
			button.callback('Increase by 2', 'end'),
			button.callback('Decrease by 2', 'end'),
			button.callback('Sell by percentage', 'end'),
			button.callback('Add custom strategyLeverage', 'strBSAd'),
			button.callback('Remove custom strategy', 'end'),
			button.callback('Back', 'strCrt'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('strBSAd', ctx => {
		let message = ctx.update.callback_query.message;

		let keyboard = Markup.inlineKeyboard([
			button.callback('1', 'strBSAd2'),
			button.callback('2', 'strBSAd2'),
			button.callback('3', 'strBSAd2'),
			button.callback('Upto 10', 'strBSAd2'),
			button.callback('Back', 'strBS'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('strBSAd2', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'strBSAd2';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Select percentage', 'end'),
			button.callback('Equal split from next', 'end'),
			button.callback('Skip This', 'end'),
			button.callback('Increase by 2 from next', 'end'),
			button.callback('Decrease by 2 from next', 'end'),
			button.callback('Save', 'end'),
			button.callback('Next', 'end'),
			button.callback('Back', 'strBSAd'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	/*~~ Admin Strategy Create Leverage ~~*/

	bot.action('strLv', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'strLv';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Leverage Type', 'strLT'),
			button.callback('Leverage', 'end'),
			button.callback('Long / Short', 'strLLS'),
			button.callback('Back', 'strCrt'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('strLT', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'strLT';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Cross', 'end'),
			button.callback('Isolated', 'end'),
			button.callback('Back', 'strLv'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('strLLS', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'strLLS';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Disable Longs', 'end'),
			button.callback('Disabel Shorts', 'end'),
			button.callback('Back', 'strLv'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	/*~~ Admin Strategy Create Stop ~~*/

	bot.action('strStp', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'strStp';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Default', 'end'),
			button.callback('Stop by Percentage', 'end'),
			button.callback('Stop to limit price percent', 'end'),
			button.callback('Back', 'strCrt'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	/*~~ Admin Strategy Create Trailing ~~*/

	bot.action('strTr', ctx => {
		let message = ctx.update.callback_query.message;

		let keyboard = Markup.inlineKeyboard([
			button.callback('Trailing buy', 'strTBS'),
			button.callback('Trailing sell', 'strTBS'),
			button.callback('Trailing stop', 'strTS'),
			button.callback('Back', 'strCrt'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('strTBS', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'strTBS';

		let keyboard = Markup.inlineKeyboard([
			button.callback('No trailing', 'end'),
			button.callback('Percentage', 'end'),
			button.callback('Back', 'strTr'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('strTS', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'strTS';

		let keyboard = Markup.inlineKeyboard([
			button.callback('No trailing stop', 'end'),
			button.callback('Breakeven', 'end'),
			button.callback('Moving Targets', 'strTMH'),
			button.callback('% below Highest value', 'strTSH'),
			button.callback('% below target', 'strTSB'),
			button.callback('Back', 'strTr'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('strTSH', ctx => {
		let message = ctx.update.callback_query.message;

		let keyboard = Markup.inlineKeyboard([
			button.callback('Select percent', 'strTMH'),
			button.callback('Back', 'strTS'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('strTMH', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'strTMH';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Triggered on 1st target', 'end'),
			button.callback('Select Triggered target', 'end'),
			button.callback('Triggered by %', 'end'),
			button.callback('Back', 'strTS'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('strTSB', ctx => {
		let message = ctx.update.callback_query.message;

		let keyboard = Markup.inlineKeyboard([
			button.callback('Select percent', 'strTSB2'),
			button.callback('Back', 'strTS'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});

	bot.action('strTSB2', ctx => {
		let message = ctx.update.callback_query.message;

		process.env.BACK_KEY = 'strTSB2';

		let keyboard = Markup.inlineKeyboard([
			button.callback('Triggered on 1st target', 'end'),
			button.callback('Select Triggered target', 'end'),
			button.callback('Back', 'strTSB'),
		]);
		return ctx.telegram.editMessageText(message.chat.id, message.message_id, null, 'Select :', keyboard);
	});
};

module.exports = sub;
