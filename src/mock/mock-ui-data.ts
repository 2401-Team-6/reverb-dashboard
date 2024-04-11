export const MOCK_EVENT_LOGS = {
  logs: [
    {
      event: {
        _id: "660be8176564eb9645a63a888",
        timestamp: "2024-04-02T11:12:23.120Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "e52d3ea6-efa5-48f4-80f7-d5f65d3afcef",
          eventName: "user-signup",
          timestamp: "2024-04-02T11:12:23.117Z",
        },
      },
      links: {
        functions: "/logs/events/e52d3ea6-efa5-48f4-80f7-d5f65d3afcef",
      },
    },
    {
      event: {
        _id: "660be81a6554eb9645a63a88d",
        timestamp: "2024-04-02T11:12:26.377Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "462a0560-1bbb-4e5e-9c9a-13de3d3f8bfe",
          eventName: "product-purchased",
          timestamp: "2024-04-02T11:12:26.377Z",
        },
      },
      links: {
        functions: "/logs/events/462a0560-1bbb-4e5e-9c9a-13de3d3f8bfe",
      },
    },
    {
      event: {
        _id: "660be81a654eb94645a63a88d",
        timestamp: "2024-04-02T11:12:26.377Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "462a0560-1bbb-4e5e-9c9a-13de3d3f8bfe",
          eventName: "user-signup",
          timestamp: "2024-04-02T11:12:26.377Z",
        },
      },
      links: {
        functions: "/logs/events/462a0560-1bbb-4e5e-9c9a-13de3d3f8bfe",
      },
    },
    {
      event: {
        _id: "660be817654eb9645a63a3888",
        timestamp: "2024-04-02T12:12:23.120Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "e52d3ea6-efa5-48f4-80f7-d5f65d3afcef",
          eventName: "user-signup",
          timestamp: "2024-04-02T12:12:23.117Z",
        },
      },
      links: {
        functions: "/logs/events/e52d3ea6-efa5-48f4-80f7-d5f65d3afcef",
      },
    },
    {
      event: {
        _id: "660be817654eb9645a631a888",
        timestamp: "2024-04-02T12:12:23.120Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "e52d3ea6-efa5-48f4-80f7-d5f65d3afcef",
          eventName: "user-signup",
          timestamp: "2024-04-02T12:12:23.117Z",
        },
      },
      links: {
        functions: "/logs/events/e52d3ea6-efa5-48f4-80f7-d5f65d3afcef",
      },
    },
  ],
};

export const MOCK_FUNCTION_LOGS = {
  logs: [
    {
      function: {
        funcId: "4bbfb9a1-846d-40839-9e6e-b55b087d894d",
        lastUpdate: "2024-04-02T09:52:00.123Z",
        status: "error",
        funcName: "user-signup",
        invoked: "2024-04-02T09:52:00.045Z",
      },
      links: {
        logs: "/logs/functions/4bbfb9a1-846d-4089-9e6e-b55b087d894d",
      },
    },
    {
      function: {
        funcId: "4bbfb9a1-846d-4089-9e6e-b55b087d894d",
        lastUpdate: "2024-04-02T13:12:35.897Z",
        status: "running",
        funcName: "process-payment",
        invoked: "2024-04-02T13:12:34.139Z",
      },
      links: {
        logs: "/logs/functions/4bbfb9a1-846d-4089-9e6e-b55b087d894d",
      },
    },
    {
      function: {
        funcId: "fbeda4c1-44b3-4449-a147-6a6bfb9a44a5",
        lastUpdate: "2024-04-02T13:12:37.151Z",
        status: "completed",
        funcName: "send-receipt-email",
        invoked: "2024-04-02T13:12:34.894Z",
      },
      links: {
        logs: "/logs/functions/fbeda4c1-44b3-4449-a147-6a6bfb9a44a5",
      },
    },
    {
      function: {
        funcId: "4bbfb93a1-846d-40839-9e6e-b55b087d894d",
        lastUpdate: "2024-04-02T13:12:35.897Z",
        status: "error",
        funcName: "user-signup",
        invoked: "2024-04-02T13:12:34.139Z",
      },
      links: {
        logs: "/logs/functions/4bbfb9a1-846d-4089-9e6e-b55b087d894d",
      },
    },
    {
      function: {
        funcId: "4bb1fb9a1-846d-40839-9e6e-b55b087d894d",
        lastUpdate: "2024-04-02T13:12:35.897Z",
        status: "running",
        funcName: "user-signup",
        invoked: "2024-04-02T13:12:34.139Z",
      },
      links: {
        logs: "/logs/functions/4bbfb9a1-846d-4089-9e6e-b55b087d894d",
      },
    },
    {
      function: {
        funcId: "4bbfb49a1-846d-4089-9e6e-b55b087d894d",
        lastUpdate: "2024-04-02T13:12:35.897Z",
        status: "running",
        funcName: "process-payment",
        invoked: "2024-04-02T13:12:34.139Z",
      },
      links: {
        logs: "/logs/functions/4bbfb9a1-846d-4089-9e6e-b55b087d894d",
      },
    },
    {
      function: {
        funcId: "fbeda44c1-44b3-4449-a147-6a6bfb9a44a5",
        lastUpdate: "2024-04-02T13:12:37.151Z",
        status: "completed",
        funcName: "send-receipt-email",
        invoked: "2024-04-02T13:12:34.894Z",
      },
      links: {
        logs: "/logs/functions/fbeda4c1-44b3-4449-a147-6a6bfb9a44a5",
      },
    },
    {
      function: {
        funcId: "4bbfb9-846d-40839-9e6e-b55b087d894d",
        lastUpdate: "2024-04-02T13:12:35.897Z",
        status: "running",
        funcName: "user-signup",
        invoked: "2024-04-02T13:12:34.139Z",
      },
      links: {
        logs: "/logs/functions/4bbfb9a1-846d-4089-9e6e-b55b087d894d",
      },
    },
  ],
};

