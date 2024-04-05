export const MOCK_EVENT_LOGS = {
  logs: [
    {
      event: {
        _id: "66059db58cf28d4abdc3ad23",
        timestamp: "2024-03-28T16:41:25.188Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.183Z",
        },
      },
      links: {
        functions: "/logs/events/5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
      },
    },
    {
      event: {
        _id: "66059db58cf28d4abdc3ad25",
        timestamp: "2024-03-28T16:41:25.238Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.236Z",
        },
      },
      links: {
        functions: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
      },
    },
    {
      event: {
        _id: "66059db58cf28d4abdc3ad29",
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      event: {
        _id: "66059db78cf28d4abdc3ad2c",
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      event: {
        _id: "66059dbf8cf28d4abdc3ad36",
        timestamp: "2024-03-28T16:41:35.978Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "1d40f762-1ba8-4fb9-b700-2b9c36d18522",
          eventName: "event2",
          timestamp: "2024-03-28T16:41:35.978Z",
        },
      },
      links: {
        functions: "/logs/events/1d40f762-1ba8-4fb9-b700-2b9c36d18522",
      },
    },
    {
      event: {
        _id: "66059dc48cf28d4abdc3ad3a",
        timestamp: "2024-03-28T16:41:40.440Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "9eebf9cc-8cf2-4df6-8916-4510c1f9ec65",
          eventName: "example",
          timestamp: "2024-03-28T16:41:40.440Z",
        },
      },
      links: {
        functions: "/logs/events/9eebf9cc-8cf2-4df6-8916-4510c1f9ec65",
      },
    },
    {
      event: {
        _id: "66059dc68cf28d4abdc3ad3c",
        timestamp: "2024-03-28T16:41:42.977Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "bfa37eb5-6355-40bf-b0a5-f930223452e6",
          eventName: "event2",
          timestamp: "2024-03-28T16:41:42.976Z",
        },
      },
      links: {
        functions: "/logs/events/bfa37eb5-6355-40bf-b0a5-f930223452e6",
      },
    },
    {
      event: {
        _id: "66059dc98cf28d4abdc3ad3f",
        timestamp: "2024-03-28T16:41:45.988Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "0fa48c57-4640-4112-9b72-7c851599017a",
          eventName: "error",
          timestamp: "2024-03-28T16:41:45.988Z",
        },
      },
      links: {
        functions: "/logs/events/0fa48c57-4640-4112-9b72-7c851599017a",
      },
    },
    {
      event: {
        _id: "66059dd18cf28d4abdc3ad43",
        timestamp: "2024-03-28T16:41:53.085Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "dde962eb-87a4-4bcf-992a-59e72b69b020",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:53.084Z",
        },
      },
      links: {
        functions: "/logs/events/dde962eb-87a4-4bcf-992a-59e72b69b020",
      },
    },
  ],
  links: {},
};

