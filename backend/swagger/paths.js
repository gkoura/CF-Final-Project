const paths = {
    '/api/users': {
      get: {
        tags: ['Users'],
        summary: 'Get all users',
        description: 'Retrieve a list of all registered users.',
        responses: {
          200: {
            description: 'List of users',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/User',
                  },
                },
              },
            },
          },
        },
      },
      post: {
        tags: ['Users'],
        summary: 'Create a new user',
        description: 'Add a new user to the database.',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/User',
              },
            },
          },
        },
        responses: {
          201: {
            description: 'User created successfully',
          },
          400: {
            description: 'Bad request',
          },
        },
      },
    },
    '/api/users/{id}': {
      get: {
        tags: ['Users'],
        summary: 'Get user by ID',
        description: 'Retrieve a user by their unique ID.',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
            description: 'The unique ID of the user',
          },
        ],
        responses: {
          200: {
            description: 'User details',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/User',
                },
              },
            },
          },
          404: {
            description: 'User not found',
          },
        },
      },
      delete: {
        tags: ['Users'],
        summary: 'Delete a user',
        description: 'Remove a user from the database by their ID.',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
            description: 'The unique ID of the user to delete',
          },
        ],
        responses: {
          204: {
            description: 'User deleted successfully',
          },
          404: {
            description: 'User not found',
          },
        },
      },
    },
  };
  
  module.exports = paths;
  