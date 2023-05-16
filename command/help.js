const fs = require("fs");
const petik = '```'
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")


function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
}

exports.allMenu = (role, ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Hai Kak🥴, Aku Adalah Botz WhatsApp Yang DiBuat Oleh ${ownerName}

Aku Dibuat Untuk Membuat
Stiker dan lain²

*I N F O B O T Z📢*
➭ Nama: ${botName}
➭ Mode: *Public*
➭ Jam: ${jam}
➭ Tanggal: ${tanggal(new Date())}

*I N F O U S E R📢*
➭ Nama: ${pushname !== undefined ? pushname : '-'}
➭ Status: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
➭ Limit: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
➭ Balance: ${getBalance(sender, balance)}
➭ Role: ${role}
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
❏––––––『 *ALLMENU* 』––––––

╭––『 M e n u 』
┆
┆❏ .menu
┆❏ .infobot
┆❏ .sewabot
┆❏ .speed
┆❏ .runtime
┆❏ .owner
┆❏ .donasi
┆❏ .dashboard 
┆
╰–––––––––––––––༓
╭––『 Group Menu 』
┆
┆❏ .antilink
┆❏ .antilink2
┆❏ .antiwame
┆❏ .antiwame2
┆❏ .welcome
┆❏ .afk
┆❏ .hidetag
┆❏ .linkgc
┆❏ .setppgc
┆❏ .setppgc2
┆❏ .setnamegc
┆❏ .setdesc
┆❏ .open
┆❏ .close
┆❏ .kick
┆❏ .promote
┆❏ .demote
┆❏ .revoke
┆❏ .setwelcome
┆❏ .setleft
┆❏ .left
┆
╰–––––––––––––––༓
╭––『 Sticker Menu 』
┆
┆❏.sticker
┆❏.qc
┆❏.xquote
┆❏ .smeme
┆❏ .emojimix
┆❏ .stickerwm
┆❏.ai
┆❏ .tourl
┆❏ .tovn
┆❏ .toaudio
┆❏ .tomp3
┆❏ .toimg
┆❏ .nuliskiri
┆❏ .nuliskanan
┆❏ .say
┆❏ .translate
┆❏ .obfus
┆❏ .ssweb
┆
╰–––––––––––––––༓
╭––『 Download Menu 』
┆
┆❏ .play
┆❏ .ytmp4
┆❏ .ytmp3
┆❏ .instagram
┆❏ .mediafire
┆❏ .facebook
┆❏ .ytsearch 
┆❏ .google
┆❏ .mediafire
┆❏ .tiktok
┆❏ .tiktokaudio
┆❏ .gitclone
┆
╰–––––––––––––––༓
╭––『 RPG Menu 』
┆
┆❏ .tictactoe
┆❏ .casino
┆❏ .deltt
┆❏ .delcasino
┆❏ .inventory
┆❏ .joinrpg
┆❏ .buy
┆❏ .sell
┆❏ .heal
┆❏ .hunt
┆❏ .adventure
┆❏ .luckyday
┆❏ .killslime
┆❏ .killgoblin
┆❏ .killdevil
┆❏ .killbehemonth
┆❏ .killdemon
┆❏ .killdemonking
┆❏ .mining
┆❏ .sellikan
┆❏ .sellbesi
┆❏ .sellemas
┆❏ .jelajah
┆❏ .mancing
┆❏ .jualikan
┆❏ .jualcoal
┆❏ .lebur
┆❏ .jualstone
┆❏ .jualingot
┆❏ .jualkayu
┆❏ .nebang
┆❏ .goplanet
┆❏ .jualbahankimia
┆
╰–––––––––––––––༓
╭––『 Store Menu 』
┆
┆❏ .list
┆❏ .dellist
┆❏ .addlist
┆❏ .update
┆❏ .jeda
┆❏ .tambah
┆❏ .kurang
┆❏ .bagi
┆❏ .kali
┆❏ .proses
┆❏ .done
┆❏ .setdone
┆❏ .changedone
┆❏ .delsetdone
┆❏ .setproses
┆❏ .changeproses
┆❏ .delsetproses
┆
╰–––––––––––––––༓
╭––『 Campur Menu 』
┆
┆❏ .fitnah
┆❏ .nowa
┆❏ .fakehidetag
┆❏ .react
┆❏ .getquoted
┆❏ .lirik
┆❏ .grupwa
┆❏ .pinterest
┆❏ .waifu
┆❏ .cecan
┆❏ .cogan
┆❏ .limit
┆❏ .balance
┆❏ .transfer
┆❏ .buylimit
┆❏ .buyglimit
┆❏ .toplocal
┆❏ .topglobal
┆
╰–––––––––––––––༓
╭––『 Anonymous Menu 』
┆
┆❏ .menfess
┆❏ .confess
┆❏ .start
┆❏ .next
┆❏ .stop
┆❏ .balasmenfess
┆❏ .stopmenfess
┆❏ .tolakmenfess
┆
╰–––––––––––––––༓
╭––『 Owner Menu 』
┆
┆❏ .join
┆❏ .left
┆❏ .public
┆❏ .self
┆❏ .setppbot
┆❏ .setppbot2
┆❏ .broadcast 
┆❏ .autoread
┆❏ .autobio
┆❏ .antidelete
┆❏ .antiviewonce 
┆❏ .autorespond
┆❏ .anticall
┆❏ .autoblok212
┆❏ .bcimg
┆❏ .bcvn
┆❏ .bcstik
┆❏ .bcvideo
┆❏ .bcsewa
┆❏ .addpremium 
┆❏ .addsewa
┆❏ .delpremium
┆❏ .delsewa
┆
╰–––––––––––––––༓

*TEXTPRO MENU*
 • .halloween2
 • .horror
 • .game8bit
 • .layered
 • .glitch2
 • .coolg
 • .coolwg
 • .realistic
 • .space3d
 • .gtiktok
 • .stone
 • .marvel
 • .marvel2
 • .pornhub
 • .avengers
 • .metalr
 • .metalg
 • .metalg2
 • .halloween2
 • .lion
 • .wolf_bw
 • .wolf_g
 • .ninja
 • .3dsteel
 • .horror2
 • .lava
 • .bagel
 • .blackpink
 • .rainbow2
 • .water_pipe
 • .halloween
 • .sketch
 • .sircuit
 • .discovery
 • .metallic2
 • .fiction
 • .demon
 • .transformer
 • .berry
 • .thunder
 • .magma
 • .3dstone
 • .neon
 • .glitch
 • .harry_potter
 • .embossed
 • .broken
 • .papercut
 • .gradient
 • .glossy
 • .watercolor
 • .multicolor
 • .neon_devil
 • .underwater
 • .bear
 • .wonderfulg
 • .christmas
 • .neon_light
 • .snow
 • .cloudsky
 • .luxury2
 • .gradient2
 • .summer
 • .writing
 • .engraved
 • .summery
 • .3dglue
 • .metaldark
 • .neonlight
 • .oscar
 • .minion
 • .holographic
 • .purple
 • .glossyb
 • .deluxe2
 • .glossyc
 • .fabric
 • .neonc
 • .newyear
 • .newyear2
 • .metals
 • .xmas
 • .blood
 • .darkg
 • .joker
 • .wicker
 • .natural
 • .firework
 • .skeleton
 • .balloon
 • .balloon2
 • .balloon3
 • .balloon4
 • .balloon5
 • .balloon6
 • .balloon7
 • .steel
 • .gloss
 • .denim
 • .decorate
 • .decorate2
 • .peridot
 • .rock
 • .glass
 • .glass2
 • .glass3
 • .glass4
 • .glass5
 • .glass6
 • .glass7
 • .glass8
 • .captain_as2
 • .robot
 • .equalizer
 • .toxic
 • .sparkling
 • .sparkling2
 • .sparkling3
 • .sparkling4
 • .sparkling5
 • .sparkling6
 • .sparkling7
 • .decorative
 • .chocolate
 • .strawberry
 • .koifish
 • .bread
 • .matrix
 • .blood2
 • .neonligth2
 • .thunder2
 • .3dbox
 • .neon2
 • .roadw
 • .bokeh
 • .gneon
 • .advanced
 • .dropwater
 • .wall
 • .chrismast
 • .honey
 • .drug
 • .marble
 • .marble2
 • .ice
 • .juice
 • .rusty
 • .abstra
 • .biscuit
 • .wood
 • .scifi
 • .metalr
 • .purpleg
 • .shiny 
 • .jewelry
 • .jewelry2
 • .jewelry3
 • .jewelry4
 • .jewelry5
 • .jewelry6
 • .jewelry7
 • .jewelry8
 • .metalh
 • .golden
 • .glitter
 • .glitter2
 • .glitter3
 • .glitter4
 • .glitter5
 • .glitter6
 • .glitter7
 • .metale
 • .carbon
 • .candy
 • .metalb
 • .gemb
 • .3dchrome
 • .metalb2
 • .metalg
 • .metalg
`
}

exports.donate = (pushname, ownerNumber) => {
    return`Contact  Owner:
wa.me/${ownerNumber} (Owner)`
}

exports.sewanya = `*OPEN SEWA BOT BY ITSUKA*
- ─────────── ・ ・
 - • 6Hari = 5k
- • 13Hari = 10k
- • 20Hari = 15k
- • 26Hari = 20k
- • Permanent = 30k
- ─────────── ・ ・
*_PROMO HARI INI✨_*
- • Permanent cuma 15k
- ─────────── ・ ・
Fitur Bot?
- • Bisa Bikin Stiker
- • Ada Antilink
- • Ada Antivirtex
- • Ada Welcome
- • Bot On 24Jam`