export const MOCK_FUNCTION_LOGS = {
  logs: [
    {
      function: {
        funcId: "9edcf3da-189f-47fe-85c9-e90a5f702759",
        lastUpdate: "2024-03-28T16:41:56.043Z",
        status: "error",
        funcName: "error-function",
        invoked: "2024-03-28T16:41:25.186Z",
      },
      links: {
        logs: "/logs/functions/9edcf3da-189f-47fe-85c9-e90a5f702759",
      },
    },
    {
      function: {
        funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
        lastUpdate: "2024-03-28T16:41:56.058Z",
        status: "error",
        funcName: "error-function",
        invoked: "2024-03-28T16:41:25.237Z",
      },
      links: {
        logs: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      function: {
        funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
        lastUpdate: "2024-03-28T16:41:56.700Z",
        status: "error",
        funcName: "error-function",
        invoked: "2024-03-28T16:41:25.919Z",
      },
      links: {
        logs: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      function: {
        funcId: "f4667eca-f755-4f86-84f1-8863e2488a68",
        lastUpdate: "2024-03-28T16:41:28.000Z",
        status: "completed",
        funcName: "first-function",
        invoked: "2024-03-28T16:41:27.934Z",
      },
      links: {
        logs: "/logs/functions/f4667eca-f755-4f86-84f1-8863e2488a68",
      },
    },
    {
      function: {
        funcId: "ca4e58bc-88f3-4251-b11e-77be5ea6c8e3",
        lastUpdate: "2024-03-28T16:41:28.019Z",
        status: "completed",
        funcName: "second-function",
        invoked: "2024-03-28T16:41:27.935Z",
      },
      links: {
        logs: "/logs/functions/ca4e58bc-88f3-4251-b11e-77be5ea6c8e3",
      },
    },
    {
      function: {
        funcId: "2aef0f35-5640-4ac5-81b0-5c708e7ab768",
        lastUpdate: "2024-03-28T16:41:36.005Z",
        status: "running",
        funcName: "third-function",
        invoked: "2024-03-28T16:41:35.978Z",
      },
      links: {
        logs: "/logs/functions/2aef0f35-5640-4ac5-81b0-5c708e7ab768",
      },
    },
    {
      function: {
        funcId: "7efeff86-6a11-46c2-9e33-51be6ade9f38",
        lastUpdate: "2024-03-28T16:41:43.040Z",
        status: "completed",
        funcName: "third-function",
        invoked: "2024-03-28T16:41:42.977Z",
      },
      links: {
        logs: "/logs/functions/7efeff86-6a11-46c2-9e33-51be6ade9f38",
      },
    },
    {
      function: {
        funcId: "926b5a75-47cf-4036-8b51-49370bfdd2d5",
        lastUpdate: "2024-03-28T16:42:16.764Z",
        status: "error",
        funcName: "error-function",
        invoked: "2024-03-28T16:41:45.988Z",
      },
      links: {
        logs: "/logs/functions/926b5a75-47cf-4036-8b51-49370bfdd2d5",
      },
    },
    {
      function: {
        funcId: "c7d7a0e9-2da6-4425-9a41-c9dd1f40afc9",
        lastUpdate: "2024-03-28T16:41:53.124Z",
        status: "completed",
        funcName: "first-function",
        invoked: "2024-03-28T16:41:53.085Z",
      },
      links: {
        logs: "/logs/functions/c7d7a0e9-2da6-4425-9a41-c9dd1f40afc9",
      },
    },
    {
      function: {
        funcId: "dfef76b4-0cf6-4eb9-bfcb-fc0c984636f6",
        lastUpdate: "2024-03-28T16:41:53.154Z",
        status: "running",
        funcName: "second-function",
        invoked: "2024-03-28T16:41:53.085Z",
      },
      links: {
        logs: "/logs/functions/dfef76b4-0cf6-4eb9-bfcb-fc0c984636f6",
      },
    },
  ],
  links: {},
};

export const MOCK_FUNCTION_DETAIL_LOG = {
  logs: [
    {
      function: {
        _id: "66059db58cf28d4abdc3ad24",
        timestamp: "2024-03-28T16:41:25.191Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
          funcName: "error-function",
          funcId: "9edcf3da-189f-47fe-85c9-e90a5f702759",
          timestamp: "2024-03-28T16:41:25.186Z",
        },
      },
      links: {
        event: "/logs/events/5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
      },
    },
    {
      error: {
        _id: "66059db58cf28d4abdc3ad27",
        timestamp: "2024-03-28T16:41:25.370Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "9edcf3da-189f-47fe-85c9-e90a5f702759",
          eventId: "5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
            },
            id: "9edcf3da-189f-47fe-85c9-e90a5f702759",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.365Z",
        },
      },
      links: {
        event: "/logs/events/5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
        function: "/logs/functions/9edcf3da-189f-47fe-85c9-e90a5f702759",
      },
    },
    {
      error: {
        _id: "66059db88cf28d4abdc3ad31",
        timestamp: "2024-03-28T16:41:28.110Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "9edcf3da-189f-47fe-85c9-e90a5f702759",
          eventId: "5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
            },
            id: "9edcf3da-189f-47fe-85c9-e90a5f702759",
            cache: {},
          },
          attempts: 2,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:28.109Z",
        },
      },
      links: {
        event: "/logs/events/5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
        function: "/logs/functions/9edcf3da-189f-47fe-85c9-e90a5f702759",
      },
    },
    {
      error: {
        _id: "66059dbf8cf28d4abdc3ad34",
        timestamp: "2024-03-28T16:41:35.930Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "9edcf3da-189f-47fe-85c9-e90a5f702759",
          eventId: "5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
            },
            id: "9edcf3da-189f-47fe-85c9-e90a5f702759",
            cache: {},
          },
          attempts: 3,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:35.929Z",
        },
      },
      links: {
        event: "/logs/events/5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
        function: "/logs/functions/9edcf3da-189f-47fe-85c9-e90a5f702759",
      },
    },
    {
      error: {
        _id: "66059dd48cf28d4abdc3ad48",
        timestamp: "2024-03-28T16:41:56.043Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "9edcf3da-189f-47fe-85c9-e90a5f702759",
          eventId: "5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
            },
            id: "9edcf3da-189f-47fe-85c9-e90a5f702759",
            cache: {},
          },
          attempts: 4,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:56.043Z",
        },
      },
      links: {
        event: "/logs/events/5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
        function: "/logs/functions/9edcf3da-189f-47fe-85c9-e90a5f702759",
      },
    },
    {
      error: {
        _id: "66059e0b8cf28d4abdc3ad4d",
        timestamp: "2024-03-28T16:42:51.148Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "9edcf3da-189f-47fe-85c9-e90a5f702759",
          eventId: "5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
            },
            id: "9edcf3da-189f-47fe-85c9-e90a5f702759",
            cache: {},
          },
          attempts: 5,
          max_attempts: 20,
          timestamp: "2024-03-28T16:42:51.147Z",
        },
      },
      links: {
        event: "/logs/events/5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
        function: "/logs/functions/9edcf3da-189f-47fe-85c9-e90a5f702759",
      },
    },
  ],
};