export const MOCK_FUNCTION_DETAIL_LOG = {
  logs: [
    {
      function: {
        _id: "660bd540654eb9645a63a81f",
        timestamp: "2024-04-02T09:52:00.045Z",
        level: "info",
        message: "Function invoked",
        meta: {
          funcId: "180aa318-d3c5-4171-8ae4-b60812b48af0",
          funcName: "cron-function",
          cron: true,
          timestamp: "2024-04-02T09:52:00.043Z",
        },
      },
      links: {},
    },
    {
      function: {
        _id: "660bd540654eb9645a63a821",
        timestamp: "2024-04-02T09:52:00.087Z",
        level: "info",
        message: "Invoked step complete",
        meta: {
          funcId: "180aa318-d3c5-4171-8ae4-b60812b48af0",
          eventId: "",
          stepId: "verify-user-data",
          invokedFnId: "961ef54e-6947-4b85-ae82-6f3a175cab4c",
          timestamp: "2024-04-02T09:52:00.085Z",
        },
      },
      links: {},
    },
    {
      error: {
        _id: "660f769abb77b95091bb6f8e",
        timestamp: "2024-04-02T09:52:00.045Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          taskType: "function",
          error: {
            message: "Unexpected end of JSON input",
            name: "SyntaxError",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/src/tasks/process-job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/src/tasks/process-job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "send-signup-email",
            event: {
              name: "user-signup",
              id: "462a0560-1bbb-4e5e-9c9a-13de3d3f8bfe",
            },
            id: "0ef957c9-388e-4581-b5c0-0921634a583f",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-04-02T09:52:00.045Z",
        },
      },
      links: {},
    },
  ],
};

