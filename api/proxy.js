const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const targetURL = 'https:/app.cloozo.com' + req.url;
  try {
    const response = await fetch(targetURL);
    const body = await response.text();

    res.status(response.status).send(body);
  } catch (error) {
    res.status(500).send('Error fetching content');
  }
};