export const MOCK_ERROR_LOGS = {
  logs: [
    {
      error: {
        _id: "66072d28e0d4f331d9e1c5d9",
        timestamp: "2024-03-29T21:05:44.814Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "8c246136-bb6d-44f0-a09c-c601a8b7db8e",
          eventId: "b312851e-59e6-41b8-980c-88bc875eca71",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b312851e-59e6-41b8-980c-88bc875eca71",
            },
            id: "8c246136-bb6d-44f0-a09c-c601a8b7db8e",
            cache: {},
          },
          attempts: 14,
          max_attempts: 25,
          timestamp: "2024-03-29T21:05:44.798Z",
        },
      },
      links: {
        event: "/logs/events/b312851e-59e6-41b8-980c-88bc875eca71",
        function: "/logs/functions/8c246136-bb6d-44f0-a09c-c601a8b7db8e",
      },
    },
    {
      error: {
        _id: "66072d28e0d4f331d9e1c5d8",
        timestamp: "2024-03-29T21:05:44.794Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "187c58e7-cfb9-44bf-8efb-d274ebf90e5e",
          eventId: "dcbcd3c5-b40e-4e5d-8338-6afee35727b9",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "dcbcd3c5-b40e-4e5d-8338-6afee35727b9",
            },
            id: "187c58e7-cfb9-44bf-8efb-d274ebf90e5e",
            cache: {},
          },
          attempts: 14,
          max_attempts: 20,
          timestamp: "2024-03-29T21:05:44.785Z",
        },
      },
      links: {
        event: "/logs/events/dcbcd3c5-b40e-4e5d-8338-6afee35727b9",
        function: "/logs/functions/187c58e7-cfb9-44bf-8efb-d274ebf90e5e",
      },
    },
    {
      error: {
        _id: "66072d28e0d4f331d9e1c5d6",
        timestamp: "2024-03-29T21:05:44.762Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "533e7645-e99e-465f-b929-c4569b27d1f2",
          eventId: "4231240b-5c5f-4c58-97b3-902c0ea26874",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "4231240b-5c5f-4c58-97b3-902c0ea26874",
            },
            id: "533e7645-e99e-465f-b929-c4569b27d1f2",
            cache: {},
          },
          attempts: 16,
          max_attempts: 25,
          timestamp: "2024-03-29T21:05:44.733Z",
        },
      },
      links: {
        event: "/logs/events/4231240b-5c5f-4c58-97b3-902c0ea26874",
        function: "/logs/functions/533e7645-e99e-465f-b929-c4569b27d1f2",
      },
    },
    {
      error: {
        _id: "66072d28e0d4f331d9e1c5d7",
        timestamp: "2024-03-29T21:05:44.762Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "309bbdc4-0b81-4091-aaee-53e1b0f5bf96",
          eventId: "37d54d8a-15b8-440b-8e2e-48a3c1026eef",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "37d54d8a-15b8-440b-8e2e-48a3c1026eef",
            },
            id: "309bbdc4-0b81-4091-aaee-53e1b0f5bf96",
            cache: {},
          },
          attempts: 16,
          max_attempts: 25,
          timestamp: "2024-03-29T21:05:44.750Z",
        },
      },
      links: {
        event: "/logs/events/37d54d8a-15b8-440b-8e2e-48a3c1026eef",
        function: "/logs/functions/309bbdc4-0b81-4091-aaee-53e1b0f5bf96",
      },
    },
    {
      error: {
        _id: "66072d28e0d4f331d9e1c5d5",
        timestamp: "2024-03-29T21:05:44.731Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "300995db-fb49-48cf-8002-9d04a522e525",
          eventId: "d4c61985-8719-41c1-81b4-178bc339706b",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "d4c61985-8719-41c1-81b4-178bc339706b",
            },
            id: "300995db-fb49-48cf-8002-9d04a522e525",
            cache: {},
          },
          attempts: 14,
          max_attempts: 25,
          timestamp: "2024-03-29T21:05:44.720Z",
        },
      },
      links: {
        event: "/logs/events/d4c61985-8719-41c1-81b4-178bc339706b",
        function: "/logs/functions/300995db-fb49-48cf-8002-9d04a522e525",
      },
    },
    {
      error: {
        _id: "66072d28e0d4f331d9e1c5d4",
        timestamp: "2024-03-29T21:05:44.711Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "18a85c96-5fbd-4ee8-ad6f-b69a5a9ce669",
          eventId: "7583c224-07da-4522-b87c-41e7fdc00e0b",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "7583c224-07da-4522-b87c-41e7fdc00e0b",
            },
            id: "18a85c96-5fbd-4ee8-ad6f-b69a5a9ce669",
            cache: {},
          },
          attempts: 14,
          max_attempts: 25,
          timestamp: "2024-03-29T21:05:44.685Z",
        },
      },
      links: {
        event: "/logs/events/7583c224-07da-4522-b87c-41e7fdc00e0b",
        function: "/logs/functions/18a85c96-5fbd-4ee8-ad6f-b69a5a9ce669",
      },
    },
    {
      error: {
        _id: "66072d28e0d4f331d9e1c5d3",
        timestamp: "2024-03-29T21:05:44.663Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "a1f55d24-a544-4162-a1a4-d2b347dfda0c",
          eventId: "db9c9552-488d-4134-a3d4-649b6fe4b981",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "db9c9552-488d-4134-a3d4-649b6fe4b981",
            },
            id: "a1f55d24-a544-4162-a1a4-d2b347dfda0c",
            cache: {},
          },
          attempts: 14,
          max_attempts: 25,
          timestamp: "2024-03-29T21:05:44.637Z",
        },
      },
      links: {
        event: "/logs/events/db9c9552-488d-4134-a3d4-649b6fe4b981",
        function: "/logs/functions/a1f55d24-a544-4162-a1a4-d2b347dfda0c",
      },
    },
    {
      error: {
        _id: "66072d28e0d4f331d9e1c5cf",
        timestamp: "2024-03-29T21:05:44.631Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "216dde63-fea3-4710-8342-45fbfee64745",
          eventId: "a8007aa8-ce50-406e-b86d-bdbca654c9e8",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "a8007aa8-ce50-406e-b86d-bdbca654c9e8",
            },
            id: "216dde63-fea3-4710-8342-45fbfee64745",
            cache: {},
          },
          attempts: 14,
          max_attempts: 25,
          timestamp: "2024-03-29T21:05:44.546Z",
        },
      },
      links: {
        event: "/logs/events/a8007aa8-ce50-406e-b86d-bdbca654c9e8",
        function: "/logs/functions/216dde63-fea3-4710-8342-45fbfee64745",
      },
    },
    {
      error: {
        _id: "66072d28e0d4f331d9e1c5d0",
        timestamp: "2024-03-29T21:05:44.631Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "02d4fcb0-d07e-42bd-8cf1-a45ef2c87dad",
          eventId: "a2130598-19a2-48e9-82bd-f0bb89f1c1bb",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "a2130598-19a2-48e9-82bd-f0bb89f1c1bb",
            },
            id: "02d4fcb0-d07e-42bd-8cf1-a45ef2c87dad",
            cache: {},
          },
          attempts: 14,
          max_attempts: 25,
          timestamp: "2024-03-29T21:05:44.558Z",
        },
      },
      links: {
        event: "/logs/events/a2130598-19a2-48e9-82bd-f0bb89f1c1bb",
        function: "/logs/functions/02d4fcb0-d07e-42bd-8cf1-a45ef2c87dad",
      },
    },
    {
      error: {
        _id: "66072d28e0d4f331d9e1c5d1",
        timestamp: "2024-03-29T21:05:44.631Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "70569351-5137-4c74-b01d-3f90c53b2071",
          eventId: "ff62b1f7-8816-4359-9aba-ecd5a233f4bd",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "ff62b1f7-8816-4359-9aba-ecd5a233f4bd",
            },
            id: "70569351-5137-4c74-b01d-3f90c53b2071",
            cache: {},
          },
          attempts: 14,
          max_attempts: 25,
          timestamp: "2024-03-29T21:05:44.583Z",
        },
      },
      links: {
        event: "/logs/events/ff62b1f7-8816-4359-9aba-ecd5a233f4bd",
        function: "/logs/functions/70569351-5137-4c74-b01d-3f90c53b2071",
      },
    },
  ],
  links: {
    next: "/logs/events?page=2&limit=10",
  },
};