export const MOCK_ERROR_LOGS = {
  logs: [
    {
      error: {
        _id: "660f769abb77b95091bb6f8e",
        timestamp: "2024-04-05T03:57:14.156Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          taskType: "function",
          error: {
            message: "Unexpected end of JSON input",
            name: "SyntaxError",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/src/tasks/process-job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/src/tasks/process-job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "send-signup-email",
            event: {
              name: "user-signup",
              id: "462a0560-1bbb-4e5e-9c9a-13de3d3f8bfe",
            },
            id: "0ef957c9-388e-4581-b5c0-0921634a583f",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-04-05T03:57:14.154Z",
        },
      },
      links: {
        event: "/logs/events/462a0560-1bbb-4e5e-9c9a-13de3d3f8bfe",
        function: "/logs/functions/0ef957c9-388e-4581-b5c0-0921634a583f",
      },
    },
    {
      error: {
        _id: "660f769abb77b95092bb6f8e",
        timestamp: "2024-04-05T11:14:01.856Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          taskType: "function",
          error: {
            message: "Unexpected end of JSON input",
            name: "SyntaxError",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/src/tasks/process-job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/src/tasks/process-job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "send-signup-email",
            event: {
              name: "user-signup",
              id: "462a0560-1bbb-4e5e-9c9a-13de3d3f8bfe",
            },
            id: "0ef957c9-388e-4581-b5c0-0921634a583f",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-04-05T11:14:01.856Z",
        },
      },
      links: {
        event: "/logs/events/462a0560-1bbb-4e5e-9c9a-13de3d3f8bfe",
        function: "/logs/functions/0ef957c9-388e-4581-b5c0-0921634a583f",
      },
    },
    {
      error: {
        _id: "660f769abb277b95091bb6f8e",
        timestamp: "2024-04-05T03:57:14.156Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          taskType: "function",
          error: {
            message: "Unexpected end of JSON input",
            name: "SyntaxError",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/src/tasks/process-job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/src/tasks/process-job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "send-signup-email",
            event: {
              name: "user-signup",
              id: "462a0560-1bbb-4e5e-9c9a-13de3d3f8bfe",
            },
            id: "0ef957c9-388e-4581-b5c0-0921634a583f",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-04-05T03:57:14.154Z",
        },
      },
      links: {
        event: "/logs/events/462a0560-1bbb-4e5e-9c9a-13de3d3f8bfe",
        function: "/logs/functions/0ef957c9-388e-4581-b5c0-0921634a583f",
      },
    },
    {
      error: {
        _id: "660f769abb177b95092bb6f8e",
        timestamp: "2024-04-05T11:14:01.856Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          taskType: "function",
          error: {
            message: "Unexpected end of JSON input",
            name: "SyntaxError",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/src/tasks/process-job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/src/tasks/process-job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "send-signup-email",
            event: {
              name: "user-signup",
              id: "462a0560-1bbb-4e5e-9c9a-13de3d3f8bfe",
            },
            id: "0ef957c9-388e-4581-b5c0-0921634a583f",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-04-05T11:14:01.856Z",
        },
      },
      links: {
        event: "/logs/events/462a0560-1bbb-4e5e-9c9a-13de3d3f8bfe",
        function: "/logs/functions/0ef957c9-388e-4581-b5c0-0921634a583f",
      },
    },
  ],
  links: {},
};

