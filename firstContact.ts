import "dotenv/config"; // carga la clave y la dirección del servicio desde .env
import OpenAI from "openai";

const client = new OpenAI(); // lee OPENAI_API_KEY y OPENAI_BASE_URL del entorno
const MODELO = process.env.MODELO ?? "fast";

const response = await client.chat.completions.create({
  model: MODELO,
  max_completion_tokens: 256, // límite de la respuesta, en tokens
  messages: [
    { role: "user", content: "Explica qué es un LLM en una sola frase." },
  ],
});

// La respuesta llega dentro de una lista de opciones (choices); usamos la primera.
const eleccion = response.choices[0];
console.log(eleccion.message.content || "(respuesta vacía)");

// Por qué terminó: "stop" = de forma natural; "length" = se cortó por el límite.
console.log(`\n[fin] ${eleccion.finish_reason}`);
console.log(
  `[tokens] entrada=${response.usage?.prompt_tokens} salida=${response.usage?.completion_tokens}`,
);