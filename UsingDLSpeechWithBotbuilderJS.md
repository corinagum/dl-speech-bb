## Using botbuilder@4.6.0-preview3

To use the preview streaming bits for botbuilder-js, install `botbuilder` from our MyGet feed with the following command:

```bash
npm i botbuilder@4.6.0-preview3 --registry https://botbuilder.myget.org/F/botbuilder-v4-js-daily/npm/
```

Then use `npm i` to install the remaining dependencies in your bot. It's important that you retain your `package-lock.json` as this tells npm to fetch the package from the MyGet feed.

A simple Echo Bot sample can be found in [botbuilder-samples/experimental/directline-speech/javascript_nodejs/02.echo-bot](https://github.com/microsoft/BotBuilder-Samples/tree/master/experimental/directline-speech/javascript_nodejs/02.echo-bot)
