import { serve } from "@hono/node-server";
import { Button, Frog } from "frog";
import { createSystem } from "frog/ui";

const { Image } = createSystem();
type state = {
  count: number;
};
export const app = new Frog<{ State: state }>({
  initialState: {
    count: 4,
  },
});

app.frame("/", (c) => {
  const { buttonValue, status, deriveState } = c;

  const state = deriveState((previousState) => {
    if (buttonValue === "next") {
      previousState.count++;
    } else if (buttonValue === "previous") {
      previousState.count--;
    }
  });
  console.log(state.count);
  return c.res({
    image: (
      <div
        style={{
          color: "white",
          display: "flex",
          fontSize: 60,
          justifyContent: "center",
        }}
      >
        {"🐕 GodDog: The future of memecoins 🐕"}
      </div>
    ),
    action: "/goddog",
    intents: [
      <Button value="previous">⏪</Button>,
      <Button value="banana">Banana</Button>,
      <Button value="next">⏩</Button>,
    ],
  });
});

app.frame("/goddog", (c) => {
  const { buttonValue, status, deriveState } = c;
  const state = deriveState((previousState) => {
    if (buttonValue === "next") {
      previousState.count++;
    } else if (buttonValue === "previous") {
      previousState.count--;
    }
  });
  console.log(state.count);
  if (buttonValue === "next") {
    return c.res({
      image: (
        <div
          style={{
            color: "white",
            display: "flex",
            fontSize: 40,
          }}
        >
          {`
        
            GodDog's integration with an omnichain infrastructure ensures interoperability across multiple blockchain networks, enhancing accessibility and utility for users. This approach also bolsters security, scalability, and future adaptability, positioning GodDog as a robust and versatile memecoin within the broader blockchain ecosystem.
        `}
        </div>
      ),
      intents: [
        <Button value="previous">⏪</Button>,
        <Button value="banana">Banana</Button>,
        <Button value="next">⏩</Button>,
      ],
    });
  } else if (buttonValue === "previous") {
    return c.res({
      image: (
        <div
          style={{
            color: "white",
            display: "flex",
            fontSize: 40,
          }}
        >
          {`
        
            GodDog's integration with an omnichain infrastructure ensures interoperability across multiple blockchain networks, enhancing accessibility and utility for users. This approach also bolsters security, scalability, and future adaptability, positioning GodDog as a robust and versatile memecoin within the broader blockchain ecosystem.
        `}
        </div>
      ),
      intents: [
        <Button value="previous">⏪</Button>,
        <Button value="banana">Banana</Button>,
        <Button value="next">⏩</Button>,
      ],
    });
  }
  return c.res({
    image: (
      <div
        style={{
          color: "white",
          display: "flex",
          fontSize: 60,
          justifyContent: "center",
        }}
      >
        {"GodDog: The future of memecoins"}
      </div>
    ),
    intents: [
      <Button value="previous">⏪</Button>,
      <Button value="banana">Banana</Button>,
      <Button value="next">⏩</Button>,
    ],
  });
});

serve({
  fetch: app.fetch,
  port: 3000,
});
console.log(`Server is running on port `);
