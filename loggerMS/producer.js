const amqp = require("amqplib");
const config = require("./config");

class Producer{
    channel;

    async createChannel() {
        try{
            const connection = await amqp.connect(config.rabbitMQ.url);
            this.channel = await connection.createChannel();
        }catch(error){
            console.log("createChannel::error ",error);
        } 
    }

    async publishMessage(routingKey, message){

        try{
            if(!this.channel){
                await this.createChannel();
            }

            let exchangeName = config.rabbitMQ.exchangeName;
            await this.channel.assertExchange(exchangeName,'direct');

            const logDetails = {
                logType: routingKey,
                message: message,
                dateTime: new Date(),
            };
            await this.channel.publish(
                exchangeName,
                routingKey,
                Buffer.from(JSON.stringify(logDetails))
            )
        }catch(error){
            console.log("publishMessage::error ",error);
        } 


    }
}

module.exports = Producer;