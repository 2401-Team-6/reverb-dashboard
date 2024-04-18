# Reverb - Dashboard

This server hosts the [**Reverb**](https://github.com/reverb-app/reverb) dashboard to visualize logs and monitor workflow state. The dashboard allows the user to quickly see a function's status and offers robust filtering tools.

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

This will boot up the server on the standard Vite port. When you open it, you will be prompted for a URL and an API key, which you will have received after successfully [deploying](https://github.com/reverb-app/reverb) **Reverb**.
