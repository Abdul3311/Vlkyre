`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/* 
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
const UserPrivate = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/private`);
const Welcome = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/setwelcome`);
const LinkList = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/antilink`);
const DebugList = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/debug`);
const Ranker = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/autorank`);
const BanPerson = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/ban`);
const NsfwList = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/nsfw`);
const BanGroup = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/ban`);
const Bagde = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/badge`);
const Halt = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/halt`);
const chalkAnimation = require("chalkercli");
import ʟᴀʏᴏᴜᴛ from "../𝐀𝐫𝐜𝐭𝐢𝐱🀄𝐕𝐞𝐧𝐭/ʟᴀʏᴏᴜᴛ";
import { Boom } from "@hapi/boom";
import Kolor from "chalk";
// ⦓═════════════════════════════════「 𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®」═════════════════════════════════⦔
const connection_update = async (
update: any,
DisconnectReason: any,
startӄ𝖗𝖞ӄ𝖓𝖟: any,
ӄ𝖗𝖞ӄ𝖓𝖟
): Promise<void> => {
const { connection, lastDisconnect } = update;
if (connection === "close") {
if (
(lastDisconnect.error as Boom)?.output?.statusCode !==
DisconnectReason.loggedOut
) {
await startӄ𝖗𝖞ӄ𝖓𝖟();
} else {
console.log("❌𝐄𝐫𝐫𝐨𝐫꧂ Connection closed. You are logged out.");
process.exit(0);
}
}
// ⦓═════════════════════════════════「 𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®」═════════════════════════════════⦔
if (connection === "connecting") {
if (ʟᴀʏᴏᴜᴛ.Heroku_App !== undefined) {
console.log("💡𝐈𝐧𝐟𝐨꧂  Connecting to WhatsApp...");
} else {
chalkAnimation.rainbow("💡𝐈𝐧𝐟𝐨꧂  Connecting to WhatsApp...");
}
}
// ⦓═════════════════════════════════「 𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®」═════════════════════════════════⦔
if (connection === "open") {
if (ʟᴀʏᴏᴜᴛ.Heroku_App !== undefined) {
console.log("Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 Online!");
} else {
const rainbow = chalkAnimation.rainbow(`
|═════════════════════════════════「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®: Online   」═════════════════════════════════|`);
setTimeout(() => {
rainbow.stop();
}, 10_000);
}
try {
await ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(ӄ𝖗𝖞ӄ𝖓𝖟.user.id, {
text: `お 𝐔𝐬𝐞𝐫: ${
ӄ𝖗𝖞ӄ𝖓𝖟.user.notify ||
ӄ𝖗𝖞ӄ𝖓𝖟.user.name ||
ӄ𝖗𝖞ӄ𝖓𝖟.user.name ||
ӄ𝖗𝖞ӄ𝖓𝖟.user.id.split("@")[0]
} お

「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®: Online   」`,
});
} catch (error) {
console.log("「 Stored 𝐀𝐫𝐜𝐭𝐢𝐱 data! 」");
}
}
};
export = {
connection_update: connection_update,
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/* 
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
