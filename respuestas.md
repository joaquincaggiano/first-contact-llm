# Tarea 3 — Respuestas de la IA

**Prompt:** Propón un nombre para un restaurante de comida italiana.  
**Límite:** `max_completion_tokens: 256`

---

## Primera respuesta

| | |
|---|---|
| **Fin** | `stop` |
| **Tokens** | entrada=21 · salida=216 |

> Sugerencias de nombres para restaurante italiano
>
> Aquí van algunas opciones:
>
> **Clásicos y elegantes:**
> - **Trattoria Bella Vita**
> - **Osteria Marco Polo**
> - **La Dolce Vita**
>
> **Modernos y creativos:**
> - **Pasta & Passione**
> - **Fuoco e Farina**
> - **Basilico**
>
> **Con toque local:**
> - **Nonna's** (si quieres algo familiar)
> - **Piazza [tu ciudad]**
> - **Amore Italiano**
>
> Mi favorito es **Trattoria Bella Vita** porque evoca calidez, autenticidad y la filosofía de vida italiana.
>
> ¿Te gustaría que te sugiera más opciones en alguna dirección específica (más formal, más casual, con referencias regionales, etc.)?

---

## Segunda respuesta

| | |
|---|---|
| **Fin** | `stop` |
| **Tokens** | entrada=21 · salida=251 |

> # Propuestas de nombres para restaurante italiano
>
> Aquí te dejo algunas opciones:
>
> ## Clásicos y elegantes
> - **Trattoria Italiana**
> - **La Dolce Vita**
> - **Basilico** (por la hierba aromática)
> - **Osteria del Nonno**
>
> ## Más modernos y creativos
> - **Pasta & Amore**
> - **Sorella** (hermana en italiano)
> - **Viaggio** (viaje)
> - **Il Bosco** (el bosque)
>
> ## Con toque local
> - **Trattoria [tu ciudad]**
> - **La Nonna's Table**
> - **Cucina di Casa**
>
> ---
>
> **Mi favorito:** **Trattoria da Nonno** — transmite autenticidad, calidez familiar y promete una experiencia genuinamente italiana.
>
> ¿Hay algún elemento específico que quieras que refleje el nombre? (tu ciudad, especialidad culinaria, concepto del lugar, etc.)

---

## Tercera respuesta

| | |
|---|---|
| **Fin** | `length` _(se cortó por el límite de tokens)_ |
| **Tokens** | entrada=21 · salida=256 |

> # Propuestas de nombres para restaurante italiano
>
> Aquí te dejo algunas opciones:
>
> ## Clásicos y elegantes
> - **Trattoria Bella Vita**
> - **Da Nonno** (en honor a la abuela)
> - **Il Forno** (el horno)
> - **Osteria Roma**
>
> ## Modernos y creativos
> - **Pasta & Passione**
> - **Dolce Famiglia**
> - **Terra Mia** (mi tierra)
> - **Aromas de Italia**
>
> ## Cortos y memorables
> - **Zucchero** (azúcar)
> - **Campanile**
> - **Amore**
> - **Nonna**
>
> ## Mi favorita personal:
> **"La Mia Cucina"** (mi cocina) — transmite autenticidad, calidez familiar y la idea de que cada plato es preparado con cuidado.
>
> ---
>
> ¿Te gustaría que explore alguna dirección en particular? Puedo sugerirte nombres más específicos según si busc

# Tarea 4
- Tokens de entrada: 261
- Palabras del prompt: 156
- Mi reflexión sobre la diferencia es que un token corresponde a una palabra y un poquito más de otra.


# Tarea 5
Al acortar el ```max_completion_tokens``` la IA responde en tokens hasta lo dicho, en este caso 10. En el futuro entiendo que aprenderemos a controlar mejor este margen para obtener respuestas optimizadas y que no nos gaste tantos tokens.
O hasta pienso que si tenemos la propiedad ```finish_reason``` y sabemos que si nos devuelve ```length``` es porque alcanzo este límite, poder al menos dar la oportunidad al usuario de que si quiere (sabiendo que le costará más dinero) que siga respondiendo todo lo que le faltó?
