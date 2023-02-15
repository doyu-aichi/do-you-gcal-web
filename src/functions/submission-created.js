require('dotenv').config();

const nodemailer = require('nodemailer');

exports.handler = function (event, context, callback) {
    const {
        name,
        email,
        message
    } = JSON.parse(event.body).payload.data


    const auth = {
        type: "OAuth2",
        user: process.env.OAUTH_USER,
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
    };

    const transport = {
        service: 'gmail',
        auth: auth
    };

    let transporter = nodemailer.createTransport(transport);

    const url = 'https://evstation.dev/';

    let mailOptions = {
        from: `EV STATION <info@evstation.dev>`,
        to: `${email}`,
        subject: '【EV STATION】お問い合わせありがとうございます',
        text: `${name} 様\n\nお問い合わせありがとうございます。\n
        以下の内容でフォームを送信いたしました。\n
        数日中に追って担当者よりメールにて回答をお送りいたします。\n
        今しばらくお待ちください。\n\n------ 送信内容 ------\n
        【お名前】\n${name}\n\n【メールアドレス】\n${email}\n\n
        【お問い合わせ内容】\n${message}\n\n
        --------------------\nEV STATION\n${url}\n`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            callback(error);
        } else {
            callback(null, {
                statusCode: 200,
                body: 'ok',
            });
        }
    });
};