export const MOCK_ALL_LOGS = {
  logs: [
    {
      event: {
        _id: "66059db58cf28d4abdc3ad23",
        timestamp: "2024-03-28T16:41:25.188Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.183Z",
        },
      },
      links: {
        functions: "/logs/events/5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
      },
    },
    {
      function: {
        _id: "66059db58cf28d4abdc3ad24",
        timestamp: "2024-03-28T16:41:25.191Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
          funcName: "error-function",
          funcId: "9edcf3da-189f-47fe-85c9-e90a5f702759",
          timestamp: "2024-03-28T16:41:25.186Z",
        },
      },
      links: {
        event: "/logs/events/5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
      },
    },
    {
      event: {
        _id: "66059db58cf28d4abdc3ad25",
        timestamp: "2024-03-28T16:41:25.238Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.236Z",
        },
      },
      links: {
        functions: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
      },
    },
    {
      function: {
        _id: "66059db58cf28d4abdc3ad26",
        timestamp: "2024-03-28T16:41:25.241Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          funcName: "error-function",
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          timestamp: "2024-03-28T16:41:25.237Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
      },
    },
    {
      error: {
        _id: "66059db58cf28d4abdc3ad27",
        timestamp: "2024-03-28T16:41:25.370Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "9edcf3da-189f-47fe-85c9-e90a5f702759",
          eventId: "5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
            },
            id: "9edcf3da-189f-47fe-85c9-e90a5f702759",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.365Z",
        },
      },
      links: {
        event: "/logs/events/5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
        function: "/logs/functions/9edcf3da-189f-47fe-85c9-e90a5f702759",
      },
    },
    {
      error: {
        _id: "66059db58cf28d4abdc3ad28",
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: "66059db58cf28d4abdc3ad29",
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: "66059db58cf28d4abdc3ad2a",
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: "66059db58cf28d4abdc3ad2b",
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: "66059db78cf28d4abdc3ad2c",
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      event: {
        _id: "66059db58cf28d4abdc3ad231",
        timestamp: "2024-03-28T16:41:25.188Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.183Z",
        },
      },
      links: {
        functions: "/logs/events/5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
      },
    },
    {
      function: {
        _id: "66059db58cf28d4abdc3ad241",
        timestamp: "2024-03-28T16:41:25.191Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
          funcName: "error-function",
          funcId: "9edcf3da-189f-47fe-85c9-e90a5f702759",
          timestamp: "2024-03-28T16:41:25.186Z",
        },
      },
      links: {
        event: "/logs/events/5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
      },
    },
    {
      event: {
        _id: "66059db58cf28d4abdc3ad251",
        timestamp: "2024-03-28T16:41:25.238Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.236Z",
        },
      },
      links: {
        functions: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
      },
    },
    {
      function: {
        _id: "66059db58cf28d4abdc3ad261",
        timestamp: "2024-03-28T16:41:25.241Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          funcName: "error-function",
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          timestamp: "2024-03-28T16:41:25.237Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
      },
    },
    {
      error: {
        _id: "66059db58cf28d4abdc3ad271",
        timestamp: "2024-03-28T16:41:25.370Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "9edcf3da-189f-47fe-85c9-e90a5f702759",
          eventId: "5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
            },
            id: "9edcf3da-189f-47fe-85c9-e90a5f702759",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.365Z",
        },
      },
      links: {
        event: "/logs/events/5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
        function: "/logs/functions/9edcf3da-189f-47fe-85c9-e90a5f702759",
      },
    },
    {
      error: {
        _id: "66059db58cf28d4abdc3ad281",
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: "66059db58cf28d4abdc3ad291",
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: "66059db58cf28d4abdc3ad2a1",
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: "66059db58cf28d4abdc3ad2b1",
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: "66059db78cf28d4abdc3ad2c1",
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      event: {
        _id: "66059db58cf28d4abdc3ad232",
        timestamp: "2024-03-28T16:41:25.188Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.183Z",
        },
      },
      links: {
        functions: "/logs/events/5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
      },
    },
    {
      function: {
        _id: "66059db58cf28d4abdc3ad242",
        timestamp: "2024-03-28T16:41:25.191Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
          funcName: "error-function",
          funcId: "9edcf3da-189f-47fe-85c9-e90a5f702759",
          timestamp: "2024-03-28T16:41:25.186Z",
        },
      },
      links: {
        event: "/logs/events/5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
      },
    },
    {
      event: {
        _id: "66059db58cf28d4abdc3ad252",
        timestamp: "2024-03-28T16:41:25.238Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.236Z",
        },
      },
      links: {
        functions: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
      },
    },
    {
      function: {
        _id: "66059db58cf28d4abdc3ad262",
        timestamp: "2024-03-28T16:41:25.241Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          funcName: "error-function",
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          timestamp: "2024-03-28T16:41:25.237Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
      },
    },
    {
      error: {
        _id: "66059db58cf28d4abdc3ad272",
        timestamp: "2024-03-28T16:41:25.370Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "9edcf3da-189f-47fe-85c9-e90a5f702759",
          eventId: "5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
            },
            id: "9edcf3da-189f-47fe-85c9-e90a5f702759",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.365Z",
        },
      },
      links: {
        event: "/logs/events/5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
        function: "/logs/functions/9edcf3da-189f-47fe-85c9-e90a5f702759",
      },
    },
    {
      error: {
        _id: "66059db58cf28d4abdc3ad282",
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: "66059db58cf28d4abdc3ad292",
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: "66059db58cf28d4abdc3ad2a2",
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: "66059db58cf28d4abdc3ad2b2",
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: "66059db78cf28d4abdc3ad2c2",
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      event: {
        _id: "66059db58cf28d4abdc3ad233",
        timestamp: "2024-03-28T16:41:25.188Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.183Z",
        },
      },
      links: {
        functions: "/logs/events/5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
      },
    },
    {
      function: {
        _id: "66059db58cf28d4abdc3ad243",
        timestamp: "2024-03-28T16:41:25.191Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
          funcName: "error-function",
          funcId: "9edcf3da-189f-47fe-85c9-e90a5f702759",
          timestamp: "2024-03-28T16:41:25.186Z",
        },
      },
      links: {
        event: "/logs/events/5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
      },
    },
    {
      event: {
        _id: "66059db58cf28d4abdc3ad253",
        timestamp: "2024-03-28T16:41:25.238Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.236Z",
        },
      },
      links: {
        functions: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
      },
    },
    {
      function: {
        _id: "66059db58cf28d4abdc3ad263",
        timestamp: "2024-03-28T16:41:25.241Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          funcName: "error-function",
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          timestamp: "2024-03-28T16:41:25.237Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
      },
    },
    {
      error: {
        _id: "66059db58cf28d4abdc3ad273",
        timestamp: "2024-03-28T16:41:25.370Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "9edcf3da-189f-47fe-85c9-e90a5f702759",
          eventId: "5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
            },
            id: "9edcf3da-189f-47fe-85c9-e90a5f702759",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.365Z",
        },
      },
      links: {
        event: "/logs/events/5d4b2c33-fd77-4cb5-9b9b-e37c5075e1de",
        function: "/logs/functions/9edcf3da-189f-47fe-85c9-e90a5f702759",
      },
    },
    {
      error: {
        _id: "66059db58cf28d4abdc3ad283",
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: "66059db58cf28d4abdc3ad293",
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: "66059db58cf28d4abdc3ad2a3",
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: "66059db58cf28d4abdc3ad2b3",
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: "66059db78cf28d4abdc3ad2c3",
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.383Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "c3e10fc4-59e0-4b31-9805-016d66e52285",
          eventId: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "b3b722ad-9401-46c2-812a-4bc7bd863e21",
            },
            id: "c3e10fc4-59e0-4b31-9805-016d66e52285",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.381Z",
        },
      },
      links: {
        event: "/logs/events/b3b722ad-9401-46c2-812a-4bc7bd863e21",
        function: "/logs/functions/c3e10fc4-59e0-4b31-9805-016d66e52285",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.920Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          eventName: "error",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        functions: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      function: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.922Z",
        level: "info",
        message: "Function invoked",
        meta: {
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          funcName: "error-function",
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          timestamp: "2024-03-28T16:41:25.919Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
      },
    },
    {
      error: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:25.972Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          funcId: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
          eventId: "029b3737-8439-41ce-b532-ac21b795ffbf",
          error: {
            message: "This error is for testing purposes",
            name: "Error",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/tasks/process_job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "error-function",
            event: {
              name: "error",
              id: "029b3737-8439-41ce-b532-ac21b795ffbf",
            },
            id: "1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-03-28T16:41:25.951Z",
        },
      },
      links: {
        event: "/logs/events/029b3737-8439-41ce-b532-ac21b795ffbf",
        function: "/logs/functions/1d5c9a31-81af-4a9b-95c9-f8d6cb707d12",
      },
    },
    {
      event: {
        _id: Math.random(),
        timestamp: "2024-03-28T16:41:27.935Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "f603f81d-7c8e-4639-bad1-dcf16065b349",
          eventName: "event1",
          timestamp: "2024-03-28T16:41:27.934Z",
        },
      },
      links: {
        functions: "/logs/events/f603f81d-7c8e-4639-bad1-dcf16065b349",
      },
    },
  ],
  links: {
    next: "/logs?cursor=66059db78cf28d4abdc3ad2c&limit=10",
  },
};
