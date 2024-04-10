/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from "frog";
import { devtools } from "frog/dev";
// import { neynar } from 'frog/hubs'
import { handle } from "frog/next";
import { serveStatic } from "frog/serve-static";
let currentSlide: number = 1;

const app = new Frog({
  assetsPath: "/",
  basePath: "/api",
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
});

// Uncomment to use Edge Runtime
// export const runtime = 'edge'
app.frame("/", (c) => {
  const { buttonValue } = c;
  console.log(buttonValue);
  return c.res({
    image: "http://localhost:3000/slide1.png",
    action: "/slides",
    intents: [
      <Button value="previous">⏪</Button>,
      <Button.Link href="https://t.me/goddogportal">Socials</Button.Link>,
      <Button.Link href="https://interchain.axelar.dev/base/0xDDf7d080C82b8048BAAe54e376a3406572429b4e">
        Interchain
      </Button.Link>,
      <Button value="next">⏩</Button>,
    ],
  });
});

app.frame("/slides", (c) => {
  const { buttonValue } = c;
  console.log(buttonValue);

  if (buttonValue == "next") {
    if (currentSlide !== 5) {
      ++currentSlide;
      return c.res({
        image: `http://localhost:3000/slide${currentSlide}.png`,
        intents: [
          <Button value="previous">⏪</Button>,
          <Button.Link href="https://t.me/goddogportal">Socials</Button.Link>,
          <Button.Link href="https://interchain.axelar.dev/base/0xDDf7d080C82b8048BAAe54e376a3406572429b4e">
            Interchain
          </Button.Link>,
          <Button value="next">⏩</Button>,
        ],
      });
    } else if (currentSlide === 5) {
      currentSlide = 1;
      return c.res({
        image: `http://localhost:3000/slide${currentSlide}.png`,
        intents: [
          <Button value="previous">⏪</Button>,
          <Button.Link href="https://t.me/goddogportal">Socials</Button.Link>,
          <Button.Link href="https://interchain.axelar.dev/base/0xDDf7d080C82b8048BAAe54e376a3406572429b4e">
            Interchain
          </Button.Link>,
          <Button value="next">⏩</Button>,
        ],
      });
    }
  }
  return c.res({
    image: "http://localhost:3000/slide1.png",
    intents: [
      <Button value="previous">⏪</Button>,
      <Button.Link href="https://t.me/goddogportal">Socials</Button.Link>,
      <Button.Link href="https://interchain.axelar.dev/base/0xDDf7d080C82b8048BAAe54e376a3406572429b4e">
        Interchain
      </Button.Link>,
      <Button value="next">⏩</Button>,
    ],
  });
});

devtools(app, { serveStatic });

export const GET = handle(app);
export const POST = handle(app);
