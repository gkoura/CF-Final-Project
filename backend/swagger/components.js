const components = {
    schemas: {
      User: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            example: '507f191e810c19729de860ea',
          },
          name: {
            type: 'string',
            example: 'John Doe',
          },
          email: {
            type: 'string',
            example: 'john.doe@example.com',
          },
          age: {
            type: 'integer',
            example: 25,
          },
        },
        required: ['name', 'email'],
      },
      Product: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            example: '507f191e810c19729de860ea',
          },
          name: {
            type: 'string',
            example: 'Laptop',
          },
          price: {
            type: 'number',
            example: 999.99,
          },
          description: {
            type: 'string',
            example: 'A high-performance laptop.',
          },
        },
        required: ['name', 'price'],
      },
    },
    responses: {
      NotFound: {
        description: 'The requested resource was not found',
      },
      BadRequest: {
        description: 'Invalid request parameters',
      },
    },
    parameters: {
      UserId: {
        name: 'id',
        in: 'path',
        required: true,
        schema: {
          type: 'string',
        },
        description: 'The unique ID of the user',
      },
    },
  };
  
  module.exports = components;
  