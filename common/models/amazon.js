module.exports = function(Amazon) {
    Amazon.beforeRemote('upload', (ctx, placeholder, next) => {
        // const container = ctx.args.container; // this arg is automatically set by loopback
        // // args we should send from storefront (tenant, room id)
        // const tenant = ctx.args.req.headers['x-tenant'];
        // const id = ctx.args.req.headers.id;
    
        // // validate our required values to build the bucket's upload target folder
        // if (!container || !tenant || !id) {
        //   throw new Error('Required parameters are invalid');
        // }
        // // modifiy the container name so we can save the file in a subfolder
        // const bucket = amazonS3Buckets[container];
        ctx.args.container = 'htm-storefront-test/test';
        next();
      });
};
