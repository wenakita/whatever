import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Button, Frog, TextInput } from "frog";
import { devtools } from "frog/dev";
import { pinata } from "frog/hubs";
// import { neynar } from 'frog/hubs'

export const app = new Frog({
  basePath: "/goddog",
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
  hub: pinata(),
});
let currentSlide: number = 1;
app.use("/*", serveStatic({ root: "./public" }));

app.frame("/", (c) => {
  const { buttonValue } = c;
  console.log(buttonValue);
  return c.res({
    image: "http://localhost:5173/slide1.png",
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
        image: `http://localhost:5173/slide${currentSlide}.png`,
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
        image: `http://localhost:5173/slide${currentSlide}.png`,
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
    image: "http://localhost:5173/slide1.png",
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

const port = 3000;
console.log(`Server is running on port ${port}`);

devtools(app, { serveStatic });

serve({
  fetch: app.fetch,
  port,
});
