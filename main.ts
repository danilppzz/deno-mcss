import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";

const app = new Application();
const router = new Router();

router.get('/', (context) => {
  const { request: req, response: res } = context;
  
  res.body = `{ "ip": "${req.ip}", "message": "Hello World!" }`
  res.headers.set("Content-Type", "text/json")
});

app.use(router.routes());
app.use(router.allowedMethods());

const PORT = 8000;

console.log(`Running on http://localhost:${PORT}`);
await app.listen({ port: PORT });
