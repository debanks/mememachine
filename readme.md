# Meme Machine Frontend

This is intended to be paired with [personal-box](https://github.com/debanks/personal-box.git) and [backend](https://github.com/debanks/backend.git).
This is a ReactJS frontend with Redux and Sagas.

## Setting Up

Once the backend and vagrant box are set up navigate to your mememachine folder and run:

```
npm install
npm start
```

To set up a production build run:

```
npm run build
```

You will have to update your hosts file, you can follow the instructions here:
[Windows Host File](https://support.rackspace.com/how-to/modify-your-hosts-file/) and add:

```
127.0.0.1 mememachine.test
```