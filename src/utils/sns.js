const AWS = require("aws-sdk")
AWS.config.update({
  secretAccessKey: process.env.AWS_ACCESS_KEY_ID,
  accessKeyId: process.env.AWS_ACCESS_SECRET,
  region: process.env.AWS_REGION
})
async function sendSMS({ sns, Message, PhoneNumber }) {
  sns
    .publish({
      Message,
      PhoneNumber,
    })
    .promise();
}

module.exports = sendSMS