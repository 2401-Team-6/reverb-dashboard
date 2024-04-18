# Reverb - Dashboard

This server hosts the [**Reverb**](https://github.com/reverb-app/reverb) dashboard to visualize logs and monitor workflow state. The dashboard allows the user to quickly see and filter:

- Events
- Functions and their status
- Error logs
- the Dead Letter Queue
- All Logs

## Install

This project uses [node](http://nodejs.org/) and [npm](https://www.npmjs.com/).

To install, inside any directory, run:

```sh
$ npx @reverb-app/reverb-dashboard
```

This will create a subdirectory named `reverb-dashboard`. Go to this directory and run:

```sh
$ npm install
```

## Usage

### Running the Dashboard Server

To initialize the Dashboard Server in a development environment, from the subdirectory named `reverb-dashboard`, run:

```
$ npm run dev
```

This will boot up the server on the standard Vite port, which is 5173. When you open it, you will be prompted for a URL and an API key, which you will have received after successfully [deploying](https://github.com/reverb-app/reverb) **Reverb**.

Note that you will not need to enter an API key when you are running **Reverb** locally.
