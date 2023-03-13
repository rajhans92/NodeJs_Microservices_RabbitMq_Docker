module.exports = {
    rabbitMQ: {
      url: process.env.AMQP_URL || 'amqp://localhost:5673',
      exchangeName: process.env.EXCHANGE_NAME,
    },
  };