export const MOCK_ALL_LOGS = {
  logs: [
    {
      event: {
        _id: "6601be817654eb9645a63a888",
        timestamp: "2024-04-02T11:12:23.120Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "e52d3ea6-efa5-48f4-80f7-d5f65d3afcef",
          eventName: "user-signup",
          timestamp: "2024-04-02T11:12:23.117Z",
        },
      },
      links: {
        functions: "/logs/events/e52d3ea6-efa5-48f4-80f7-d5f65d3afcef",
      },
    },
    {
      function: {
        _id: "660bbdd1654eb9645a63a773",
        timestamp: "2024-04-02T08:12:01.742Z",
        level: "info",
        message: "Function invoked",
        meta: {
          funcId: "b7f3f45e-9528-4556-8e66-1dba461ff891",
          eventId: "e52d3ea6-efa5-48f4-80f7-d5f65d3afcef",
          funcName: "send-signup-email",
          timestamp: "2024-04-02T08:12:01.741Z",
        },
      },
      links: {},
    },
    {
      error: {
        _id: "660f769abb77b95091bb6f8e",
        timestamp: "2024-04-05T03:57:14.156Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          taskType: "function",
          error: {
            message: "Unexpected end of JSON input",
            name: "SyntaxError",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/src/tasks/process-job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/src/tasks/process-job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "send-signup-email",
            event: {
              name: "user-signup",
              id: "462a0560-1bbb-4e5e-9c9a-13de3d3f8bfe",
            },
            id: "0ef957c9-388e-4581-b5c0-0921634a583f",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-04-05T03:57:14.154Z",
        },
      },
      links: {
        event: "/logs/events/462a0560-1bbb-4e5e-9c9a-13de3d3f8bfe",
        function: "/logs/functions/0ef957c9-388e-4581-b5c0-0921634a583f",
      },
    },
    {
      event: {
        _id: "660be81a654eb9645a63a88e",
        timestamp: "2024-04-02T11:12:26.377Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "462a0560-1bbb-4e5e-9c9a-13de3d3f8bfe",
          eventName: "product-purchased",
          timestamp: "2024-04-02T11:12:26.377Z",
        },
      },
      links: {
        functions: "/logs/events/462a0560-1bbb-4e5e-9c9a-13de3d3f8bfe",
      },
    },
    {
      function: {
        funcId: "4bbfb9a1-846d-4089-9e6e-b55b087d894d",
        lastUpdate: "2024-04-02T13:12:35.897Z",
        status: "running",
        funcName: "process-payment",
        invoked: "2024-04-02T13:12:34.139Z",
      },
      links: {
        logs: "/logs/functions/4bbfb9a1-846d-4089-9e6e-b55b087d894d",
      },
    },
    {
      function: {
        funcId: "fbeda4c1-44b3-4449-a147-6a6bfb9a44a5",
        lastUpdate: "2024-04-02T13:12:37.151Z",
        status: "completed",
        funcName: "send-receipt-email",
        invoked: "2024-04-02T13:12:34.894Z",
      },
      links: {
        logs: "/logs/functions/fbeda4c1-44b3-4449-a147-6a6bfb9a44a5",
      },
    },
    {
      event: {
        _id: "660be81a654eb9645a63a88d",
        timestamp: "2024-04-02T11:12:26.377Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "462a0560-1bbb-4e5e-9c9a-13de3d3f8bfe",
          eventName: "user-signup",
          timestamp: "2024-04-02T11:12:26.377Z",
        },
      },
      links: {
        functions: "/logs/events/462a0560-1bbb-4e5e-9c9a-13de3d3f8bfe",
      },
    },
    {
      function: {
        _id: "660bbdd1654fb9645a63a773",
        timestamp: "2024-04-02T11:14:01.742Z",
        level: "info",
        message: "Function invoked",
        meta: {
          funcId: "b7f3f45e-9528-4556-8e66-1dba461ff891",
          eventId: "e52d3ea6-efa5-48f4-80f7-d5f65d3afcef",
          funcName: "send-signup-email",
          timestamp: "2024-04-02T11:14:01.742Z",
        },
      },
      links: {},
    },
    {
      error: {
        _id: "660f769abb77b95092bb6f8e",
        timestamp: "2024-04-05T11:14:01.856Z",
        level: "error",
        message: "RPC Response contains an improperly formatted error.",
        meta: {
          taskType: "function",
          error: {
            message: "Unexpected end of JSON input",
            name: "SyntaxError",
            stack:
              "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/src/tasks/process-job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/src/tasks/process-job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          },
          payload: {
            name: "send-signup-email",
            event: {
              name: "user-signup",
              id: "462a0560-1bbb-4e5e-9c9a-13de3d3f8bfe",
            },
            id: "0ef957c9-388e-4581-b5c0-0921634a583f",
            cache: {},
          },
          attempts: 1,
          max_attempts: 20,
          timestamp: "2024-04-05T11:14:01.856Z",
        },
      },
      links: {
        event: "/logs/events/462a0560-1bbb-4e5e-9c9a-13de3d3f8bfe",
        function: "/logs/functions/0ef957c9-388e-4581-b5c0-0921634a583f",
      },
    },
    {
      event: {
        _id: "660be817654eb9645a63a888",
        timestamp: "2024-04-02T12:12:23.120Z",
        level: "info",
        message: "Event fired",
        meta: {
          eventId: "e52d3ea6-efa5-48f4-80f7-d5f65d3afcef",
          eventName: "user-signup",
          timestamp: "2024-04-02T12:12:23.117Z",
        },
      },
      links: {
        functions: "/logs/events/e52d3ea6-efa5-48f4-80f7-d5f65d3afcef",
      },
    },
  ],
  links: {
    next: [
      {
        function: {
          _id: "660bbdd1654eb9645a63a7713",
          timestamp: "2024-04-02T08:12:01.742Z",
          level: "info",
          message: "Function invoked",
          meta: {
            funcId: "b7f3f45e-9528-4556-8e66-1dba461ff891",
            eventId: "e52d3ea6-efa5-48f4-80f7-d5f65d3afcef",
            funcName: "send-signup-email",
            timestamp: "2024-04-02T08:12:01.741Z",
          },
        },
        links: {},
      },
      {
        error: {
          _id: "660f769abb277b95091bb6f8e",
          timestamp: "2024-04-05T03:57:14.156Z",
          level: "error",
          message: "RPC Response contains an improperly formatted error.",
          meta: {
            taskType: "function",
            error: {
              message: "Unexpected end of JSON input",
              name: "SyntaxError",
              stack:
                "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/src/tasks/process-job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/src/tasks/process-job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
            },
            payload: {
              name: "send-signup-email",
              event: {
                name: "user-signup",
                id: "462a0560-1bbb-4e5e-9c9a-13de3d3f8bfe",
              },
              id: "0ef957c9-388e-4581-b5c0-0921634a583f",
              cache: {},
            },
            attempts: 1,
            max_attempts: 20,
            timestamp: "2024-04-05T03:57:14.154Z",
          },
        },
        links: {
          event: "/logs/events/462a0560-1bbb-4e5e-9c9a-13de3d3f8bfe",
          function: "/logs/functions/0ef957c9-388e-4581-b5c0-0921634a583f",
        },
      },
      {
        event: {
          _id: "660be813a654eb9645a63a88d",
          timestamp: "2024-04-02T11:12:26.377Z",
          level: "info",
          message: "Event fired",
          meta: {
            eventId: "462a0560-1bbb-4e5e-9c9a-13de3d3f8bfe",
            eventName: "product-purchased",
            timestamp: "2024-04-02T11:12:26.377Z",
          },
        },
        links: {
          functions: "/logs/events/462a0560-1bbb-4e5e-9c9a-13de3d3f8bfe",
        },
      },
      {
        function: {
          funcId: "4bbfb49a1-846d-4089-9e6e-b55b087d894d",
          lastUpdate: "2024-04-02T13:12:35.897Z",
          status: "running",
          funcName: "process-payment",
          invoked: "2024-04-02T13:12:34.139Z",
        },
        links: {
          logs: "/logs/functions/4bbfb9a1-846d-4089-9e6e-b55b087d894d",
        },
      },
      {
        function: {
          funcId: "fbeda44c1-44b3-4449-a147-6a6bfb9a44a5",
          lastUpdate: "2024-04-02T13:12:37.151Z",
          status: "completed",
          funcName: "send-receipt-email",
          invoked: "2024-04-02T13:12:34.894Z",
        },
        links: {
          logs: "/logs/functions/fbeda4c1-44b3-4449-a147-6a6bfb9a44a5",
        },
      },
      {
        event: {
          _id: "660be81a654e2b9645a63a88d",
          timestamp: "2024-04-02T11:12:26.377Z",
          level: "info",
          message: "Event fired",
          meta: {
            eventId: "462a0560-1bbb-4e5e-9c9a-13de3d3f8bfe",
            eventName: "user-signup",
            timestamp: "2024-04-02T11:12:26.377Z",
          },
        },
        links: {
          functions: "/logs/events/462a0560-1bbb-4e5e-9c9a-13de3d3f8bfe",
        },
      },
      {
        function: {
          _id: "660bbdd1654f3b9645a63a773",
          timestamp: "2024-04-02T11:14:01.742Z",
          level: "info",
          message: "Function invoked",
          meta: {
            funcId: "b7f3f45e-9528-4556-8e66-1dba461ff891",
            eventId: "e52d3ea6-efa5-48f4-80f7-d5f65d3afcef",
            funcName: "send-signup-email",
            timestamp: "2024-04-02T11:14:01.742Z",
          },
        },
        links: {},
      },
      {
        error: {
          _id: "660f769abb177b95092bb6f8e",
          timestamp: "2024-04-05T11:14:01.856Z",
          level: "error",
          message: "RPC Response contains an improperly formatted error.",
          meta: {
            taskType: "function",
            error: {
              message: "Unexpected end of JSON input",
              name: "SyntaxError",
              stack:
                "Error: This error is for testing purposes\n    at /home/memlin/capstone/Project-ingress/workers/src/tasks/process-job.ts:95:13\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/memlin/capstone/Project-ingress/workers/src/tasks/process-job.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
            },
            payload: {
              name: "send-signup-email",
              event: {
                name: "user-signup",
                id: "462a0560-1bbb-4e5e-9c9a-13de3d3f8bfe",
              },
              id: "0ef957c9-388e-4581-b5c0-0921634a583f",
              cache: {},
            },
            attempts: 1,
            max_attempts: 20,
            timestamp: "2024-04-05T11:14:01.856Z",
          },
        },
        links: {
          event: "/logs/events/462a0560-1bbb-4e5e-9c9a-13de3d3f8bfe",
          function: "/logs/functions/0ef957c9-388e-4581-b5c0-0921634a583f",
        },
      },
      {
        event: {
          _id: "660be8176254eb9645a63a888",
          timestamp: "2024-04-02T12:12:23.120Z",
          level: "info",
          message: "Event fired",
          meta: {
            eventId: "e52d3ea6-efa5-48f4-80f7-d5f65d3afcef",
            eventName: "user-signup",
            timestamp: "2024-04-02T12:12:23.117Z",
          },
        },
        links: {
          functions: "/logs/events/e52d3ea6-efa5-48f4-80f7-d5f65d3afcef",
        },
      },
    ],
  },
};
