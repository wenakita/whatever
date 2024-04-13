import { Button, Frog } from "frog";
import { devtools } from "frog/dev";
import { serve } from "@hono/node-server";
import {
  Box,
  Heading,
  Text,
  VStack,
  vars,
  Rows,
  Row,
  Columns,
  Column,
  Image,
} from "./ui.js";
import { serveStatic } from "frog/serve-static";

export const app = new Frog({
  ui: { vars },
})
  .frame("/", (c) => {
    return c.res({
      image: (
        <Rows backgroundColor="background" padding="32">
          <Row height="3/4" alignVertical="bottom">
            <Heading>GodDog 🐕</Heading>
            <Text color="text200" size="20">
              the future of memecoins
            </Text>
          </Row>
          <Row
            height="0.5/4"
            border={"gray"}
            borderBottom={"none"}
            borderRight={"none"}
            borderLeft={"none"}
            alignVertical="bottom"
          >
            <Text size={"15"}>Made with 🐸</Text>
          </Row>
        </Rows>
      ),
      action: "/goddog",
      intents: [
        <Button value="previous">⏪</Button>,
        <Button.Link href="https://t.me/+eLttcj65I-1jNjRh">
          Socials
        </Button.Link>,
        <Button.Link href="https://interchain.axelar.dev/base/0xDDf7d080C82b8048BAAe54e376a3406572429b4e">
          Interchain
        </Button.Link>,
        <Button value="next">⏩</Button>,
      ],
    });
  })
  .frame("/goddog", (c) => {
    const { buttonValue } = c;
    console.log(buttonValue);
    if (buttonValue === "next") {
      return c.res({
        image: (
          <Rows backgroundColor="background" padding="32">
            <Row height="3/4" alignVertical="center">
              <Text color="text200" size="24">
                GodDog ($OOOooo) is an omnichain cryptocurrency, offering
                enhanced scalability, interoperability, and resilience across
                multiple blockchains, ensuring broader accessibility and a more
                robust decentralized ecosystem.
              </Text>
            </Row>
            <Row
              height="0.5/4"
              border={"gray"}
              borderBottom={"none"}
              borderRight={"none"}
              borderLeft={"none"}
              alignVertical="bottom"
            >
              <Text size={"15"}>GodDog 🐕</Text>
            </Row>
          </Rows>
        ),
        action: "/goddog/1",
        intents: [
          <Button value="previous">⏪</Button>,
          <Button.Link href="https://t.me/+eLttcj65I-1jNjRh">
            Socials
          </Button.Link>,
          <Button.Link href="https://interchain.axelar.dev/base/0xDDf7d080C82b8048BAAe54e376a3406572429b4e">
            Interchain
          </Button.Link>,
          <Button value="next">⏩</Button>,
        ],
      });
    } else if (buttonValue === "previous") {
      return c.res({
        image: (
          <Rows backgroundColor="background" padding="32">
            <Row height="3/4" alignVertical="bottom">
              <Heading>GodDog 🐕</Heading>
              <Text color="text200" size="20">
                the future of memecoins
              </Text>
            </Row>
            <Row
              height="0.5/4"
              border={"gray"}
              borderBottom={"none"}
              borderRight={"none"}
              borderLeft={"none"}
              alignVertical="bottom"
            >
              <Text size={"15"}>Made with 🐸</Text>
            </Row>
          </Rows>
        ),
        action: "/",
        intents: [
          <Button value="previous">⏪</Button>,
          <Button.Link href="https://t.me/+eLttcj65I-1jNjRh">
            Socials
          </Button.Link>,
          <Button.Link href="https://interchain.axelar.dev/base/0xDDf7d080C82b8048BAAe54e376a3406572429b4e">
            Interchain
          </Button.Link>,
          <Button value="next">⏩</Button>,
        ],
      });
    }
    return c.res({
      image: (
        <Rows backgroundColor={"background"}>
          <Row alignVertical="center">
            <Text>Unknown Error: 404 </Text>
          </Row>
        </Rows>
      ),
      intents: [<Button.Reset>Reset</Button.Reset>],
    });
  })
  .frame("/goddog/1", (c) => {
    const { buttonValue } = c;
    if (buttonValue === "next") {
      return c.res({
        image: (
          <Rows backgroundColor="background" padding="32">
            <Row height="3/4" alignVertical="center">
              <Text color="text200" size="18">
                When Hermes DeFi Token V2 launches, it will introduce unified
                liquidity, streamlining access to liquidity pools across various
                decentralized finance protocols. This integration ensures
                seamless interoperability and maximizes efficiency for users,
                fostering a more fluid and interconnected DeFi ecosystem.
              </Text>
            </Row>
            <Row
              height="0.5/4"
              border={"gray"}
              borderBottom={"none"}
              borderRight={"none"}
              borderLeft={"none"}
              alignVertical="bottom"
            >
              <Text size={"15"}>GodDog 🐕</Text>
            </Row>
          </Rows>
        ),
        action: "/goddog/2",
        intents: [
          <Button value="previous">⏪</Button>,
          <Button.Link href="https://t.me/+eLttcj65I-1jNjRh">
            Socials
          </Button.Link>,
          <Button.Link href="https://interchain.axelar.dev/base/0xDDf7d080C82b8048BAAe54e376a3406572429b4e">
            Interchain
          </Button.Link>,
          <Button value="next">⏩</Button>,
        ],
      });
    } else if (buttonValue === "previous") {
      return c.res({
        image: (
          <Rows backgroundColor="background" padding="32">
            <Row height="3/4" alignVertical="bottom">
              <Heading>GodDog 🐕</Heading>
              <Text color="text200" size="20">
                the future of memecoins
              </Text>
            </Row>
            <Row
              height="0.5/4"
              border={"gray"}
              borderBottom={"none"}
              borderRight={"none"}
              borderLeft={"none"}
              alignVertical="bottom"
            >
              <Text size={"15"}>Made with 🐸</Text>
            </Row>
          </Rows>
        ),
        action: "/goddog",
        intents: [
          <Button value="previous">⏪</Button>,
          <Button.Link href="https://t.me/+eLttcj65I-1jNjRh">
            Socials
          </Button.Link>,
          <Button.Link href="https://interchain.axelar.dev/base/0xDDf7d080C82b8048BAAe54e376a3406572429b4e">
            Interchain
          </Button.Link>,
          <Button value="next">⏩</Button>,
        ],
      });
    }
    return c.res({
      image: (
        <Rows backgroundColor={"background"}>
          <Row alignVertical="center">
            <Text>Unknown Error: 404 </Text>
          </Row>
        </Rows>
      ),
      intents: [<Button.Reset>Reset</Button.Reset>],
    });
  })
  .frame("/goddog/2", (c) => {
    const { buttonValue } = c;
    if (buttonValue === "next") {
      return c.res({
        image: (
          <Box>
            <Image src="/slide1.png" />
          </Box>
        ),
        action: "/",
        intents: [
          <Button value="previous">⏪</Button>,
          <Button.Link href="https://t.me/+eLttcj65I-1jNjRh">
            Socials
          </Button.Link>,
          <Button.Link href="https://interchain.axelar.dev/base/0xDDf7d080C82b8048BAAe54e376a3406572429b4e">
            Interchain
          </Button.Link>,
          <Button value="next">⏩</Button>,
        ],
      });
    } else if (buttonValue === "previous") {
      return c.res({
        image: (
          <Rows backgroundColor="background" padding="32">
            <Row height="3/4" alignVertical="center">
              <Text color="text200" size="18">
                When Hermes DeFi Token V2 launches, it will introduce unified
                liquidity, streamlining access to liquidity pools across various
                decentralized finance protocols. This integration ensures
                seamless interoperability and maximizes efficiency for users,
                fostering a more fluid and interconnected DeFi ecosystem.
              </Text>
            </Row>
            <Row
              height="0.5/4"
              border={"gray"}
              borderBottom={"none"}
              borderRight={"none"}
              borderLeft={"none"}
              alignVertical="bottom"
            >
              <Text size={"15"}>GodDog 🐕</Text>
            </Row>
          </Rows>
        ),
        action: "/goddog/1",
        intents: [
          <Button value="previous">⏪</Button>,
          <Button.Link href="https://t.me/+eLttcj65I-1jNjRh">
            Socials
          </Button.Link>,
          <Button.Link href="https://interchain.axelar.dev/base/0xDDf7d080C82b8048BAAe54e376a3406572429b4e">
            Interchain
          </Button.Link>,
          <Button value="next">⏩</Button>,
        ],
      });
    }
    return c.res({
      image: (
        <Box>
          <Image src="/goddog/public/slide1.png" />
        </Box>
      ),
      action: "/",
      intents: [
        <Button value="previous">⏪</Button>,
        <Button.Link href="https://t.me/+eLttcj65I-1jNjRh">
          Socials
        </Button.Link>,
        <Button.Link href="https://interchain.axelar.dev/base/0xDDf7d080C82b8048BAAe54e376a3406572429b4e">
          Interchain
        </Button.Link>,
        <Button value="next">⏩</Button>,
      ],
    });
  });

devtools(app, { serveStatic });

serve({
  fetch: app.fetch,
  port: 3000,
});
