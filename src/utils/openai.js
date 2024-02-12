import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

// it is kind of authorisation happening here
// dangerouslyAllowBrowser: true, because openapi does not allow you to call its apis from browsers i.e. clientside
const openai = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
