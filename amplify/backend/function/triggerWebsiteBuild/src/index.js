const axios = require('axios');

exports.handler = async (event, context) => {
  const webhookURL = "https://webhooks.amplify.eu-central-1.amazonaws.com/prod/webhooks?id=be914fb9-7224-4d8b-981b-31a3fe614897&token=EKeYULWlPpjjTovc4b8Xks3UvSckC5sIL0ICdeya6k&operation=startbuild";
  try {
    const response = await axios.post(webhookURL, {}, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return {
      statusCode: response.status,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error('Error triggering webhook:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
